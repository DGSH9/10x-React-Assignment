import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const employee = {
      name:"Alan Ford",
      id:"00005152",

      appointment:"9:00 (24-05-2016)",
      email:"alan.form@email.nl",
      phone:"+31123456789",

      status:"In Progress",
      door:"Mark",
      time:"10:30 ",
      date:"(25-05-2016)",
      image_key:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wbG95ZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      strong1_key:"Boltaart Bosbessen",
      label1_key:"Overheerlijke..I dont understand this language...Bijenkorf"

}


ReactDOM.render(
  <React.StrictMode>
    <App employee={employee} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
