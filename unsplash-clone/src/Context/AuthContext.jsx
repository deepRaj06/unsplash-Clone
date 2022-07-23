import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

    // const [state, setState] = useState({
    //   isAuth: false,
    //   token: null
    // });
    const [isAuth, setIsAuth] = useState(false);

    const [query, setQuery] = useState('');

    const [imgs, setImgs] = useState([]);

    const [searchedImg, setSearchedImg] = useState(false);

    // const [tabIndex, setTabIndex] = React.useState(0)
  
    // function handleLogin(token) {
    //   setState({
    //     ...state,
    //     isAuth: true,
    //     token: token
    //   });
    // }
  
    // function handleLogout() {
    //   setState({
    //     ...state,
    //     isAuth: false,
    //     token: null
    //   });
    // }
  
    return (
      <AuthContext.Provider
        value={{ isAuth, 
          setIsAuth, 
          query, 
          setQuery, 
          imgs, 
          setImgs, 
          searchedImg, 
          setSearchedImg,
         }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
