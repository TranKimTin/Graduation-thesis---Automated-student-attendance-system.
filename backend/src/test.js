let i = {
    "end_time": "2020-12-03 11:30:00.000000",
    "timestamp": "2020-11-26 16:07:36.000000",
    "start_time": "2020-12-03 08:50:00.000000",
    "id_schedule": 61,
    "teacher_name": "Giảng viên 1",
    "status": "check",
    "color": "green"
}
let timestamp = new Date(i.timestamp).getTime() / 1000;
let startTime = new Date(i.start_time).getTime() / 1000;
let endTime = new Date(i.end_time).getTime() / 1000;
console.log(timestamp, startTime, endTime)
console.log(timestamp - startTime)
if (timestamp >= endTime) console.log('1');
else if (timestamp < startTime + 30 * 60) console.log('2');
else if (timestamp < startTime + 60 * 60) console.log('3');
else if (timestamp < endTime) console.log('4');