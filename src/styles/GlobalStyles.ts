import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --primary: #18191a;
    --secondary: #242526;

    --primary-text: #e4e6eb;
    --secondary-text: #b0b3b8;
    --third: #3a3b3c;

    --secondary-icon: #b0b3b8;
    --primary-button-background: #2d88ff;
    --secondary-button-background: rgb(255, 255, 255, 0.1);;

    --overlayer: rgba(255, 255, 255, 0.1);
    --hover-overlayer: rgba(255, 255, 255, 0.2);
    --always-dark-overlay: rgba(0, 0, 0, 0.4);


    --notification-badge: #f02849;
    --always-white: #ffffff;

    --outline: #3e4042;
    

  }
`;