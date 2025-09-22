import React,{useState} from 'react'
import Login from './Login'
import Signup from './Signup'

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
        {isLogin ?(
            <Login switchToSignup={() => setIsLogin(false)} />
        ):(
 <Signup switchToLogin={() => setIsLogin(true)} />
        )}
    </div>
  );
};


export default Auth