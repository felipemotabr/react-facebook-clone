import styled, { css } from 'styled-components';

import { Groups } from '@styled-icons/material'
import { Search, Flag, Display, ShopWindow, Plus, BellFill } from '@styled-icons/bootstrap';
import { Messenger } from '@styled-icons/boxicons-logos';
import { ArrowDown } from '@styled-icons/evaicons-solid';

import { Home } from '@styled-icons/material-rounded'

const iconMenu = css`
  width: 23px;
  height: 23px;
  fill: var(--secondary-icon);
`;

const iconLeft = css`
  width: 20px;
  height: 20px;
  fill: var(--primary-text);
`;

export const Container = styled.div`
  background: var(--secondary);
  width: 100%;
  overflow: hidden;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  position: sticky;
  top: 0;
  z-index: 2;

  .Tooltip {
    background-color: rgba(255, 255, 255, 0.9);
    color: var(--primary);
    margin-top: 3px!important;
    padding: 4px 8px!important;

    &.place-top,
    &:after {
    border: none!important;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 9px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  .Tooltip {
    margin-top: 11px!important;
  }

  > ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      padding: 10px;
      background: var(--secondary-button-background);
      border-radius: 50%;
      margin-left: 10px;
      position: relative; 
      cursor: pointer;

      .Badge{
        top: -2px;
        right: -2px;
      }

      &:hover{
        background: var(--hover-overlayer)!important;
      }
    }
  }
`;

export const FormSearch = styled.div`
  background: var(--third);
  border-radius: 30px;
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;

  input { 
    font-size: 16px;
    outline: none;
    width: 80%;
    margin-top: -1px;
    color: var(--primary-text);

    &::placeholder{
      color: var(--secondary-text);
    }
  }
`;

export const IconSearch = styled(Search)`
  width: 16px;
  width: 16px;
  fill: var(--secondary-text);
  margin-left: 12px;
  margin-right: 8px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;
  padding-bottom: 2px;

  > ul {
    list-style: none;
    display: flex;
    align-items: center;

      li {
      height: 60px;
      display: flex;
      align-items: center;
      margin-left: 7px;
      position: relative;

      &.active {
        border-bottom: 3px solid  var(--primary-button-background);
        
        svg {
          width: 28px;
          height: 28px;
        }
      }

      span {
        padding: 12px 40px;
        flex-shrink: 0;
        cursor: pointer;
        border-radius: 8px;

        @media(max-width: 900px) {
          padding: 12px 20px;
        }      
        &:hover {
          background: var(--overlayer);
        }
      }
    }

  }
`;

export const IconHome = styled(Home)`
${iconMenu}
fill: var(--primary-button-background);
`;

export const IconHalfStaff = styled(Flag)`
${iconMenu}
`;

export const IconDisplay = styled(Display)`
${iconMenu}
`;

export const IconMarket = styled(ShopWindow)`
${iconMenu}
`;

export const IconGroups = styled(Groups)`
${iconMenu}
`;

export const Profile = styled.div`
    list-style: none;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    color: var(--primary-text);
    cursor: pointer;
    padding:5px 10px 5px 3px;
    border-radius: 18px;

    &:hover{
      background: var(--overlayer);
    }

    @media(max-width: 1200px) {
      display: none
    }
`;

export const Avatar = styled.div`
  margin-right: 5px;
  margin-left: 1px;
  background: var(--primary-button-background);
  width: 28px;
  height: 28px;
  border-radius: 50%;

  > img {
    width:100%;
  }
  
`;

export const IconPlus = styled(Plus)`
  ${iconLeft}
`;

export const IconMessage = styled(Messenger)`
  ${iconLeft}
`;

export const IconBell = styled(BellFill)`
  ${iconLeft}
`;

export const IconArrow = styled(ArrowDown)`
  ${iconLeft}
`;

export const NotificationBadge = styled.div`
  background: var(--notification-badge);
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  color: var(--always-white);
  font-weight: 500;
  right: 20px;
  top: 8px;
  font-size: 12px;
  border-radius: 100px;
  display: inline-flex;
  height: 19px;
  justify-content: center;
  align-items: center;
`;
