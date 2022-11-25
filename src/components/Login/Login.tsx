import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import {
  AppStateType,
  useAppDispatch,
  useAppSelector,
} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required]}
          component={Input}
          name={"email"}
          placeholder={"Email"}
        />

        <Field
          validate={[required]}
          placeholder={"Password"}
          name={"password"}
          component={Input}
          type={"password"}
        />
      </div>
      <div>
        <Field component={Input} type={"checkbox"} name={"rememberMe"} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);

const Login = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const onSubmit = (formData: FormDataType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe));
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  } else
    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
