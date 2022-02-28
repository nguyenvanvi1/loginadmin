import React, {useState} from 'react';
import LoginForm from './component/LoginForm';


function App() {
  const adminUser = {
    email:"admin@admin.com",
    password:"admin123"
  }
  const [user,setUser] = useState({name:"",email:""})
  const [error,setError] = useState("")
  const Login = details=>{
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("thanh cong")
      setUser({
        name:details.name,
        email: details.email
      })
    }else{
      setError("Vui lòng nhập đầy đủ các trường")
    }
  }
  const Logout = ()=>{
    console.log("Logout")
    setUser({name: "", email:""})
  }
  return (
    <div className="App">
      {(user.email != "") ? (
      <div className='welcome'>
        <h2>Welcome<span> {user.name}</span></h2>
        <h1>{user.email}</h1>
        <button onClick={Logout}>Logout</button>
      </div>):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
