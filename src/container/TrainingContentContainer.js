import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as trainingContentActions from "./../store/module/trainingContent";
import TrainingContentList from "./../component/training/TrainingContentList";

class TrainingContentContainer extends Component {
  initialize = () => {
    const { TrainingContentActions, trainingId } = this.props;
    TrainingContentActions.getTrainingContentList({trainingId});
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    const { trainingContents, trainingId } = this.props;
    const role = sessionStorage.getItem('role');
    return (
      <div>
        <TrainingContentList trainingContents={trainingContents} role={role}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    trainingContents: state.trainingContent.get("trainingContents"),
  }),
  (dispatch) => ({
    TrainingContentActions: bindActionCreators(trainingContentActions, dispatch),
  })
)(TrainingContentContainer);
