import React, { Fragment, useEffect } from "react";
import './App.css';
import RoutePath from "./../routes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthProvider } from "../utils/auth";

function App() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 1000
        });
    }, [])

  return (
    <AuthProvider>
      <Fragment>
        <div>
          <RoutePath />
        </div>
    </Fragment>
    </AuthProvider>
  );
}

export default App;
