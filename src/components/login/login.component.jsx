'use client';

import Link from 'next/link';

import LoginWithLinkedIn from '@/common/components/login-with-linkedIn/login-with-linkedIn.component';
import {
  signInWithFacebook,
  signInWithGoogle,
  signInWithMicrosoft
} from '@/common/utils/firebase';
import useLogin from './use-login.hook';
import { getAccessToken } from '@/common/utils/access-token.util';
import CustomButton from '@/common/components/custom-button/custom-button.component';

export async function getServerSideProps(context) {
  const accessToken = getAccessToken();
  console.log(accessToken, 'check token');

  if (accessToken) {
    return {
      redirect: {
        destination: '/customer',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}
export default function Login() {
  // hooks
  const {
    onSubmit,
    borderStyle,
    borderSuc,
    showPassword,
    toggleShowPassword,
    router,
    loader,
    loginWithOAuth,
    register,
    handleSubmit,
    errors
  } = useLogin();
  return (
    <div className="login-wrapper">
      <div className="login-container ">
        <div className="header">
          <Link href="/">
            <img alt="null" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="login-form-card ">
          <div className="form-header">
            <h1>Login</h1>
            <p>Welcome back! Please enter your details</p>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <div className="form-group-c">
                <label>
                  Email/Username <span>*</span>
                </label>
                <input
                  {...register('username')}
                  type="text"
                  id="username"
                  className="form-control-c"
                  placeholder="Email/Username"
                  required
                  style={errors.username ? borderStyle : borderSuc}
                />
                <div className="login-validation">
                  <div className="innerValidation">
                    {errors.username ? (
                      <>
                        <img alt="null" src="/assets/images/s_error.svg" />
                        {errors.username.message}
                      </>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="form-group-c">
                <label>
                  Password <span>*</span>
                </label>
                <div className="pass_input_div">
                  <div className="password_wrapper">
                    <input
                      {...register('password')}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="form-control-c"
                      placeholder="*******"
                      style={errors.password ? borderStyle : borderSuc}
                    />
                    <img
                      role="presentation"
                      height="22px"
                      width="22px"
                      onClick={toggleShowPassword}
                      alt="toggle password"
                      className="eye_iocn"
                      src={
                        showPassword
                          ? '/assets/images/pass_icon.png'
                          : '/assets/images/eye_icon.svg'
                      }
                    />
                  </div>
                  <div className="login-validation">
                    <div className="innerValidation">
                      {errors.password ? (
                        <>
                          <img src="/assets/images/s_error.svg" alt="error" />
                          {errors.password.message}
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-checkbox">
                <div className="check-content">
                  <input id="check" type="checkbox" />
                  <label htmlFor="check" className="remember">
                    Remember Me
                  </label>
                </div>
                <span
                  onClick={() =>
                    router.push({
                      pathname: '/forget-password',
                      query: { btnText: 'Password Recovery Link' }
                    })
                  }
                  className="forgotText"
                >
                  Forgot Password?
                </span>
              </div>
              <div className="form-btn-c">
                <CustomButton
                  type="submit"
                  className="submit-btn"
                  loading={loader}
                  disabled={loader}
                  text="Login"
                />
              </div>
              <div className="form-or-content">
                <div className="line" />
                <span>Or</span>
                <div className="line" />
              </div>
              <div className="login-with-provider">
                <button
                  onClick={() => signInWithGoogle(loginWithOAuth)}
                  className="login-provider-btn"
                  type="button"
                >
                  <img src="/assets/images/google-icon.svg" alt="login with Google" />
                </button>
                <button
                  onClick={() => signInWithFacebook(loginWithOAuth)}
                  className="login-provider-btn"
                  type="button"
                >
                  <img src="/assets/images/facebook-icon.svg" alt="login with Facebook" />
                </button>
                <button
                  onClick={() => signInWithMicrosoft(loginWithOAuth)}
                  className="login-provider-btn"
                  type="button"
                >
                  <img
                    src="/assets/images/microsoft-icon.svg"
                    alt="login with Microsoft"
                  />
                </button>
                <LoginWithLinkedIn />
              </div>
              <div>
                <span className="login">
                  Create an account?
                  <span className="login2" onClick={() => router.push('/sign-up')}>
                    Signup
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
