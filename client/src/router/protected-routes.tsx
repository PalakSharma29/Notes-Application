import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context/auth-context"
import { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const {token} = useAuth();

    if(!token){
        return <Navigate to="/login" replace/>
    }
    return children;
}

export default ProtectedRoute;