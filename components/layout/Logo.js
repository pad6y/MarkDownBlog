import Link from 'next/link';
import classes from './Logo.module.css';

function Logo() {
  return (
    <Link href={'/'}>
      <a>
        <img
          src="/images/logo/logo-white.svg"
          alt="pad6y logo"
          className={classes.logo}
        />
      </a>
    </Link>
  );
}
export default Logo;
