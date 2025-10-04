import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

type LoginWithGoogleProps = {
    onSubmit: (value: string) => void | Promise<void>;
};

const LoginWithGoogle: React.FC<LoginWithGoogleProps> = ({ onSubmit }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
                padding: "20px",
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: "40px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "400px",
                }}
            >
                <h2
                    style={{
                        marginBottom: "20px",
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#333",
                    }}
                >
                    Sign in with Google
                </h2>

                <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            onSubmit(credentialResponse.credential!);
                        }}
                        onError={() => console.log("Google Login Failed")}
                        useOneTap
                    />
                </GoogleOAuthProvider>

                <p
                    style={{
                        marginTop: "20px",
                        fontSize: "14px",
                        color: "#777",
                        textAlign: "center",
                    }}
                >
                    By signing in, you agree to our terms and privacy policy.
                </p>
            </div>
        </div>
    );
};

export default LoginWithGoogle;
