//Action Types:
export const LOGIN = "LOGIN";
export const SIGN_UP ="SIGN_UP"

//Action Creators:
export const userLogin = (payload) => ({ type: LOGIN, payload });
export const userSignup =(payload) =>{
    return {
        type:SIGN_UP,
        payload
    }
}