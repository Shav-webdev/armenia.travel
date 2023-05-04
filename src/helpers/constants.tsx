import React from 'react';
import {IconNavListType, IFilterType, ITab, NavListType} from '@/helpers/global.types';
import arts from '@/assets/images/arts.jpg'
import church from '@/assets/images/church.png'
import museum from '@/assets/images/museum.png'
import heritage from '@/assets/images/unesco-heritage.png'
import architecture from '@/assets/images/architecture.png'
import cuisine from '@/assets/images/cuisine.png'
import wine from '@/assets/images/wine.png'
import cafe from '@/assets/images/cafe.png'
import hiking from '@/assets/images/hiking.png'
import extreme from '@/assets/images/extreme.png'
import winter from '@/assets/images/winter.png'
import nightlife from '@/assets/images/nightlife.png'
import health from '@/assets/images/health.png'


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

export const TABS: ITab[] = [
  {
    tabName: 'culture',
    icon: <i className={'giz-museum'}></i>,
    title: 'Cultural Heritage',
  },
  {
    tabName: 'nature',
    icon: <i className={'giz-adventure-2'}></i>,
    title: 'Nature And Adventures',
  },
  {
    tabName: 'culinary',
    icon: <i className={'giz-gastro-2'}></i>,
    title: 'Culinary Scene',
  },
  {
    tabName: 'leisure',
    icon: <i className={'giz-lake'}></i>,
    title: 'Leisure',
  },
];


export const FILTER_TYPES:IFilterType[] = [
  {
    category: 'culture',
    title: 'Churches / Monasteries',
    img: church,
    url: '/news'
  },
  {
    category: 'culture',
    title: 'Architecture',
    img: architecture,
    url: '/news'
  },
  {
    category: 'culture',
    title: 'Museums',
    img: museum,
    url: '/news'
  },
  {
    category: 'culture',
    title: 'Unesco Heritage',
    img: heritage,
    url: '/news'
  },
  {
    category: 'culture',
    title: 'Arts',
    img: arts,
    url: '/news'
  },
  {
    category: 'culinary',
    title: 'Armenian cuisine',
    img: cuisine,
    url: '/news'
  },
  {
    category: 'culinary',
    title: 'Armenian wine',
    img: wine,
    url: '/news'
  },
  {
    category: 'culinary',
    title: 'Cafe & Bar',
    img: cafe,
    url: '/news'
  },
  {
    category: 'nature',
    title: 'Hiking',
    img: hiking,
    url: '/news'
  },
  {
    category: 'nature',
    title: 'Extreme sports',
    img: extreme,
    url: '/news'
  },
  {
    category: 'nature',
    title: 'Winter activities',
    img: winter,
    url: '/news'
  },
  {
    category: 'leisure',
    title: 'Nightlife',
    img: nightlife,
    url: '/news'
  },
  {
    category: 'leisure',
    title: 'Health & Wellness',
    img: health,
    url: '/news'
  },
]
