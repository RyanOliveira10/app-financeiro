import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: flex;
  width: 98%;
  margin: 0 auto;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-around;

  @media (max-width: 500px){
    display: flex;
    flex-direction: column;
  }
`