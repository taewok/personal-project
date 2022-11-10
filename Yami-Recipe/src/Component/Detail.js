import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const location = useLocation();
  const data = location.state.list;

  //재료
  const [ingredient, setIngredient] = useState();
  //재료 데이터 다듬기...
  useEffect(() => {
    let arry = location.state.list.RCP_PARTS_DTLS.split(",");
    let arry2 = [];
    for (let index = 0; index < arry.length; index++) {
      arry2.push(arry[index].split("\n"));
    }
    setIngredient(
      arry2.flat(1).filter((element) => {
        return element !== undefined && element !== null && element !== "";
      })
    );
  }, [location.state.list.RCP_PARTS_DTLS]);

  //영양성분
  const [nutrient, setNutrient] = useState([]);
  useEffect(() => {
    nutrient.push(location.state.list.INFO_ENG);
    nutrient.push(location.state.list.INFO_CAR);
    nutrient.push(location.state.list.INFO_PRO);
    nutrient.push(location.state.list.INFO_FAT);
    nutrient.push(location.state.list.INFO_NA);
  }, []);

  return (
    <DetailDiv>
      <ThumbnailDiv>
        <img src={data.ATT_FILE_NO_MK} alt={data.RCP_NM}></img>
        <p>{data.RCP_NM}</p>
      </ThumbnailDiv>
      <IngredientNutrientDiv>
        <IngredientDiv>
          <p>
            재료<span>ingredient</span>
          </p>
          <IngredientUl>
            {ingredient &&
              ingredient.map((list) => (
                <IngredientLi key={list}>{list}</IngredientLi>
              ))}
          </IngredientUl>
        </IngredientDiv>
        <NutrientDiv>
          <p>
            영양성분<span>nutrient</span>
          </p>
          <NutrientUl>
            <NutrientLi>
              <span>열량</span>
              <span>{location.state.list.INFO_ENG}Kcal</span>
            </NutrientLi>
            <NutrientLi>
              <span>탄수화물</span>
              <span>{location.state.list.INFO_CAR}g</span>
            </NutrientLi>
            <NutrientLi>
              <span>단백질</span>
              <span>{location.state.list.INFO_PRO}g</span>
            </NutrientLi>
            <NutrientLi>
              <span>지방</span>
              <span>{location.state.list.INFO_FAT}g</span>
            </NutrientLi>
            <NutrientLi>
              <span>나트륨</span>
              <span>{location.state.list.INFO_NA}mg</span>
            </NutrientLi>
          </NutrientUl>
        </NutrientDiv>
      </IngredientNutrientDiv>
      <RecipeDiv></RecipeDiv>
    </DetailDiv>
  );
};

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ThumbnailDiv = styled.div`
  p {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }
`;
const IngredientNutrientDiv = styled.div`
  width: 700px;
  padding: 0 70px;
  border-top: 2.5px solid #dfdfdf;
  border-bottom: 2.5px solid #dfdfdf;
`;
const IngredientDiv = styled.div`
  p {
    font-size: 1.3rem;
    font-weight: 600;
    span {
      font-size: 1rem;
      padding-left: 5px;
      color:#757575;
    }
  }
`;
const IngredientUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;
const IngredientLi = styled.li`
  width: 250px;
  margin-bottom: 5px;
  padding: 10px 0;
  border-bottom: 2px solid #dfdfdf;
`;

const NutrientDiv = styled(IngredientDiv)``;
const NutrientUl = styled(IngredientUl)``;
const NutrientLi = styled(IngredientLi)`
    display:flex;
    justify-content: space-between;
`;

const RecipeDiv = styled.div``;

export default Detail;
