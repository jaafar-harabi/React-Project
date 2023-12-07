import { useState } from "react"
import styles from "./styles.module.css"
import { v4 as uuidv4 } from 'uuid';
const { classForm } = styles
import {InputForm} from "../../components"
import {Button} from "@material-tailwind/react"

const initialState={
    id:uuidv4(),
  
    name:"",
    age:"",
    location:"",
    phone:""
}

const UserForm = ({addUser}) => {
  const [form,setForm]=useState({
    initialState
  })

  const inputHandler = (e)=>{
    const {name,value}=e.target 
    setForm((prevValue)=>({...prevValue,[name]:value}))
  }

  const formHandler=(e)=>{
    e.preventDefault()
    addUser(form)
    setForm(initialState)
  }
  
  

  return (
    <div className={classForm} >

  
      <form  onSubmit={formHandler} className="text-center">
      
      <InputForm  type="text" name="name" value={form.name} inputHandler={inputHandler}  />
    
      <InputForm  type="text" name="age" value={form.age} inputHandler={inputHandler}  />

      <InputForm  type="text" name="location" value={form.location} inputHandler={inputHandler}  />

      <InputForm  type="text" name="phone" value={form.phone} inputHandler={inputHandler}  />

      
      <Button type="submit" className="mt-5 ">Submit</Button>
      
    </form>
  </div>
  )
}

export default UserForm