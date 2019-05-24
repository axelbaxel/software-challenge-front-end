import React from 'react';

const DropDown = (props) => { 
        return (
            <select className={props.className}
                    onChange={props.onChange}
                    value={props.value}>
               <option value='name' key='dd_name'> Name</option>
               <option value='user' key='dd_user'> Username</option>
               <option value='elevation' key='dd_elevation'> Elevation</option>   
            </select>
        )
}
export default DropDown