import styled from 'styled-components';
import { colors } from '@/assets/styles/colors';

const MainImgSection = styled.div`
  position: relative;
  z-index: 1;
  height: 850px;
  .section-wrapper {
    height: 100%;
    .img-wrapper {
      position: absolute;
      overflow: hidden;
      height: calc(100vh - 205px);
      border-bottom-right-radius: 152px;
      border-bottom-left-radius: 152px;
      transform: translateY(0);
      transition: all 0.8s;
      object-fit: cover;
      object-position: center center;
      &.hide {
        overflow: visible;
        min-height: 100vh;
        transform: translateY(115px);
        transition: all 0.8s;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
    .img-content-part {
      position: absolute;
      top: calc(100vh - 205px);
      left: 0;
      display: flex;
      justify-content: space-between;
      padding: 5rem;
      transform: translateY(0px);
      width: 100%;
      .heading-wrapper {
        .heading {
          letter-spacing: 0;
          color: ${colors.primaryColor};
          opacity: 1;
          font-weight: bold;
          font-size: 3rem;
          line-height: 1.1;
        }
      }
      .description-wrapper {
        max-width: 415px;
        display: flex;
        justify-content: space-between;
        .description {
          font-size: 1rem;
          line-height: 1.3;
          font-weight: normal;
          letter-spacing: 0;
          color: ${colors.primaryColor};
          opacity: 1;
        }
        .snack-arrow-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .scroll-arrow-txt {
            font-size: 1rem;
            line-height: 2;
            letter-spacing: 0;
            color: ${colors.green};
            text-transform: uppercase;
            opacity: 1;
            transform: rotate(90deg);
            margin-bottom: 1.5rem;
          }
          .scroll-arrow {
            svg {
              animation: elasticus 1.5s infinite;
            }
          }
        }
      }
    }
    &.show {
    }
    &.hide {
      .img-content-part {
        display: flex;
        justify-content: space-between;
        padding: 5rem;
        transform: translateY(-150px);

        .heading-wrapper {
          .heading {
            letter-spacing: 0;
            color: ${colors.white};
            opacity: 1;
            font-weight: bold;
            font-size: 3rem;
          }
        }
        .description-wrapper {
          max-width: 380px;
          .description {
            font-size: 1rem;
            line-height: 1.3;
            font-weight: normal;
            letter-spacing: 0;
            color: ${colors.white};
            opacity: 1;
          }
          .snack-arrow-container {
            .scroll-arrow-txt {
              color: ${colors.white};
            }
            .scroll-arrow {
              svg {
                path {
                  fill: ${colors.white};
                }
              }
            }
          }
        }
      }
    }
  }

  @keyframes elasticus {
    0% {
      transform-origin: 0 0;
      transform: scale(1, 0);
    }
    50% {
      transform-origin: 0 0;
      transform: scale(1, 1);
    }
    50.1% {
      transform-origin: 0 100%;
      transform: scale(1, 1);
    }
    100% {
      transform-origin: 0 100%;
      transform: scale(1, 0);
    }
  }
`;

const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  .sub-heading-wrapper {
    background-color: ${colors.blue100};
    height: 100%;
    position: absolute;
    width: 100%;
    transform: translateY(130px);

    .sub-heading {
      max-width: 1350px;
      width: 100%;
      text-align: center;
      font-weight: bold;
      font-size: 4rem;
      line-height: 1.3;
      letter-spacing: 0;
      color: #eaeaea;
      margin: 300px auto 0;
    }
    &.show {
      transform: translateY(130px);
      .sub-heading {
        margin: 100px auto 0;
      }
    }
    &.hide {
      transform: translateY(-113px);
      transition: all 0.8s;
    }
  }
  .slider {
    background-color: ${colors.blue100};
    top: 1350px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    transition: all 3s;
    margin-bottom: 200px;
    & > div {
      .img-wrapper {
        margin: 1rem;
        border-radius: 16px;
        overflow: hidden;
        img {
          object-fit: cover;
          object-position: center center;
        }
      }
    }
    & > div:first-child,
    & > div:last-child {
      width: 15vw;
      height: 100%;
      display: flex;
      align-items: center;
    }
    & > div:first-child {
      .img-wrapper {
        margin-left: 0;
      }
    }
    & > div:last-child {
      .img-wrapper {
        margin-right: 0;
      }
    }
    & > div:nth-child(3) {
      width: 30vw;
      transition: 1s;
      //.img-wrapper {
      //  img {
      //    height: 100vh;
      //  }
      //}
    }
    & > div:nth-child(2),
    & > div:nth-child(4) {
      width: 20vw;
      display: flex;
      flex-direction: column;
      max-height: 500px;
    }
    &.hide {
      background-color: ${colors.blue100};
      top: 1430px;
      transform: translateY(0);
      & > div:first-child,
      & > div:last-child {
        width: 15vw;
      }
      & > div:nth-child(3) {
        width: 30vw;
      }
      & > div:nth-child(2),
      & > div:nth-child(4) {
        width: 20vw;
      }
    }
    &.show {
      background-color: ${colors.blue100};
      top: 1350px;
      & > div:first-child,
      & > div:last-child {
        width: 0;
      }
      & > div:nth-child(3) {
        width: 80vw;
      }
      & > div:nth-child(2),
      & > div:nth-child(4) {
        width: 0;
      }
    }
  }
`;

const FilterSection = styled.div`
  margin-top: 105rem;
  .tabs-wrapper {
    display: flex;
    width: 50vw;
    margin: 0 auto;
    justify-content: center;
    position: relative;
    .tab-item {
      margin: 0 1rem;
      .tab-title {
        padding-left: 5px;
      }
    }
  }
`;

const Styled = {
  MainImgSection,
  SliderSection,
  FilterSection,
};

export default Styled;
