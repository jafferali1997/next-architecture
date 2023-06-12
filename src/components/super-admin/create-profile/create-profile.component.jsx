'use client';

import Link from 'next/link';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import TextArea from '@/common/components/text-area/text-area.component';
import useCreateProfile from './use-create-profile.hook';
import CountryPhoneInput from '@/common/components/country-phone-input/country-phone-input.component';

export default function CreateProfile() {
  const { passOpen, setPassOpen, handleOpenUpdate } = useCreateProfile();
  return (
    <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
      <div className="common-box tw-mt-[24px] ">
        <div className="tw-relative tw-h-[156px] tw-w-full tw-rounded-[20px_20px_0px_0px] tw-bg-[url('/assets/images/profile-bg.svg')] tw-bg-cover tw-bg-no-repeat">
          <div className="profile-data tw-absolute tw-bottom-[-110px] tw-left-[25px] tw-flex tw-items-center tw-gap-[24px]">
            <div className="profile-image tw-relative tw-rounded-[50%] tw-border-[3px] tw-border-solid tw-border-primary tw-p-[3px]">
              <img src="/assets/images/profile.png" alt="profile" />
              <img
                className="tw-absolute tw--bottom-2.5  tw-left-[40%] tw-top-[88%]"
                src="/assets/images/camera-icon.svg"
                alt="camera"
              />
            </div>
            <div className="profile-data">
              <h4 className="title-2">John Doe</h4>
              <p className="body-2">John@12</p>
            </div>
          </div>
          <div className="profile-btn tw-absolute tw-bottom-[10px] tw-right-[25px] tw-h-[41px] tw-w-[116px] tw-whitespace-nowrap tw-rounded-[29px] tw-bg-white tw-px-4 tw-py-2.5 tw-font-dm tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-dark-gray">
            Super admin
          </div>
        </div>
        <div className="form-box  tw-ml-[24px] tw-mr-[24px] tw-mt-[121px] tw-w-[95%]">
          <h3 className="form-box-heading ">Profile Details</h3>
          <div className="tw-grid  tw-grid-cols-[750px_1fr] tw-gap-[30px]">
            <div className="fileds-side">
              <div className="form-box-grid">
                <CustomInput
                  type="text"
                  label="First Name:"
                  name="errorField"
                  placeholder="First Name"
                />

                <CustomInput
                  type="text"
                  label="Last Name:"
                  name="errorField"
                  placeholder="Last Name"
                />

                <CustomInput
                  type="text"
                  label="Username:"
                  name="errorField"
                  placeholder="Username"
                />

                <CustomInput
                  type="text"
                  label="Email Address:"
                  name="errorField"
                  placeholder="Email Address"
                />

                {/* <div className="textarei-side"></div> */}
              </div>
            </div>
            <div className="textarei-side">
              <label className=" tw-mr-1 tw-mr-1 tw-mt-4 tw-flex tw-min-w-fit tw-flex-row ">
                Address
              </label>
              <TextArea placeholder="Text Area" />
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className=" tw-flex tw-items-center">
              <div className="input-phone tw-flex tw-items-end tw-gap-[30px]">
                <CountryPhoneInput
                  label="Phone Number"
                  name="phone"
                  // value={phone}
                  // onChange={setPhone}
                  isRequired={true}
                  // register={register}
                  // errors={errors}
                />
                <CustomButton
                  text="send"
                  className="btn-outline"
                  // onClick={sendOtp}
                  // disabled={isOtpVerified}
                />
              </div>
            </div>
            <div className="tw-flex tw-items-center tw-gap-[24px]">
              <CustomButton text="cancel" className="btn-cancel " />
              <CustomButton text="Update" className="btn-primary" />
            </div>
          </div>
        </div>
        <div className="form-box  tw-mb-[24px] tw-ml-[24px] tw-mr-[24px] tw-mt-[24px] tw-w-[95%]">
          {passOpen ? (
            <>
              <div className="tw-flex tw-items-center tw-justify-between">
                <h3 className="form-box-heading ">Password</h3>
                <CustomButton text="Update" className="btn-primary" />
              </div>
              <div className="form-box-grid-3col">
                <CustomInput
                  type="password"
                  label="Old password "
                  name="errorField"
                  isRequired={true}
                  placeholder="******"
                />
                <div>
                  <CustomInput
                    type="password"
                    label="New password "
                    name="errorField"
                    isRequired={true}
                    placeholder="******"
                  />
                  <p className="tw-flex tw-items-center tw-text-[9px] tw-font-normal tw-not-italic tw-leading-[15px] tw-text-text-ultra-light-gray">
                    *Use 8 or more characters with a mix of letters, numbers & symbols
                  </p>
                </div>
                <div>
                  <CustomInput
                    type="password"
                    label="Confirm password"
                    name="errorField"
                    isRequired={true}
                    placeholder="******"
                  />
                  <p className="tw-flex tw-items-center tw-text-[9px] tw-font-normal tw-not-italic tw-leading-[15px] tw-text-text-ultra-light-gray">
                    *Use 8 or more characters with a mix of letters, numbers & symbols
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="tw-flex tw-items-center tw-justify-between">
              <h3 className="form-box-heading ">Password</h3>
              <span
                className="tw-font-dm tw-font-dm tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-primary tw-underline hover:tw-cursor-pointer"
                onClick={handleOpenUpdate}
              >
                Change password
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
