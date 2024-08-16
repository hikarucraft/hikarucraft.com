import { contents } from '@/data/headerContents';
import Link from 'next/link';
import styles from './NavbarDesktop.module.scss';

export const NavbarDesktop = () => {
  return (
    <ul className={styles.links}>
      {contents.map((content) => {
        const { Icon, title, href } = content;
        return (
          <li>
            <Link href={href} className={styles.linkItem}>
              <Icon />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
