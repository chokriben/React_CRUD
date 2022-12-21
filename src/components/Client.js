import React,{Component} from "react";
class Client extends Component{
    render(){
    return (
        <tr>
            <td>1</td>
            <td>chokri</td>
            <td>chokribenmahjoub@gmail</td>
            <td>
                <button className="mini ui blue button">Edit</button>
                <button className="mini ui red button">Delete</button>
            </td>
        </tr>
    );
}
}
export default Client;