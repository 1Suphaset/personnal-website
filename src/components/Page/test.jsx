import React, { useState, useEffect } from 'react'
import ProjectDetail from "../component/Project-detail"
import ProjectHead from '../component/ProjectHead'
import ProjectSub from '../component/ProjectSub'
import ProjectGall from '../component/projectGall'
import { useParams } from 'react-router-dom'; 

// ent-stu
import En1 from '../../images/Entech-Student/Screenshot 2025-01-13 094537.png'
import En2 from '../../images/Entech-Student/Screenshot 2025-01-13 094546.png'
import En3 from '../../images/Entech-Student/Screenshot 2025-01-13 094612.png'
import En4 from '../../images/Entech-Student/Screenshot 2025-01-13 094647.png'
import En5 from '../../images/Entech-Student/Screenshot 2025-01-13 094656.png'
import En6 from '../../images/Entech-Student/Screenshot 2025-01-13 094723.png'
// ent-stu
import En7 from '../../images/Entech-Admin/Screenshot 2025-01-13 094944.png'
import En8 from '../../images/Entech-Admin/Screenshot 2025-01-13 095009.png'
import En9 from '../../images/Entech-Admin/Screenshot 2025-01-13 095042.png'
import En10 from '../../images/Entech-Admin/Screenshot 2025-01-13 095050.png'
import En11 from '../../images/Entech-Admin/Screenshot 2025-01-13 095236.png'
import En12 from '../../images/Entech-Admin/Screenshot 2025-01-13 095312.png'
import En13 from '../../images/Entech-Admin/Screenshot 2025-01-13 095339.png'
// rollup
import Ru1 from '../../images/Professional Degital Learning Consult/1.png'
import Ru2 from '../../images/Professional Degital Learning Consult/2.png'
import Ru3 from '../../images/17.png'
// WIsdom
import Ws1 from '../../images/Wisdom/Screenshot 2025-01-12 100105.png'
import Ws2 from '../../images/Wisdom/Screenshot 2025-01-12 100832.png'
import Ws3 from '../../images/Wisdom/Screenshot 2025-01-12 101001.png'
import Ws4 from '../../images/18.png'
// SAM'TECH
import ST1 from '../../images/SAMTech/Screenshot 2025-01-13 110937.png'
import ST2 from '../../images/19.png'
function Test() {
  const { projectId } = useParams();
  const [data, setData] = useState({
    info: [],
    image: '',
    title: '',
    description: '',
    images: []
  });

  useEffect(() => {
    // เมื่อ projectId เปลี่ยนหรือเพิ่งโหลดหน้า
    const fetchData = () => {
      if (projectId === '1') {
        setData({
          info: ["front-end dev", "10/11/2024", "พีมิก,พี่เพลง"],
          image: En1,
          title: "[Student]EN-TECH สำหรับวิทยาลัยเทคโนโลยีวิศวกรรมแหลมฉบัง",
          description: "พัฒนาระบบ EN-TECH สำหรับวิทยาลัยเทคโนโลยีวิศวกรรมแหลมฉบัง เพื่อสร้างแพลตฟอร์มที่ใช้งานง่าย และตอบโจทย์ความต้องการของนักศึกษาและบุคลากร โดยการพัฒนาให้ระบบสามารถรองรับฟังก์ชันที่หลากหลาย เพื่อสนับสนุนการใช้งานของผู้ใช้",
          images: [
            { img: En1, title: 'EntectStudent', rows: 2, cols: 2 },  // ขนาดใหญ่ 2x2
            { img: En2, title: 'EntectStudent',  rows: 2, cols: 2},  // ขนาดปกติ 1x1
            { img: En6, title: 'EntectStudent', rows: 1, cols: 2 },  // ขนาดปกติ 1x1
            { img: En3, title: 'EntectStudent', rows: 2, cols: 2 },  // ขนาดยาว 1x2
            { img: En4, title: 'EntectStudent', rows: 1, cols: 1 },  // ขนาดยาว 2x1
            { img: En5, title: 'EntectStudent', rows: 1, cols: 1 },  // ขนาดปกติ 1x1
          ]
        });
      } else if (projectId === '2') {
        setData({
          info: ["front-end dev", "10/11/2024", "พีมิก,พี่เพลง"],
          image: En13,
          title: "[Admin]EN-TECH สำหรับวิทยาลัยเทคโนโลยีวิศวกรรมแหลมฉบัง",
          description: "พัฒนาระบบ EN-TECH สำหรับวิทยาลัยเทคโนโลยีวิศวกรรมแหลมฉบัง เพื่อสร้างแพลตฟอร์มที่ใช้งานง่าย และตอบโจทย์ความต้องการของนักศึกษาและบุคลากร โดยการพัฒนาให้ระบบสามารถรองรับฟังก์ชันที่หลากหลาย เพื่อสนับสนุนการใช้งานของผู้ใช้",
          images: [
            { img: En8, title: 'EntectAdmin', rows: 2, cols: 2 },  
            { img: En11, title: 'EntectAdmin', rows: 2, cols: 2 }, 
            { img: En9, title: 'EntectAdmin', rows: 1, cols: 2 },  
            { img: En7, title: 'EntectAdmin', rows: 2, cols: 2}, 
            { img: En12, title: 'EntectAdmin', rows: 1, cols: 1 }, 
            { img: En10, title: 'EntectAdmin', rows: 1, cols: 1},  
          ]
        });
      } else if (projectId === '3') {
        setData({
          info: ["Design", "10/11/2024", "พี่แอ้ม,พี่ใหม่"],
          image: Ru3,
          title: "6 GHz Wi-Fi and the future",
          description: "เข้าร่วมงานและออกแบบป้าย RollUp สำหรับบริษัท G-Gratitude และ Powtoon เพื่อแสดงโซลูชันที่เราใช้แก้ปัญหาอย่างมีประสิทธิภาพ พร้อมกิจกรรมแจกของรางวัลให้ผู้เยี่ยมชมบูธ เพื่อสร้างความประทับใจและดึงดูดความสนใจภายในงาน",
          images: [
            { img: Ru3, title: 'Rollup', rows: 6, cols: 2 },  // ขนาดใหญ่ 2x2
            { img: Ru1, title: 'Rollup', rows: 6, cols: 1 },  // ขนาดปกติ 1x1
            { img: Ru2, title: 'Rollup', rows: 6, cols: 1 },  // ขนาดปกติ 1x1
          ]
        });
      } else if (projectId === '4') {
        setData({
          info: ["UX/UI", "10/11/2024", "พี่ใหม่"],
          image: Ws4,
          title: "ระบบบริหารจัดการความรู้ GSB WISDOM",
          description: "เขียนเสนอข้อเสนอแนะและ ReDesign UX/UI สำหรับระบบบริหารจัดการความรู้ GSB WISDOM เพื่อเพิ่มประสิทธิภาพการใช้งาน ตอบโจทย์ความต้องการของผู้ใช้งาน และยกระดับประสบการณ์ในการเข้าถึงข้อมูลและจัดการความรู้ให้สะดวก รวดเร็ว และทันสมัยมากยิ่งขึ้น",
          images: [
            { img: Ws1, title: 'Wisdom', rows: 12, cols: 2 },  // ขนาดใหญ่ 2x2
            { img: Ws3, title: 'Wisdom', rows: 5, cols: 2 },  // ขนาดปกติ 1x1
            { img: Ws2, title: 'Wisdom', rows: 7, cols: 2 },  // ขนาดปกติ 1x1
          ]
        });
      } else if (projectId === '5') {
        setData({
          info: ["front-end dev", "10/11/2024", "พีมิก,พี่เพลง"],
          image: ST2,
          title: "SAM'TECH FESTIVAL & OPEN HOUSE [บูธ Rcheewaonline]",
          description: "เข้าร่วมงาน SAM'TECH FESTIVAL & OPEN HOUSE ผ่านบูธ Rcheewaonline ที่มีกิจกรรมเล่นเกมแจกของรางวัลให้แก่น้องๆ นักเรียนที่มาร่วมงาน",
          images: [
            { img: ST2, title: 'SAMTECH', rows: 4, cols: 4 }, 
          ]
        });
      }
      
    };

    fetchData(); 
  }, [projectId]); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0', padding: '0' }}>
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          top: '0',
          margin: '0',
          padding: '0',
        }}
      >
        <ProjectHead
          image={data.image}
          text={data.title} // ใช้ title จาก data
          textPosition="60%" 
        />
      </div>
      <ProjectSub info={data.info} />
      <ProjectDetail
        image={data.image}
        title={data.title} 
        description={data.description} 
      />
      <ProjectGall images={data.images} />
    </div>
  )
}

export default Test;
