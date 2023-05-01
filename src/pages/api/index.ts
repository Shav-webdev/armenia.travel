// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export const getNews = async () => {
  try {
    const response = await fetch('https://api.publicapis.org/entries');
    const json = await response.json();
    return { props: { ...json } };
  } catch (e) {
    console.log(e);
  }
};
