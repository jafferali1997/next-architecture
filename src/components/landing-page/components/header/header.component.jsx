import React from 'react';

export default function Header() {
  return (
    <div className="tw-bg-white tw-px-2 tw-py-5">
      <div className="tw-m-auto tw-w-full tw-max-w-7xl">
        <div className="tw-flex tw-items-center tw-gap-20">
          <a href="/">
            <img height="47px" src="/assets/images/logo.png" alt="site logo" />
          </a>

          <ul className="tw-flex tw-items-center tw-gap-8">
            <li>
              <a
                className="hover:font-#6F6AF5 tw-font-dm tw-text-base tw-font-normal tw-capitalize tw-leading-6"
                href="/home"
              >
                Home
              </a>
            </li>
            <li>
              <a className="" href="/features">
                Features
              </a>
            </li>
            <li>
              <a className="" href="/pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="" href="/faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="" href="/help-center">
                Help Center
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
