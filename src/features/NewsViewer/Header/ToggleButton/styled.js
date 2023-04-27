import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${(props) => (props.isActive ? "green" : "gray")};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 8px 16px;
    cursor: pointer;
`;