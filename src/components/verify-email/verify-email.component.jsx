import Link from 'next/link';
import useVerifyEmail from './use-verify-email.hook';

export default function VerifyEmail() {
  const { resendLinkHandler, email } = useVerifyEmail();
  return (
    <div className="verify-email-wrapper">
      <div className="verify-email-container">
        <div className="header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="verify-email-form-card">
          <div className="form-header">
            <img alt="img" src="/assets/images/mail_i.png" />
            <h1>Check your mail</h1>
            <p className="head-p">
              We’ve sent a verification email to <span>{email}</span>
            </p>
          </div>
          <div className="form-body">
            <h3 className="third-heading">
              Click the link of your email to verify your account.
            </h3>
            <p className="body-p">
              If you have trouble finding your email, check your spam folder for an email
              from noreply@example.com
            </p>
            <span className="dont-receive">Didn’t receive an email?</span>
            <div className="form-btn-c">
              <button type="submit" className="sub-cust-btn" onClick={resendLinkHandler}>
                Resend Verification
              </button>
            </div>
            <div className="end-body">
              <img alt="img" src="/assets/images/open_link.svg" />
              <span className="dont-receive">Open E-mail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
