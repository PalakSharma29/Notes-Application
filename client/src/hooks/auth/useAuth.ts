import { useMutation } from "@tanstack/react-query"
import { AuthResponse, LoginPayload, RegisterPayload } from "../../api/auth-api/data/types"
import { loginUser, registerUser } from "../../api/auth-api/authApi"

export const useRegister = () => {
   return useMutation<AuthResponse, Error, RegisterPayload>({
        mutationFn : registerUser,
    })
}

export const useLogin = () => {
   return useMutation<AuthResponse, Error, LoginPayload>({
        mutationFn : loginUser,
    })
}