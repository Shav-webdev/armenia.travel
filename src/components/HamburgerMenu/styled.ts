import styled from "styled-components";
import {device} from "@/assets/styles/media";
import {colors} from "@/assets/styles/colors";

const Menu = styled.div`
  .menu-icon {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;

    .menu-icon__checkbox {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }

    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
    }

    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${colors.white};
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }

      &:last-of-type {
        bottom: 0;
      }
    }

    &.active,
    .menu-icon__checkbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 5px;
        }

        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
        }
      }
    }

    &.active:hover span:first-of-type,
    &.active:hover span:last-of-type,
    &:hover .menu-icon__checkbox:checked + div span:first-of-type,
    &:hover .menu-icon__checkbox:checked + div span:last-of-type {
      width: 22px;
    }
  }
  @media ${device.laptopMin} {
    display: none;
  }
`

const Styled = {
    Menu
}

export default Styled;
