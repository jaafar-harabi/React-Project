import {Input} from "@material-tailwind/react"

const InputForm = ({type, name, value, inputHandler  }) => {
  return (
    <>
      
      <Input label={name} type={type} name={name} value={value} onChange={inputHandler} className=""/>

    </>
  )
}

export default InputForm