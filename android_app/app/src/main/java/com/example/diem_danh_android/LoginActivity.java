package com.example.diem_danh_android;

import androidx.appcompat.app.AppCompatActivity;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.diem_danh_android.object.User;
import com.google.gson.JsonObject;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener {
    public static DiemDanhApi api = new Retrofit.Builder()
            .baseUrl("http://192.168.43.104:3001")
            .addConverterFactory(GsonConverterFactory.create())
            .build().create(DiemDanhApi.class);
    private Button btnLogin;
    private EditText edtUsername, edtPassword;
    private String TAG = "LOGIN";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        setView();
    }

    void setView() {
        edtUsername = (EditText) findViewById(R.id.edtUsername);
        edtPassword = (EditText) findViewById(R.id.edtPassword);
        btnLogin = (Button) findViewById(R.id.btnLogin);

        btnLogin.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.btnLogin:
                String username = edtUsername.getText().toString();
                String password = edtPassword.getText().toString();
                User u = new User(username, password);
                api.login(u).enqueue(new Callback<JsonObject>() {
                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                        JsonObject res = response.body();
                        String status = res.get("status").getAsString();
                        Log.d(TAG, status);
                        if(status.equals("success")){
                            String access_token = res.getAsJsonObject("data").get("access_token").getAsString();
                            Intent i = new Intent(LoginActivity.this, MainActivity.class);
                            i.putExtra("access_token",access_token);
                            startActivity(i);
                        }
                        else{
                            Toast.makeText(getApplicationContext(), "Tên đăng nhập hoặc mật khẩu không đúng",Toast.LENGTH_LONG).show();
                        }
                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {
                        Toast.makeText(getApplicationContext(), "Có lỗi xảy ra, vui lòng thử lại", Toast.LENGTH_SHORT).show();
                    }
                });
                break;
        }
    }
}