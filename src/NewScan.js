import React from 'react';
import './newScan.css'

const NewScan = (props) => { 

        return (
            <div >
                <form onSubmit={props.addNewScan} className='newScan'>
                    <div id="newName" className="inputPart">
                        <label>Scan Name:</label>

                        <input placeholder="Item name" type='text' name='newName' value={props.newName} onChange={props.handleInputChange}></input>
                    </div>
                    <div id="newUser" className="inputPart">
                    <label>Scanning User:</label>
                        <select name='newUser' value={props.newUser} onChange={props.handleInputChange}>
                            {props.users.map(user => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}   
                        </select>
                    </div>
                    <div id="newMinEle" className="inputPart">
                    <label>Elevation Minimum:</label>
                        <input name='newMinEle' type='number' value={props.newMinEle} onChange={props.handleInputChange}></input>
                    </div>
                    <div id="newMaxEle" className="inputPart">
                    <label>Elevation Maximum:</label>
                        <input name='newMaxEle' type='number' value={props.newMaxEle} onChange={props.handleInputChange}></input>
                    </div>
                    <input type='submit' value="Add Scan" disabled={props.newName.length !== 0 && props.newMinEle < props.newMaxEle ? false : true}></input>
                </form>
            </div>
        )
        //Jeg gjør en antagelse her med at minimum elevation må være mindre enn maksimum.
        
    
    
}

export default NewScan