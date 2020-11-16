import React, {  useEffect } from "react";
import { Card, Row, Col } from "antd";
import { useDispatch ,useSelector } from 'react-redux'
const { Meta } = Card;

export default function Photogallery() {
  const dispatch=useDispatch()
  const state=useSelector(state=>state)
  useEffect(() => {
  dispatch({
    type:"getphotolist"
  })
}, [dispatch]);
  return (
    <div>
      <Row gutter={13}>
            {
                state.photolist.map((item ,index)=>{
                  
                    return (
                      <Col  span={ index ===2 ? 4 : 5 } key={index} >
                          {
                              item.map((items,ind)=>{
                                  return (
                                      <Card
                                      key={ind}
                                      hoverable
                                      // style={{ width: "280px" }}
                                      cover={
                                        <img
                                          alt="example"
                                          src={items}
                                        />
                                      }
                                    >
                                      <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                      />
                                    </Card>
                                  )
                              })
                          }
                      </Col>
                  )
                      
                })
            }
         
        
      </Row>
    </div>
  );
}
