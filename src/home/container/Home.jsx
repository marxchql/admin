import React from 'react'
import Homeui from '../ui/Homeui.jsx'

export default function Home(props) {
    return (
        <div>
            <Homeui children={props.children}></Homeui>
        </div>
    )
}
