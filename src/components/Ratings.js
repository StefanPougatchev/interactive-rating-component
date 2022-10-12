import React from 'react';
import styled from 'styled-components';

const Ratings = (props) => {
  const { setRatingNum } = props;
  const ratingArr = [1, 2, 3, 4, 5];

  return (
    <RatingContainer>
      {ratingArr.map((rating) => {
        return (
          <RatingCircle
            key={`button-${rating}`}
            onClick={() => {
              setRatingNum(rating);
            }}
          >
            {rating}
          </RatingCircle>
        );
      })}
    </RatingContainer>
  );
};

const RatingContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 51px;
  width: 341px;
  margin-left: 32px;
`;

const RatingCircle = styled.button`
  border: none;
  background: #262e38;
  width: 51px;
  height: 51px;
  border-radius: 50%;
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #7c8798;
  :hover {
    background: #7c8798;
    color: white;
  }
  :focus {
    background: #fc7614;
    color: white;
  }
`;

export default Ratings;
