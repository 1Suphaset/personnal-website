import React from 'react'
import '../../css/Project.css';
import CardComponent from '../component/Card-project';
import W1 from '../../images/W1.png'
import W2 from '../../images/15.png'
import W3 from '../../images/17.png'
import W4 from '../../images/18.png'
import W5 from '../../images/19.png'
import { useNavigate } from 'react-router-dom';
function Project() {
  const navigate = useNavigate();
  const goToProjectDetail = (projectId) => {
    navigate(`/project/${projectId}`); // ส่ง projectId ใน URL
  };
  
  return (
    <>
      <section className="project">
        <header className="header">
          <div className="home-subtitle2 s-main" style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <span>My Recent </span>
            <h1 className="cinzel-header" style={{ marginLeft: '10px' }}> Works</h1>
          </div><br />
          <p className="home-subtitle2 s-thr" style={{  textAlign: 'center'}}>Here are a few projects i've worked on recently.</p>
          <br /><br />
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            margin: '0 auto'
          }}>

            <CardComponent
              imageUrl={W1}
              title="EN-TECH [For Student]"
              description="พัฒนาระบบ EN-TECH สำหรับวิทยาลัยเทคโนโลยีวิศวกรรมแหลมฉบัง เพื่อสร้างแพลตฟอร์มที่ใช้งานง่าย และตอบโจทย์ความต้องการของนักศึกษาและบุคลากร โดยการพัฒนาให้ระบบสามารถรองรับฟังก์ชันที่หลากหลาย เพื่อสนับสนุนการใช้งานของผู้ใช้"
              buttonText="See More"
              onButtonClick={() => goToProjectDetail(1)}// ส่งฟังก์ชันเข้ามา
              tags={['Front-end']}
            />
            <CardComponent
              imageUrl={W2}
              title="EN-TECH [For Admin]"
             description="พัฒนาระบบ EN-TECH สำหรับวิทยาลัยเทคโนโลยีวิศวกรรมแหลมฉบัง เพื่อสร้างแพลตฟอร์มที่ใช้งานง่าย และตอบโจทย์ความต้องการของนักศึกษาและบุคลากร โดยการพัฒนาให้ระบบสามารถรองรับฟังก์ชันที่หลากหลาย เพื่อสนับสนุนการใช้งานของผู้ใช้"
              buttonText="See More"
              onButtonClick={() => goToProjectDetail(2)} // ส่งฟังก์ชันเข้ามา
              tags={['Front-end']}
            />
            <CardComponent
              imageUrl={W3}
              title="6 GHz Wi-Fi and the future"
              description="เข้าร่วมงานและออกแบบป้าย RollUp สำหรับบริษัท G-Gratitude และ Powtoon เพื่อแสดงโซลูชันที่เราใช้แก้ปัญหาอย่างมีประสิทธิภาพ พร้อมกิจกรรมแจกของรางวัลให้ผู้เยี่ยมชมบูธ เพื่อสร้างความประทับใจและดึงดูดความสนใจภายในงาน"
              buttonText="See More"
              onButtonClick={() => goToProjectDetail(3)} // ส่งฟังก์ชัเข้าร่วมงานและนเข้ามา
              tags={['Design','อื่นๆ']}
            />
            <CardComponent
              imageUrl={W4}
              title="GSB WISDOM"
              description="เขียนเสนอข้อเสนอแนะและ ReDesign UX/UI สำหรับระบบบริหารจัดการความรู้ GSB WISDOM เพื่อเพิ่มประสิทธิภาพการใช้งาน ตอบโจทย์ความต้องการของผู้ใช้งาน และยกระดับประสบการณ์ในการเข้าถึงข้อมูลและจัดการความรู้ให้สะดวก รวดเร็ว และทันสมัยมากยิ่งขึ้น"
              buttonText="See More"
              onButtonClick={() => goToProjectDetail(4)} // ส่งฟังก์ชันเข้ามา
              tags={['UX/UI']}
            />
            <CardComponent
              imageUrl={W5}
              title="SAM'TECH FESTIVAL & OPEN HOUSE"
              description="เข้าร่วมงาน SAM'TECH FESTIVAL & OPEN HOUSE ผ่านบูธ Rcheewaonline ที่มีกิจกรรมเล่นเกมแจกของรางวัลให้แก่น้องๆ นักเรียนที่มาร่วมงาน "
              buttonText="See More >>"
              onButtonClick={() => goToProjectDetail(5)} // ส่งฟังก์ชันเข้ามา
              tags={['อื่นๆ']}
            />

          </div>
        </header>
      </section>
      <br />
      <br />
      <br />
    </>
  )
}

export default Project