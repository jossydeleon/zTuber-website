import React from 'react';
import { IoIosSunny, } from 'react-icons/io';
import { BsMoon, } from 'react-icons/bs';
import styled from 'styled-components';

interface ToggleProps {
    theme: 'light' | 'dark',
    toggleTheme: any
}

interface ToggleStyle {
    currentTheme: 'light' | 'dark'
}

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <ToggleContainer currentTheme={theme} onClick={toggleTheme} >
            <IoIosSunny /> <BsMoon />
        </ToggleContainer>
    );
};

const ToggleContainer = styled.button<ToggleStyle>`
  background: ${({ currentTheme }) => currentTheme === 'light' ? 'linear-gradient(#091236, #1E215D)' : 'linear-gradient(#39598A, #79D7ED)'};
  border: 2px solid ${({ currentTheme }) => currentTheme === 'light' ? '#FFF' : '#6B8096'};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 2.5rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ currentTheme }) => currentTheme === 'light' ? 'translateY(0)' : 'translateY(100px)'};
      color:yellow;
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ currentTheme }) => currentTheme === 'light' ? 'translateY(-100px)' : 'translateY(0)'};
      color:#302e41;
    }
  }
`;

export default Toggle;