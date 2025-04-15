import React from "react";
import styled from "styled-components";

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
  font-size: 24px;
  text-align: center;
  max-width: 1000px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Title>About Finastra</Title>
        <Desc>
          Finastra is a global provider of financial services software
          applications across Lending, Payments, Treasury and Capital Markets,
          and Universal (retail and digital) Banking. Committed to unlocking the
          potential of people, businesses and communities everywhere, its vision
          is to accelerate the future of Open Finance through technology and
          collaboration, and its pioneering approach is why it is trusted by
          ~8,100 financial institutions, including 45 of the world's top 50
          banks.
          <br />
          <br />
          For more information, visit www.finastra.com.
          <br />
          <br />
          <br />
          <br />
          <br />
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default About;
