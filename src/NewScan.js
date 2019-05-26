import React from 'react';

const NewScan = (props) => { 

        return (
            <div >
                <form onSubmit={props.addNewScan} className='newScan'>
                    <div id="newName">
                    Scan Name:
                    <input placeholder="Item name" type='text' value={props.newName} onChange={props.handleNameChange}></input></div>
                    
                    <div id="newUser">
                    Scanning User:
                    <select value={props.newUser} onChange={props.handleUserChange}>
                    {props.users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}   
                    </select></div>

                    <div id="newMinEle">
                    Elevation Minimum:
                    <input type='number' value={props.newMinEle} onChange={props.handleMinEleChange}></input>
                    </div>
                    <div id="newMaxEle">
                    Elevation Maximum:
                    <input type='number' value={props.newMaxEle} onChange={props.handleMaxEleChange}></input>
                    </div>
                    <input type='submit' value="Add Scan"></input>
                </form>
            </div>
        )
    
        
    
    
}

export default NewScan