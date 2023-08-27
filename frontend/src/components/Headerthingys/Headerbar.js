import Login from "../Loginthingys/Login";
import classes from "./Headerthingys.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import search from "../../assets/SearchIcon.png";
import plus from "../../assets/plus.png";
import Profile from "../Profilethingys/Profile";
import { useContext } from 'react';
import { useIsAuthenticated } from "@azure/msal-react";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { QueryNameContext } from "../../contexts/QueryNameContext";
import { QueryHostelContext } from "../../contexts/QueryHostelContext";
import ProfileContent from "./ProfileContent";


const Headerbar = () => {
	const isAuthenticated = useIsAuthenticated();

	const {setQueryName} = useContext(QueryNameContext);
	const {setQueryHostel} = useContext(QueryHostelContext);
	// console.log("Query name is ", queryName);
	// console.log("Query hostel is ", queryHostel);

	return (
		<div className={classes.header}>
			<div className={classes.flexcontainer}>
				<div className={classes.logo}>
					<Link to="/">
						<img src={logo} height={80} alt="backtohome" />
					</Link>
				</div>
				<div className={classes.hostel}>
					<form>
						<input
							className={classes.hostelbox}
							list="locations"
							id="hostel-locations"
							placeholder="Search within a hostel..."
							onChange={e => setQueryHostel(e.target.value)}
						/>
						<datalist id="locations">
							<option value="Siang Hostel"></option>
							<option value="Lohit Hostel"></option>
							<option value="Disang Hostel"></option>
							<option value="Brahmaputra Hostel"></option>
							<option value="Kapili Hostel"></option>
							<option value="Kameng Hostel"></option>
							<option value="Umiam Hostel"></option>
							<option value="Barak Hostel"></option>
							<option value="Dihing Hostel"></option>
							<option value="Dhansiri Hostel"></option>
							<option value="Subhansiri Hostel"></option>
							<option value="Disang(Girl's wing) Hostel"></option>
						</datalist>
					</form>
				</div>
				<div className={classes.searchbar}>
					<form>
						<input
							className={classes.searchbarbox}
							type='text'
							id="item-names"
							placeholder="Search any product by name..."
							onChange={e => setQueryName(e.target.value.toLowerCase())}
						/>
						<button onClick={e => e.preventDefault()} type='button'>
							<img src={search} alt="search" />
						</button>
					</form>
				</div>
				<AuthenticatedTemplate>
					<ProfileContent />
				</AuthenticatedTemplate>
				<AuthenticatedTemplate>
					 <Profile />
				</AuthenticatedTemplate>
				<div className={classes.log_prof_button}>
					{isAuthenticated ? null : <Login />}
				</div>
				{isAuthenticated ? (
					<>
					<Link to="/ads/post-ad">
						<div className={classes.sell}>
							<img src={plus} className={classes.sellimage} alt="sell"></img>
							<strong className={classes.sell_button}>SELL</strong>
						</div>
					</Link>
					</>
				) : (
					<>
						<div className={classes.sell} onClick={() => alert("You are not signed in. Sign in to post your Ad.")}>
							<img src={plus} className={classes.sellimage} alt="search"></img>
							<strong className={classes.sell_button}>SELL</strong>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Headerbar;
