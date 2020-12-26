package com.example.diem_danh_android;

import androidx.appcompat.app.AppCompatActivity;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.diem_danh_android.object.SectionClass;
import com.example.diem_danh_android.object.Student;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static com.example.diem_danh_android.LoginActivity.api;

public class MainActivity extends AppCompatActivity {
    private String access_token;
    private TextView tvSubjectName, tvTeacherName, tvSiSo, tvTimeOver, tvStartTime, tvEndTime;
    private ListView lvStudent;
    private String TAG = "MAIN_ACTIVITY";
    private List<Student> listStudent;
    private BluetoothAdapter mBluetoothAdapter;
    private BroadcastReceiver mReceiver;
    private Set<String> listScaned;
    private int id_schedule;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setView();
        listScaned = new HashSet<String>();
        mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        listStudent = new ArrayList<Student>();
        access_token = getIntent().getStringExtra("access_token");
        api.getAttendance(access_token).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                try {
                    JsonObject res = response.body();
                    String status = res.get("status").getAsString();
                    if (status.equals("success")) {
                        Gson gson = new Gson();
                        final SectionClass sc = gson.fromJson(res.getAsJsonObject("data").toString(), SectionClass.class);
                        String pattern = "HH:mm:SS";
                        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
                        id_schedule = sc.getId_schedule();
                        listStudent = sc.getListStudent();
                        tvTeacherName.setText("Giảng viên: " + sc.getTeacher_name());
                        tvSiSo.setText("Sĩ số: " + siSo()  +"/" + sc.getListStudent().size());
                        tvSubjectName.setText("Môn: " + sc.getSubject_name());
                        tvStartTime.setText("Giờ vào lớp: " + simpleDateFormat.format(sc.getStart_time()));
                        tvEndTime.setText("Giờ kết thúc: " + simpleDateFormat.format(sc.getEnd_time()));
                        final StudentAdapter adapter = new StudentAdapter(getApplicationContext(), R.layout.item_list_student, (ArrayList<Student>) listStudent);
                        lvStudent.setAdapter(adapter);
                        scanBluetooth();
                        new CountDownTimer(sc.getEnd_time().getTime() - sc.getCurrent_time().getTime(), 1000) {
                            public void onTick(long millisUntilFinished) {
                                long hour = millisUntilFinished / 1000;
                                long second = hour % 60;
                                hour /= 60;
                                long minute = hour % 60;
                                hour /= 60;
                                tvTimeOver.setText("Thời gian còn lại: " + hour + " Giờ " + minute + " Phút " + second + " Giây");
                                if (second % 10 == 0) {
                                    attendance();
                                }
                            }

                            public void onFinish() {
                                Toast.makeText(getApplicationContext(), "Kết thúc buổi học", Toast.LENGTH_LONG).show();
                            }

                        }.start();
                    } else {
                        String mess = res.get("message").getAsString();
                        Toast.makeText(getApplicationContext(), mess, Toast.LENGTH_LONG).show();
                    }
                } catch (Exception e) {
                    Log.e(TAG, e.toString());
                }
            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(getApplicationContext(), "Có lỗi xảy ra, vui lòng thử lại", Toast.LENGTH_SHORT).show();
            }
        });
    }

    void setView() {
        tvSubjectName = (TextView) findViewById(R.id.tvSubjectName);
        tvTeacherName = (TextView) findViewById(R.id.tvTeacherName);
        tvSiSo = (TextView) findViewById(R.id.tvSiSo);
        tvTimeOver = (TextView) findViewById(R.id.tvTimer);
        lvStudent = (ListView) findViewById(R.id.lvStudent);
        tvStartTime = (TextView) findViewById(R.id.tvStartTime);
        tvEndTime = (TextView) findViewById(R.id.tvEndTime);
    }

    void scanBluetooth() {
        Log.d(TAG, "scan");
        mBluetoothAdapter.cancelDiscovery();
        mBluetoothAdapter.startDiscovery();
        mReceiver = new BroadcastReceiver() {
            public void onReceive(Context context, Intent intent) {
                String action = intent.getAction();
                //Finding devices
                if (BluetoothDevice.ACTION_FOUND.equals(action)) {
                    // Get the BluetoothDevice object from the Intent
                    BluetoothDevice device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                    // Add the name and address to an array adapter to show in a ListView
//                            mArrayAdapter.add(device.getName() + "\n" + device.getAddress());
                    Log.d(TAG, device.getName() + "-"+ id_schedule + "-" + device.getAddress());
                    listScaned.add(device.getName() + "-"+ id_schedule + "-" + device.getAddress());
                }
            }
        };

        IntentFilter filter = new IntentFilter(BluetoothDevice.ACTION_FOUND);
        registerReceiver(mReceiver, filter);
    }

    boolean checkAttendance(String msv) {
        for (Student s : listStudent) {
            if (msv.equals(s.getStudent_code())) {
                if (s.getTimestamp() == null)
                    return true;
                return false;
            }
        }
        return false;
    }

    void attendance() {
        mBluetoothAdapter.cancelDiscovery();
        mBluetoothAdapter.startDiscovery();
        List<String> listAttendance = new ArrayList<String>();
        for (String s : listScaned) {
            if (checkAttendance(s.split("-")[0])) {
                listAttendance.add(s);
            }
        }
        if (!listAttendance.isEmpty()) {
            api.attendance(access_token, listAttendance).enqueue(new Callback<JsonObject>() {
                @Override
                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                    try {
                        JsonObject res = response.body();
                        String status = res.get("status").getAsString();
                        if (status.equals("success")) {
                            api.getAttendance(access_token).enqueue(new Callback<JsonObject>() {
                                @Override
                                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                                    try {
                                        JsonObject res = response.body();
                                        String status = res.get("status").getAsString();
                                        if (status.equals("success")) {
                                            Gson gson = new Gson();
                                            final SectionClass sc = gson.fromJson(res.getAsJsonObject("data").toString(), SectionClass.class);
                                            tvSiSo.setText("Sĩ số: " + siSo()  +"/" + sc.getListStudent().size());
                                            listStudent.clear();
                                            listStudent = sc.getListStudent();
                                            final StudentAdapter adapter = new StudentAdapter(getApplicationContext(), R.layout.item_list_student, (ArrayList<Student>) listStudent);
                                            lvStudent.setAdapter(adapter);

                                        } else {
                                            String mess = res.get("message").getAsString();
                                            Log.e(TAG,mess);
                                        }
                                    } catch (Exception e) {
                                        Log.e(TAG, e.toString());
                                    }
                                }

                                @Override
                                public void onFailure(Call<JsonObject> call, Throwable t) {
                                    Log.e(TAG, t.toString());
                                }
                            });
                        } else {
                            String mess = res.get("message").getAsString();
                            Log.e(TAG, mess);
                        }
                    } catch (Exception e) {
                        Log.e(TAG, e.toString());
                    }
                }

                @Override
                public void onFailure(Call<JsonObject> call, Throwable t) {
                    Log.e(TAG, t.toString());
                }
            });
        }
    }
    int siSo(){
        int count = 0;
        for(Student s : listStudent){
            if(s.getTimestamp() != null)
                count++;
        }
        return count;
    }
}