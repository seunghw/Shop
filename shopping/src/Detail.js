import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';

function Detail(props) {


  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.places.find(function(상품){
      return 상품.id == id
    });

  let [onoff,setonoff] = useState(true);


    useEffect(()=>{

      let timer = setTimeout(()=>{ setonoff(false)} , 2000 )
    return () => { clearTimeout(timer)}
    },[]);

  return (
    <div className="container">
        {
          onoff === true
          ? <Noti />
          : null
        }
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
             <p>{찾은상품.content}</p>
             <p>{찾은상품.price}</p>

            <Info 재고={props.재고}></Info>
            <button className="btn btn-danger" onClick={()=>{
              {props.재고변경([9,10,11]) }
            }}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
           </div>
          </div>
    </div> 

  )
}


function Noti() {
  return (
    <div className="my-alert-yellow">재고 수량이 얼마 남지 않았습니다.</div>

  )
}


function Info(props){
  return <p>재고 : { props.재고[0] }</p>
}

export default Detail;