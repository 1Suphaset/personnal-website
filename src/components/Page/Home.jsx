import React, { useState,useEffect } from 'react';
import '../../css/Homepage.css';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import Hand from '../component/WavingHand';
import { Margin } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import lineIcon from "../../images/line (1).png"
import PersonImage from "../../images/1000002647.png"
import PersonImage2 from "../../images/Screenshot_20240620_225958_Gallery.jpg"
const TypingEffect = () => {
  const words = ["Front-end developer", "UI/UX Designer", "React Enthusiast"]; // คำที่ต้องการเปลี่ยน
  const typingSpeed = 200; // ความเร็วในการพิมพ์
  const deletingSpeed = 150; // ความเร็วในการลบ
  const pauseAfterTyping = 2000; // เวลาพักหลังพิมพ์เสร็จ

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        // เพิ่มตัวอักษร
        const updatedText = currentWord.slice(0, text.length + 1);
        setText(updatedText);

        if (updatedText === currentWord) {
          setIsDeleting(true);
          setSpeed(pauseAfterTyping); // พักหลังพิมพ์เสร็จ
        }
      } else {
        // ลบตัวอักษร
        const updatedText = currentWord.slice(0, text.length - 1);
        setText(updatedText);

        if (updatedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length); // เปลี่ยนไปคำถัดไป
          setSpeed(typingSpeed);
        } else {
          setSpeed(deletingSpeed);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, speed, words]);

  return <p className="home-subtitle">{text}</p>;
};


function Home() {
  const [open, setOpen] = useState(false);
  const style = {
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
    width: '50px',
    height: '50px',
    borderRadius: '60%',
    padding: '5px'
  }
  const handleClick = (type) => {
    const data = {
      git:'https://github.com/1Suphaset',
      instagram:'https://www.instagram.com/sir_matony?igsh=MWFuMHd0YjFuZzVxdw==',
      line:'https://line.me/ti/p/kqKpT88fuc',
     
    }
    window.location.href = data[type]; // URL ที่ต้องการไป
  };
  const [titleDialog, setTitleDialog] = useState()
  const [infoDialog, setInfoDialog] = useState()
  const handleClickOpen = (type) => {
    const title = {
      gmail:  <><MarkEmailReadIcon /> Contact via Email </>,
      phone: <><CallIcon /> Contact via Phone </>,
    };
    const info = {
      gmail: 'suphaset.moth@northbkk.ac.th',
      phone: '082-658-6672',
    };
    setTitleDialog(title[type]);
    setInfoDialog(info[type]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className='top'>
        <header className="home-header">
          <div style={{display: "flex" , alignItems: "center"}}>
          <p className="fs-4">Hi There!</p><Hand />
          </div>
          <div style={{display: "flex" , alignItems: "center"}}>
          <h1 className="home-title c-sec mr-2">I'm </h1><h1 className='home-title c-primary '> Suphaset Motham</h1>
          </div>
          {/* <p className="home-subtitle">Front-end developer</p> */}
          <TypingEffect />
        </header>
        <img src={PersonImage} className='profile-img' />
      </div>
      <section className="intro">
        {/* <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a passionate developer and designer. I love creating unique digital experiences. Welcome to my personal galaxy!
        </p> */}
        <header className="home-header">
          <p className="home-subtitle2 s-main">LET ME INTRODUCE MYSELF</p><br /><br />
          <p className="home-subtitle2 s-sec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus est temporibus reiciendis reprehenderit! Quo est, totam ab doloremque nulla quam non tenetur officia, deleniti aliquid explicabo error! Eum, ipsum.</p>
          <p className="home-subtitle2 s-sec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus est temporibus reiciendis reprehenderit! Quo est, totam ab doloremque nulla quam non tenetur officia, deleniti aliquid explicabo error! Eum, ipsum.</p>
          <p className="home-subtitle2 s-sec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus est temporibus reiciendis reprehenderit! Quo est, totam ab doloremque nulla quam non tenetur officia, deleniti aliquid explicabo error! Eum, ipsum.</p>
        </header>
        <img src={PersonImage2} className='profile-img2' />
      </section>
      <section className='contact'>
        <p className="home-subtitle2 s-main">FIND ME ON</p>
        <p className="home-subtitle2 s-thr">Feel free to connect with me</p>
        <Stack direction="row" spacing={3}>
          <IconButton aria-label="fingerprint" color="secondary" sx={style} onClick={() => handleClick('git')}>
            <GitHubIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton aria-label="fingerprint" color="secondary" sx={style} onClick={() => handleClickOpen('gmail')}>
            <EmailIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton aria-label="fingerprint" color="secondary" sx={style} onClick={() => handleClick('line')}>
            <img src={lineIcon} style={{fontSize: '40px',width: "40px"}} />
          </IconButton>
          <IconButton aria-label="fingerprint" color="secondary" sx={style} onClick={() => handleClickOpen('phone')}>
            <CallIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton aria-label="fingerprint" color="secondary" sx={style} onClick={() => handleClick('instagram')}>
            <InstagramIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Stack>
      </section>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{
            cursor: 'move',
            color: 'purple',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
         {titleDialog}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{infoDialog}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Home;
