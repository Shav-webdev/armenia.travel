import styled from 'styled-components';
import { colors } from '@/assets/styles/colors';

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 7rem;
  height: calc(100vh - 150px);
  overflow-y: auto;
  .container {
    margin: 0 50px;
    width: 100%;
    .heading-wrapper {
      margin-bottom: 2rem;
      h1 {
        font-size: 3rem;
        line-height: 1.2;
        text-align: center;
      }
    }
    .news-wrapper {
      display: flex;
      width: 100%;
      .news-category-list-wrapper {
        padding-right: 10px;
        width: 25%;
        .category-title {
          padding: 1rem 2rem;
          border: 1px solid #ccc;
        }
        .news-category-list {
          height: calc(100vh - 300px);
          overflow-y: auto;
          .news-category-list-item {
            padding: 1rem 2rem;
            border-bottom: 1px solid #ccc;
            cursor: pointer;
            &:first-child {
              border-top: 1px solid #ccc;
            }
            &.active {
              background-color: ${colors.gray700};
            }
            &:hover {
              background-color: ${colors.gray700};
            }
          }
        }
      }
      .news-list {
        width: 75%;
        display: flex;
        flex-wrap: wrap;
        height: calc(100vh - 250px);
        overflow-y: auto;
        justify-content: center;
        margin-left: 2rem;
        .news-item {
          border: 1px solid #000;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 10vh;
          margin: 0.5rem;
          &:hover {
            transform: scale(1.01);
          }
          &.fade-item {
            transition: 0.3s all ease-in-out;
            opacity: 0;
          }

          &.fadein {
            animation: fadeIn 0.9s 1;
            animation-fill-mode: forwards;
          }
        }
      }
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Styled = {
  MainSection,
};

export default Styled;
