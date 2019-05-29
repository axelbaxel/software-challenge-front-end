import React from 'react';
import './ScanList.css'


const ScanList = (props) => {  

    return (
        <div>                
            <div className="Header">
                Scans:
            </div>
            Sort by: 
            <select onChange={props.changeSort}>
               <option value='name' key='dd_name'> Name</option>
               <option value='user' key='dd_user'> Username</option>
               <option value='elevation' key='dd_elevation'> Elevation</option>   
            </select>
            <div className="ScanList">
                {props.scans.map((scan, i) => {
                    const user = props.users.find(u => u.id === scan.scannedByUserId);
                    return (
                    <div key={i} className="ScanListItemContainer">
                        <div className="ScanListItem">
                            <div className="ScanListItemInfo">{scan.name}
                                <div className="UserName">
                                    by {user.name}
                                </div>
                            </div>
                            <div ><button className="ScanListItemEditBtn"onClick={(e) => props.editScan(i, e)}>Edit Scan</button></div>
                        </div>
                        {/* EditScan kunne vel også vært lagt inn som egen komponent som NewScan,  men er ikke like stor så tenker at den er litt i grenseland*/}
                        <div className={`${props.edit === i ? 'visible' : 'hidden'}`}> 
                            <form onSubmit={props.submitEditScan} className='editScan'>
                                <div id="editName">
                                    Scan Name:
                                    <input name='editName' placeholder="Item name" type='text' value={props.editName} onChange={props.handleInputChange}></input>
                                </div>
                                
                                <div id="editUser">
                                    Scanning User:
                                    <select name='editUser' value={props.editUser} onChange={props.handleInputChange}>
                                        {props.users.map(user => (
                                            <option key={user.id} value={user.id}>{user.name}</option>
                                        ))}   
                                    </select>
                                </div>
                                <input type='submit' value="Submit edit" disabled={props.editName.length !== 0 ? false : true}></input>
                            </form>
                        </div>
                            
                    </div>
                    );
                })}
            </div>
        </div>
    );

}

export default ScanList;
