import React from "react";
import {Route} from "react-router-dom";
import Loadable from "react-loadable";

import FetchApi from "../../utils/FetchAPI";
import AuthService from "../../handlers/main/AuthService";
import Loader from "../common/Loader";

const Loading = ({error})=>{
    if(error)
        return <div>Error loading component</div>;
    else
        return <Loader />;
};

const RegisterIndex = Loadable({
    loader : ()=> import("./Registration/Index"),
    loading: Loading
});

const LoginIndex = Loadable({
    loader: ()=>import("./Login/Index"),
    loading: Loading
});

const VerifyIndex = Loadable({
    loader: ()=>import("./Verify/Index"),
    loading: Loading
});
const HomeIndex = Loadable({
    loader: ()=>import("./Home/Index"),
    loading: Loading
});

const Sidebar = Loadable({
    loader: ()=>import("./Sidebar/Index"),
    loading: Loading
});

const LogoutIndex = Loadable({
    loader: ()=>import("./Logout/Index"),
    loading: Loading
});

export default class MainIndex extends React.Component{
    constructor(){
        super();
        this.state = {
            isAuthenticated: false,
            verified: false,
            userData: ""
        }
        this.Auth = new AuthService();
    }

    componentWillMount() {
        const isAuthenticated = this.Auth.hasToken();
        console.log(isAuthenticated, "isAuthenticated");
        if (isAuthenticated) {
          const token = this.Auth.getToken()
          FetchApi('GET', '/api/main/user', null, token)
            .then(r => {
              if (r && r.data && r.data.body) {
                  console.log(r.data);
                if (r.data.body.verified) {
                  this.setState({ isAuthenticated: true, verified: true, userData: r.data.body });
                } else {
                  this.setState({ isAuthenticated: true, verified:false })
                  this.props.history.push('/main/verify')
                }
              }
            })
            .catch(e => {
              console.log(e)
            });
        }
      }

    handleUpdate = (isAuthenticated, verified) => {
        this.setState({ isAuthenticated, verified })
      };
    
      setUserData = data => {
        this.setState({
          userData: data
        });
      };

    render(){
        return(
            <React.Fragment>
                {this.state.isAuthenticated ?
                    <React.Fragment>
                        {!this.state.verified ?
                        <Route exact path="/main/verify" component={VerifyIndex} />
                        :
                        <React.Fragment>
                            <Route path="/main" render={props => (<Sidebar {...props} userData={this.state.userData} />)} />
                        </React.Fragment>
                        }
                        <Route exact path="/main/logout" render={props => (<LogoutIndex {...props} updateRoutes={this.handleUpdate} />)} />

                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Route exact path="/main" component={HomeIndex} />
                        <Route exact path="/main/register" component={RegisterIndex} />
                        <Route exact path="/main/login" render={props => (<LoginIndex {...props} updateRoutes={this.handleUpdate} setUserData={this.setUserData} />)} />
                     </React.Fragment>
                    }
                   
                              
            </React.Fragment>
        )
    }

}
