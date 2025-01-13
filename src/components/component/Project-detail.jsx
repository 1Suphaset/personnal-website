import React from 'react';
import { Box, Typography } from '@mui/material';

function ProjectDetail({ image, title, description }) {
  return (
    <div style={{ padding: '0 7rem' }}>
      <Box
        sx={{
          backgroundColor: "#d1d1e5",
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          height: 'auto',
          width: '100%',
          boxShadow: 'none',
        }}
      >
        {/* Title ที่อยู่ด้านบนสุด */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem', color: '#000000' }}>
          Project Overview
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* รูปภาพ */}
          <Box sx={{ width: '50%' }}>
            <img
              src={image}
              alt="Project Image"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Box>

          {/* ข้อความ */}
          <Box sx={{ width: '50%',height:'100%', paddingLeft: '1rem' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: '#6a0dad' }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#2b2b2b' }}>
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ProjectDetail;
