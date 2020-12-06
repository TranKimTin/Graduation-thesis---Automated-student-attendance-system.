package com.example.diem_danh_android;

import androidx.appcompat.app.AppCompatActivity;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.diem_danh_android.object.SectionClass;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import java.util.Date;

import static com.example.diem_danh_android.LoginActivity.api;

public class MainActivity extends AppCompatActivity {
    private String access_token;
    private TextView tvSubjectName, tvTeacherName, tvSiSo, tvTimeOver;
    private ListView lvStudent;
    private long timeOver;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setView();
        access_token = getIntent().getStringExtra("access_token");
        api.getAttendance(access_token).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                JsonObject res = response.body();
                String status = res.get("status").getAsString();
                if (status.equals("success")) {
                    Gson gson = new Gson();
                    final SectionClass sc = gson.fromJson(res.getAsJsonObject("data").toString(), SectionClass.class);
                    Toast.makeText(getApplicationContext(), sc.getSubject_name(), Toast.LENGTH_LONG).show();
                    tvTeacherName.setText("Giảng viên: " + sc.getTeacher_name());
                    tvSiSo.setText("Sĩ số: 0/" + sc.getListStudent().size());
                    tvSubjectName.setText("Môn: " + sc.getSubject_name());

                    new CountDownTimer(sc.getEnd_time().getTime() - new Date().getTime(), 1000) {
                        public void onTick(long millisUntilFinished) {
                            long hour = (sc.getEnd_time().getTime() - new Date().getTime()) / 1000;
                            long second = hour % 60;
                            hour /= 60;
                            long minute = hour % 60;
                            hour /= 60;
                            tvTimeOver.setText("Thời gian còn lại: " + hour +" Giờ " + minute + " Phút" + second + " Giây");
                        }

                        public void onFinish() {
                            Toast.makeText(getApplicationContext(), "Kết thúc buổi học", Toast.LENGTH_LONG).show();
                        }

                    }.start();
                } else {
                    String mess = res.get("message").getAsString();
                    Toast.makeText(getApplicationContext(), mess, Toast.LENGTH_LONG).show();
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
    }

}