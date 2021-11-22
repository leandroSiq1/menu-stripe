import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 21px;
  }
`;

export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 20px 25px;
    outline: 0;
    color: #FFFFFF;
    font-size: 18px;

    transition: opacity 0.2s;

    &:hover, 
    &:focus {
      opacity: 0.5;
    }
  }

  .dropdown-root {
    z-index: 10;
    position: absolute;
  }

  .dropdown-arrow {
    position: relative;

    &::before {
      content: '';
      width: 16px;
      height: 16px;
      background: #FFFFFF;
      border-radius: 4px 0 0 0;

      position: absolute;
      top: -6.5px;
      left: -8px;

      transform: rotate(45deg);
    }
  }

  .dropdown-container {
    position: absolute;
    max-height: 450px;
    overflow: hidden;
    overflow-y: auto;
    box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);

    background: #FFFFFF;
    border-radius: 4px;

    &::-webkit-scrollbar {
      width: 5px;               
    }

    &::-webkit-scrollbar-track {
      background: #f5f6fc;      
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(150deg, #53f 15%, #05d5ff);   
      border-radius: 20px;      
    }
  }

  .dropdown-section {
    position: absolute;
  }

  .dropdown-background {
    position: absolute;
    bottom: 0;
    background: #f6f9fc;
    width: 100%;
  }
`;