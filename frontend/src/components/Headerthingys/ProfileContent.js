import { UserIdContext } from '../../contexts/UserIdContext';
import { loginRequest } from "../../configs/authConfigs";
import { callMsGraph } from "../Loginthingys/graph";
import { useMsal } from "@azure/msal-react";
import { useContext, useState } from 'react';

function ProfileData(graphData, setUserId) {
	const postUser = async () => {
		const response = await fetch('https://tame-blue-deer-tie.cyclic.cloud/auth/postUser', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				Name: graphData.givenName,
				roll_no: graphData.surname,
				email: graphData.userPrincipalName,
				microsoftId: graphData.id,
				program: graphData.jobTitle
			}),
		}, {mode: 'cors'});
		
		// const data = await response.json();
		// console.log(data);
		if(response.ok){
			const data = await response.json();
			console.log(data);
		} else {
			console.log("Error in posting user data in database.");
		}
	}
	postUser();
	setUserId(graphData.id);
	console.log(graphData.id);
}



const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
	const {setUserId} = useContext(UserIdContext);

    // const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }
    return (
        <>
            {graphData ? 
                ProfileData(graphData, setUserId)
                :
                RequestProfileData()
            }
        </>
    );
};

export default ProfileContent;
