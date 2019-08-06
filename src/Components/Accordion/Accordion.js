import React, { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const AccordionItem = styled.button`
  background-color: ${({ setActive}) =>
    setActive === "active" ? "#27ae60" : "#2ecc71"};
  color: #ecf0f1;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  border:0;
  border-bottom:1px solid white;
  outline: none;
  transform: translateX(
    ${({ setActive }) => (setActive === "active" ? "20px" : "0")}
  );
  transition: background-color 0.4s ease, transform 0.6s ease;
  &:hover {
    background-color: #1abc9c;
  }
  
`;
const AccordionTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: ${({theme})=>theme.bold};
  font-size: 1.8rem;
`;
const AccordionContent = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
  
`;
const AccordionContentText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
  margin-left:20px;
`;

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);
  
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  
  return (
    <AccordionSection>
      <AccordionItem onClick={toggleAccordion} setActive={setActive}>
        <AccordionTitle>{props.title}</AccordionTitle>
      </AccordionItem>
      <AccordionContent ref={content} style={{ maxHeight: `${setHeight}` }}>
        <AccordionContentText> {props.content}</AccordionContentText>
      </AccordionContent>
    </AccordionSection>
  );
}
Accordion.propTypes ={
  title:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
}
Accordion.defaultProps = {
  title: "",
  content:"",
};

export default Accordion;
