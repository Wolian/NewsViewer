import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brightTurquoise};
  background-image: linear-gradient(315deg, ${({ theme }) => theme.colors.brightTurquoise} 0%, ${({ theme }) => theme.colors.electricViolet} 85%);
`;

export const Text = styled.div`
  padding: 0 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
