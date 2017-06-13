import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return (
      <div>
        Pets Page
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
