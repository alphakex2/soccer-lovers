import styled from "styled-components";
import { Filter } from "@/types";
import { FunctionComponent } from "react";

interface ButtonProps {
  filter: Filter;
  count: number;
  setFilter: (filter: Filter) => void;
  label: string;
  isActive: boolean;
}

interface StyledButtonProps {
  isActive: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.isActive ? "#222121" : "transparent")};
  &:hover {
    background-color: #727272;
  }
`;

const FilterButton: FunctionComponent<ButtonProps> = ({
  filter,
  count,
  setFilter,
  label,
  isActive,
}) => {
  return (
    <StyledButton isActive={isActive} onClick={() => setFilter(filter)}>
      <div>{label}</div>
      <div>{count}</div>
    </StyledButton>
  );
};

export default FilterButton;
