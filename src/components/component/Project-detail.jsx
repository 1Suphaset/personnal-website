import React from 'react';
import { Box, Typography } from '@mui/material';
import W1 from "../../images/W1.png"; // รูปภาพที่ต้องการใช้

function ProjectDetail() {
  return (
    <div style={{padding: '0 7rem'}}>
       <Box 
      sx={{ 
        backgroundColor: "#d1d1e5", 
        padding: '1rem 2rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'start', 
        justifyContent: 'center', 
        height: 'auto', // ครอบคลุมเต็มหน้าจอ
        width: '100%',
        boxShadow: 'none' // เอา boxShadow ออก
      }}
    >
      {/* Title ที่อยู่ด้านบนสุด */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem',color:'#000000' }}>
        Project Overview
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%' 
        }}
      >
        {/* รูปภาพ */}
        <Box sx={{ width: '50%' }}>
          <img 
            src={W1} 
            alt="Project Image" 
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} 
          />
        </Box>

        {/* ข้อความ */}
        <Box sx={{ width: '50%', paddingLeft: '1rem' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' ,color:'#6a0dad'}}>
            Project Title
          </Typography>
          <Typography variant="body1" sx={{ color: '#2b2b2b' }} className='home-subtitle2 s-sec'>
            นี่คือรายละเอียดสั้นๆ ของโครงการที่คุณสามารถอธิบายได้ตรงนี้ คุณสามารถพูดถึงสิ่งที่สำคัญและทำให้คนสนใจมากขึ้น เช่น จุดเด่นหรือประโยชน์จากโครงการนี้.
          </Typography>
        </Box>
      </Box>
    </Box>
    </div>
   
  );
}

export default ProjectDetail;
