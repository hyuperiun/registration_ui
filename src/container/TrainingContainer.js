import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as trainingActions from "./../store/module/training";
import TrainingList from "./../component/training/TrainingList";

class TrainingContainer extends Component {
  initialize = () => {
    const { TrainingActions } = this.props;
    TrainingActions.getTrainingList();
  }

  componentDidMount() {
    this.initialize();
  }

  handleChangeInput = (e) => {
    const { TrainingActions } = this.props;
    const { value, name } = e.target;
    TrainingActions.changeInput({name, value});
  }

  render() {
    const { trainings } = this.props;
    sessionStorage.setItem('role', 'trainer');
    const role = sessionStorage.getItem('role');
    return (
      <div>
        <TrainingList trainings={trainings} role={role}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    trainings: state.training.get("trainings"),
  }),
  (dispatch) => ({
    TrainingActions: bindActionCreators(trainingActions, dispatch),
  })
)(TrainingContainer);
