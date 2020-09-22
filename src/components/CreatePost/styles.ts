import styled from 'styled-components';
import Spring from './../../Images/spring.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px 16px 0 16px;
  margin-top: 60px;
  flex-wrap: wrap;

  .divisor {
      border-top:  1px solid var(--outline);
      width: 100%;
    }

  div {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom: 6px;

    > span {
      width: 100%;
      text-align: center;
      border-radius: 8px;
      font-size: 15px;
      padding: 8px;
      color: var(--secondary-text);
      font-weight: 600;
      
      cursor: pointer;
      display: flat;
      text-align: center;
      justify-content: center;
      align-content: center;
      align-items: center;

      .icon {
        height: 24px;
        width: 24px;
        margin-right: 5px;
        background-image: url(${Spring});
        margin-bottom: -2px;
      }
      .live {
        background-position: 0 -49px;
      }
      .photo {
        background-position: 0 -125px;
      }
      .smile {
        background-position: 0 -75px;
      }
      &:hover {
        background: var(--hover-overlayer);
      }
    }
    &:last-child {
      justify-content: space-between;
    }
    .layout {
      margin-top: 10px;
    }

  }
`;

export const Avatar = styled.div`
    margin-right: 8px;
    
    img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Content = styled.div`
  border-radius: 18px;
  color: var(--primary-text);
  font-size: 16px;
  background: var(--third);
  width: 100%;
  height: 38px;

  input {
    outline: 0;
    font-size: 18px;
    width: 100%;
    padding: 0px 17px;

    &::placeholder {
      color: var(--secondary-text);
    }
  }
`;
