import Image from 'next/image';
import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/profile-pic.jpg"
          alt="Profile"
          width="300"
          height="300"
        />
      </div>
      <h1>Hi, I'm Paddy</h1>
      <p>
        I'm a freelance web developer - who's likes to use ReactJs and
        progressive evolving into using NextJs and other libraries that can
        speed up development
      </p>
    </section>
  );
}
export default Hero;
