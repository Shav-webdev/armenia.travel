import styled from 'styled-components';
import {colors} from '@/assets/styles/colors';
import {device} from '@/assets/styles/media';

const MainImgSection = styled.div`
  position: relative;
  z-index: 1;
  height: 850px;
  @media ${device.mobileMMin} and ${device.mobileLMax} {
    height: fit-content;
  }

  .section-wrapper {
    height: 100%;
    @media ${device.mobileMMin} and ${device.mobileLMax} {
      .img-content-part {
        .heading-wrapper {
          margin-bottom: 1.4rem;

          .heading {
            letter-spacing: 0;
            color: ${colors.primaryColor};
            opacity: 1;
            font-weight: bold;
            font-size: 2rem;
            line-height: 1.1;
          }
        }
      }
    }

    .img-wrapper {
      overflow: hidden;
      border-bottom-right-radius: 152px;
      border-bottom-left-radius: 152px;
      transform: translateY(0);
      transition: all 0.8s;
      object-fit: cover;
      object-position: center center;
      @media ${device.mobileMMin} and ${device.mobileLMax} {
        border-bottom-right-radius: 64px;
        border-bottom-left-radius: 64px;
        height: 650px;
        position: unset;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
      &.hide {
        overflow: visible;
        min-height: 100vh;
        transform: translateY(200px);
        transition: all 0.8s;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        @media ${device.mobileMMin} and ${device.mobileLMax} {
          transform: translateY(350px);
        }
      }
    }
    .img-content-part {
      top: calc(100vh - 205px);
      left: 0;
      display: flex;
      justify-content: space-between;
      padding: 5rem;
      transform: translateY(0px);
      width: 100%;
      @media ${device.mobileMMin} and ${device.mobileLMax} {
        position: unset;
        flex-direction: column;
        padding: 2rem 1.5rem;
      }
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
        transform: translateY(-650px);
        @media ${device.mobileMMin} and ${device.mobileLMax} {
          position: unset;
          flex-direction: column;
          padding: 2rem 1.5rem;
          transform: translateY(-120px);
        }
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
  
  @media ${device.mobileMMin} and ${device.mobileLMax} {
    background-color: ${colors.blue100};
    .sub-heading-wrapper {
      position: relative;

      .sub-heading {
        font-size: 2rem;
      }
    }
  }
  .sub-heading-wrapper {
    background-color: ${colors.blue100};
    height: 100%;
    position: absolute;
    width: 100%;
    transform: translateY(190px);
    @media ${device.mobileMMin} and ${device.mobileLMax} {
      position: relative;
      padding: 6rem 1.5rem;
      transform: unset;
    }
    &.show {
      transform: translateY(190px);
      @media ${device.mobileMMin} and ${device.mobileLMax} {
        transform: translateY(0px);
      }
    }
    &.hide {
      transform: translateY(130px);
      @media ${device.mobileMMin} and ${device.mobileLMax} {
        transform: translateY(0px);
      }
    }
  }

  .sub-heading {
    max-width: 1350px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 4rem;
    line-height: 1.3;
    letter-spacing: 0;
    color: #eaeaea;
    margin: 180px auto 0;
    @media ${device.mobileMMin} and ${device.mobileLMax} {
      margin: 0 auto;
    }
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

  .slider {
    background-color: ${colors.blue100};
    top: 1400px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    transition: all 3s;
    margin-bottom: 200px;
    @media ${device.mobileMMin} and ${device.mobileLMax} {
      position: unset;
      height: fit-content;
      margin-bottom: 3rem;
    }

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
  margin-top: 130rem;
  margin-bottom: 4rem;
  @media ${device.mobileMMin} and ${device.mobileLMax} {
    margin-top: 6rem;
    .tabs-wrapper {
      .tab-item {
        &.mobile-tab {
          font-size: .8rem;
          padding: 0.5rem 1.5rem;
          line-height: 1;
          margin: 0;
        }
      }
    }
  }

  .tabs-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    background-color: ${colors.white};
    position: relative;
    padding: 0 0.5rem;
    border-radius: 30px;
    height: 70px;
    @media ${device.mobileMMin} and ${device.mobileLMax} {
      overflow-x: auto;
      overflow-y: hidden;
      height: 45px;
    }

    .tab-item {
      cursor: pointer;
      padding: 0.75rem 2.2rem;
      margin: 0.5rem 0;
      border-radius: 30px;
      background-color: transparent;

      .tab-title {
        white-space: nowrap;
        padding-left: 5px;
        text-align: center;
        font-size: 1.05rem;
        font-weight: bold;
        line-height: 1.75;
        letter-spacing: 0;
        color: ${colors.primaryColor};
        text-transform: capitalize;
        transition: all 0.5s cubic-bezier(0.57, 0.4, 0.39, 0.57);
      }

      &.active {
        color: ${colors.white};
        z-index: 1;

        .tab-title {
          color: ${colors.white};
        }

        & ~ .tab {
          background-color: ${colors.blue800};
          height: 54px;
          @media ${device.mobileMMin} and ${device.mobileLMax} {
            height: 45px;
          }
        }
      }
    }

    .tab {
      transition: all 0.5s cubic-bezier(0.57, 0.4, 0.39, 0.57);
      background-color: ${colors.blue800};
      position: absolute;
      border-radius: 30px;
    }
  }
`;

const FilteredItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;

  .card {
    width: 30%;
    max-width: 500px;
    margin: 0 1rem 2.5rem;
    background-color: ${colors.white};
    border-radius: 16px;
    @media ${device.mobileMMin} and ${device.mobileLMax} {
      width: 80%;
      max-width: 400px;
    }

    &.bottomToTop {
      animation: bottomToTopAnimation 1s linear;
    }

    .card-link {
      .card-header {
        border-radius: 8px;
        overflow: hidden;
        height: 80%;

        .img-wrapper {
          border-radius: 16px 16px 0 0;
          height: 100%;

          img {
            transition: all 0.3s;
            height: 100%;
            width: 100%;
            inset: 0;
            object-fit: cover;
            color: transparent;
          }
        }
      }

      &:hover {
        .card-header {
          .img-wrapper {
            img {
              transform: scale(1.3);
            }
          }
        }
      }

      .card-body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;

        h3 {
          font-size: 1.5rem;
          line-height: 2.2;
          font-weight: bold;
          text-align: center;
          color: ${colors.primaryColor};
          @media ${device.mobileMMin} and ${device.mobileLMax} {
            font-size: 1.2rem;
            line-height: 2;
          }
        }
      }
    }
  }

  @keyframes bottomToTopAnimation {
    0% {
      transform: translateY(200px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const Styled = {
    MainImgSection,
    SliderSection,
    FilterSection,
    FilteredItems,
};

export default Styled;
