'use client';

import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { getAccessToken } from '@/common/utils/access-token.util';
import Navbar from '@/common/components/dashboard/navbar/navbar.component';
import Sidebar from '@/common/components/dashboard/sidebar/sidebar.component';

/**
 * Return the component if access token is verified and return to home page if its not
 * @param {component} props take a component
 * @returns component | redirect to home page
 */
export default function Private({ component }) {
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  if (!getAccessToken()) {
    if (typeof window === 'object') {
      router.push('/');
    }
  }
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

Private.propTypes = {
  component: PropTypes.element.isRequired
};
