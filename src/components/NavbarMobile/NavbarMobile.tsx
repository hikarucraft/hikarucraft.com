'use client';
import styles from './NavbarMobile.module.scss';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { contents } from '@/data/headerContents';
import { useClickAway } from 'react-use';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';

export const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  return (
    <div ref={ref}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.motionDiv}
          >
            <ul className={styles.linkItems}>
              {contents.map((content, idx) => {
                const { Icon, title, href } = content;
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={title}
                    className={styles.motionLinkItem}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen((prev) => !prev)}
                      className={styles.linkItem}
                    >
                      <span>{title}</span>
                      <Icon className={styles.listIcon} />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
