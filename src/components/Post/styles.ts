import styled, { css } from 'styled-components';
import { Public } from '@styled-icons/material-rounded';
import { Like } from '@styled-icons/boxicons-regular';
import { ShareForward } from '@styled-icons/remix-line';
import { CommentAlt } from '@styled-icons/fa-regular';

const iconCSS = css`
  width: 18px;
  height: 18px;
`;

export const Container = styled.div`
  margin: auto;
  background: var(--secondary);
  border-radius: 10px;
  margin-bottom: 15px;

  a {
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    .time {
      display: flex;
      color: var(--secondary-text);
      word-break: break-word;
      font-weight: 400;
      font-size: 13px;
    }

  }

  img {
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
  span {
    color: var(--primary-text);
    font-weight: bold;

    &:hover { 
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Text = styled.div`
    color: var(--primary-text);
    font-size: 15px;
    line-height: 23px;
    padding: 5px 16px 10px 16px;
`;


export const IconPublic = styled(Public)`
  width: 13px;
  height: 13px;
  padding: 0;
  margin-top: 3px;
  margin-left: 4px;
`;

export const IconLikeAction = styled(Like)`
  ${iconCSS}
`;

export const IconComment = styled(CommentAlt)`
  ${iconCSS}
`;

export const IconShared = styled(ShareForward)`
  ${iconCSS}
`;

export const CardImage = styled.div`
  /* background: var(--secondary-text); */
  width: 100%;
  /* height: 200px; */
  img {
    width: 100%;

  }
`;

export const Footer = styled.div`
    padding: 15px 16px;
    display: flex;
    justify-content: space-between;
    color: var(--secondary-text);
    font-size: 15px;
`;

export const Reaction = styled.div`
  ul {
    list-style: none;
    display: flat;
    position: relative;

    li {
      margin-left: -5px;
    
      &:last-child {
        margin-left: 5px;
      }
      img {
        width: 19px;
        height: 19px;
        background: var(--secondary);
        padding: 1.5px;
        border-radius: 50%;
      }
    }
  }
`;

export const Status = styled.div`
  ul {
    list-style: none;
    display: flex;

    li {
      margin-left: 10px;
    }
  }
`;

export const Action = styled.div`
    color: var(--secondary-text);
    padding: 0px 16px;

    .divisor {
      border-top:  1px solid var(--outline);
      width: 100%;
    }
    .action {
      display: flex;
      justify-content: space-between;

      span {
      text-align: center;
      font-weight: 600;
      cursor: pointer;
      padding-top: 5px;
      margin-top: 5px;
      padding-bottom: 5px;
      margin-bottom: 5px;
      width: 100%;
      border-radius: 4px;

      &:hover{
        background: var(--secondary-button-background);
      }
      }
    }
`;

export const CommentStatic = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--secondary-text);
  font-size: 15px;
  padding: 10px 16px;

  div {
    font-weight: 600;
    
    &:last-child {
      font-weight: 400;
    }
  }
  
`;

export const ReplyComment = styled.div`
  display: flex;
  align-content: left;
  align-items: left;

  span {
    &:first-child {
      width: 93px;
    }
    &:last-child {
      width: 100%;
    }
  }

`;
