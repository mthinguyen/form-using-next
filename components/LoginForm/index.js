import { Button, Loader, Input } from 'semantic-ui-react';

export default function LoginForm({
    loginState = "before",
    onLoginClick = () => { }

}) {

    var c = "blue";
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

    return <div>
        <h3>Login Form</h3>
        <Input disabled={loginState !== "before"} placeholder="email" />
        <Input disabled={loginState !== "before"} placeholder="password" />


        <Button
            color={c}
            onClick={onLoginClick} >

            {button_next}
            {loginState === "during" && <Loader active />}

        </Button>
    </div>
}