export const getTokenFromStorage = () : string => {
    return localStorage.getItem("token") || '';
}