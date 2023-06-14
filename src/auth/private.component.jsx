'use client';

import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAccessToken, isAccessTokenVerifed } from '@/common/utils/access-token.util';
// import { getAccessToken } from './../common/utils/access-token.util';
import Navbar from '@/common/components/dashboard/navbar/navbar.component';
import Sidebar from '@/common/components/dashboard/sidebar/sidebar.component';

/**
 * Return the component if access token is verified and return to home page if its not
 * @param {component} props take a component
 * @returns component | redirect to home page
 */
export default function Private({ component }) {
  // useEffect(() => {
  //   localStorage.setItem(
  //     'user',
  //     JSON.stringify({
  //       id: 3,
  //       createdBy: null,
  //       updatedBy: 3,
  //       createdAt: '2023-06-06T15:35:39.133Z',
  //       updatedAt: '2023-06-06T15:40:51.617Z',
  //       userName: 'areeb2',
  //       role: 'SUPER_ADMIN',
  //       email: 'mpmymvbjttvdfrcsqn@tpwlb.com',
  //       phone: '12123123132',
  //       isEmailVerified: true,
  //       isPhoneVerified: true,
  //       isLoginVerified: true,
  //       currentBusinessId: 1,
  //       token:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJtcG15bXZianR0dmRmcmNzcW5AdHB3bGIuY29tIiwiaWF0IjoxNjg2NjQ5ODQ2fQ.F0TxyFPecN9mWIl8Ru-ucxvVNhqDqMDggIyr8G9n4t8'
  //     })
  //   );
  // }, []);

  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  if (getAccessToken()) {
    return (
      <div className="dashboard-main">
        <div className="sidebar tw-basis-1/6">
          <Sidebar setToggle={setToggle} toggle={toggle} />
        </div>
        <div className="content tw-basis-5/6 tw-bg-secondary-gray">
          <Navbar setToggle={setToggle} value={toggle} />
          {component}
        </div>
      </div>
    );
  }

  if (typeof window === 'object') {
    router.push('/');
  }
}

Private.propTypes = {
  component: PropTypes.element.isRequired
};
