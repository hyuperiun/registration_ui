import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "./../store/module/main";
import GymList from "./../component/gym/GymList";
import {Link} from 'react-router-dom';
import './TabStyle.css';

class GymListContainer extends Component {

  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

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

  handleClick = (e) => {
    const { MainActions } = this.props;
    MainActions.getGymListByName(e);
    this.render();
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
  }

  render() {
    const menuList = {
      0: <TabList gyms={this.props.gyms}/>,
      1: <div>asdf</div>,
    };

    const { gyms, search } = this.props;
    return (
      <div>
        {/* <GymList gyms={gyms} onChangeInput={this.handleChangeInput} category={category}/> */}
        <input type="text" name="search" onChange={this.handleChangeInput}/>
        <button onClick={() => this.handleClick(search)}>
          검색
        </button>
        <button onClick={() => this.initialize()}>
          초기화
        </button>
        <div className="wrap">
          <div className="menuBar">
            <ul className="tabs">
              <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>헬스장</li>
              <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>트레이너</li>
            </ul>
          </div>
          <div className="contentArea">
            {menuList[this.state.menu]}
          </div>
        </div>
          {/* <TabList gyms={gyms}/> */}
      </div>
    );
  }
}

const TabList = ({gyms}) => {
  return (
    <div>
      <ul>
          {gyms.map((gym,index) => (
            <li style={{
              border: '1px solid black',
              padding: '25px',
              margin: '15px',
            }} key={index.toString()}>
              <Link to="/gym" state={{gym : {gym} }}>
              <GymList gym={gym}  key={index}/>
              </Link>
            </li>
          ))}
          </ul>
    </div>
  );
};



export default connect(
  (state) => ({
    gyms: state.main.get("gyms"),
    search: state.main.get("search")
  }),
  (dispatch) => ({
    MainActions: bindActionCreators(mainActions, dispatch),
  })
)(GymListContainer);
