import {Link} from "react-router-dom";
import "../../../../../pet-hub/my-app/src/styles/login.scss";
import {Input} from "../../../../../pet-hub/my-app/src/shared/Input";
import useInput from "../../../../../pet-hub/my-app/src/hooks/useInput";

const Login = () => {
  const email = useInput("");
  const password = useInput("");

  return (
    <div className="login">
      <div className="login__box">
        <h2 className="login__box-title title">pets only</h2>
      </div>
      <div className="login__container">

        <form className="login__form">
          <Input
            {...email}
            placeholder="login"
          />
          <Input
            isPassword={true}
            {...password}
            placeholder="password"
          />
          <button>Sign In</button>
        </form>

        <div>
          <Link to="/"><h1>go home</h1></Link>
          fsdf
          login
        </div>
      </div>
    </div>
  );
};

export default Login;