import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "./../store/module/main";
import GymList from "./../component/gym/GymList";
import {Link} from 'react-router-dom';

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

  handleClick = (e) => {
    const { MainActions } = this.props;
    MainActions.getGymListByName(e);
    this.render();
  }

  render() {
    const { gyms, search } = this.props;
    return (
      <div>
        {/* <GymList gyms={gyms} onChangeInput={this.handleChangeInput} category={category}/> */}
        <input type="text" name="search" onChange={this.handleChangeInput}/>
        <button onClick={() => this.handleClick(search)}>
          검색
        </button>
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
  }
}

export default connect(
  (state) => ({
    gyms: state.main.get("gyms"),
    search: state.main.get("search")
  }),
  (dispatch) => ({
    MainActions: bindActionCreators(mainActions, dispatch),
  })
)(MainContainer);
