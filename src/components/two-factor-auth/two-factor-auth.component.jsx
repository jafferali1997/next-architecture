'use client';

import Link from 'next/link';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CountDown from './components/countdown/count-down.component';
import useTwoFactorAuth from './use-two-factor-auth.hook';

export default function TwoFactorAuthComponent() {
  const {
    phone,
    otpNumberChangeHandler,
    otpNumber1,
    otpNumber2,
    otpNumber3,
    otpNumber4,
    setIsTimerStop,
    verifyOtpHandler,
    resendOtpHandler,
    isTimerStop
  } = useTwoFactorAuth();
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
            <img alt="img" src="/assets/images/lock_icon.svg" />
            <h1>OTP Verification</h1>
            <p className="head-p">
              Please Enter OTP send to <span>+{phone}</span>
            </p>
          </div>
          <div className="form-body">
            <div className="two-fac-otp-wrapper">
              <div className="two-fac-otp-wrapper-content">
                {/* {initialOtpNumber.map((number, idx) => {
                  return (
                    <input
                      key={`${number}-${idx}`}
                      type="text"
                      maxLength={1}
                      placeholder="-"
                      onChange={handleOtpNumberChange}
                      value={number}
                    />
                  );
                })} */}
                <input
                  id="1"
                  type="text"
                  maxLength={1}
                  placeholder="-"
                  onChange={otpNumberChangeHandler}
                  ref={otpNumber1}
                  // value={otpNumber1.current?.value || ''}
                />
                <input
                  id="2"
                  type="text"
                  maxLength={1}
                  placeholder="-"
                  onChange={otpNumberChangeHandler}
                  ref={otpNumber2}
                />
                <input
                  id="3"
                  type="text"
                  maxLength={1}
                  placeholder="-"
                  onChange={otpNumberChangeHandler}
                  ref={otpNumber3}
                />
                <input
                  id="4"
                  type="text"
                  maxLength={1}
                  placeholder="-"
                  onChange={otpNumberChangeHandler}
                  ref={otpNumber4}
                />
              </div>
              <CountDown stopTimerHandler={setIsTimerStop} isRunTimer={!isTimerStop} />
              {/* <p>Time left: 1:34</p> */}
            </div>
            <div className="verify-form-btn-c">
              <CustomButton
                text="Verify Code"
                type="submit"
                className="submit-btn"
                onClick={verifyOtpHandler}
              />
            </div>
            <div className="otp-form-footer tw-mt-[24px]">
              <p>
                Don’t receive code?
                <button
                  onClick={resendOtpHandler}
                  // className={`${
                  //   !isTimerStop ? '!tw-cursor-not-allowed !tw-text-gray-400' : ''
                  // } `}
                  // disabled={!isTimerStop}
                >
                  {' '}
                  Resend SMS{' '}
                </button>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
