import React from 'react';
import './ScanList.css'
import DropDown from './simpleDropdown';


class ScanList extends React.Component {  



    render() {
        
        return (
            <div>                
                <div className="Header">
                    Scans:
                </div>
                Sort by: <DropDown onChange={this.props.changeSort} />
                <div className="ScanList">
                    {this.props.scans.map((scan, i) => {
                        const user = this.props.users.find(u => u.id === scan.scannedByUserId);
                        return (
                        <div key={i}>

                            <div
                                className="ScanListItem"
                            >
                                <div className="ScanListItemInfo">{scan.name}
                                <div className="UserName">
                                    by {user.name}
                                </div></div>
                                <div className="ScanListItemEdit"><button onClick={(e) => this.props.editScan(i, e)}>Edit Scan</button></div>
                            </div>
                            <div className={`${this.props.edit === i ? 'visible' : 'hidden'}`}> 
                                <form onSubmit={this.props.submitEditScan} className='editScan'>
                                    <div id="editName">
                                    Scan Name:
                                    <input placeholder="Item name" type='text' value={this.props.editName} onChange={this.props.handleNameChange}></input></div>
                                    
                                    <div id="editUser">
                                    Scanning User:
                                    <select value={this.props.editUser} onChange={this.props.handleUserChange}>
                                    {this.props.users.map(user => (
                                        <option key={user.id} value={user.id}>{user.name}</option>
                                    ))}   
                                    </select>
                                    </div>
                                    <input type='submit' value="Submit edit"></input>
                                </form>
                            </div>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ScanList;
