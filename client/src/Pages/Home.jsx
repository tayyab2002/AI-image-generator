import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/card/ImageCard";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  backgtound : ${(theme) => theme.bg}
  padding: 30px 30px;
  padding-bootom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width : 768px){
  padding : 6px 10px;
  }
`;
const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
padding : 10px;
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Home = () => {
  const item ={
    photo:"https://i.pcmag.com/imagery/articles/03a3gbCKfH8dDJnjhHLuHDf-1..v1665523315.png",
    author:"",
    prompy:""
  }
  return (
    <Container>
      <Headline>
        Explore popular posts in the Community
        <Span>⦾ Generated with AI ⦾</Span>
      </Headline>
      <SearchBar/>
      <Wrapper>
        <CardWrapper>
         <ImageCard item={item} />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Home;
