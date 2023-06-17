'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CustomButton from '@/common/components/custom-button/custom-button.component';

const menus = [
  { id: 'home', menu: 'Home', link: '/home' },
  { id: 'features', menu: 'Features', link: '/features' },
  { id: 'pricing', menu: 'Pricing', link: '/pricing' },
  { id: 'faq', menu: 'FAQ', link: '/faq' },
  { id: 'helpcenter', menu: 'Help Center', link: '/helpcenter' }
];

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="tw-sticky tw-top-0 tw-z-[99] tw-bg-white tw-px-2 tw-px-4 tw-py-5 tw-shadow-custom">
      <div className="tw-m-auto tw-flex tw-w-full tw-max-w-7xl tw-items-center tw-justify-between">
        <div className="tw-flex tw-items-center sm:tw-gap-3 lg:tw-gap-[80px]">
          <div className="tw-flex tw-items-center tw-gap-3">
            <img
              onClick={() => setOpenSidebar(!openSidebar)}
              className="xs:tw-block lg:tw-hidden"
              width="22px"
              height="16px"
              src="assets/images/navbar/hamburger.svg"
              alt="hamburger"
            />
            <a href="/">
              <img
                className="lg xs:tw-h-8 lg:tw-h-[48px]"
                src="/assets/images/logo.png"
                alt="site logo"
              />
            </a>
          </div>
          <ul
            className={`${
              openSidebar ? 'menuopen' : 'menuclose'
            } !tw-mt-0 tw-items-center tw-transition-all tw-duration-300 tw-ease-in xs:tw-absolute xs:tw-left-0 xs:tw-top-full xs:tw-mt-2 xs:tw-flex xs:tw-h-header-calc-viewport xs:tw-w-full xs:tw-flex-col xs:tw-gap-y-7 xs:tw-bg-white lg:tw-relative lg:tw-flex lg:tw-h-fit lg:tw-w-fit lg:tw-flex-row lg:tw-items-center lg:tw-gap-8 `}
          >
            {menus.map((menu) => {
              return (
                <li key={menu.id} className="tw-inline-block tw-w-fit">
                  <a
                    className="tw-font-dm tw-text-base tw-font-normal tw-capitalize tw-leading-6 hover:tw-border-b-2 hover:tw-border-primary-purple hover:tw-text-primary-purple"
                    href={menu.link}
                  >
                    {menu.menu}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tw-flex tw-items-center tw-gap-6">
          <img
            height="21px"
            width="21px"
            src="assets/images/navbar/globe-icon.svg"
            alt="globe icon"
          />
          <CustomButton
            href="/login"
            className="btn-outline tw-h-auto tw-rounded-[10px] tw-border-2 tw-px-5 tw-py-2 tw-font-dm tw-text-lg tw-font-medium tw-capitalize tw-leading-6"
            text="Login"
          />
          <CustomButton
            href="/sign-up"
            className="btn-primary tw-h-auto tw-rounded-[10px] tw-bg-primary-blue tw-px-5 tw-py-[10px] tw-font-dm tw-text-lg tw-font-medium tw-capitalize tw-leading-6"
            text="Signup"
          />
          {/* <div className="tw-flex tw-items-center tw-gap-6 tw-rounded-[36px] tw-border-2 tw-border-disabled-input tw-px-4 tw-py-2">
            <img
              height="15px"
              width="19px"
              src="assets/images/navbar/hamburger.svg"
              alt="hamburger icon"
            />

            <div className="tw-h-8 tw-w-8 tw-overflow-hidden tw-rounded-2xl">
              <img
                className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                src="assets/images/navbar/profile.png"
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
