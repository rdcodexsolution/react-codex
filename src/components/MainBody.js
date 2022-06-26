import { Component } from "react";


export default class Mainbody extends Component{

    render(){
        return(
            <div>
                {
                    this.props.colors.map((item,index)=>{
                        return <p key={index}>{item}</p>
                    })
                }
                {/* {
                    <>
                   <li>{this.props.userDetails.name}</li> 
                   <li>{this.props.userDetails.last_name}</li> 
                   <li>{this.props.userDetails.email}</li> 
                   </>
                } */}

                {
                    this.props.users.map((user,index)=>{
                        return(
                            <ul key={index}>
                                <li>{user.name}</li>
                                <li>{user.last_name}</li>
                                <li>{user.email}</li>
                            </ul>
                        )
                    })
                }
                
            </div>
        )
    }
}