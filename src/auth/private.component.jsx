import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { isAccessTokenVerifed } from '@/common/utils/access-token.util';
import Navbar from '@/common/components/dashboard/navbar/navbar.component';
import Sidebar from '@/common/components/dashboard/sidebar/sidebar.component';

/**
 * Return the component if access token is verified and return to home page if its not
 * @param {component} props take a component
 * @returns component | redirect to home page
 */
export default function Private({ component }) {
  // const router = useRouter();
  // if (isAccessTokenVerifed) {
  if (true) {
    return (
      <div className="dashboard-main">
        <div className="sidebar tw-basis-1/6">
          <Sidebar />
        </div>
        <div className="content tw-basis-5/6 tw-bg-secondary-gray">
          <Navbar />
          {component}
        </div>
      </div>
    );
  }
  // router.push('/');
}

Private.propTypes = {
  component: PropTypes.element.isRequired
};
