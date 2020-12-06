package com.example.diem_danh_android.object;

public class Student{
    private int id;
    private String student_code;
    private String student_name;

    public int getId() {
        return id;
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

    public Student() {
    }

    public Student(int id, String student_code, String student_name) {
        this.id = id;
        this.student_code = student_code;
        this.student_name = student_name;
    }
}
