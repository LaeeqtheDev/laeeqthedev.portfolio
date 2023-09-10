"use client"
import React from 'react';
import DrawSvg from './DrawSvg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: 4xl;
  text-transform: capitalize;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: fit-content;
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${props => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.body};

  & > *:nth-of-type(2n+1) {
    justify-content: flex-start;
  }

  & > *:nth-of-type(2n) {
    justify-content: flex-end;
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 38%;
  height: fit-content;
  padding: 1rem;
  border: 2px solid ${props => props.theme.text};
  border-color: #8800C7;
  transform: skew(-12deg); /* Added skew */

  @media (max-width: 640px) {
    border: hidden;
   {/* transform: none;*/}
    margin: -30px;
  }
`;

const Box = styled(motion.div)`
  height: 8rem;
  width: 30rem;
  position: relative;
  border-radius: 26px;
  padding: 2rem; /* Increase padding to create space for the text */
  font-size: 4xl;
  color: white; /* Set text color to white */
  background-color: rgba(136, 0, 199, 0.1); /* Background color with 10% opacity */
  background-image: url('https://wallpapercave.com/wp/wp7130410.jpg'); /* Add the provided image */
  background-size: cover;
  background-position: center;
  z-index: 1; /* Set a higher z-index than the BlurredBackground */
  overflow: hidden; /* Hide overflowing content */

  /* Add border with 10% opacity */
  border: 0px solid rgba(136, 0, 199, 0.1); /* Replace #8800C7 with your desired border color */
  /* Media query for small screens */
  
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
 
  
   
    height: 350px;
    width: 100px;
    padding: 1rem;
  }

  `;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2; /* Set a higher z-index to place it above the image */
  margin: 0.2rem;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 0.8rem; /* Adjust the font size as needed */
  text-transform: capitalize;
  color: ${props => props.theme.text};
  
`;

const Text = styled.span`
  display: block;
  font-size: 0.8rem; /* Adjust the font size as needed */
  text-transform: capitalize;
  color: ${props => props.theme.text};
  font-weight: 400;
  margin-top: 0.2rem; /* Add some space between subtitle and text */
  /* Media query for small screens */
  @media (max-width: 640px) {
    /* Apply object-fit to text when screen size is small */
    object-fit: contain;
    font-size: 0.1rem
`;

const RoadmapItem = ({ title, subtext }) => {
  // Animation variants for the Box
  const boxVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <Item>
      <ItemContainer>
        <Box initial="hidden" animate="visible" variants={boxVariants}>
          <TextContainer>
            <Subtitle>{title}</Subtitle>
            <Text>{subtext}</Text>
          </TextContainer>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  return (
    <Section>
      <Title className="text-4xl border-b-[#8800C7]">Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadmapItem title="Worked with PenTutor, to develope a Platform for students during Covid (MERN STACK)   " subtext="Aug 2018 to Feb 2019" />
          <RoadmapItem title="Worked with @Traffic Digital (HTML, CSS, JS, REACT.JS)" subtext="Dec 2019 to Nov 2023" />
          
         
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
