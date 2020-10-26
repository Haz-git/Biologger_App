export const logouthelper = () => {
    //Remove JWT.
    localStorage.removeItem('jwt');
    console.log('User has logged out successfully');
    window.location.reload(true);

}