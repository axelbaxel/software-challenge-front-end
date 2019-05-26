import React from 'react';
import './ScanList.css'
import DropDown from './simpleDropdown';


const ScanList = (props) => {  

    return (
        <div>                
            <div className="Header">
                Scans:
            </div>
            Sort by: <DropDown onChange={props.changeSort} />
            <div className="ScanList">
                {props.scans.map((scan, i) => {
                    const user = props.users.find(u => u.id === scan.scannedByUserId);
                    return (
                    <div key={i}>
                        <div className="ScanListItem">
                            <div className="ScanListItemInfo">{scan.name}
                                <div className="UserName">
                                    by {user.name}
                                </div>
                            </div>
                            <div className="ScanListItemEdit"><button onClick={(e) => props.editScan(i, e)}>Edit Scan</button></div>
                        </div>
                        <div className={`${props.edit === i ? 'visible' : 'hidden'}`}> 
                            <form onSubmit={props.submitEditScan} className='editScan'>
                                <div id="editName">
                                    Scan Name:
                                    <input placeholder="Item name" type='text' value={props.editName} onChange={props.handleNameChange}></input>
                                </div>
                                
                                <div id="editUser">
                                    Scanning User:
                                    <select value={props.editUser} onChange={props.handleUserChange}>
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
