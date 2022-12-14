/* global kakao */
import React, { useEffect } from 'react'

const {kakao} = window

const Location=({Lat, Lng})=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      // center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    // var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    var markerPosition  = new kakao.maps.LatLng(Lat, Lng);
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>
        <div id="map" style={{width:"500px", height:"400px"}}></div>
        </div>
    )
}

export default Location;
