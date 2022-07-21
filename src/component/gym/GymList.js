import React from "react";
import classNames from 'classnames/bind';
import styles from './GymList.scss';

const cx = classNames.bind(styles);

const GymItem = ({ id, gymName }) => {
  return (
    <div>
      <div>id : {id}</div>
      <div>gymName : {gymName}</div>
    </div>
  );
};

const GymList = ({ gyms, onChangeInput, category }) => {
  let gymList = "";
  if (gyms.length > 0) {
    gymList = gyms.map((gym, index) => {
      const { id, gymName } = gym;
      return <GymItem key={index} id={id} gymName={gymName} />;
    });
  }
  debugger;
  return (
    <div>
      <div>{gymList}</div>
      <div>
        <input type="text" name="category" onChange={onChangeInput}/>
      </div>
      <div className={cx('category-content')}>Category : {category}</div>
    </div>
  );
};

export default GymList;
