import React from 'react';
import './Home.css';
import MangoFarm from '../assets/MangoFarm.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Video from "../assets/Mango.mp4";

export default function Home() {
  return (
    <div className="home-page">
      
      <main className="main-content">
        <div className='wholewrapbox'>
          <section className="hero-section">
            <div className="image-container">
              <img src={MangoFarm} alt="MangoFarm" /> {/* Image added here */}
            </div>
            <div className="text-container">
              <img width={"30%"} src="https://i.pinimg.com/736x/ec/9b/e9/ec9be9da32b0fa19b6f4f0acab4b5119.jpg"></img>
              <h2>Welcome to Mango Farm</h2>
              <p>Discover the finest mangoes straight from our farm to your table. Our mangoes are hand-picked and delivered fresh.</p>
            </div>
          </section>
          <section className="video-section">
            <h3>Our Farm Video</h3>
            <div className="video-container">
              <video autoPlay loop muted>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}
