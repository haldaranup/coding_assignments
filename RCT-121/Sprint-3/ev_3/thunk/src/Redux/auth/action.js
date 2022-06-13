export const authAction = {

    GET_USERS_LIST_REQUEST: 'ADD_AUTH_REQUEST',
  GET_USERS_LIST_SUCCESS: 'ADD_AUTH_SUCCESS',
  GET_USERS_LIST_FAILURE: 'ADD_AUTH_FAILURE'
  
  };
  

  export const authRequest = () => ({
    type: actionTypes.ADD_AUTH_REQUEST
  });

  export const authSuccess = (data) => ({
    type: actionTypes.ADD_AUTH_SUCCESS,
  
    payload: data
    
  });

  export const authFailure = () => ({
    type: actionTypes.ADD_AUTH_FAILURE
  })

  export const auth = () => {
    const [isAuth, setIsAuth] = useState("");
    const navigate = useNavigate();
    const login = (email, password) => {
      axios
        .post("https://reqres.in/api/login", { email, password })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          setIsAuth(data.token);
        });
    };
  
    const logout = () => {
      localStorage.setItem("token", "");
      setIsAuth(false);
    };
  
    useEffect(() => {
      if (isAuth) {
        navigate(from, { replace: true });
      } else {
        navigate("/login");
      }
    }, [isAuth, from, navigate]);
}