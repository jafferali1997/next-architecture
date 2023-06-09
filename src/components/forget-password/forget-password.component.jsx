import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useForgetPassword from './use-forget-password.hook';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomButton from '@/common/components/custom-button/custom-button.component';

export default function ForgetPassword() {
  const router = useRouter();
  const { email, handleSubmit, onSubmit, register, errors, borderStyle, borderSuc } =
    useForgetPassword();
  console.log(errors)
  return (
    <div className="forgot-password-wrapper form-container">
      <div className="forgot-password-container">
        <div className="header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="forgot-password-form-card form-card">
          <div className="form-header">
            <img src="/assets/images/searchImg.png" alt="img" />
            <h1>Find Your Account</h1>
            <p>Enter the email associated with your account to change your password.</p>
          </div>
          <div className="form-body">
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group-c">
                <label>
                  Email <span>*</span>
                </label>

                <CustomInput
                  placeholder="example@example.com"
                  type="email"
                  name="email"
                  register={register}
                  errors={errors}
                  className="form-control-c"
                  isRequired={true}
                  style={errors.pass ? borderStyle : borderSuc}
                />
                {/* <div className="forgot-password-validation">
                  <div>{errors.email}</div>
                </div> */}
              </div>
              <div className="form-btn-c">
                <CustomButton
                  type="submit"
                  className="submit-btn"
                  text="Send Reset Link"
                />
              </div>
              <div className="form-btn-c">
                <span
                  onClick={() => {
                    router.push('/login');
                  }}
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
