import React from "react";
import classNames from 'classnames/bind';
import styles from './GymList.scss';

const cx = classNames.bind(styles);

// const GymItem = ({ gymId, gymName }) => {
//   return (
//     <div>
//       <div>id : {gymId}</div>
//       <div>gymName : {gymName}</div>
//     </div>
//   );
// };
// const GymList = ({ gyms, onChangeInput, category }) => {
//   let gymList = "";
//   if (gyms.length > 0) {
//     gymList = gyms.map((gym, index) => {
//       const { gymId, gymName } = gym;
//       return <GymItem key={index} gymId={gymId} gymName={gymName} />;
//     });
//   }
//   // debugger;
//   return (
//     <div>
//       <div>{gymList}</div>
//       <div>
//         <input type="text" name="category" onChange={onChangeInput}/>
//       </div>
//       <div className={cx('category-content')}>Category : {category}</div>
//     </div>
//   );
// };
const GymItem = ({ gymId, gymName}) => {
  return (
    <div>
      <div>id : {gymId}</div>
      <div>gymName : {gymName}</div>
    </div>
  );
};
const GymList = ({ gym }) => {
  const {gymId, gymName} = gym;
  return (
    <div>
      <span><GymItem gymId={gymId} gymName={gymName}/></span>
    </div>
  )
};

export default GymList;
