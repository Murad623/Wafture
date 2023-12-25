import React, { useEffect } from 'react'
import "./AboutUs.css"
import InstagramLogo from "../images/instagram_logo.png"
import GmailLogo from "../images/gmail_logo.png"
import GithubLogo from "../images/github_logo.png"
import LinkedinLogo from "../images/linkedin_logo.png"
import GoTop from "../images/goTop.png"
const AboutUs = () =>{
  return (
    <div className='AboutUs'>
      <main className='contetn2'>
        <div className='AboutWafture'>
          <div className="text" id='top'>
            <h1>Welcome to Wafture Studio!</h1>
            <p>At Wafture Studio, we are passionate about bringing the charm of pixel art and 2D games to the gaming community. Our platform is a haven for gamers who appreciate the nostalgia and artistic beauty that these genres offer.</p>
          </div>
          <div className="text">
            <h2>Our Vision:</h2>
            <p>At the core of our vision is a commitment to celebrating the unique creativity found in pixel art and 2D game design. We believe that these timeless styles have a special place in the hearts of gamers, offering a distinct visual and immersive experience that transcends the boundaries of traditional gaming.</p>
          </div>
          <div className="text">
            <h2>What Sets Us Apart:</h2>
            <ul>
              <li>Pixel Perfection: Immerse yourself in the intricate details and craftsmanship of pixel art. Our collection boasts a diverse array of games that showcase the beauty of this distinct visual style.</li>
              <li>2D Excellence: From side-scrolling adventures to top-down masterpieces, our curated selection of 2D games represents the pinnacle of design and gameplay. Explore worlds that come to life through the magic of two-dimensional graphics.</li>
            </ul>
          </div>
          <div className="text">
            <h2>Why Wafture Studio?</h2>
            <ul>
              <li>Curated Selection: Every game featured on our platform is handpicked for its quality, creativity, and dedication to the art of pixel and 2D game design.</li>
              <li>Community Hub: Join a community of like-minded gamers who share your appreciation for pixel art and 2D games. Connect, discuss, and discover new gems within our vibrant gaming community.</li>
            </ul>
          </div>
          <div className="text">
            <h2>About Our Team:</h2>
            <p>Behind Wafture Studio is a team of dedicated individuals who are not just gamers but also enthusiasts of pixel art and 2D game development. We are committed to providing a platform that showcases the best of these genres, fostering a space where developers and players alike can thrive.</p>
            <p>Indulge in the world of pixel art and 2D gaming at Wafture Studio. Your next gaming adventure awaits!</p>
          </div>
        </div>
      </main>
      <footer className='contactUs'>
        <div className='linktoSosial'>
          <a className='link2' href="https://www.instagram.com/murad__m__23/" target="_blank">
            <div className='logoDiv'>
              <img className='logo' src={InstagramLogo} alt="" />
            </div>
            <h3>Instagram</h3>
          </a>
          <a className='link2' href="mailto:muradmehdiyev79@gmail.com" target="_blank">
            <div className='logoDiv'>
              <img className='logo' src={GmailLogo} alt="" />
            </div>
            <h3>Mail</h3>
          </a>
          <a className='link2' href="https://github.com/Murad623" target="_blank">
            <div className='logoDiv'>
              <img className='logo' src={GithubLogo} alt="" />
            </div>
            <h3>GitHub</h3>
          </a>
          <a className='link2' href="https://www.linkedin.com/in/murad-mehdiyev-760178208/" target="_blank">
            <div className='logoDiv'>
              <img className='logo' src={LinkedinLogo} alt="" />
            </div>
            <h3>Linkedin</h3>
          </a>
        </div>
        <div className='toTheSurface'>
          <a className='link2' href="#top" >
            <div className='logoDiv'>
              <img  className='logo' src={GoTop} alt="" />
            </div>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs