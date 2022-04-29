import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";


export default class Mainapp extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header/>
                <h1> Main App </h1>
                <Footer/>
            </div>
        )
    }
}
