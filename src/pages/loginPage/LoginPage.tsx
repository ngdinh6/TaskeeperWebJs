import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Image } from "antd";
import imageLogin from "assets/images/login.png";
import * as Style from "pages/loginPage/style";

const LoginPage = (props: any) => {
  const { history } = props;

  return (
    <div className="ant">
      <Style.Header>TASKEEPER</Style.Header>
      <Style.Main>
        <Style.TitleSay>WELCOME TO US</Style.TitleSay>
        <Style.Description>
          Where to find the suitable job for you
        </Style.Description>
        <Image width={500} height={400} src={imageLogin} />
      </Style.Main>
      <Style.LoginForm
        name="normal_login"
        initialValues={{
          remember: true,
        }}
      >
        <Style.TitleView>
          <Style.Title>Sign In</Style.Title>
        </Style.TitleView>
        <Style.TitleView
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email or Phone!",
            },
          ]}
        >
          <Style.Email />
        </Style.TitleView>
        <Style.TitleView
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Style.Password type="password" />
        </Style.TitleView>
        <Form.Item>
          <Style.LoginFormForgot to="/forgotPassword">
            Forgot password
          </Style.LoginFormForgot>
        </Form.Item>

        <Form.Item>
          <Style.LoginFormButton type="primary" htmlType="submit">
            <Style.SignInText>SIGN IN</Style.SignInText>
          </Style.LoginFormButton>
        </Form.Item>
        <Style.SignWithOther>
          <Style.SignWithOtherText>Or sign in with</Style.SignWithOtherText>
        </Style.SignWithOther>
        <Style.FormSignWithOther>
          <Style.SignWithFacebook>
            <Style.SignWithTextFb>f</Style.SignWithTextFb>
          </Style.SignWithFacebook>
          <Style.SignWithGoogle>
            <Style.SignWithTextGoogle>G</Style.SignWithTextGoogle>
          </Style.SignWithGoogle>
        </Style.FormSignWithOther>
        <Style.SignUpButton>
          <Style.ButtonText>
            Don't have an account?
            <Style.SignUpButtonText to="/register">
              Sign up
            </Style.SignUpButtonText>
          </Style.ButtonText>
        </Style.SignUpButton>
      </Style.LoginForm>
    </div>
  );
};
export default LoginPage;