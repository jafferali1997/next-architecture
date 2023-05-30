'use client';

import PropTypes from 'prop-types';

const { default: OfferHeader } = require('@/common/components/offer-header/offer-header');
const { default: Sidebar } = require('@/common/components/sidebar/sidebar');

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
      <div className="tw-flex tw-flex-row">
        <div className="sidebar tw-basis-1/6">
          <Sidebar />
        </div>
        <div className="content tw-basis-5/6">
          <OfferHeader />
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
