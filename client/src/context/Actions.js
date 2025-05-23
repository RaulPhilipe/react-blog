export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCESS",
    payload: user,
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});
