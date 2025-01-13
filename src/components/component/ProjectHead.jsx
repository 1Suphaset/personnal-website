import React from 'react';
import { styled } from '@mui/system';

const HeaderContainer = styled('header')({
  top: '0',
  position: 'relative',
  width: '100%',
  height: '100%',
});

const HeaderImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // ทำให้รูปคงสัดส่วนและคลุมพื้นที่
  filter: 'brightness(50%)', // ทำให้ภาพมืดลง
});

const HeaderText = styled('h1')({
  position: 'absolute',
  top: '0',
  padding: '0 7rem',
  color: '#fff',
  fontSize: '3rem',
  textAlign: 'center',
  fontFamily: "'Roboto', sans-serif",
  zIndex: 1,
});

function ProjectHead({ image, text, textPosition }) {
  return (
    <HeaderContainer>
      <HeaderImage src={image} alt="Header background" />
      <HeaderText style={{ top: textPosition || '70%' }}>{text}</HeaderText>
    </HeaderContainer>
  );
}

export default ProjectHead;
