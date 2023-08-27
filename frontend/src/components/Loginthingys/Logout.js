import React, { useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { UserIdContext } from "../../contexts/UserIdContext";

function handleLogout(instance, setUserId) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
    setUserId('');
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const Logout = () => {
    const { instance } = useMsal();
    const {setUserId} = useContext(UserIdContext);

    return (
        <span onClick={() => handleLogout(instance, setUserId)}>Logout</span>
    );
}