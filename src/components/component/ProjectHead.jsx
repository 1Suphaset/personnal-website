import React from 'react';
import W1 from "../../images/W1.png";
import { styled } from '@mui/system';

const HeaderContainer = styled('header')({
 top: '0',
  position: 'relative',
  width: '100%',
  height: '100%',
});

const HeaderImage = styled('img')({
  width: '100%',
  height: '100%', // กำหนดความสูงเป็น 100% ของ container
  objectFit: 'cover', // ทำให้รูปคงสัดส่วนและคลุมพื้นที่
  filter: 'brightness(50%)', // ทำให้ภาพมืดลง
});

const HeaderText = styled('h1')({
  position: 'absolute',
  top: '70%',
  padding: '0 7rem',
//   transform: 'translate(-50%, -50%)', // จัดตำแหน่งข้อความให้อยู่ตรงกลาง
  color: '#fff',
  fontSize: '3rem',
  textAlign: 'center',
  fontFamily: "'Roboto', sans-serif",
  zIndex: 1, // ให้ข้อความอยู่บนสุด
});

function ProjectHead() {
  return (
    <HeaderContainer>
      <HeaderImage src={W1} alt="Image description" />
      <HeaderText>The modern world and people everywhere.</HeaderText>
    </HeaderContainer>
  );
}

export default ProjectHead;
