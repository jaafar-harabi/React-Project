
import ProtoTypes from "prop-types"

import { Card} from "@material-tailwind/react";
import { useEffect } from "react";




const UserInfo = ({userData}) => {
  useEffect(()=>{
      console.log(userData)
  },[userData])
  return (
    <Card className="mt-20 mx-auto" >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Phone</th>
          
          </tr>
          
        </thead>
        <tbody>
        {userData.map((user)=>{
          return(
            <tr key={user.id} className="text-center">
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.location}</td>
              <td>{user.phone}</td>
          
            </tr>
          )

        
          
        })

        }
          

        </tbody>
      </table>
      
    
    
    </Card>
  )
}
UserInfo.ProtoTypes = {
  name: ProtoTypes.string,
  age: ProtoTypes.string,
  location: ProtoTypes.string,
  phone: ProtoTypes.string
}

export default UserInfo