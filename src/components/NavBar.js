import { Link, NavLink } from "react-router-dom";
import {useState} from 'react'

const NavBar = () => {
    const [data, setData] = useState({
        name : 'John',
        surname : 'Doe',
        age : 42,
        userId : 25
    })

  return (
    <nav>
      <Link to={{
          pathname : `/users/${data.userId}`,
          state : {data : data} 
      }}>Users</Link>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/admin"
      >
        Admin
      </NavLink>
    </nav>
  );
};

export default NavBar;
