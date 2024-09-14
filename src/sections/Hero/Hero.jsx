
import React from 'react'
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Akash Front_End Engineer.pdf';
import { useTheme } from '../../common/ThemeContext';
const Hero = () => {

    const {theme, toggleTheme}= useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;

    const githubIcon = theme === 'light' ? githubLight : githubDark;

    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;



  return( 
  <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile Picture of Akash'/>

        <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme} alt='Color mode icon'/>
    </div>
    <div className={styles.info}>
        <h1>Akash <br />Shinde</h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://twitter.com/" target='_blank'><img src={twitterIcon} alt='Twitter icon'/></a>
            <a href="https://github.com/Akash01997" target='_blank'><img src={githubIcon} alt='github icon'/></a>
            <a href="https://www.linkedin.com/in/akashshinde558/" target='_blank'><img src={linkedinIcon} alt='linked icon'/></a>
        </span>
        <p>With a passion for developing modern React web apps for commercial businesses.</p>
        <a href={CV} download>
            <button className='hover' >
                Resume
            </button>
        </a>

   </div>
  </section>
    
  )
}

export default Hero