import React from "react";
import classNames from 'classnames/bind';
import styles from './TrainingContentList.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const TrainingContentItem = ({ trainingContentId, order, exerciseTypeDesc }) => {
  return (
    <Link to={`/training-content/${trainingContentId}`}>
      <div>{order} - {exerciseTypeDesc}</div>
    </Link>
  );
};

const TrainingContentList = ({ trainingContents, role }) => {
  let trainingContentList = "";
  if (trainingContents.length > 0) {
    trainingContentList = trainingContents.map((trainingContent, index) => {
      const { trainingContentId, order, exerciseTypeDesc } = trainingContent;
      return <TrainingContentItem key={index} trainingContentId={trainingContentId} order={order} exerciseTypeDesc={exerciseTypeDesc}/>;
    });
  }
  return (
    <div>
      <div>{trainingContentList}</div>
      { role == 'trainer' ? <button>PT 내용 등록</button> : ""}
    </div>
  );
};

export default TrainingContentList;
