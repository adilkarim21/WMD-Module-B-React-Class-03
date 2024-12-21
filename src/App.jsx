import React from 'react'
import './App.css'
import Button from './components/Button/Button';
import Student from './components/Student/Student';
import { Data } from './Data';
import Card from './components/Card/Card';

function App() {

  // console.log("App component render...");

  console.log(Data);

  return (
    
    <>

      {/* <h1>App Component</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum obcaecati optio, culpa, soluta excepturi incidunt similique atque quasi, vero nesciunt animi. Quisquam, necessitatibus. Quasi deleniti similique nostrum numquam reprehenderit?</p> */}


      {/* <Button BtnName="Submit" />
      <Button BtnName="Search" />
      <Button BtnName="Login" />
      <Button BtnName="Find" />
      <Button BtnName="Signup" /> */}


      {/* <Student stdName={prompt("Enter Your name")} stdAge={17} stdStatus={true} />
      <Student stdName="Zain" stdAge={23} stdStatus={false} />
      <Student stdName="Umer" stdAge={28} stdStatus={true} />
      <Student />
      <Student stdName="Ali" />
      <Student stdName="Zeeshan" stdAge={42} />
      <Student stdName="Yusuf" stdAge={25} stdStatus={true} />  */}


      {/* There are three(3) ways to apply css in jsx elements */}

      {/* 1) Inline CSS */}
      {/* 2) External CSS */}
      {/* 3) Module CSS */}


      {
        Data.map((e, i) => {
          return <Card key={i} imgSRC={e.ImgSRC} title={e.title} desc={e.desc} />
        })
      }
      
    </>
  
  )

}

export default App
