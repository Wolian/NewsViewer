import { StyledButton } from "./styled";

export const ToggleButton = ({ label, onClick, isActive }) => {
    return (
        <StyledButton onClick={onClick} isActive={isActive}>
            {label}
        </StyledButton>
    );
};