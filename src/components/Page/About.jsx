import React, { useEffect, useState } from 'react';
import '../../css/Homepage.css';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import Hand from '../component/WavingHand';
import { Margin } from '@mui/icons-material';
import Calendar from '../component/work';
import Sheet from '../component/Sheet';
import PersonImage2 from "../../images/Screenshot_20240620_225958_Gallery.jpg"

function About() {
  const [holidays, setHolidays] = useState([]);
  const [taskMap, setTaskMap] = useState({});

  useEffect(() => {
    const SHEET_ID = '1T7auS28FAmpH1gFSrcgU62O7ZhGarZLs39NAdJ8z_-w';
    const API_KEY = 'AIzaSyCxOsIGHXyC41K0yuIfo_Z_6oHXoK6xLFk';
    const DATE_RANGE = 'Sheet1!B6:B'; // คอลัมน์วันที่
    const TASK_RANGE = 'Sheet1!E6:E'; // คอลัมน์จำนวนงาน

    const fetchSheetData = async () => {
      try {
        const dateResponse = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${DATE_RANGE}?key=${API_KEY}`
        );
        const taskResponse = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TASK_RANGE}?key=${API_KEY}`
        );

        const dateData = await dateResponse.json();
        const taskData = await taskResponse.json();

        console.log('Date Data:', dateData);
        console.log('Task Data:', taskData);

        if (dateData.values && taskData.values) {
          const taskMapping = {};
          const holidayList = [];  // สำหรับเก็บวันที่เป็นวันหยุด

          // เรียกทุกแถวใน `dateData` เพื่อหาจำนวนแถวที่มีงาน
          dateData.values.forEach((dateRow, index) => {
            const rawDate = dateRow[0]; // ค่า Date จากแถว

            // ตรวจสอบว่าเป็นวันที่ถูกต้อง
            if (!rawDate || typeof rawDate !== 'string') {
              console.warn(`Invalid date at row ${index + 6}:`, rawDate);
              return; // ข้ามแถวที่ไม่ใช่วันที่
            }

            // แปลงวันที่ (สมมติว่าเป็นรูปแบบ DD/MM/YYYY)
            const [day, month, year] = rawDate.split('/');
            if (!day || !month || !year) {
              console.warn(`Malformed date at row ${index + 6}:`, rawDate);
              return; // ข้ามวันที่ที่ไม่ถูกต้อง
            }

            const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

            // เริ่มต้นการนับจำนวนงานสำหรับวันที่นั้น
            if (!taskMapping[formattedDate]) {
              taskMapping[formattedDate] = 0;
            }

            // นับแถวที่มีงานใน `taskData`
            if (taskData.values[index] && taskData.values[index].length > 0) {
              taskMapping[formattedDate] += taskData.values[index].length; // นับจำนวนแถวที่มีข้อมูล
            }

            // ตรวจสอบว่าเป็นวันหยุดหรือไม่
            // สมมติว่ามีการระบุวันที่เป็นวันหยุดในคอลัมน์อื่น เช่น คอลัมน์ Holiday
            const isHoliday = rawDate.includes("Holiday"); // เพิ่มตรรกะวันหยุดที่ต้องการ
            if (isHoliday) {
              holidayList.push(formattedDate);
            }
          });

          // เซ็ตสถานะ
          setTaskMap(taskMapping);
          setHolidays(holidayList);

          console.log('Task Mapping:', taskMapping);
          console.log('Holidays:', holidayList);
        }
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchSheetData();
  }, []);
  return (
    <>
      <section className="top">
        <header className="home-header">
          <p className="home-subtitle2 s-main">Know Who I'm</p><br /><br />
          <p className="home-subtitle2 s-sec">
  สวัสดีครับ ผมชื่อ <span className='c-primary'>ศุภเศรษฐ์ โมธรรม</span> กำลังศึกษาอยู่ที่ 
  <span className='c-primary'>มหาวิทยาลัยนอร์ทกรุงเทพ</span> ปัจจุบันฝึกงานอยู่ที่บริษัท 
  <span className='c-primary'>G-Gratitude</span> ในตำแหน่ง Front-end Developer ซึ่งหน้าที่หลักของผมคือการพัฒนาโค้ดและฟีเจอร์ของระบบ
</p>
          <p className="home-subtitle2 s-sec">รู้สึกตื่นเต้นและยินดีที่ได้เรียนรู้ทักษะหลากหลายในสายงานนี้เพื่อเตรียมพร้อมสำหรับการทำงานในอนาคตครับ </p>
          <p className="home-subtitle2 s-sec">นอกจากนี้ยังมีโอกาสได้ทำงานด้าน</p>
          <ul className="list">
            <li className="home-subtitle2 s-sec">การออกแบบ UX/UI</li>
            <li className="home-subtitle2 s-sec">Testing ระบบเพื่อความเสถียรและประสิทธิภาพ</li>
          </ul>
        </header>
        <img src={PersonImage2} className='profile-img3' />
      </section>
      <div style={{ width: '100%' }} className="works">
        <p className="home-subtitle2 s-main">Day I Work</p>
        <Calendar startYear={2024} startMonth={10} endYear={2025} endMonth={8} holidays={holidays} taskMap={taskMap} />
        <div style={{ display: 'flex', alignItems: "center", gap: "5px", justifyContent: "end", width: "100%", marginTop: ".5rem" }}>
          <p>Less</p>
          <div className='day-box' style={{ backgroundColor: "#ffffff" }}></div>
          <div className='day-box' style={{ backgroundColor: "#aa7dff" }}></div>
          <div className='day-box' style={{ backgroundColor: "#7a48d9" }}></div>
          <div className='day-box' style={{ backgroundColor: "#5c2cb8" }}></div>
          <div className='day-box' style={{ backgroundColor: "#331078" }}></div>
          <div className='day-box' style={{ backgroundColor: "#280a63" }}></div>
          <div className='day-box' style={{ backgroundColor: "#200459" }}></div>
          <p>More</p>
        </div>
      </div>

    </>
  );
}

export default About;
