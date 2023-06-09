import Link from 'next/link';
import useCreateNewPassword from './use-create-new-password.hook';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';

export default function CreateNewPassword() {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    showPassword,
    borderStyle,
    borderSuc,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
    loader
  } = useCreateNewPassword();

  console.log(errors)
  return (
    <div className="create-new-pass-wrapper">
      <div className="create-new-pass-container ">
        <div className="header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="create-new-pass-form-card ">
          <div className="form-header">
            <img src="/assets/images/lockImg.png" alt="img" />
            <h1>Create new Password</h1>
            <p>That’s it. Setup your new password</p>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group-c">
                <label>
                  New Password <span>*</span>
                </label>
                <div className="pass_input_div">
                  <CustomInput
                    name="password"
                    placeholder="Enter New password"
                    type={showPassword ? 'text' : 'password'}
                    register={register}
                    className="form-control-c"
                    errors={errors}
                    isRequired={true}
                    style={errors.password ? borderStyle : borderSuc}
                  />

                  <div className="create-new-pass-validation">
                    <div className="innerValidation">
                      {/* {errors.password ? (
                        <>
                          <img src="/assets/images/s_error.svg" alt="img" />
                          {errors.password.message}
                        </>
                      ) : ( */}
                        <p className="passText color_bbb">
                          Use 8 or more characters with a mix of letters, numbers &
                          symbols
                        </p>
                      {/* )} */}
                    </div>
                  </div>
                  <img
                    role="presentation"
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
              </div>
              <div className="form-group-c">
                <label>
                  Confirm Password bc <span>*</span>
                </label>
                <div className="pass_input_div">
                  <CustomInput
                    placeholder="Enter confirm password"
                    name="confirm"
                    type={showConfirmPassword ? 'text' : 'password'}
                    register={register}
                    errors={errors}
                    className="form-control-c"
                    isRequired={true}
                    style={errors.confirm ? borderStyle : borderSuc}
                  />

                  {/* <div className="create-new-pass-validation">
                    <div className="innerValidation">
                      {errors.confirm ? (
                        <>
                          <img alt="img" src="/assets/images/s_error.svg" />
                          {errors.confirm.message}
                        </>
                      ) : null}
                    </div>
                  </div> */}
                  <img
                    role="presentation"
                    alt="im"
                    onClick={toggleShowConfirmPassword}
                    className="eye_iocn"
                    src={
                      showConfirmPassword
                        ? '/assets/images/pass_icon.png'
                        : '/assets/images/eye.svg'
                    }
                  />
                </div>
              </div>

              <div className="form-btn-c">
                <CustomButton
                  type="submit"
                  className="submit-btn"
                  loading={loader}
                  disabled={loader}
                  text="Change Password"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
