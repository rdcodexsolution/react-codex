import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Mainbody from "./MainBody";


export default class Main extends Component{

    render(){
        const title = "Welcome to RD Codex React Training";
        const colors = ["Red","Green","Blue"]
        const userInfo = { 'name':'Rahul','last_name':'Kumar','email':'rahulkumar@gmail.com'}
        const usersDetails = [
            { 'id':'1','name':'Amit','last_name':'kumar','email':'amit@gmail.com'},
            { 'id':'2','name':'Pushkar','last_name':'Singh','email':'pushkar@gmail.com'}
         ];
        
        return(
            <div>
                <Header titleHead = {title}/>
                <Mainbody colors = {colors} userDetails = {userInfo} users = {usersDetails} />
                <Footer />
            </div>
        )
    }
}