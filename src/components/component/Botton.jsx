import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledButton = styled('button')(({ theme }) => ({
    backgroundColor: '#500982', // สีม่วงเข้ม
    color: '#fff', // สีตัวหนังสือ
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '16px',
    textTransform: 'none',
    overflow: 'hidden',
    position: 'relative', // ทำให้ตัวปุ่มอยู่ใน context เดียวกัน
    transition: 'transform 0.2s ease-in-out, background-color 0.4s ease-in-out',
    border: 'none',
    cursor: 'pointer',
    '& span': {
      position: 'relative', // ตัวหนังสืออยู่ใน context ของปุ่ม
      zIndex: 1, // อยู่เหนือ pseudo-element
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      backgroundColor: '#6a0dad', // สีม่วงอ่อน
      transition: 'left 0.4s ease-in-out',
      zIndex: 0, // pseudo-element อยู่ใต้ตัวหนังสือ
    },
    '&:hover::before': {
      left: 0, // เลื่อนจากซ้ายไปขวา
    },
    '&:hover': {
      color: '#fff', // สีตัวหนังสือยังคงอยู่
    },
    '&:active': {
      transform: 'scale(0.95)', // เด้งเบาๆ
    },
  }));
export default function BUTTON({ text = "Default Button" }) {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  );
}
