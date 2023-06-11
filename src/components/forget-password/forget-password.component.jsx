import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useForgetPassword from './use-forget-password.hook';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomButton from '@/common/components/custom-button/custom-button.component';

export default function ForgetPassword() {
  const router = useRouter();
  const { email, handleSubmit, onSubmit, register, errors, borderStyle, borderSuc } =
    useForgetPassword();
  console.log(errors);
  return (
    <div className="form-wrapper">
      <div className="form-container ">
        <div className="form-container-header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="form-card">
          <div className="form-header">
            <img src="/assets/images/searchImg.png" alt="img" />
            <h1 className="tw-pt-[7px] tw-text-[24px] tw-font-bold tw-capitalize tw-not-italic tw-leading-[52px] tw-text-[#131516]">
              Find Your Account
            </h1>
            <p className="tw-text-center tw-text-[16px] tw-font-medium tw-not-italic tw-leading-[24px] tw-text-text-ultra-light-gray">
              Enter the email associated with your account to change your password.
            </p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-px-6 tw-pb-0 tw-pt-8">
            <form method="post" className="tw-w-full" onSubmit={handleSubmit(onSubmit)}>
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
                {/* <div className="forgot-password-validation">
                  <div>{errors.email}</div>
                </div> */}
              </div>
              <div className="form-btn-c tw-flex  tw-justify-center">
                <CustomButton
                  type="submit"
                  className="btn-primary tw-w-full"
                  text="Send Reset Link"
                />
              </div>
              <div className="form-btn-c tw-flex tw-justify-center">
                <span
                  onClick={() => {
                    router.push('/login');
                  }}
                  className="inner-link tw-mt-5"
                >
                  Back to Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
