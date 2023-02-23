import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useStore } from "../hooks/useStore";
import { oauthLogin } from '../api/api'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const setAuthData = useStore((state) => state.setAuthData);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    >
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const accessToken = await oauthLogin(credentialResponse.credential)
          setAuthData(accessToken);
          console.log("got access token, rerouting to home");
          navigate("/");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default Login;

