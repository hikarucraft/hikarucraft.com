import { BiHomeAlt2 } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { PiChatCircleBold } from 'react-icons/pi';
import { IoPricetagsOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';

export type contentType = {
  title: string;
  href: string;
  Icon: IconType;
};

export const contents = [
  {
    title: '制作物',
    href: '/works',
    Icon: BiHomeAlt2,
  },
  {
    title: 'リンク',
    href: '/links',
    Icon: FiSearch,
  },
  {
    title: 'お仕事依頼',
    href: '/jobs',
    Icon: IoPricetagsOutline,
  },
  {
    title: 'ソースコード',
    href: '/source',
    Icon: PiChatCircleBold,
  },
];
