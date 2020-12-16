package com.example.diem_danh_android.object;

import java.util.Date;
import java.util.List;

public class SectionClass {
    private String section_class_name;
    private String subject_name;
    private String teacher_name;
    private Date start_time;
    private Date end_time;
    private int id_teacher;
    private int id_section_class;
    private int id_schedule;
    private List<Student> listStudent;

    public SectionClass(String section_class_name, String subject_name, String teacher_name, Date start_time, Date end_time, int id_teacher, int id_section_class, int id_schedule, List<Student> listStudent) {
        this.section_class_name = section_class_name;
        this.subject_name = subject_name;
        this.teacher_name = teacher_name;
        this.start_time = start_time;
        this.end_time = end_time;
        this.id_teacher = id_teacher;
        this.id_section_class = id_section_class;
        this.id_schedule = id_schedule;
        this.listStudent = listStudent;
    }

    public SectionClass() {
    }

    public int getId_schedule() {
        return id_schedule;
    }

    public void setId_schedule(int id_schedule) {
        this.id_schedule = id_schedule;
    }

    public String getTeacher_name() {
        return teacher_name;
    }

    public void setTeacher_name(String teacher_name) {
        this.teacher_name = teacher_name;
    }

    public String getSection_class_name() {
        return section_class_name;
    }

    public void setSection_class_name(String section_class_name) {
        this.section_class_name = section_class_name;
    }

    public String getSubject_name() {
        return subject_name;
    }

    public void setSubject_name(String subject_name) {
        this.subject_name = subject_name;
    }

    public Date getStart_time() {
        return start_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public Date getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
    }

    public int getId_teacher() {
        return id_teacher;
    }

    public void setId_teacher(int id_teacher) {
        this.id_teacher = id_teacher;
    }

    public int getId_section_class() {
        return id_section_class;
    }

    public void setId_section_class(int id_section_class) {
        this.id_section_class = id_section_class;
    }

    public List<Student> getListStudent() {
        return listStudent;
    }

    public void setListStudent(List<Student> listStudent) {
        this.listStudent = listStudent;
    }
}
