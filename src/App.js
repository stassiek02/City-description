import React, { Component} from "react";
import styled from "styled-components";
import AutoComplete from "./Components/AutoComplete/AutoComplete";
import Accordion from "Components/Accordion/Accordion";
import GlobalStyle from "theme/GlobalStyle";
import ls from "local-storage";

const cors = "https://cors-anywhere.herokuapp.com/";
const cityApi =
  "https://api.openaq.org/v1/measurements?limit=40&parameter=pm25&order_by=value&sort=desc&country=";

const countrySuggestion = {
  Spain: "ES",
  Poland: "PL",
  Germany: "DE",
  France: "FR"
};
const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledInnerWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

class App extends Component {
  state = {
    cities: [],
    country: "",
    isLoading: false,
  };
  componentDidMount() {
    const lastSearch = ls.get("LastSearch");
    if (lastSearch) {
      this.getUserInput(lastSearch);
    }
  }

  getUserInput = this.getUserInput.bind(this);

  filterCities(array) {
    let unique = [...new Set(array.map(item => item.city.split("/")[0]))].slice(
      0,
      10
    );

    this.setState(
      {
        cities: unique
      },
      () => this.getWikiDescription(this.state)
    );
  }

  getUserInput(state) {
    this.setState(
      {
        country: state,
        isLoading:true,
      },
      () => this.getCities()
    );
  }

  async getCities() {
    await fetch(cityApi + countrySuggestion[this.state.country])
      .then(res => res.json())
      .then(json => this.filterCities(json.results))
      .catch(error => console.error("Error:", error));
  }
  async getWikiDescription(state) {
    this.setState({
      isLoading: true,
    });
    const desc = state.cities.map(async item => {
      return fetch(
        `${cors}https://en.wikipedia.org/api/rest_v1/page/summary/${item}`
      )
        .then(res => res.json())
        .then(res => res.extract)
        .catch(error => console.error("Error:", error));
    });

    Promise.all(desc).then(res =>
      this.setState({
        desc: res,
        isLoading: false,
      })
    );
  }

  rednerList() {
    const { desc, isLoading } = this.state;
    const Cities = this.state.cities;
    if (desc && !isLoading) {
      return Cities.map((item, index) => (
        <Accordion title={item} content={this.state.desc[index]} key={index} />
      ));
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        <StyledWrapper>
          <StyledInnerWrapper>
            <AutoComplete
              suggestions={["Spain", "Poland", "Germany", "France"]}
              afterSubmit={this.getUserInput}
            />
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            {!isLoading  ? this.rednerList() : <span>Loading</span>}
            
          </StyledInnerWrapper>
        </StyledWrapper>
      </>
    );
  }
}

export default App;
