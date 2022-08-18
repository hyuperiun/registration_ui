import React from "react";
import classNames from 'classnames/bind';
import styles from './TrainingList.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const TrainingItem = ({ role, trainingId, gymName, trainerName, memberName }) => {
  return (
    <Link to={`/training/${trainingId}`}>
      <div>{gymName} - { role == 'trainer' ? trainerName : memberName}</div>
    </Link>
  );
};

const TrainingList = ({ trainings, role }) => {
  let trainingList = "";
  if (trainings.length > 0) {
    trainingList = trainings.map((training, index) => {
      const { trainingId, gymName, trainerName, memberName } = training;
      return <TrainingItem key={index} role={role} trainingId={trainingId} gymName={gymName} trainerName={trainerName} memberName={memberName}/>;
    });
  }
  return (
    <div>
      <div>{trainingList}</div>
    </div>
  );
};

export default TrainingList;
