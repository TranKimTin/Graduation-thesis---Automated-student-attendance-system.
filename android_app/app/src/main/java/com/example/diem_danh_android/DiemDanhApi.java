package com.example.diem_danh_android;

import com.example.diem_danh_android.object.User;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Query;

public interface DiemDanhApi {

    @POST("/api/login")
    Call<JsonObject> login(@Body User u);

    @GET("/api/attendance/android/section-class")
    Call<JsonObject> getAttendance(@Query("x-access-token") String access_token);
}
