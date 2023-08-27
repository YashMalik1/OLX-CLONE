import { Route, Routes } from "react-router-dom";
import Postad from "../../pages/Sellingpage/Postad";
import React from 'react';
import HomePage from "../../pages/HomePage";
import AdDescPage from "../../pages/Ad Page/AdDescPage";
import ProfilePage from "../../pages/Profile-Page-thingys/ProfilePage";

const Navigation = () => {
	return (
		<>
			<Routes>
				<Route path="/ads">
					<Route path=":id" element={<AdDescPage />} />
				</Route>
				<Route path="/" element={<HomePage />} />
				<Route path="/ads/post-ad" element={<Postad />} />
				<Route path="/profile-page" element={<ProfilePage />} />
			</Routes>
		</>
	);
};

export default Navigation;
