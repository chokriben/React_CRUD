import React,{Component} from "react";
import Client from "./Client";
class ClientList extends Component{
    render(){
        return (
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{width:'50px',textAlign:"center"}}>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th style={{width:'148px'}}>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <Client/>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ClientList;