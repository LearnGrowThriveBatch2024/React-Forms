import './Simple_contact_form.css'
import React,{useState} from 'react';

function Simple_contact_form(){

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage] = useState();
    const [phone,setPhone] = useState();
    const [showdata, setShowData] = useState(false);
    const [showdatabtn, setShowDataBTN] = useState(false);



    function getSubmit(event){

        event.preventDefault();

        setName(document.getElementById('name').value);
        setEmail(document.getElementById('email').value);
        setMessage(document.getElementById('message').value);
        setPhone(document.getElementById('phone_no').value);
        
        if(document.getElementById('name').value === ''){
            alert('name not entered')
        }
        else if(document.getElementById('email').value === ''){
            alert('email not entered')
        }else if(document.getElementById('message').value === ''){
            alert('message not entered')
        }else if(document.getElementById('phone_no').value === ''){
            alert('phone number not entered')
        }else{
        setShowDataBTN(true);
        alert('Form Submitted Successfully');
        }
    }

    function getData(){
        setShowData(true);
    }


    return(
        <div>
           <form onSubmit={getSubmit}>
              <lable for="name" >Name:</lable>
              <input type="text" id="name" placeholder="enter your name" /><br/>
              <lable for="email" >Email:</lable>
              <input type="email" id="email" placeholder="enter your Email" /><br/>
              <lable for="message" >Message:</lable>
              <textarea id="message" placeholder="enter your message"></textarea><br/>
              <lable for="phone_no" >Phone Number:</lable>
              <input type="number" id="phone_no" placeholder="enter your phone number" />
              <button type="submit">Submit</button>
           </form>

           {showdatabtn?
           <button onClick={getData}>Show Data</button>
           :null}


           {showdata?
           <div>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Message: {message}</h2>
            <h2>Phone Number: {phone}</h2>
           </div>
           :null
           }
        </div>
    )
}

export default Simple_contact_form;
