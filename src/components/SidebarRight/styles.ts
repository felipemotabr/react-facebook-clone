import styled from 'styled-components';
import Sprint from './../../Images/spring-3.png'

export const Container = styled.div`
    width: 360px;
    padding-top: 75px;
    position: sticky;
    top: 0;
    left: 0;
    max-height: 100vh;
    display: flex;
    flex-direction: column;

    @media(max-width: 900px) {
      display: none;
    }
`;

export const Title = styled.div`
  color: var(--secondary-text);
  font-weight: 600;
  font-size: 17px;
`;

export const Card = styled.div`
  ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      width: 100%;
      padding-top:10px;
      padding-right: 10px;
  
      li {
        color: var(--primary-text);
        font-weight: 600;
        width: 100%;
        cursor: pointer;
        padding: 6px 7px;
        border-radius: 5px;

        &:hover {
            background: var(--overlayer);
        }
      }
    }

  &.birthdays {
    ul {
      li {
        font-weight:500;
        display: flex;
        flex-direction: row;
        align-items: center;
          align-content: center;

        .icon {
          background-image: url(${Sprint});

          background-size: 100%;
          width: 46px;
          height: 33px;
          margin-right: 16px;
        }
      }
    }
  }

  &.contacts {
    ul {

      li {
        line-height: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        



      }
    }
  }
`;

export const Avatar = styled.div`
  margin-right: 10px;
  position: relative;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const Online = styled.div`
  width: 10px;
  height: 10px;
  background: var(--positive);
  border: 2px solid var(--primary);
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 0;
`;
