import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUsPresidents } from './actions/index';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = ({
      buttonText: "Sort Z -> A",
      curOrder: "asc",
    });
  }

  componentDidMount() {
    this.props.fetchUsPresidents(this.state.curOrder);
  }

  toggleOrder() {
    let sortOrder;
    let buttonText;
    if (this.state.curOrder === 'asc') {
      sortOrder = 'desc';
      buttonText = 'Sort A -> Z';
    } else {
      sortOrder = 'asc';
      buttonText = 'Sort Z -> A';
    }
    this.props.fetchUsPresidents(sortOrder);
    this.setState({
      buttonText: buttonText,
      curOrder: sortOrder,
    });
  }
  
  renderPresidentList() {
    if (this.props.usPresidents.hasError) {
      return <h1 className="error"> Error while retrieving president list... </h1>
    }
    if (this.props.usPresidents.isFetching) {
      return <h1 className="loading"> Loading... </h1>
    }
    return (
      <div className="presidents-container">
        {this.props.usPresidents.data.map((president) => {
          return (
            <div className="president">
              <h2> {president.president} </h2>
              <h3> Birth: {president.birthday}, {president.birthplace} </h3>
              <h3> Death: {president.deathDay ? president.deathDay + ", " + president.deathPlace : "N/A"} </h3>
            </div>
          );
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1> List of US Presidents </h1>
        <div className="btn-container">
          <button className="sort-btn" onClick={() => this.toggleOrder()}> {this.state.buttonText} </button>
        </div>
        {this.renderPresidentList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    usPresidents: state.usPresidents,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUsPresidents: fetchUsPresidents,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
