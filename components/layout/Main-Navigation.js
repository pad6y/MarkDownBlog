import Logo from './Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './Main-Navigation.module.css';

function MainNavigation() {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <Logo />
      <nav>
        <ul>
          <li className={router.pathname == '/posts' ? classes.active : ''}>
            <Link href="/posts">Posts</Link>
          </li>
          <li className={router.pathname == '/contact' ? classes.active : ''}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
