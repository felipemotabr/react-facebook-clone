import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
`;

export const Avatar = styled.div`
  margin-right: 8px; 
  img {
    width: 32px;
    height: 32px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Content = styled.div`
  color: var(--primary-text);

  > div {
      background: var(--third);
      padding: 8px 12px;
      border-radius: 18px;

      > strong {
        font-size: 13px;
      }
      > p {
        font-size: 15px;
  }
  }

  > span {
    padding-left: 12px;

    > a {
        color: var(--secondary-text);
        font-size: 12px;
        font-weight: bold;
        display: inline-block;

        &:last-child {
          font-weight: normal;
        }
    }
  }


`;
