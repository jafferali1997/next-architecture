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

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-container-header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="form-card  ">
          <div className="form-header">
            <img src="/assets/images/lockImg.png" alt="img" />
            <h1 className="tw-pt-2 tw-text-[24px] tw-font-bold tw-capitalize tw-not-italic tw-leading-[52px] tw-text-[#131516]">
              Create new Password
            </h1>
            <p className="tw--mt-1 tw-text-[16px] tw-font-medium tw-not-italic tw-leading-[24px] tw-text-[#494949]">
              That’s it. Setup your new password
            </p>
          </div>
          <div className="form-body">
            <form className="tw-w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group-c">
                <label>
                  New Password <span>*</span>
                </label>
                <div className="form-password_wrapper">
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
                        Use 8 or more characters with a mix of letters, numbers & symbols
                      </p>
                      {/* )} */}
                    </div>
                  </div>
                  {/* <img
                    role="presentation"
                    alt="img"
                    onClick={toggleShowPassword}
                    className="eye_iocn"
                    src={
                      showPassword
                        ? '/assets/images/pass_icon.png'
                        : '/assets/images/eye.svg'
                    }
                  /> */}
                </div>
              </div>
              <div className="form-group-c">
                <label>
                  Confirm Password <span>*</span>
                </label>
                <div className="form-password_wrapper">
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
                  className="btn-primary tw-w-full"
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
