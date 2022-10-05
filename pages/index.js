import LoginForm from  '../components/LoginForm';

import { Button, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  //before, during and after

  const [loginState, setLoginState] = useState("before")
  var c = "blue";
  const r = useRouter();
  var button_next = "click me to start";

  if (loginState === "before") {
    c = "blue";
  }

  if (loginState === "during") {
    c = "green";
    button_next = "loading...";
  }

  if (loginState === "after") {
    c = "grey"
    button_next = "logged in";
  }

  // const HandleButton = () => {
  //   if (loginState === "before") {
  //     setLoginState("during");
  //   }

  //   if (loginState === "during") {
  //     setLoginState("after");

  //   }

  //   if (loginState === "after") {
  //     r.push("/dashboard");
  //   }
  // }

  const Login = async () => {
    setLoginState("during");
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoginState("after");
    await new Promise(resolve => setTimeout(resolve, 2000));

    r.push("/dashboard");

  }


  return (
    <div >
      <LoginForm
        loginState={loginState}
        onLoginClick={() => Login()}
      />

    </div>
  )
}
