import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// ปุ่มที่ปรับแต่ง
const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: '#500982', // สีม่วงเข้ม
  color: '#fff', // สีตัวหนังสือ
  padding: '10px 20px',
  borderRadius: '8px',
  fontSize: '16px',
  textTransform: 'none',
  justifyContent: 'space-around',
  overflow: 'hidden',
  position: 'relative', // ทำให้ตัวปุ่มอยู่ใน context เดียวกัน
  transition: 'transform 0.2s ease-in-out, background-color 0.4s ease-in-out',
  border: 'none',
  cursor: 'pointer',
  fontFamily: "'Roboto', 'Noto Sans Thai', sans-serif",
  '& span': {
    position: 'relative', // ตัวหนังสืออยู่ใน context ของปุ่ม
    zIndex: 1, // อยู่เหนือ pseudo-element
    display: 'flex',
  alignItems: 'center',
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


// คอมโพเนนต์ Card
const CardComponent = ({ imageUrl, title, description, buttonText, onButtonClick, tags = [] }) => {
  const tagStyles = [
    { label: 'Front-end', bgColor: '#7D56F3', color: '#230092' },
    { label: 'Testerห', bgColor: '#FF4081', color: '#fff' },
    { label: 'UX/UI', bgColor: '#FC73FF', color: '#8F0092' },
    { label: 'Tester', bgColor: '#FFC776', color: '#A05F00' },
    { label: 'Design', bgColor: '#7EB5FF', color: '#004198' },
    { label: 'อื่นๆ', bgColor: '#CECECE', color: '#2B2B2B' },
  ];
  const renderTags = (tags) => {
    return tags.map((tag, index) => {
      const tagData = tagStyles.find((t) => t.label === tag) || {};
      return (
        <Typography
          key={index}
          variant="caption"
          sx={{
            display: 'inline-block',
            marginRight: '5px',
            padding: '1px 15px',
            backgroundColor: tagData.bgColor,
            color: tagData.color,
            borderRadius: '12px',
            fontSize: '10px',
            textAlign: 'start',
            fontFamily: "'Roboto', 'Noto Sans Thai', sans-serif"
          }}
        >
          {tag}
        </Typography>
      );
    });
  };
  return (
    <Card
      sx={{
        width: 345,
        borderRadius: '10px',
        padding: '1rem 1rem 2rem 1rem',
        boxShadow: 3,
        backgroundColor: 'transparent',
        border: '2px solid rgba(177, 93, 255, 0.7)', // เส้นขอบสีม่วง
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        {imageUrl && (
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
            sx={{ borderRadius: '5px' }}
          />
        )}
        <Box sx={{ marginTop: '5px', textAlign: 'start' }}>
          {renderTags(tags)}
        </Box>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "'Roboto', 'Noto Sans Thai', sans-serif",marginTop: '8px', color: '#fff', fontSize: '1.5rem', textAlign: 'left' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "'Roboto', 'Noto Sans Thai', sans-serif",height: '60px',color: '#fff', fontSize: '14px', textAlign: 'left',overflow: 'hidden',textOverflow: 'ellipsis' }}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
        <StyledButton onClick={onButtonClick}><span>{buttonText}<ArrowForwardIosIcon/></span></StyledButton>
      </Box>
    </Card>
  );
};

// PropTypes
CardComponent.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func, // ฟังก์ชันที่ส่งมา
};

CardComponent.defaultProps = {
  buttonText: 'Click Me!',
  onButtonClick: () => alert('Button clicked!'), // ค่าเริ่มต้นเป็น Alert
};

export default CardComponent;
