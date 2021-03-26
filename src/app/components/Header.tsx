import React from "react";
import { HelpCircle, Moon, Settings, Sun } from "react-feather";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Title } from "@/app/components/Typography";
import { useDispatch, useSelector } from "@/app/hooks";
import { toggleTheme } from "@/app/store";
import { themes } from "@/app/theme";

const StyledHeader = styled.header`
    background-color: peachpuff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0;

    z-index: 1;
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

    :hover {
        background-color: rgba(0, 0, 0, 0.25);
    }
`;

const StyledLink = styled(Link)`
    background: none;
    color: #2e3440;

    border: none;
    border-radius: 0.25rem;

    cursor: default;

    display: flex;
    padding: 0.25rem;

    :hover {
        background-color: rgba(0, 0, 0, 0.25);
    }
`;

const Header = (): JSX.Element => {
    const { theme } = useSelector((state) => state.settings);
    const dispatch = useDispatch();

    return (
        <StyledHeader>
            <Title>SortSimulation</Title>
            <Controls>
                <Control>
                    <Button onClick={() => dispatch(toggleTheme())}>{themes[theme] === themes.dark ? <Sun /> : <Moon />}</Button>
                </Control>
                <Control>
                    <StyledLink to="/settings">
                        <Settings />
                    </StyledLink>
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
