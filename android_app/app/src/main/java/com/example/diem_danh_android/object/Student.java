package com.example.diem_danh_android.object;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Student{
    private int id;
    private String student_code;
    private String student_name;
    private Date timestamp;
    private String color;
    private boolean warning;

    public boolean isWarning() {
        return warning;
    }

    public void setWarning(boolean warning) {
        this.warning = warning;
    }

    public int getId() {
        return id;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudent_code() {
        return student_code;
    }

    public void setStudent_code(String student_code) {
        this.student_code = student_code;
    }

    public String getStudent_name() {
        return student_name;
    }

    public void setStudent_name(String student_name) {
        this.student_name = student_name;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public Student() {
    }

    public Student(int id, String student_code, String student_name, Date timestamp, String color, boolean warning) {
        this.id = id;
        this.student_code = student_code;
        this.student_name = student_name;
        this.timestamp = timestamp;
        this.color = color;
        this.warning = warning;
    }

    public String toString(){
        String res =  student_code + " - " + student_name + " - ";
        if(timestamp != null){
            String pattern = "HH:mm:SS";
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
            res += simpleDateFormat.format(timestamp);
        }
        else{
            res += "Vắng";
        }
        return res;
    }
}
