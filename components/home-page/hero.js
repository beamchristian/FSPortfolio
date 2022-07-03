import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/christian.jpg"
          alt="An image showing Christian"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Christian</h1>
      <p>I'm a Web Developer - Specializing in the MERN Stack </p>
    </section>
  );
}

export default Hero;
