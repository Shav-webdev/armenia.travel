import React from 'react';
import {StaticImageData} from "next/image";

export type NavItemType = {
  id: number;
  url: string;
  title: string;
  subMenus: NavItemType[] | null;
};

export type IconNavItemType = {
  id: number;
  url: string;
  icon: React.ReactNode;
};

export type NavListType = NavItemType[];
export type IconNavListType = IconNavItemType[];

export type INewsItem = {
  API: string;
  Auth: string;
  Category: string;
  Cors: string;
  Description: string;
  HTTPS: true;
  Link: string;
};

export type INewsItemKey = keyof INewsItem;

export type ICategory = {
  [index: string]: INewsItem[];
};

export interface IObjectKeys {
  [key: string]: string | number;
}

export type ITabName = 'culture' | 'nature' | 'culinary' | 'leisure';

export interface ITab {
  tabName: ITabName;
  icon: React.ReactNode;
  title: string;
}

export type IFilterType = {
  category: ITabName;
  img: StaticImageData;
  title: string;
  url: string;
}


