export const msalConfig = {
    auth: {
      clientId: "1202a425-bb3c-4141-ace6-f1b7b67b5730",
      authority: "https://login.microsoftonline.com/common", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://olxclone-for-iitg.web.app/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};
  
// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
   scopes: ["User.ReadBasic.All"]
};
  
// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    // graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
    // graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/photo/$value"
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};