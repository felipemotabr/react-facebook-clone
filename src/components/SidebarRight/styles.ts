import styled from 'styled-components';

export const Container = styled.div`
    width: 360px;
    padding: 75px;
    position: sticky;
    top: 0;
    left: 0;
    max-height: 100vh;
    display: flex;
    flex-direction: column; 
`;

export const Title = styled.div`
  color: var(--secondary-text);
  font-weight: 600;
  font-size: 18px;
`;

export const Card = styled.div`
  .contacts {
    ul {
      display: flex;
      flex-direction: row;

      li {
        color: var(--primary-text);
      }
    }
  }
`;

export const Avatar = styled.div`
  
  img {
    width: 32px;
    height: 32px;
  }
`;