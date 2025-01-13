import logo from './logo.svg';
import './App.css';
import Home from './components/Page/Home';
import W1 from "../src/images/W1.png"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/component/Navbar';
import Project from './components/Page/Project';
import About from './components/Page/About';
import Test from './components/Page/test'
const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100; // ตำแหน่ง x แบบสุ่ม
    const y = Math.random() * 100; // ตำแหน่ง y แบบสุ่ม
    const size = Math.random() * 2 + 1; // ขนาดของดวงดาว
    const duration = Math.random() * 2 + 1; // ระยะเวลาของอนิเมชัน
    stars.push(
      <div
        key={i}
        className="stars"
        style={{
          top: `${y}%`,
          left: `${x}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
        }}
      ></div>
    );
  }
  return stars;
};

function App() {
  return (
    <div className="app-container">
      <div className="bloom-background">
        {generateStars(200)} {/* สร้างดาว 200 ดวง */}
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:projectId"  element={<Test/>} />
        </Routes>
        <footer className="home-footer">
        <p>© 2025 Suphaset Motham. </p>
      </footer>
      </Router>
    </div>
  );
}

export default App;
