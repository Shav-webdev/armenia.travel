import Styled from '@/pages/home/styled';
import { soundScapeBold } from '@/assets/fonts/fonts';
import Image from 'next/image';
import leftSlide from '@/assets/images/left-slide.jpg';
import leftTop from '@/assets/images/left-top.jpg';
import leftBottom from '@/assets/images/left-bottom.jpg';
import mainSlide from '@/assets/images/slider-main.jpg';
import rightTop from '@/assets/images/right-top.jpg';
import rightBottom from '@/assets/images/right-bottom.jpg';
import rightSlide from '@/assets/images/right-slide.jpg';
import Section from '@/components/hoc/Layout/Section';
import React, { useRef } from 'react';
import { useWindowScroll } from '@/hooks/useWindowScroll';
import { useZoomImage } from '@/hooks/useZoomImage';

const SliderSection = () => {
  const imgRef: React.MutableRefObject<HTMLImageElement | null> =
    useRef<HTMLImageElement | null>(null);
  const actionOnScroll = useWindowScroll();
  const { zoomImage, position } = useZoomImage(imgRef);

  return (
    <Section>
      <Styled.SliderSection>
        <div className={`sub-heading-wrapper ${actionOnScroll}`}>
          <h2 className={`sub-heading ${soundScapeBold.className}`}>
            Armenia, country of Transcaucasia, lying just south of the great
            mountain range of the Caucasus
          </h2>
        </div>
        <div className={'slider-wrapper'}>
          <div className={`slider ${position > 0 ? '' : zoomImage}`}>
            <div className={'left-slide'}>
              <div className="img-wrapper">
                <Image src={leftSlide} alt={'Travel Armenia'} />
              </div>
            </div>
            <div className={'left-slide-double'}>
              <div className="img-wrapper">
                <Image src={leftTop} alt={'Travel Armenia'} />
              </div>
              <div className="img-wrapper">
                <Image src={leftBottom} alt={'Travel Armenia'} />
              </div>
            </div>
            <div className={'main-slide-center'}>
              <div className="img-wrapper">
                <Image ref={imgRef} src={mainSlide} alt={'Travel Armenia'} />
              </div>
            </div>
            <div className={'right-slide-double'}>
              <div className="img-wrapper">
                <Image src={rightTop} alt={'Travel Armenia'} />
              </div>
              <div className="img-wrapper">
                <Image src={rightBottom} alt={'Travel Armenia'} />
              </div>
            </div>
            <div className={'right-slide'}>
              <div className="img-wrapper">
                <Image src={rightSlide} alt={'Travel Armenia'} />
              </div>
            </div>
          </div>
        </div>
      </Styled.SliderSection>
    </Section>
  );
};

export default SliderSection;
