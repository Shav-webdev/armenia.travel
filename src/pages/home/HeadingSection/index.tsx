import Styled from '@/pages/home/styled';
import Image from 'next/image';
import headerBg from '@/assets/images/header_bg.png';
import { helvetica, pingRegular, soundScapeBold } from '@/assets/fonts/fonts';
import { ArrowSnack } from '@/assets/icons';
import Section from '@/components/hoc/Layout/Section';
import React from 'react';
import { useWindowScroll } from '@/hooks/useWindowScroll';

const HeadingSection = () => {
  const actionOnScroll = useWindowScroll();
  return (
    <Section>
      <Styled.MainImgSection>
        <div className={`section-wrapper ${actionOnScroll}`}>
          <div className={`img-wrapper ${actionOnScroll}`}>
            <Image src={headerBg} alt={'Travel Armenia'} />
          </div>
          <div className={'img-content-part'}>
            <div className={'heading-wrapper'}>
              <h1 className={`heading ${soundScapeBold.className}`}>
                Armenia - The Hidden Way
              </h1>
            </div>
            <div className={'description-wrapper'}>
              <div className={`description ${helvetica.className}`}>
                The current Republic of Armenia makes up only a small part of
                what the historical lands used to hold. Armenians are native to
                the land of the Armenian Highlands which covers over 400,000
                square km.
              </div>
              <div className="snack-arrow-container">
                <div className={`scroll-arrow-txt ${pingRegular.className}`}>
                  Scroll
                </div>
                <div className={'scroll-arrow'}>
                  <ArrowSnack />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Styled.MainImgSection>
    </Section>
  );
};

export default HeadingSection;
