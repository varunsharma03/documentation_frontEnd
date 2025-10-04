import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { Button, Typography } from "@mui/material";
import LoginWithGoogle from "../components/LoginWithGoogle";
import SignupComponent from "../components/SignUpComponent";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignComp, setShowSignUpComp] = useState(false)

  const handleLoginWithPassword = async () => {
    try {
      console.log(username);
      console.log(password)
    } catch (error: unknown) {
      console.log(error, 'error')
    }
  }

  const handleGoogleAuthLogin = async (token: string) => {
    console.log(token)
  }

  const handleSignUp = async () => {
    try {
      console.log('From SignUp ')
      console.log(username);
      console.log(password)
    } catch (error: unknown) {
      console.log(error, 'error')
    }
  }




  return (
    <div>
      {
        <>
          {!showSignComp &&
            <LoginComponent setPassword={setPassword} setUsername={setUsername} onSubmit={handleLoginWithPassword} >
              <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }} onClick={() => setShowSignUpComp(true)}>Sign Up</Button>
              <LoginWithGoogle onSubmit={handleGoogleAuthLogin} />
            </LoginComponent >}

          {showSignComp &&
            <SignupComponent setPassword={setPassword} setUsername={setUsername} onSubmit={handleSignUp} >
              <Typography variant="body2" sx={{ color: "gray", mb: 2 }} onClick={() => setShowSignUpComp(false)}>
                Already have an account? <span style={{
                  cursor: "pointer", font: "bold", color: "#1976d2",
                  textDecoration: "underline",
                }} >Login</span>
              </Typography>
            </SignupComponent>
          }

        </>
      }

    </div>
  );
};

export default LoginPage;
