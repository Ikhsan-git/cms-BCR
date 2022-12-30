import React from 'react';
import { FaAmazon } from "react-icons/fa";

const Sidebar = () => {

    const menuItem = [
        {
            path:"/",
            name:"dahboard",
            icon:<FaAmazon/>
        },
        {
            path:"/",
            name:"listcar",
            icon:<FaAmazon/>
        }

    ]
    return(
        <div>saya adalah sidebar</div>
    )
}

export default Sidebar;