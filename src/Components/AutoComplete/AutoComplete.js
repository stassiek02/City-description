import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ls from "local-storage";

const StyledUl = styled.ul`
  list-style: none;
  margin-top: -10px;
  padding: 0;
`;
const StyledSuggestionList = styled.li`
  width: 200px;
  padding: 10px 15px;
  background-color: #f2f2f2;
  transition: 0.2s background-color;

  &:focus,
  &:hover {
    background-color: #16a085;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;
const StyledInput = styled.input`
  border: 2px solid #16a085;
  font-size: 1.7rem;
  margin: 0;
  padding: 20px;
  width: 200px;
  height: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  & ~ ul {
    margin-bottom: 0;
  }
`;

export class AutoComplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProperty = {
    suggestions: []
  };
  
  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };

  componentDidMount() {
    this.setState({
      userInput: ls.get("LastSearch") || ""
    });
  }
  onSuggestionClick = e => {
    this.setState(
      {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: e.currentTarget.innerText
      },
      () => this.props.afterSubmit(this.state.userInput, e)
    );
    ls.set("LastSearch", e.currentTarget.innerText);
  };

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  render() {
    const {
      onChange,
      onSuggestionClick,
      onKeyDown,
      state: { filteredSuggestions, showSuggestions, userInput }
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      suggestionsListComponent = (
        <StyledUl>
          {filteredSuggestions.map((suggestion, index) => (
            <StyledSuggestionList key={index} onClick={onSuggestionClick}>
              {suggestion}
            </StyledSuggestionList>
          ))}
        </StyledUl>
      );
    }
    return (
      <>
        <StyledInput
          type="text"
          onChange={onChange}
          value={userInput}
          placeholder="Write your country"
          onKeyDown={onKeyDown}
          autocomplete="off"
        />

        {suggestionsListComponent}
      </>
    );
  }
}

export default AutoComplete;
