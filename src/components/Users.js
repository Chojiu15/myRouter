import {useParams, useLocation} from 'react-router-dom'


const Users = (props) => {
    const location = useLocation()
    const {userId} = useParams()
    console.log(location)
    
    

    return <h1>My User {location.state.data.name} with the id :  {userId}  </h1>;
  };

  export default Users