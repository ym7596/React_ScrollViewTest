/*global kakao */
import React, { useEffect,useState } from "react";
import './Kakaomap.css';
export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);
 
  const mapscript = () => {
    
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.49529235431434, 127.02783526260873),
      level: 3,
    };
    //map
    const map = new kakao.maps.Map(container, options);
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.setZoomable(false);
    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
        37.49529235431434, 127.02783526260873
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
    const iwContent = '<span class="info-title">메타플로 본사</span>'
    const iwPosition = new kakao.maps.LatLng(37.49529235431434, 127.02783526260873); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
const infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
//infowindow.open(map, marker);

 };

  return(
     
        
 <div id="map"  ></div>
      
          
        
     
  )
}