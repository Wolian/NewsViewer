import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.BrightTurquoise};
  background-image: linear-gradient(
    315deg,
    ${({ theme }) => theme.colors.BrightTurquoise} 0%,
    ${({ theme }) => theme.colors.ElectricViolet} 75%
  );
`;

export const NewsViewer = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  line-height: 55px;
  color: ${({ theme }) => theme.colors.White};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ViewButton = styled.button`
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 10px;
  
`;

export const PopupButton = styled.button`
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 10px;
`;
