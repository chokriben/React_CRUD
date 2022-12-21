import React,{Component} from "react";
import MyForm from "./MyForm";
import "./app.css";
import ClientList from "./ClientList";
class App extends Component{
     render(){
        return(
            <div>
            <div className="ui fixed inverted menu">
                <div className="ui container">
                <a href="/#" className="hader item">
                    React js crud with laravel Api
                     </a>
                </div>
            </div>
            <div className="ui main container">
            <MyForm/>
            <ClientList/>
            </div>
            </div>
          
        );
     }
}
export default App;