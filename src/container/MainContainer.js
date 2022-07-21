import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "./../store/module/main";
import GymList from "./../component/gym/GymList";

class MainContainer extends Component {
  initialize = () => {
    const { MainActions } = this.props;
    MainActions.getGymList();
  }

  componentDidMount() {
    this.initialize();
  }

  handleChangeInput = (e) => {
    const { MainActions } = this.props;
    const { value, name } = e.target;
    MainActions.changeInput({name, value});
  }

  render() {
    const { gyms, category } = this.props;
    debugger;
    return (
      <div>
        <GymList gyms={gyms} onChangeInput={this.handleChangeInput} category={category}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    gyms: state.main.get("gyms"),
    category: state.main.get("category")
  }),
  (dispatch) => ({
    MainActions: bindActionCreators(mainActions, dispatch),
  })
)(MainContainer);
