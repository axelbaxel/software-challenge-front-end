import React from 'react';
import './ScanList.css'
import {sortByName, sortByUser, sortByElevation} from './util'
import DropDown from './simpleDropdown';


class ScanList extends React.Component {

    constructor(props) {
        super();
        this.state = {
            sort: sortByName,
        }
    }

    changeSort = (event) => {
        switch (event.target.value) {
            case 'name':
                this.setState({sort: sortByName});
                break;
            case 'user':
                this.setState({sort: sortByUser});
                break;
            case 'elevation':
                this.setState({sort: sortByElevation});
                break;
            default:
                break;
        }
    }

    

    render() {
        console.log(this.props.scans.sort(this.state.sort));
        console.log(this.state.sort);
        return (
            <div>
                
                <div className="Header">
                    Scans:
                </div>
                Sort by: <DropDown onChange={this.changeSort} />
                <div className="ScanList">
                    {this.props.scans.sort(this.state.sort)
                    .map((scan, i) => {
                        const user = this.props.users.find(u => u.id === scan.scannedByUserId);
                        return (
                            <div
                                className="ScanListItem"
                                key={i}
                            >
                                {scan.name}
                                <div className="UserName">
                                    by {user.name}
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
