import Bodyforsellingpage from './Bodyforsellingpage';
import logo from '../../assets/Logo.png';
import classes from './Postad.module.css'
import { Link } from "react-router-dom";

const Postad = () => {
    return (
        <div>
            <img src='https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80' alt='background' className={classes.background}></img>
            
            <header>
                <div className={classes.image}>
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
            </header>
            <main>
                <Bodyforsellingpage />
            </main>
        </div>
    );
}

export default Postad;
