import React from 'react';
import { styled } from '@mui/system';

const CategoryContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  height: '6rem',
  padding: '1rem',
  backgroundColor: '#ffffff',
});

const CategoryBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '0 7rem',
  width: '30%',
  height: '100%',
  justifyContent: 'center',
});

const CategoryTitle = styled('h2')({
  width: '100%',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  textAlign: 'left',
  color: '#333',
});

const CategoryInfo = styled('p')({
  fontWeight: 'normal',
  fontSize: '1rem',
  color: '#666',
  textAlign: 'left',
  width: '100%',
});

function ProjectSub({ info }) {
  const titles = ['หมวดหมู่', 'เริ่มต้น-สิ้นสุด', 'ผู้ที่มอบหมาย'];

  return (
    <CategoryContainer>
      {titles.map((title, index) => (
        <CategoryBox key={index}>
          <CategoryTitle>{title}</CategoryTitle>
          <CategoryInfo>{info[index]}</CategoryInfo>
        </CategoryBox>
      ))}
    </CategoryContainer>
  );
}

export default ProjectSub;
