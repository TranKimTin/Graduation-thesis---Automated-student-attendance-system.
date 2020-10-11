create table class(
	id int primary key auto_increment,
    class_code varchar(255) unique,
    class_name varchar(255)
);

create table student(
	id int primary key auto_increment,
    student_code varchar(255) unique,
    student_name varchar(255),
    date_of_birth date,
    gender varchar(10),
    class_id int,
    foreign key (class_id) references class(id)
);

create table teacher(
	id int primary key auto_increment,
    teacher_code varchar(255) unique,
    teacher_name varchar(255),
    date_of_birth date,
    gender varchar(10)
);

create table subject(
	id int primary key auto_increment,
    subject_name varchar(255),
    subject_code varchar(255) unique
);

create table semester(
	id int primary key auto_increment,
	semester_name varchar(255),
    semester_code varchar(255) unique
);

create table year(
	id int primary key auto_increment,
	year_name varchar(255),
    year_code varchar(255) unique
);

create table section_class(
	id int primary key auto_increment,
	section_class_name varchar(255),
    section_class_code varchar(255) unique,
    id_subject int,
    id_year int, 
    id_semester int,
    foreign key (id_subject) references subject(id),
    foreign key (id_year) references year(id),
    foreign key (id_semester) references semester(id)
);

create table study(
	id_student int,
    id_section_class int,
    foreign key (id_student) references student(id),
    foreign key (id_section_class) references section_class(id),
    primary key (id_student, id_section_class)
);

create table teach(
	id_teacher int,
    id_section_class int,
    foreign key (id_teacher) references teacher(id),
    foreign key (id_section_class) references section_class(id),
    primary key (id_teacher, id_section_class)
);

create table schedule(
	id int primary key auto_increment,
    id_section_class int,
    start_time datetime,
    end_time datetime,
    foreign key (id_section_class) references section_class(id)
);

create table attendance(
	id_schedule int,
    id_student int,
    id_teacher int,
    timestamp datetime,
    foreign key (id_schedule) references schedule(id),
    foreign key (id_student) references student(id),
    foreign key (id_teacher) references teacher(id),
    primary key (id_schedule, id_student)
);