import styled from "styled-components";
import _default from "../../themes/default";

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
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

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 cards per row
  gap: 5px; // Space between cards
  width: 90%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); // 3 cards per row for medium screens
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 cards per row for small screens
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // 1 card per row for very small screens
  }
`;
