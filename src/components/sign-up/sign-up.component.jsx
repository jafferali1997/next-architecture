'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Link from 'next/link';
import LoginWithLinkedIn from '@/common/components/login-with-linkedIn/login-with-linkedIn.component';
import {
  signInWithFacebook,
  signInWithGoogle,
  signInWithMicrosoft
} from '@/common/utils/firebase';
import useSignUp from './use-sign-up.hook';
import CustomButton from '@/common/components/custom-button/custom-button.component';

function SignUp() {
  const {
    isEnableButton,
    handleSubmit,
    onSubmit,
    register,
    errors,
    borderStyle,
    borderSuc,
    showPassword,
    toggleShowPassword,
    isChecked,
    loader,
    signUpWithOAuth,
    router
  } = useSignUp();

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="signup-form-card" isEnableButton={isEnableButton}>
          <div className="form-header">
            <h1>Sign up</h1>
            <p>Welcome. Please enter your details </p>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group-c">
                <label>
                  Username <span>*</span>
                </label>
                <input
                  {...register('username')}
                  type="text"
                  name="username"
                  className="form-control-c"
                  placeholder="Username"
                  style={errors.username ? borderStyle : borderSuc}
                />
                <div className="signup-validation ">
                  {errors.username ? (
                    <>
                      <img
                        alt="img"
                        height="10px"
                        width="10px"
                        src="/assets/images/s_error.svg"
                      />
                      {errors.username.message}
                    </>
                  ) : null}
                </div>
              </div>
              <div className="form-group-c">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  name="email"
                  className="form-control-c"
                  placeholder="example@example.com"
                  style={errors.email ? borderStyle : borderSuc}
                />
                <div className="signup-validation ">
                  {errors.email ? (
                    <>
                      <img
                        alt="img"
                        height="10px"
                        width="10px"
                        src="/assets/images/s_error.svg"
                      />
                      {errors.email.message}
                    </>
                  ) : null}
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
                      name="password"
                      className="form-control-c"
                      placeholder="*****"
                      required
                      style={errors.password ? borderStyle : borderSuc}
                    />
                    <img
                      role="presentation"
                      height="22px"
                      width="22px"
                      alt="img"
                      onClick={toggleShowPassword}
                      className="eye_iocn"
                      src={
                        showPassword
                          ? '/assets/images/pass_icon.png'
                          : '/assets/images/eye.svg'
                      }
                    />
                  </div>

                  <div className="signup-validation ">
                    {errors.password ? (
                      <>
                        <img
                          height="10px"
                          width="10px"
                          src="/assets/images/s_error.svg"
                          alt="img"
                        />
                        {errors.password.message}
                      </>
                    ) : (
                      <p className="passText color_bbb">
                        Use 8 or more characters with a mix of letters, numbers & symbols
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  // checked={isChecked}
                  name="terms"
                  id="terms"
                  // onChange={() => handleCheckboxChange(errors)}
                />
                <label htmlFor="terms">Term & Condition</label>
              </div>

              <div className="signup-validation tw-mt-3">
                <div className="marignDiv">{isChecked === false ? errors.terms : ''}</div>
              </div>

              <div className="form-btn-c tw-mt-5">
                <CustomButton
                  type="submit"
                  className="submit-btn"
                  loading={loader}
                  disabled={loader}
                  text=" Sign up"
                />
              </div>
              <div className="form-or-content">
                <div className="line" />
                <span>Or</span>
                <div className="line" />
              </div>
              <div className="login-with-provider tw-m-0 tw-mt-[24px]">
                <button
                  onClick={() => signInWithGoogle(signUpWithOAuth)}
                  className="login-provider-btn"
                  type="button"
                >
                  <img src="/assets/images/google-icon.svg" alt="login with Google" />
                </button>
                <button
                  onClick={() => signInWithFacebook(signUpWithOAuth)}
                  className="login-provider-btn"
                  type="button"
                >
                  <img src="/assets/images/facebook-icon.svg" alt="login with Facebook" />
                </button>
                <button
                  onClick={() => signInWithMicrosoft(signUpWithOAuth)}
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
              <div className="form_links tw-mt-[32px]">
                <label className="login">Already have an account?</label>
                <label className="login2" onClick={() => router.push('/login')}>
                  Login
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
