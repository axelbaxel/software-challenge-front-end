import React from 'react';
import ScanList from './ScanList';
import {createScanData, createUserData} from './data'
import NewScan from './NewScan'

import { SkyLightStateless } from 'react-skylight'


class ScanContainer extends React.Component {

    state = {
        scans: createScanData(),
        users: createUserData(),
        addNew: false,
    };

    closePopup = (event) => {
        this.setState({
          addNew: false
        })
        this.forceUpdate();
    }

    openNewScan = () => {
        this.setState({addNew: true});
        this.forceUpdate();
    }

    editScan = (id) => {
        
    }

    render() {
        return (
            <div>
                <ScanList
                    scans={this.state.scans}
                    users={this.state.users}
                />
                <button onClick={this.openNewScan}>Add New Scan</button>
                <SkyLightStateless className='popup' ref={ref => this.selectedPopup = ref} isVisible={this.state.addNew} onCloseClicked={() => {this.closePopup()}} title="Add new Scan"><NewScan /></SkyLightStateless>
            </div>
        );
    }
}

export default ScanContainer;
