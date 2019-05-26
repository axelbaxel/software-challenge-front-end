import React from 'react';
import ScanList from './ScanList';
import {createScanData, createUserData} from './data'
import NewScan from './NewScan'
import {sortByName, sortByUser, sortByElevation} from './util'



class ScanContainer extends React.Component {

    state = {
        scans: createScanData(),
        users: createUserData(),

        sort: 'name',

        addBtn: 'Add New Scan',
        addNew: 'hidden',
        newName: '',
        newUser: 0,
        newMinEle: 0,
        newMaxEle: 0,

        edit: -1,
        editName:'',
        editUser:0,
    };

    componentDidMount = () => {
        this.sortScans();
    }

    closeNewScan = () => {
        this.setState({
          addNew: 'hidden',
          addBtn: 'Add New Scan',
          newName: '',
          newUser: 0,
          newMinEle: 0,
          newMaxEle: 0,
        })
    }

    openNewScan = () => {
        let visibility = this.state.addNew === 'hidden' ? 'visible' : 'hidden';
        let btnText = this.state.addNew === 'hidden' ? 'Hide' : 'Add New Scan';
        this.setState({
            addNew: visibility,
            addBtn: btnText,
        });
        this.forceUpdate();
    }

    addNewScan = (e) => {
        let newScan = {
            name: this.state.newName,
            elevationMax: this.state.newMaxEle,
            elevationMin: this.state.newMinEle,
            scannedByUserId: parseInt(this.state.newUser, 10),
        }
        
        let newScans = this.state.scans
        newScans.push(newScan)
        this.setState({
            scans: newScans,
            newName: '',
            newUser: 0,
            newMinEle: 0,
            newMaxEle: 0,
        }, () => {
            this.sortScans();
            this.closeNewScan();
        })
        e.preventDefault();
    }

    handleNewNameChange = (e) => {
        this.setState({newName: e.target.value})
    }
    handleNewUserChange = (e) => {
        this.setState({newUser: e.target.value})
    }
    handleNewMinEleChange = (e) => {
        this.setState({newMinEle: e.target.value})
    }
    handleNewMaxEleChange = (e) => {
        this.setState({newMaxEle: e.target.value})
    }



    editScan = (id) => {
        if (id === this.state.edit) {
            this.setState({
                edit: -1,
            })
        } else {
            this.setState({
                edit: id,
                editName: this.state.scans[id].name,
                editUser: this.state.scans[id].scannedByUserId,
            })
        }
        
    }

    handleEditNameChange = (e) => {
        this.setState({editName: e.target.value})
    }
    handleEditUserChange = (e) => {
        this.setState({editUser: e.target.value})
    }

    submitEdit = (e) => {

        let editedScans = this.state.scans;
        editedScans[this.state.edit] = {
            name: this.state.editName,
            elevationMax: this.elevationMax,
            elevationMin: this.elevationMin,
            scannedByUserId: parseInt(this.state.editUser, 10),
        }
        
        this.setState({
            scans: editedScans,
            newName: '',
            newUser: 0,
        }, () => {
            this.sortScans();
            this.closeNewScan();
        })
        e.preventDefault();
    }

    changeSort = (event) => {
        this.setState({sort: event.target.value}, () => {
            
            this.sortScans()
        })
    }
    sortScans = () => {
        switch (this.state.sort) {
            case 'name':
                this.setState({edit: -1, scans: this.state.scans.sort(sortByName)});
                break;
            case 'user':
                this.setState({edit: -1, scans: this.state.scans.sort(sortByUser)});
                break;
            case 'elevation':
                this.setState({edit: -1, scans: this.state.scans.sort(sortByElevation)});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <ScanList
                    scans={this.state.scans}
                    users={this.state.users}
                    changeSort={this.changeSort}
                    editScan={this.editScan}
                    edit={this.state.edit}
                    editName={this.state.editName}
                    editUser={this.state.editUser}
                    submitEditScan={this.submitEdit}
                    handleNameChange={this.handleEditNameChange}
                    handleUserChange={this.handleEditUserChange}
                />
                <button onClick={this.openNewScan}>{this.state.addBtn}</button>
                <div className={`${this.state.addNew}`}> 
                <NewScan 
                    users={this.state.users}
                    newName={this.state.newName}
                    handleNameChange={this.handleNewNameChange}
                    newUser={this.state.newUser}
                    handleUserChange={this.handleNewUserChange}
                    newMinEle={this.state.newMinEle}
                    handleMinEleChange={this.handleNewMinEleChange}
                    newMaxEle={this.state.newMaxEle} 
                    handleMaxEleChange={this.handleNewMaxEleChange}
                    addNewScan={this.addNewScan}
                    />
                </div>
            </div>
        );
    }
}

export default ScanContainer;
