import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Search = ({ list }) => {
  return (
    <SearchDiv>
      <SearchUl>
        {list &&
          list.map((list, index) => (
            <SearchLi key={index}>
                <Link to={`detail/${list.RCP_NM}`} state={{list}}>
                    <img src={list.ATT_FILE_NO_MK} alt={list.RCP_NM}></img>
                </Link>
            </SearchLi>
          ))}
      </SearchUl>
    </SearchDiv>
  );
};

const SearchDiv = styled.div`
  width: 1000px;
`;
const SearchUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const SearchLi = styled.li`
    a{  
        width: 100%;
        height: 400px;
        img{
            height: 100%;
        }
    }
`;

export default Search;
