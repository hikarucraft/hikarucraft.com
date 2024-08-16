import { NavbarDesktop } from '../NavbarDesktop/NavbarDesktop';
import { NavbarMobile } from '../NavbarMobile/NavbarMobile';
import styles from './Header.module.scss';
export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.headerNav}>
        <NavbarDesktop />
        <NavbarMobile />
      </nav>
    </div>
  );
};
