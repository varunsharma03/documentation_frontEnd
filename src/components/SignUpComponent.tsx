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

type SignupProps = {
    setUsername: (value: string) => void;
    setPassword: (value: string) => void;
    onSubmit: () => void;
    children?: React.ReactNode;
};

const SignupComponent: React.FC<SignupProps> = ({
    setUsername = () => { },
    setPassword = () => { },
    onSubmit = () => { },
    children,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({ passWordNotMatch: "" })

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const toggleConfirmPasswordVisibility = () =>
        setShowConfirmPassword((prev) => !prev);

    const handleSubmit = () => {
        if (confirmPassword !== "") {
            if (confirmPassword !== (document.getElementById("signup-password") as HTMLInputElement)?.value) {
                setError((prev) => ({ ...prev, passWordNotMatch: "Password doesn't match" }));
                return;
            }
        }
        onSubmit();
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    padding: 5,
                    borderRadius: 3,
                    width: 380,
                    textAlign: "center",
                    background: "white",
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#333" }}
                >
                    Create Account
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                    Sign up to get started 🚀
                </Typography>

                <TextField
                    fullWidth
                    margin="normal"
                    label="Username"
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <TextField
                    id="signup-password"
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

                <TextField
                    fullWidth
                    margin="normal"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    variant="outlined"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={toggleConfirmPasswordVisibility}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Typography sx={{ color: "#333" }}>
                    {error.passWordNotMatch}
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        mt: 3,
                        mb: 2,
                        py: 1.2,
                        fontWeight: "bold",
                        borderRadius: 2,
                        background:
                            "linear-gradient(90deg, rgba(106,17,203,1) 0%, rgba(37,117,252,1) 100%)",
                    }}
                    onClick={handleSubmit}
                >
                    Sign Up
                </Button>
                {children}
            </Paper>
        </Box>
    );
};

export default SignupComponent;
