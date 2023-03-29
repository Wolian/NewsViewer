import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 22px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.Gallery};
`;

export const Time = styled.div`
    border-right: 1px solid ${({ theme }) => theme.colors.Gallery};
    padding: 0 20px;
`;