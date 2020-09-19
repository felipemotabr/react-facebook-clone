import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  width: 344px;
  padding: 70px 8px 8px 8px;
  position: sticky;
  top: 0;
  left: 0;
`;

export const TopBar = styled.div`

  ul {
    a {
      text-decoration: none;
    }

    li {
    display: flex;
    align-items: center;
    color: var(--primary-text);
    flex-shrink: 0;
    cursor: pointer;
    padding: 8px;
    font-size: 16px;
    font-weight: 600;

    img {
      width: 36px;
      height: 36px;
      margin-right: 12px;
    }

      &:hover {
        border-radius: 8px;
        background: var(--overlayer);
      }

      &:first-child {
        img {
          border-radius: 50%;
        }
      }
    }
  }
`;

export const BottomBar = styled.div`
    color: var(--secondary-text);
    font-size: 13px;
    padding: 10px;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;

      li {
        margin-right: 5px;
        justify-content: center;

        &::after {
          content: '·';
          padding-left: 5px;
        }
        &:last-child:after {
          display: none;
        }
      }

      a {
      text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
`;
