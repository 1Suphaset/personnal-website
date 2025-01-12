import React from 'react';
import styled from 'styled-components';

// Styled Components
const CalendarContainer = styled.div`
  display: flex;
  gap: 5px; /* ระยะห่างระหว่างเดือน */
`;

const MonthColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MonthName = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 2px;
  text-align: left;
  width:100%;
`;

const DayList = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 15px); /* สูงสุด 6 แถว */
  grid-auto-flow: column; /* จัดเรียงจากบนลงล่าง */
  gap: 5px;
  text-align: center;
  height: 100px;
`;

const DayBox = styled.div`
  width: 1rem;
  height: 1rem;
  background-color:rgb(255, 255, 255);
  border: 1px solid #ccc;
  border-radius: 2px;
  &.holiday {
    background-color: #ffcccc; /* สีพื้นหลังสำหรับวันหยุด */
  }
`;

// ตัวอย่าง array ของวันหยุดในรูปแบบ 'YYYY-MM-DD'
const holidays = [
  '2025-01-01', // ตัวอย่าง: วันปีใหม่
  '2025-12-25', // ตัวอย่าง: คริสต์มาส
];

// ฟังก์ชันตรวจสอบว่าวันที่เป็นวันหยุดหรือไม่
const isHoliday = (date) => {
  const formattedDate = date.toISOString().split('T')[0]; // แปลงวันที่ให้อยู่ในรูปแบบ 'YYYY-MM-DD'
  return holidays.includes(formattedDate);
};

// ฟังก์ชันสร้างวันในแต่ละเดือน
const generateDaysInMonth = (year, month) => {
  const days = [];
  const totalDays = new Date(year, month, 0).getDate(); // หาจำนวนวันในเดือนนั้น
  for (let day = 1; day <= totalDays; day++) {
    days.push(new Date(year, month - 1, day));
  }
  return days;
};

// Component Calendar
const Calendar = ({ startYear, startMonth, endYear, endMonth }) => {
    const months = [];
    for (let year = startYear; year <= endYear; year++) {
      for (
        let month = year === startYear ? startMonth : 1;
        month <= (year === endYear ? endMonth : 12);
        month++
      ) {
        months.push({ year, month });
      }
    }
  
    return (
        <CalendarContainer>
          {months.map(({ year, month }) => (
            <MonthColumn key={`${year}-${month}`}>
              <MonthName>{new Date(year, month - 1).toLocaleString('default', { month: 'short' })}</MonthName>
              <DayList>
                {generateDaysInMonth(year, month).map((date) => (
                  <DayBox
                    key={date.toISOString()}
                    className={isHoliday(date) ? 'holiday' : ''}
                  />
                ))}
              </DayList>
            </MonthColumn>
          ))}
        </CalendarContainer>
      );
    };

export default Calendar;
