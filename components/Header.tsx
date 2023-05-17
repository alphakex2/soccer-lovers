"use client"
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3D3D3D;
  height: 60px;
  position: sticky;
`;

const Logo = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  letter-spacing: 0.1em;
  text-align: center;
  padding: 1em 0;
  margin-left: 3em;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

const SearchInput = styled.input`
  padding: 0.5em 1em;
  font-size: 0.875rem;
  color: white;
  border-radius: 0.375rem;
  background-color: #3D3D3D;
  outline: none;

  &::placeholder {
    color: white;
  }
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo>Soccer Lovers</Logo>
      <SearchInput type="search" id="default-search" placeholder="Search..." />
    </HeaderContainer>
  );
};

export default Header;


