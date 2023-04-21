import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    justify-content: space-around;
    padding: 30px;
`;

export const News = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.14), 0px 2px 6px rgba(0, 0, 0, 0.14), 0px 0px 1px rgba(0, 0, 0, 0.14);
    margin-bottom: 20px;
    padding: 20px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
`;