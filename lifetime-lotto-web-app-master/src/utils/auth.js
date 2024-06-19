import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userRegisteration, userLogin } from "./index";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ isLoggedIn: false });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("isLogged");
    if (loggedInUser) {
      setUser({ isLoggedIn: true, accessToken: localStorage.getItem("accessToken"), userId: localStorage.getItem("userId") });
    }
  }, []);

  const register = async (body) => {
    await userRegisteration(body)
      .then((res) => {
        if (res.message === "Success") {
            localStorage.setItem('isLogged', true)
            localStorage.setItem('accessToken', res.data.token)
            localStorage.setItem('userId', res.data.id)
          setUser({ isLoggedIn: true, accessToken: res.data.token, userId: res.data.id });
          navigate("/");
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const login = async (body) => {
    await userLogin(body)
      .then((res) => {
        if (res.message === "Success") {
            localStorage.setItem('isLogged', true)
            localStorage.setItem('accessToken', res.data.token)
            localStorage.setItem('userId', res.data.id)
          setUser({ isLoggedIn: true, accessToken: res.data.token, userId: res.data.id });
          navigate("/");
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const logout = () => {
    // debugger;
    localStorage.clear('isLogged');
    localStorage.clear('accessToken');
    localStorage.clear('userId')
    setUser(null);
    navigate("/");
    window.location.reload(true);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
