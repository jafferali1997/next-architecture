'use client';

import PropTypes from 'prop-types';
import Navbar from '@/common/components/dashboard/navbar/navbar.component';
import Sidebar from '@/common/components/dashboard/sidebar/sidebar.component';

export default function Auth({ component, authType }) {
  if (authType === 'private') {
    return <Private component={component} />;
  }

  return component;
}

Auth.propTypes = {
  component: PropTypes.element.isRequired,
  authType: PropTypes.string.isRequired
};

function Private({ component }) {
  // const { accessToken } = JSON.parse(localStorage.getItem('user')) || null;
  if (true) {
    return (
      <div className="dashboard-main">
        <div className="sidebar tw-basis-1/6">
          <Sidebar />
        </div>
        <div className="content tw-basis-5/6">
          <Navbar />
          {component}
        </div>
      </div>
    );
  }
  // return <></>;
}

Private.propTypes = {
  component: PropTypes.element.isRequired
};
