import React, { useState } from "react";
import { HelpCircle, Moon, Settings, Sun } from "react-feather";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: peachpuff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0;
`;

const Controls = styled.ul`
    display: flex;
`;

const Control = styled.li`
    list-style-type: none;
`;

const Button = styled.button`
    background: none;
    color: #2e3440;

    border: none;
    border-radius: 0.25rem;

    display: flex;
    padding: 0.25rem;

    cursor: pointer;

    :hover {
        background-color: rgba(0, 0, 0, 0.25);
    }
`;

const Header = (): JSX.Element => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <StyledHeader>
            <h1>SortSimulation</h1>
            <Controls>
                <Control>
                    <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun /> : <Moon />}</Button>
                </Control>
                <Control>
                    <Button>
                        <Settings />
                    </Button>
                </Control>
                <Control>
                    <Button>
                        <HelpCircle />
                    </Button>
                </Control>
            </Controls>
        </StyledHeader>
    );
};

export default Header;
