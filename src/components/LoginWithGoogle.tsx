import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

type LoginWithGoogleProps = {
    onSubmit: (value: string) => void | Promise<void>;
};

const LoginWithGoogle: React.FC<LoginWithGoogleProps> = ({ onSubmit }) => {
    return (
        <div
            style={{
                alignItems: "center",
                backgroundColor: "#f5f5f5",
            }}
        >
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        onSubmit(credentialResponse.credential!);
                    }}
                    onError={() => console.log("Google Login Failed")}
                    useOneTap
                />
            </GoogleOAuthProvider>

        </div>
    );
};

export default LoginWithGoogle;
