import React from 'react';
import { styled } from '@mui/system';

const CategoryContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row', // การจัดเรียงในแถว
  justifyContent: 'space-between', // ให้แต่ละหมวดหมู่ห่างกัน
  width: '100%',
  height: '6rem', // ความสูง 20rem
  padding: '1rem',
  backgroundColor: '#ffffff'
});

const CategoryBox = styled('div')({
  display: 'flex',
  flexDirection: 'column', // การจัดเรียงในแนวตั้ง
  alignItems: 'center', // จัดให้อยู่กลาง
  padding: '0 7rem',
  width: '30%', // กำหนดความกว้าง 3 ช่อง
  height: '100%',
  justifyContent: 'center',
});

const CategoryTitle = styled('h2')({
width: '100%',
  fontWeight: 'bold', // ตัวหนา
  fontSize: '1.2rem',
  textAlign: 'left',
  color: '#333',
});

const CategoryInfo = styled('p')({
  fontWeight: 'normal', // ตัวบาง
  fontSize: '1rem',
  color: '#666',
  textAlign: 'left',
  width: '100%',
});

function ProjectSub() {
  return (
    <CategoryContainer>
      <CategoryBox>
        <CategoryTitle>หมวดหมู่ 1</CategoryTitle>
        <CategoryInfo>ข้อมูลของหมวดหมู่นี้</CategoryInfo>
      </CategoryBox>
      <CategoryBox>
        <CategoryTitle>หมวดหมู่</CategoryTitle>
        <CategoryInfo>ข้อมูลของหมวดหมู่นี้</CategoryInfo>
      </CategoryBox>
      <CategoryBox>
        <CategoryTitle>ผู้ที่มอบหมาย</CategoryTitle>
        <CategoryInfo>ข้อมูลของหมวดหมู่นี้</CategoryInfo>
      </CategoryBox>
    </CategoryContainer>
  );
}

export default ProjectSub;
