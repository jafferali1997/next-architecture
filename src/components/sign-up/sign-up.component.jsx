import Link from 'next/link';
import { Checkbox } from '@mui/material';
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
    router,
    setIsChecked
  } = useSignUp();

  return (
    <div className="form-wrapper">
      <div className=" form-container">
        <div className="form-container-header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="form-card " isEnableButton={isEnableButton}>
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-2 tw-px-6 tw-py-0">
            <h1 className="form-header-h1">Sign up</h1>
            <p className="form-header-p ">Welcome. Please enter your details </p>
          </div>
          <div className="form-body ">
            <form className=" tw-w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className=" tw-flex tw-flex-col tw-pb-6">
                <label className="form-group-c-label">
                  Username <span className="form-group-c-label-span ">*</span>
                </label>
                <input
                  {...register('userName')}
                  type="text"
                  name="userName"
                  className="form-group-c-input"
                  placeholder="Username"
                  style={errors.userName ? borderStyle : borderSuc}
                />
                <div className="form-validation ">
                  {errors.userName ? (
                    <>
                      <img
                        alt="img"
                        height="10px"
                        width="10px"
                        src="/assets/images/s_error.svg"
                      />
                      {errors.userName.message}
                    </>
                  ) : null}
                </div>
              </div>
              <div className="form-group-c">
                <label className="form-group-c-label">
                  Email <span className="form-group-c-label-span ">*</span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  name="email"
                  className="form-group-c-input"
                  placeholder="example@example.com"
                  style={errors.email ? borderStyle : borderSuc}
                />
                <div className="form-validation ">
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
                  Password <span className="form-group-c-label-span ">*</span>
                </label>
                <div className="pass_input_div">
                  <div className="form-password_wrapper">
                    <input
                      {...register('password')}
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="form-group-c-input"
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

                  <div className="form-validation ">
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

              <div className="form-checkbox tw-mt-[-28px] ">
                <Checkbox
                  name="terms"
                  id="terms"
                  checked={isChecked}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <label
                  htmlFor="terms"
                  id="terms"
                  className="tw-fon tw-cursor-pointer tw-text-[12px]
                 tw-font-normal tw-not-italic tw-leading-[18px]"
                >
                  Term & Condition
                </label>
              </div>

              <div className="form-validation tw-mt-3">
                <div className="marignDiv">{isChecked === false ? errors.terms : ''}</div>
              </div>

              <div className="form-btn-c tw-mt-5">
                <CustomButton
                  type="submit"
                  className="btn-primary tw-w-full"
                  text=" Sign up"
                  disabled={!isChecked}
                />
              </div>
              <div className="form-or-content tw-mt-4">
                <div className="form-or-content-line" />
                <span className="form-or-content-span ">Or</span>
                <div className="form-or-content-line" />
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
              <div className="form_links tw-mt-[32px] tw-text-center">
                <label className="login">Already have an account?</label>
                <Link href="/login" className="span-link">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
