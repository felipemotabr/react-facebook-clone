import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const Card = styled.div`
  background: var(--secondary);
  border-radius: 10px;
  margin-right: 8px;
  padding: 15px;
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  opacity:1;
  transition: opacity 100ms linear;

    &:hover {
      opacity:0.8;
    transition: opacity 100ms linear;
    }

    @media (max-width: 500px) {
      height: 180px;
    } 

    &:first-child {
      background-position: center top;
      background-size: 120%;
      align-items: center;
      align-content: center;
      position: relative;


      button {
        background: var(--primary-button-background);
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: var( --always-white);
        position: absolute;
        bottom:  40px;
        cursor: pointer;
      }
    }

    &:last-child {
      margin-right: 0px;

      @media (max-width: 500px) {
        display: none;
    }
  }

`;

export const Avatar = styled.div`
  width: 34px;
  height: 34px;
  background: var(--primary-button-background);
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid var(--primary-button-background);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  color: var(--always-white);
  font-weight: 600;
  max-width: 100%;
  text-align: left;
  font-size: 15px;

  span {
    display: block;
  }
`;

export const IconPlus = styled(Plus)`

`;
