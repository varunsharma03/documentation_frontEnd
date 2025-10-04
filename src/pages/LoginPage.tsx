import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { Button, Typography } from "@mui/material";
import LoginWithGoogle from "../components/LoginWithGoogle";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

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

  const methods = [
    {
      name: "Login with password",
      component: (
        <LoginComponent
          setPassword={setPassword}
          setUsername={setUsername}
          onSubmit={handleLoginWithPassword}
        />
      ),
      key: 123,
    },
    {
      name: "Login with Google",
      component: <LoginWithGoogle onSubmit={handleGoogleAuthLogin} />,
      key: 124,
    },
  ];

  const selected = methods.find((item) => item.key === selectedMethod);

  return (
    <div>
      {!selected &&
        <>
          <Typography variant="h4" gutterBottom>
            Welcome To Documentation
          </Typography>
          {methods.map((item) => (
            <div
              key={item.key}
              style={{
                cursor: "pointer",
                padding: "10px",
                backgroundColor: selectedMethod === item.key ? "#eee" : "#fff",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            >

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => setSelectedMethod(item.key)}
              >
                {item.name}
              </Button>
            </div>
          ))}
        </>
      }

      {selected &&
        <>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => setSelectedMethod(null)}
          >
            Back
          </Button>
          <div>{selected.component}</div>
        </>
      }

    </div>
  );
};

export default LoginPage;
