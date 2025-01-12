import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled Components
const CalendarContainer = styled.div`
  display: flex;
  gap: 5px;
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
  width: 100%;
`;

const DayList = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 15px);
  grid-auto-flow: column;
  gap: 5px;
  text-align: center;
  height: 100px;
`;

const DayBox = styled.div`
  width: 1rem;
  height: 1rem;
  // border: 1px solid #ccc;
  border-radius: 2px;
  background-color: ${({ intensity }) => intensity};
`;

// ฟังก์ชันสร้างสีความเข้มตามจำนวนงาน
const getIntensityColor = (tasks) => {
  if (tasks === 0) return '#ffffff'; // ไม่มีงาน = สีขาว
  const colors = [
    '#aa7dff', // 1 งาน - ฟ้าอ่อน
    '#7a48d9', // 2 งาน
    '#5c2cb8', // 3 งาน
    '#331078',
    '#280a63', 
    '#200459', 
  ];
  // ใช้สีจาก array หรือถ้ามากกว่าค่าที่กำหนดไว้จะใช้สีสุดท้าย
  return colors[Math.min(tasks - 1, colors.length - 1)];
};

const Calendar = ({ startYear, startMonth, endYear, endMonth, holidays, taskMap }) => {
  // ฟังก์ชันสร้างวันในเดือน
  const generateDaysInMonth = (year, month) => {
    const days = [];
    const totalDays = new Date(year, month, 0).getDate();
    for (let day = 1; day <= totalDays; day++) {
      days.push(new Date(year, month - 1, day));
    }
    return days;
  };

  // สร้าง months ที่ต้องการ
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
          <MonthName>
            {new Date(year, month - 1).toLocaleString('default', { month: 'short' })}
          </MonthName>
          <DayList>
            {generateDaysInMonth(year, month).map((date) => {
              const formattedDate = date.toISOString().split('T')[0]; // รูปแบบวันที่ที่ต้องการ
              const tasks = taskMap[formattedDate] || 0; // จำนวนงานในวันนั้น
              return (
                <DayBox
                  key={formattedDate}
                  intensity={getIntensityColor(tasks)} // ใช้ฟังก์ชันสร้างสี
                />
              );
            })}
          </DayList>
        </MonthColumn>
      ))}
    </CalendarContainer>
  );
};

export default Calendar;
