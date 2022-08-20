import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../store/module/main";
import Location from "../component/gym/Location";

class GymDetails extends Component{

  initialize = () =>{
    const { MainActions } = this.props;
    // debugger;
    MainActions.getProgramList(this.props.selectedGym.gym.gymId);
  }

  componentDidMount() {
    this.initialize();

    // const script = document.createElement("script");

    // script.type = "text/javascript";
    // script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=62fbec6871c90cd4898404d5570d3c1e";

    // document.body.appendChild(script);
  }

  render(){
    const { gyms, programs } = this.props;
    const selectedGym = this.props.selectedGym.gym;
    const gym_list = gyms.filter((gym) => gym.gymId === selectedGym.gymId)
    const gym = gym_list.at(0)

    // const {gym} = useLocation().location.state.gym;
    return (
      <div>
        {gym.gymName}<br />
        층수 : {gym.floor}<br />
        평점 : {gym.rating}<br />
        우편 주소 : {gym.address.zipCode}<br />
        상세 주소 : {gym.address.detail}<br />
        <br /><br />
        <ul>
        {
          programs.map((program,index) => (
          <li style={{
              border: '1px solid black',
              padding: '25px',
              margin: '15px',
            }}key={index.toString()}>
            프로그램명 : {program.programName}<br />
            가격 : {program.price} 원<br />
            기간 : {program.period} <br />
            상세 설명 : {program.description} <br />
          </li>))
        }
        </ul>
        <Location Lat={gym.address.latitude} Lng={gym.address.longitude}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    gyms: state.main.get("gyms"),
    programs : state.main.get("programs")
  }),
  (dispatch) => ({
    MainActions: bindActionCreators(mainActions, dispatch),
  })
)(GymDetails);
