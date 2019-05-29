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

    //Sorterer etter navn fra starten av, for å unngå en usortert liste fra starten av
    componentDidMount = () => {
        this.sortScans();
    }

    //gjemmer komponenten for å legge til ny scan og nullstiller
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

    //viser komponenten for å legge til ny scan
    openNewScan = () => {
        let visibility = this.state.addNew === 'hidden' ? 'visible' : 'hidden';
        let btnText = this.state.addNew === 'hidden' ? 'Hide' : 'Add New Scan';
        this.setState({
            addNew: visibility,
            addBtn: btnText,
        });
        this.forceUpdate();
    }

    //legger til ny scan i scans arrayet, så sorteres det og til slutt lukkes komponenten.
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

    //Åpner redigerings boksen og fyller inn eksisterende informasjon som skal kunne redigeres
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

    //oppdaterer elementet i arrayen som skal endres
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

    //endrer sorteringstypen
    changeSort = (event) => {
        this.setState({sort: event.target.value}, () => {
            
            this.sortScans()
        })
    }

    //sorterer array
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


    handleInputChange = (e) => {
        const target = e.target;
        const val = target.value;
        const name = target.name;
        this.setState({[name]: val})
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
                    handleInputChange={this.handleInputChange}
                />
                <button onClick={this.openNewScan}>{this.state.addBtn}</button>
                <div className={`${this.state.addNew}`}> 
                <NewScan 
                    users={this.state.users}
                    newName={this.state.newName}
                    handleInputChange={this.handleInputChange}
                    newUser={this.state.newUser}
                    newMinEle={this.state.newMinEle}
                    newMaxEle={this.state.newMaxEle} 
                    addNewScan={this.addNewScan}
                    />
                </div>
            </div>
        );
    }
}

export default ScanContainer;
