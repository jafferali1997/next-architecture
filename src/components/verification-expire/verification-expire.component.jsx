'use client';

import useVerificationExpire from './use-verification-expire.hook';

export default function VerificationExpire() {
  const { resendLinkHandler } = useVerificationExpire();
  return (
    <div className="verification-expire-wrapper">
      <div className="verification-wrapper">
        <div className="image">
          <img alt="img" src="/assets/images/expire.png" />
        </div>
        <h1>Verification link Expired</h1>
        <p>
          Hi, there your magics link has been expired, beacuse you have not used it. Magic
          link expired every 24 hours and can only be used once. You can click on this
          button and create new one.
        </p>
        {/* <ButtonPrimary>
          <span onClick={resendLinkHandler}>Request Another Link</span>
        </ButtonPrimary> */}

        <button
          type="button"
          className="primary-outline-btn tw-mb-[24px]"
          onClick={resendLinkHandler}
        >
          Request Another Link
        </button>
        <p className="endP">
          If you have an issues. <a href="null">Let us know</a>
        </p>
      </div>
    </div>
  );
}
