import React from 'react'
import '../../css/Project.css';
import CardComponent from '../component/Card-project';
import W1 from '../../images/W1.png'
import W2 from '../../images/15.png'
import W3 from '../../images/17.png'
import W4 from '../../images/18.png'
import W5 from '../../images/19.png'
function Project() {
  const handleClick = () => {
    console.log('Custom button action executed!');
    alert('Button action triggered!');
  };
  return (
    <>
      <section className="project">
        <header className="header">
          <div className="home-subtitle2 s-main" style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <span>My Recent </span>
            <h1 className="cinzel-header" style={{ marginLeft: '10px' }}> Works</h1>
          </div><br />
          <p className="home-subtitle2 s-thr">Here are a few projects i've worked on recently.</p>

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
              description="This is the description for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonText="Learn More"
              onButtonClick={handleClick} // ส่งฟังก์ชันเข้ามา
              tags={['Front-end']}
            />
            <CardComponent
              imageUrl={W2}
              title="EN-TECH [For Admin]"
              description="This is the description for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonText="Learn More"
              onButtonClick={handleClick} // ส่งฟังก์ชันเข้ามา
              tags={['Front-end']}
            />
            <CardComponent
              imageUrl={W3}
              title="6 GHz Wi-Fi and the future"
              description="This is the description for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonText="Learn More"
              onButtonClick={handleClick} // ส่งฟังก์ชันเข้ามา
              tags={['Design','อื่นๆ']}
            />
            <CardComponent
              imageUrl={W4}
              title="GSB WISDOM"
              description="This is the description for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonText="Learn More"
              onButtonClick={handleClick} // ส่งฟังก์ชันเข้ามา
              tags={['UX/UI']}
            />
            <CardComponent
              imageUrl={W5}
              title="Sam"
              description="This is the description for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonText="Learn More >>"
              onButtonClick={handleClick} // ส่งฟังก์ชันเข้ามา
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