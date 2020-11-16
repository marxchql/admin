import {Home} from '../home/index' 
import React from 'react'
import App from '../App.jsx'
import Notfound from '../Notfound/Notfound.jsx'

import { Switch,Redirect,Route,BrowserRouter } from 'react-router-dom'
import Indexpage from '../pages/homes/Indexpage.jsx'
import Buttons from '../pages/ui/Buttons.jsx'
import Modals from '../pages/ui/Modals.jsx'
import Photogallery from '../pages/ui/Photogallery.jsx'
import Loading from '../pages/ui/Loading.jsx'
import Notification from '../pages/ui/Notification.jsx'
import Login from '../pages/Login/Login.jsx'
import Reg from '../pages/Login/Reg.jsx'
import Basictable from '../pages/table/Basictable.jsx'
import Hightable from '../pages/table/Hightable.jsx'
import Ordermanage from '../pages/ordermanage/Ordermanage.jsx'
import Citymanage from '../pages/citymanage/Citymanage.jsx'

export default function index() {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Redirect from='/' to ="/admin" exact></Redirect>
                    <Route path='/admin' component={()=>{
                       return(
                        <Home>
                            <Switch>
                                <Redirect from='/admin' to ="/admin/home" exact></Redirect>
                                <Route path='/admin/home' component={()=><Indexpage></Indexpage>}></Route>
                                <Route path='/admin/ui/buttons' component={()=><Buttons></Buttons>}></Route>
                                <Route path='/admin/ui/modals' component={()=><Modals></Modals>}></Route>
                                <Route path='/admin/ui/gallery' component={()=><Photogallery></Photogallery>}></Route>
                                <Route path='/admin/ui/loadings' component={()=><Loading></Loading>}></Route>
                                <Route path='/admin/ui/notification' component={()=><Notification></Notification>}></Route>
                                <Route path='/admin/form/login' component={()=><Login></Login>}></Route>
                                <Route path='/admin/form/reg' component={()=><Reg></Reg>}></Route>
                                <Route path='/admin/table/basic' component={()=><Basictable></Basictable>}></Route>
                                <Route path='/admin/table/high' component={()=><Hightable></Hightable>}></Route>
                                <Route path='/admin/order' component={()=><Ordermanage></Ordermanage>}></Route>
                                <Route path='/admin/city' component={()=><Citymanage></Citymanage>}></Route>
                            </Switch>
                        </Home>
                       )
                    }}></Route>
                    <Route path='*' component={()=><Notfound></Notfound>}></Route>
                    
                </Switch>
            </App>
        </BrowserRouter>
    )
}

