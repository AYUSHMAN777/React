import React from 'react'
import UserContext from './UserContext'

function UserProvider({children}) {
const [user,setuser]=React.useEffect(null);
  return (
  < UserContext.Provider value={{user,setuser}}>  // value is object which have two properties user,setuser which is used to access and update the data
   {children}           //{children} is a placeholder that represents the child components or content that will be wrapped by the UserContextProvider.
  </ UserContext.Provider>
  )
}
export default UserProvider