import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {

  const [emailId, setEmailId] = useState("lewis@gmail.com")
  const [password, setPassword] = useState("Lewis@123")
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleLogin =async ()=>{
    try {
      const res = await axios.post(
       BASE_URL + "/login",
        {
          emailId,
          password
        },
        {withCredentials: true}
      )
      dispatch(addUser(res.data))
      return navigate('/')
    } catch (err) {
      setError(err?.response?.data || "Something went wrong")
      console.log(err)
    }
  }

  return (
    <div className="flex justify-center mt-30">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email ID</legend>
            <input type="text" value={emailId} className="input" placeholder="Enter your Email ID" onChange={(e) => setEmailId(e.target.value)} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="text" value={password} className="input" placeholder="Enter Password"  onChange={(e) => setPassword(e.target.value)}/>
          </fieldset>
          <p className="text-red-400 text-sm">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
