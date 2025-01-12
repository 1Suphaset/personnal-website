import React from 'react';
import styled from 'styled-components';

// สร้าง Styled Component สำหรับ emoji 
const WaveEmoji = styled.div`
  font-size: 50px;
  margin-bottom: 2rem;
  animation: waveAnimation 6s ease-in-out infinite; // เพิ่มระยะเวลา animation เพื่อให้เห็นการเคลื่อนไหวชัดเจนขึ้น

  @keyframes waveAnimation {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    12.5% {
      transform: translateY(-5px) rotate(0deg);
    }
    25% {
      transform: translateY(5px) rotate(0deg);
    }
    37.5% {
      transform: translateY(-5px) rotate(0deg);
    }
    50% {
      transform: translateY(5px) rotate(0deg);
    }
    62.5% {
      transform: translateY(-5px) rotate(0deg);
    }
    75% {
      transform: translateY(5px) rotate(0deg);
    }
    87.5% {
      transform: translateY(0px) rotate(5deg);
    }
    95% {
      transform: translateY(0px) rotate(-5deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
  }
`;

const Hand = () => {
  return (
    <WaveEmoji>
      👋🏻
    </WaveEmoji>
  );
};

export default Hand;