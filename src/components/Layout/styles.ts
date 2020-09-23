import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin: auto;

  .content {
    width: min(680px, 100%);
    margin: auto;
    padding-top: 15px;

    
  }

  @media (max-width: 500px) {
    padding-bottom: 49px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

