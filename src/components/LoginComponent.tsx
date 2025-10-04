import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
type LoginProps = {
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  onSubmit: () => void;
  children?: React.ReactNode
};

const LoginComponent: React.FC<LoginProps> = ({
  setUsername = () => { },
  setPassword = () => { },
  onSubmit = () => { },
  children
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);


  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: 350,
          textAlign: "center",
        }}
      >
        <Typography variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}>
          Login to start
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Username or Email"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb: 1 }}
          onClick={onSubmit}
        >
          Login
        </Button>
        {children}
      </Paper>
    </Box>
  );
};

export default LoginComponent;
