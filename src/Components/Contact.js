import React, { Component } from 'react'

export class Contact extends Component{
    render(){
        return(
            <div className="mt-5 d-flex justify-content-left">
              <b>Name:</b>Dimpal H. Varachhia   
              {'\n'} 
               <h4><b>EmailId:</b>dimpal13@gmail.com</h4><br/>
               <h4><b>Contact-No:</b>+1(647)561-9185</h4>
               <h4><b>Address:</b>59,Dollyvarden,toronto</h4>
            </div>
        )
    }
}