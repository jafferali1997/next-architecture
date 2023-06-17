'use client';

import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getAccessToken, isLoginVerified } from '@/common/utils/access-token.util';
import Navbar from '@/common/components/dashboard/navbar/navbar.component';
import Sidebar from '@/common/components/dashboard/sidebar/sidebar.component';
import { getUser, isEmailVerified, isPhoneVerified } from '@/common/utils/users.util';

/**
 * Return the component if access token is verified and return to home page if its not
 * @param {component} props take a component
 * @returns component | redirect to home page
 */
export default function Private({ component }) {
  const [toggle, setToggle] = useState(false);

  const router = useRouter();
  const user = getUser();

  if (!getAccessToken() && user) {
    if (typeof window === 'object') {
      router.push('/');
    }
  }

  if (!isPhoneVerified() && isEmailVerified() && user) {
    if (typeof window === 'object') {
      router.push(
        `/profile?userName=${user.userName}&email=${user.email}&userId=${user.id}`
      );
    }
  }

  if (!isEmailVerified() && user) {
    if (typeof window === 'object') {
      router.push(`/verify-email?type=email-verification&email=${user.email}`);
    }
  }

  if (!isLoginVerified() && isPhoneVerified() && isEmailVerified() && user) {
    if (typeof window === 'object') {
      router.push(`/two-factor-auth?userId=${user.id}&phone=${user.phone}`);
    }
  }

  return (
    <div className="dashboard-main">
      <div className="sidebar tw-relative tw-basis-1/6">
        <Sidebar setToggle={setToggle} toggle={toggle} />
      </div>
      <div className="content tw-basis-5/6 tw-overflow-hidden tw-bg-secondary-gray">
        <Navbar setToggle={setToggle} value={toggle} />
        {component}
      </div>
    </div>
  );
}

Private.propTypes = {
  component: PropTypes.element.isRequired
};
