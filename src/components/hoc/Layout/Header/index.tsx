import Styled from './styled';
import { useWindowScroll } from '@/hooks/useWindowScroll';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import logo from '@/assets/images/logo.svg';
import { pingMedium } from '@/assets/fonts/fonts';
import { HEADER_ICONS_NAV, HEADER_NAV } from '@/helpers/constants';
import { ArrowDown } from '@/assets/icons';

const Header = () => {
  const headerVisibility = useWindowScroll();

  return (
    <Styled.Header className={`header ${headerVisibility}`}>
      <div className="container">
        <div className={'logo'}>
          <Link href="/home">
            <Image src={logo} alt={'logo'} />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {HEADER_NAV.map((navItem) => {
              return (
                <li
                  className={`nav-list-item ${pingMedium.className} `}
                  key={navItem.id}
                >
                  <Link href={navItem.title === 'News' ? navItem.url : '/home'}>
                    {navItem.title}
                  </Link>
                  {navItem?.subMenus ? (
                    <span className={'nav-list-item-arrow-wrapper'}>
                      <ArrowDown />
                    </span>
                  ) : (
                    ''
                  )}
                </li>
              );
            })}
          </ul>
          <Button classname={pingMedium.className}>Events</Button>
          <ul className="icon-list">
            {HEADER_ICONS_NAV.map((navItem) => {
              return (
                <li className={'icon-list-item'} key={navItem.id}>
                  {navItem.icon}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Styled.Header>
  );
};

export default Header;
