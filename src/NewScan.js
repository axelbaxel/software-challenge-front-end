import React from 'react';
import './newScan.css'

const NewScan = (props) => { 

        return (
            <div >
                <form onSubmit={props.addNewScan} className='newScan'>
                    <div id="newName" className="inputPart">
                        <label>Scan Name:</label>

                        <input placeholder="Item name" type='text' value={props.newName} onChange={props.handleNameChange}></input>
                    </div>
                    <div id="newUser" className="inputPart">
                    <label>Scanning User:</label>
                        <select value={props.newUser} onChange={props.handleUserChange}>
                            {props.users.map(user => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}   
                        </select>
                    </div>
                    <div id="newMinEle" className="inputPart">
                    <label>Elevation Minimum:</label>
                        <input type='number' value={props.newMinEle} onChange={props.handleMinEleChange}></input>
                    </div>
                    <div id="newMaxEle" className="inputPart">
                    <label>Elevation Maximum:</label>
                        <input type='number' value={props.newMaxEle} onChange={props.handleMaxEleChange}></input>
                    </div>
                    <input type='submit' value="Add Scan" disabled={props.newName.length !== 0 && props.newMinEle < props.newMaxEle ? false : true}></input>
                </form>
            </div>
        )
    
        
    
    
}

export default NewScan