import React, { useState } from 'react';
import styled from 'styled-components';
import IconStar from '../assets/svgs/icon-star.svg';
import Ratings from './Ratings';
import ThankYou from './ThankYou';

const ContentContainer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ratingNum, setRatingNum] = useState(0);

  const handleClick = () => {
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <ThankYou rating={ratingNum} />
      ) : (
        <ContentContainerStyled>
          <IconContainer>
            <IconImg
              src={IconStar}
              alt='icon'
            />
          </IconContainer>
          <Heading>How did we do?</Heading>
          <TextContent>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </TextContent>
          <Ratings setRatingNum={setRatingNum} />
          <Button onClick={handleClick}>Submit</Button>
        </ContentContainerStyled>
      )}
    </>
  );
};

export const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 412px;
  height: 416px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  background: #262e38;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-left: 32px;
`;

const IconImg = styled.img`
  width: 16.75px;
  height: 16px;
  background: #262e38;
`;

export const Heading = styled.h1`
  margin-top: 30px;
  margin-left: 32px;
  margin-bottom: 7px;
  font-family: Overpass;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #ffffff;
`;

export const TextContent = styled.p`
  margin-left: 32px;
  margin-bottom: 24px;
  padding-right: 40px;
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #969fad;
`;

const Button = styled.button`
  background: #fc7614;
  border-radius: 22.5px;
  height: 45px;
  width: 341px;
  margin: 32px 0px 32px 32px;
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 2px;
  color: #ffffff;
  border: none;
  :hover {
    background: #ffffff;
    color: #fc7614;
  }
`;

export default ContentContainer;
