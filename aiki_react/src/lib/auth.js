const LoginRequired = (fn) => {
    console.log("Entered decoration");
    if (localStorage.userIsAuthenticated){
        console.log("Decoration worked succesfully");
        return fn();
    }
}