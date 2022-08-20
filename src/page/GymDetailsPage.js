import React from 'react';
import Wrapper from '../component/common/wrapper/Wrapper';
import GymDetails from '../container/GymDetails';
import { useLocation } from 'react-router-dom';

const GymDetailsPage = () => {
  const gym = useLocation().state.gym;
  // debugger;
  return (
    <Wrapper>
      <GymDetails selectedGym={gym}/>
    </Wrapper>
  );
};

export default GymDetailsPage;
