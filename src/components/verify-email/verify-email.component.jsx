import Link from 'next/link';
import useVerifyEmail from './use-verify-email.hook';
import CustomButton from '@/common/components/custom-button/custom-button.component';

export default function VerifyEmail() {
  const { resendLinkHandler, email } = useVerifyEmail();
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-container-header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>

        <div className="form-card">
          <div className=" tw-flex tw-flex-col tw-items-center tw-gap-2 tw-px-6 tw-py-0">
            <img alt="img" src="/assets/images/mail_i.png" />
            <h1 className=" tw-pt-[7px] tw-text-[24px] tw-font-bold tw-capitalize tw-not-italic tw-leading-[52px] tw-text-[#131516]">
              Check your mail
            </h1>
            <p className="tw-text-center tw-font-dm tw-text-[16px] tw-font-medium tw-not-italic tw-leading-[24px] tw-text-text-ultra-light-gray">
              We’ve sent a verification email to{' '}
              <span className="tw-text-[#494949] tw-underline">{email}</span>
            </p>
          </div>
          <div className="form-body">
            <h3 className="tw-text-[14px] tw-font-semibold tw-not-italic tw-leading-[21px] tw-text-[#161618]">
              Click the link of your email to verify your account.
            </h3>
            <p className="tw-pt-3 tw-text-center tw-text-[12px] tw-font-normal tw-not-italic tw-leading-[18px] tw-text-[#494949]">
              If you have trouble finding your email, check your spam folder for an email
              from noreply@example.com
            </p>
            <span className="tw-p-[24px] tw-text-[12px] tw-font-medium tw-not-italic tw-leading-[18px] tw-text-[#494949]">
              Didn’t receive an email?
            </span>
            <div className="form-btn-c tw-w-full">
              <CustomButton
                type="submit"
                text="Resend Verification"
                className="btn-primary tw-w-full"
                onClick={resendLinkHandler}
              />
            </div>
            <div className="tw-mt-10 tw-flex tw-items-center">
              {/* <img
                alt="img"
                className="tw-pr-[8.6px]"
                src="/assets/images/open_link.svg"
              /> */}
              {/* <span className="tw-text-[12px] tw-font-medium tw-not-italic tw-leading-[18px] tw-text-[#494949]">
                Open E-mail
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
