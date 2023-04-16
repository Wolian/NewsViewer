import styled from "styled-components";

export const Wrapper = styled.aside`
    display: flex;
    background-color: ${({ theme }) => theme.colors.White};;
    width: 25%;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    margin: 20px;
    padding: 10px;
`;

export const CountryList = styled.ul`
    list-style: none;
`;

export const Item = styled.li`
    margin: 15px 0;
`;