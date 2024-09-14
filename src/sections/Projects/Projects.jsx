import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import unplash from '../../assets/unplash.png'
import Dice from '../../assets/Dice.png'
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={unplash}
          link="https://akashlens.netlify.app/"
          h3="Akash Lens"
          p="Photo Gallary"
        />
        <ProjectCard
          src={Dice}
          link="https://dicegameas.netlify.app/"
          h3="Dice Game"
          p="Play Dice Game"
        />
      </div>
    </section>
  );
}

export default Projects;
