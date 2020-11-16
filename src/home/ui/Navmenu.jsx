import React from "react";
import {useDispatch} from 'react-redux'
import { useHistory} from 'react-router-dom'
import { Menu } from "antd";
import menuList from '@/resource/menuConfig'

export default function Navmecu() {
  const dispatch=useDispatch()
  const history =useHistory()
  const { SubMenu } = Menu;
  function handleClick(e) {
    // console.log(e.item.props.id);
    sessionStorage.setItem("pageTitle",e.item.props.id) 
    history.push(e.key)
    dispatch({
      type:"changeTitle",
      pageTitle:e.item.props.id
    })
  }
  return (
    <div className="nav-wrap">
        <h2>后台管理</h2>
        <Menu onClick={handleClick} mode="vertical"  theme='dark'>
        {
            menuList.map(item=>{
                if(item.children){
                    return (
                        <SubMenu key={item.key} title={item.title}>
                        <Menu.ItemGroup >
                          {
                              item.children.map(items=>{
                                  return <Menu.Item key={items.key} id={items.title}>{items.title}</Menu.Item>
                              })
                          }
                        </Menu.ItemGroup>
                      </SubMenu>
                    )
                }else{
                    return  <Menu.Item key={item.key} id={item.title}>{item.title}</Menu.Item>
                }
            })
        }
      </Menu>
      ,
    </div>
  );
}
