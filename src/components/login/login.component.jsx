'use client';

import Link from 'next/link';

import { Checkbox } from '@mui/material';
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
    isChecked,
    setIsChecked,
    toggleShowPassword,
    router,
    loader,
    loginWithOAuth,
    register,
    handleSubmit,
    errors
  } = useLogin();

  return (
    <div className="form-wrapper">
      <div className="form-container ">
        <div className="form-container-header">
          <Link href="/">
            <img alt="null" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="form-card  ">
          <div className="form-header">
            <h1 className="form-header-h1">Login</h1>
            <p className="form-header-p">Welcome back! Please enter your details</p>
          </div>
          <div className="form-body">
            <form className="tw-w-full" onSubmit={handleSubmit(onSubmit)} method="post">
              <div className="form-group-c">
                <label>
                  Email/Username <span>*</span>
                </label>
                <input
                  {...register('email')}
                  type="text"
                  id="email"
                  className="form-group-c-input"
                  placeholder="Email/Username"
                  required
                  style={errors.email ? borderStyle : borderSuc}
                />
                <div className="form-validation">
                  <div className="innerValidation">
                    {errors.email ? (
                      <>
                        <img alt="null" src="/assets/images/s_error.svg" />
                        {errors.email.message}
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
                  <div className="form-password_wrapper">
                    <input
                      {...register('password')}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="form-group-c-input"
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
                  <div className="form-validation">
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
              <div className="tw-flex tw-justify-between tw-pb-6">
                <div className="tw-flex tw-items-center tw-gap-2 tw-pb-6">
                  <Checkbox
                    {...register('rememberMe')}
                    name="terms"
                    id="terms"
                    className="tw-fon tw-text-[12px]
                 tw-font-normal tw-not-italic tw-leading-[18px]"
                    checked={isChecked}
                    // defaultChecked={isChecked}
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="terms"
                    className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-dark-gray"
                  >
                    Remember Me
                  </label>
                  {/* <input
                    id="check"
                    name="check"
                    type="checkbox"
                    checked={isChecked}
                    // defaultChecked={isChecked}
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                    }}
                    className=" tw-h-[13px] tw-w-[13px] tw-appearance-none tw-rounded-sm tw-border tw-border-solid tw-border-[#8d99ae] tw-p-1 checked:tw-h-[13px] checked:tw-w-[13px] checked:tw-border-[none] checked:tw-bg-transparent checked:tw-bg-center checked:tw-shadow-none"
                  />
                <Checkbox
                  name="remember"
                  id="remember"
                />
                  <label
                    htmlFor="check"
                    className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-dark-gray"
                  >
                    Remember Me
                  </label> */}
                </div>
                <Link
                  href="/forget-password"
                  onClick={() =>
                    router.push('/forget-password?btnText=Password%20Recovery%20Link')
                  }
                  className="forgotText"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="form-btn-c">
                <CustomButton
                  type="submit"
                  className="btn-primary tw-w-full"
                  text="Login"
                />
              </div>
              <div className="form-or-content">
                <div className="form-or-content-line" />
                <span className="form-or-content-span">Or</span>
                <div className="form-or-content-line" />
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
                <p className="login tw-mt-[16px] tw-text-center">
                  Create an account?
                  <Link href="/sign-up" className="span-link">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
