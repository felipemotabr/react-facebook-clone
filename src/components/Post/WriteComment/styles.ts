import styled, { css } from 'styled-components';
import { Smile } from '@styled-icons/boxicons-regular';
import { Camera } from '@styled-icons/bootstrap';
import { Gif } from '@styled-icons/material';


const iconCSS = css`
  width: 20px;
  height: 20px;
  fill: var(--secondary-text);
  margin-left: 10px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: center;
  align-content: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 2px;

  .Tooltip {
    background-color: rgba(255, 255, 255, 0.9);
    color: var(--primary);
    margin-top: -4px!important;
    padding: 4px 8px!important;

    &.place-top,
    &:after {
    border: none!important;
    }
  }
`;

export const Avatar = styled.div`
  margin-right: 8px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Content = styled.div`
  color: var(--primary-text);
  font-weight: 400;
  background: var(--third);
  border-radius: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
 
  input {
    width: 100%;
    outline: 0;
    font-size: 14px;

    &::placeholder {
      color: var(--secondary-text);
    }
  }
`;

export const IconSmile = styled(Smile)`
  ${iconCSS}
`;

export const IconCamera = styled(Camera)`
  ${iconCSS}
`;

export const IconGif = styled(Gif)`
  ${iconCSS}
`;