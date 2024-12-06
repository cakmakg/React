import React from 'react'
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './DetailsStyles'
import dietSvg from "../../assets/diet.svg"
import { useLocation } from 'react-router-dom'
const Details = () => {






  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{} </h1>
        <img src={ ""} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>NUTRIENTS</>
          <span>
            {}:
            {}
            {}
          </span>
          <span>
            {}:
            {}
            {}
          </span>
          <span>
            {" "}
            {}:
            {}
            {}
          </span>
          <span>
            {" "}
            {}:
            {}
            {}
          </span>
          <span>{} </span>

          <span>Calories: {}</span>

          <span>
       
          </span>
        </OtherPart>

        <ImgContainer>
          <img src={""} alt="" />
        </ImgContainer>

        <IngredContainer>
          
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
}

export default Details