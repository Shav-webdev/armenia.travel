import React, { useState } from 'react';
import StyledLang from './styled';
import { pingMedium } from '@/assets/fonts/fonts';

const LanguageSwitcher = () => {
  const [lang, setLang] = useState('en');
  const handleChangeLanguage = () => {
    setLang((prev) => (prev === 'hy' ? 'en' : 'hy'));
  };

  return (
    <StyledLang.Lang
      onClick={handleChangeLanguage}
      className={`fz12 fw700 language-switcher ${pingMedium.className}`}
    >
      {lang === 'hy' ? 'Eng' : 'Hy'}
    </StyledLang.Lang>
  );
};

export default LanguageSwitcher;
