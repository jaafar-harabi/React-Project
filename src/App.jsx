import { useState } from "react"
import {UserInfo,UserForm,Container} from "./components"




function App() {
  
const [userData,setUserData]=useState([
  

])

  
  
  const addUser=(newUser)=>{
    // newUser.id=Math.floor(Math.random()*100)
    setUserData([...userData,newUser])}

  return (
    <div className="grid grid-cols-2 ">
        <div>
          <Container> <UserForm addUser={addUser}/> </Container>
        </div>

        <div>
          <UserInfo userData={userData}/>

        </div>
    
    
        
    </div>
  )
}

export default App
