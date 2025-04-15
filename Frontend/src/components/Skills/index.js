import React from "react";
import styled from "styled-components";
import { reasons } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 22px;
  text-align: center;
  max-width: 1000px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ReasonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Reason = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const ReasonTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const ReasonList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const ReasonItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const ReasonImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Event = () => {
  return (
    <Container id="event">
      <Wrapper>
        <Title>Event Overview</Title>
        <Desc>
          Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking
          Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive
          event is designed to help you navigate and excel in the rapidly
          evolving banking landscape.
          <br />
          <br /> Our forum will bring together business and technology experts,
          industry leaders, and visionaries to share their insights on the
          latest trends and challenges in the banking sector. You'll gain
          valuable knowledge on topics such as Generative AI, the impact of
          volatility, globalization challenges, persistent supply chain issues,
          recession threats, shifts in competitive dynamics, and evolving
          regulations.
          <br />
          <br /> Each session will delve into the implications, challenges, and
          opportunities these topics present, providing you with practical
          strategies to leverage the latest technologies and capitalize on
          emerging opportunities. This is a unique chance to learn from the best
          in the industry, stay ahead of the curve, and connect with fellow
          retail banking professionals.
          <br />
          <br /> Don't miss this opportunity to enhance your knowledge, Skills,
          and network in the finance and banking sector. Register today and
          secure your place at this must-attend event!
        </Desc>
        <ReasonsContainer>
          {reasons.map((event) => (
            <Reason>
              <ReasonTitle>{reasons.title}</ReasonTitle>
              <ReasonList>
                {event.reasons.map((item) => (
                  <ReasonItem>
                    <ReasonImage src={item.image} />
                    {item.name}
                  </ReasonItem>
                ))}
              </ReasonList>
            </Reason>
          ))}
        </ReasonsContainer>
      </Wrapper>
    </Container>
  );
};

export default Event;
