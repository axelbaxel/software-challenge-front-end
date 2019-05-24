import React from 'react';

const NewScan = (props) => { 
    return (
        <div className='newScan'>
            <form>
            <input type='search' onChange={props.onChange}></input>
            <input type='search' onChange={props.onChange}></input>
            <input type='search' onChange={props.onChange}></input>
            <input type='search' onChange={props.onChange}></input>
            <input type='button'></input>
            </form>
            
        </div>
    )
}

export default NewScan