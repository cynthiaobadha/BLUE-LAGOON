import React,{Component} from "react";
import axios from "axios";
import "./patients.css";

class Patients extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userCollection:[],
        };
    }
    componentDidMount(){
        axios
        .get("http://localhost:8080/patients")
        .then((res) => {
            this.setState({userCollection: res.data});
        })
        .catch((error) =>{
            console.log(error)
        });
    }
    render(){
        return(
            <div className="rate">
                <table>
                    <thead>
                        <tr className="mary">
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>AppointmentTime</th>
                            <th>AppointmentDate</th>
                            <th>Select A Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userCollection.map((patients,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{patients.name}</td>
                                    <td>{patients.email}</td>
                                    <td>{patients.phonenumber}</td>
                                    <td>{patients.appointmenttime}</td>
                                    <td>{patients.appointmentdate}</td>
                                    <td>{patients.selectADoctor}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Patients;







