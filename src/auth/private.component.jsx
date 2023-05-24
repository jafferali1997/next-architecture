import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { isAccessTokenVerifed } from '@/common/utils/access-token.util';

/**
 * Return the component if access token is verified and return to home page if its not
 * @param {component} props take a component
 * @returns component | redirect to home page
 */
export default function Private({ component }) {
  const router = useRouter();
  if (isAccessTokenVerifed) {
    return component;
  }
  router.push('/');
}

Private.propTypes = {
  component: PropTypes.element.isRequired
};
