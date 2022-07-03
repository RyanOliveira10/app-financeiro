import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: #01124c;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;

  @media (max-widht: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }

  @media (max-width: 500px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
