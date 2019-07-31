import React, {Component} from 'react'
import {getByUser} from "./api";
import {Link} from "react-router-dom";
import './UserPage.css'
import Axios from "axios";
import apiUrl from "./apiConfig";

class UserPage extends Component {

    state = {
        mosques: [],
        user: this.props.user
    }
    deleteMSQ = (id) => {
        Axios({
            method: "DELETE",
            url: apiUrl + `/mosques/${id}`,
            headers: {
                "Authorization": `Bearer ${this.state.user.token}`
            }
        })
                .then(() => alert('Mosque has been deleted'))
                .then(() => {
                    const msq = this.state.mosques.filter((msq) => msq._id != id)
                    this.setState({
                        mosques: msq
                    })
                })
            .catch((error) => console.log(error))
    }

    componentDidMount() {
        getByUser(this.state.user)
            .then(res => {
                console.log(res)
                this.setState({
                    mosques: res.data.mosques
                })
            })
    }
    render() {
        return (
            <div>
                {this.state.mosques.length !== 0 ?
                    <div>
                        {this.state.mosques.map(msq =>
                            <div className="card ">
                                <div className="card-header">
                                    <div className="card-body">
                                        <h5 className=" card-text text-center">Mosque details</h5>
                                        <h5 className="card-title text-center"><b>Mosque Name: </b>{msq.name}</h5>
                                        <h6 className="card-text  mb-2 text-muted">Mosque description: </h6>
                                        <h3 className="card-text">{msq.desc}</h3>
                                        <button onClick={() => this.deleteMSQ(msq._id)} className="btn btn-outline-danger">Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    <div>
                        <h2>You haven't added any mosques yet</h2>
                        <Link key="add" to="/map/add">Go to Add Page</Link>
                    </div>
                }

            </div>


        )
    }
}

export default UserPage;
