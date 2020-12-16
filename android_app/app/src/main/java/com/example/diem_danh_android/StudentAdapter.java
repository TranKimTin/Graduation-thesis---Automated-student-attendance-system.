package com.example.diem_danh_android;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.example.diem_danh_android.object.Student;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

class MyViewHolder{
    public TextView tvStudent ;
    public  MyViewHolder(View convertView){
        tvStudent = (TextView) convertView.findViewById(R.id.tvStudent);
    }
    public MyViewHolder(){

    }
}

public class StudentAdapter extends BaseAdapter {
    private List<Student> listSV;
    private int layout;
    private Context context;

    public StudentAdapter(Context context, int layout, ArrayList<Student> listSV) {
        this.context = context;
        this.layout = layout;
        this.listSV = listSV;
    }

    @Override
    public int getCount() {
        return listSV.size();
    }

    @Override
    public Object getItem(int i) {
        return listSV.get(i);
    }

    @Override
    public long getItemId(int i) {
        return 0;
    }

    @SuppressLint("ResourceAsColor")
    @Override
    public View getView(final int i, View view, ViewGroup viewGroup) {
        MyViewHolder myViewHolder = null;
        if (view == null) {
            view = LayoutInflater.from(context).inflate(layout, null);
            myViewHolder = new MyViewHolder(view);
            view.setTag(myViewHolder);
        } else {
            myViewHolder = (MyViewHolder) view.getTag();
        }
        String txt = listSV.get(i).toString();
        myViewHolder.tvStudent.setText(txt);

        String color = listSV.get(i).getColor();
        myViewHolder.tvStudent.setTextColor(Color.parseColor(color));
        return view;
    }

    @Override
    public void notifyDataSetInvalidated() {
        super.notifyDataSetInvalidated();
    }
}
