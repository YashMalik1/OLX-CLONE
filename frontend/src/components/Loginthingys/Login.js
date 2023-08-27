import classes from './Login.module.css'
import login from '../../assets/login.png'
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../configs/authConfigs";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

const Login = () => {

    const { instance } = useMsal();

    return (
        <button onClick={() => handleLogin(instance)} className={classes.login}>
            <strong>
                <span>Login</span>
                <img src={login} />
            </strong>
        </button>
    );
}
 
export default Login;