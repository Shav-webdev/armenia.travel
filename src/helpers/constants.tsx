import { IconNavListType, NavListType } from '@/helpers/global.types';

export const HEADER_NAV: NavListType = [
  {
    id: 1,
    url: '/travel_info',
    title: 'Travel Info',
    subMenus: [],
  },
  {
    id: 2,
    url: '/about_armenia',
    title: 'About Armenia',
    subMenus: [],
  },
  {
    id: 3,
    url: '/what_to_see_and_do',
    title: 'What to see and do',
    subMenus: [],
  },
  {
    id: 4,
    url: '/news',
    title: 'News',
    subMenus: null,
  },
  {
    id: 5,
    url: '/media',
    title: 'Media library',
    subMenus: null,
  },
];

export const HEADER_ICONS_NAV: IconNavListType = [
  {
    id: 1,
    url: '/map',
    icon: <i className="giz-map" />,
  },
  {
    id: 2,
    url: '/search',
    icon: <i className="giz-search" />,
  },
  {
    id: 3,
    url: '/bookmark',
    icon: <i className="giz-bookmarks" />,
  },
];
