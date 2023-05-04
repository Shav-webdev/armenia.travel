import styled from 'styled-components';
import { colors } from '@/assets/styles/colors';
import {device} from "@/assets/styles/media";

const Header = styled.header`
  background: ${(props: { isNewsPage: boolean }) =>
    props.isNewsPage ? colors.layoutGradient : 'initial'};
  position: fixed;
  top: 0;
  background-color: transparent;
  width: 100%;
  z-index: 999;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;
    @media ${device.mobileMMin} and ${device.mobileLMax} {
      padding: 1rem 2rem 0;
      .logo {
        height: 20px;
        max-width: 112px;
        width: 100%;
      }
    }
    .logo {
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        margin: 0 2rem;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
          background-color: ${colors.secondaryColor};
          border-color: ${colors.secondaryColor};
          color: ${colors.black};
        }
        @media ${device.mobileMMin} and ${device.mobileLMax} {
            display: none;
        }
      }
      .nav-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .nav-list-item {
          padding: 1rem 0;
          margin: 0 0.8rem;
          color: ${colors.white};
          font-size: 1rem;
          line-height: 1;
          transition: all 0.3s ease;
          .nav-list-item-arrow-wrapper {
            padding-left: 5px;
            svg {
              transition: transform 0.3s ease-in-out;
            }
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            cursor: pointer;
            color: ${colors.secondaryColor};
            .nav-list-item-arrow-wrapper {
              svg {
                transform: rotate(180deg);
                path {
                  fill: ${colors.secondaryColor};
                }
              }
            }
          }
        }
        @media ${device.mobileMMin} and ${device.mobileLMax} {
          display: none;
        }
      }
      .icon-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-list-item {
          margin: 0 0.5rem;
          color: ${colors.white};
          transition: 0.2s;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            cursor: pointer;
            color: ${colors.secondaryColor};
          }
        }
      }
    }
  }
  &.hide {
    top: -10rem;
    transition: top 0.4s ease-out;
  }
  &.show {
    top: 0;
    transition: top 0.4s ease-out;
    background-color: ${colors.white100};
    .container {
      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${colors.primaryColor};
        button {
          color: ${colors.primaryColor};
          border-color: ${colors.primaryColor};
          transition: 0.2s;
          &:hover {
            cursor: pointer;
            background-color: ${colors.secondaryColor};
            border-color: ${colors.secondaryColor};
            color: ${colors.black};
          }
        }
        .nav-list {
          .nav-list-item {
            color: ${colors.primaryColor};
            &:hover {
              cursor: pointer;
              color: ${colors.secondaryColor};
            }
          }
        }
        .icon-list {
          .icon-list-item {
            color: ${colors.primaryColor};
            &:hover {
              cursor: pointer;
              color: ${colors.secondaryColor};
            }
          }
        }
        @media ${device.mobileMMin} and ${device.mobileLMax} {
          .language-switcher {
            color: ${colors.secondaryColor}
          }
          .menu-icon {
            span {
              background-color: ${colors.secondaryColor}
              
            }
          }
        }
      }
    }
  }

`;

const Styled = {
  Header,
};

export default Styled;
