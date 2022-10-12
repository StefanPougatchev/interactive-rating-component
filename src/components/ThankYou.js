import React from 'react';
import styled from 'styled-components';
import ThankYouIll from '../assets/svgs/illustration-thank-you.svg';

const ThankYou = (props) => {
  const { rating } = props;

  return (
    <ThankYouContainer>
      <ThankYouImg
        src={ThankYouIll}
        alt='thank you'
      />
      <RatingText>{`You selected ${rating} out of 5`}</RatingText>
      <ThankYouHeading>Thank you!</ThankYouHeading>
      <ThankYouTextContent>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </ThankYouTextContent>
    </ThankYouContainer>
  );
};

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 412px;
  height: 416px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;
`;

const ThankYouHeading = styled.h1`
  font-family: Overpass;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ThankYouTextContent = styled.p`
  text-align: center;
  margin-top: 7px;
  margin-bottom: 45px;
  margin-left: 32px;
  padding-right: 40px;
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #969fad;
`;

const ThankYouImg = styled.img`
  margin-top: 45px;
`;

const RatingText = styled.div`
  margin: 32px 0px 32px;
  background: #262e38;
  border-radius: 22.5px;
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */

  text-align: center;

  /* Orange */

  color: #fc7614;
  padding: 4px 19px 4px 20px;
`;

export default ThankYou;
