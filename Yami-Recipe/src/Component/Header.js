import React, { useState } from "react";
import styled from "styled-components";
import logo from "../LOGO.png";

const Header = () => {
  const [text, setText] = useState("");
  const textOnChange = (text) => {
    setText(text.target.value);
  };
  
  return (
    <>
      <HeaderDiv>
        <HeaderUl>
          <Logoli>
            <img src={logo} alt="logo"></img>
          </Logoli>
          <SearchForm>
            <select>
              <option>메뉴</option>
              <option>재료</option>
            </select>
            <input value={text} onChange={(text) => textOnChange(text)} />
          </SearchForm>
          <Menuli>
            <span>로그인</span>
            <span>회원가입</span>
          </Menuli>
        </HeaderUl>
      </HeaderDiv>
    </>
  );
};

const HeaderDiv = styled.header`
  width: 1280px;
`;
const HeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Logoli = styled.li`
  margin-left: -50px;
  margin-top: -10px;
  img {
    width: 350px;
    height:145px;
  }
`;
const SearchForm = styled.form`
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-bottom: 20px;
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    background-color: #69b645;
  }
  select {
    position: absolute;
    padding-left: 2px;
    padding-bottom: 5px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
  }
  input {
    width: 450px;
    height: 40px;
    padding-left: 65px;
    border: 2px solid #989898;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
  }
`;
const Menuli = styled.li`
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
  span {
    font-size: 20px;
    font-weight: 700;
    margin-left: 15px;
  }
`;

export default Header;
