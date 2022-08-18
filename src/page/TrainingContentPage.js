import React from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../component/common/wrapper/Wrapper';
import TrainingContentContainer from "../container/TrainingContentContainer";

const TrainingContentPage = () => {
  const { trainingId } = useParams();
  return (
    <Wrapper>
      <TrainingContentContainer trainingId={trainingId}/>
    </Wrapper>
  );
};

export default TrainingContentPage;
