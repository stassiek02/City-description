import React, { useState, useRef } from "react";
import styled from "styled-components";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const AccordionItem = styled.button`
  background-color: ${({ setActive }) =>
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
  transition: background-color 0.6s ease, transform 0.3s;

  &:hover {
    background-color: #1abc9c;
  }
  &:focus {
    border: 1px solid #ccc;
    transform: translateX(20px);
  }
`;
const AccordionTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 1.7rem;
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

export default Accordion;
