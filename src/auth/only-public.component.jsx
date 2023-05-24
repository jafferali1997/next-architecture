import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { isAccessTokenVerifed } from '@/common/utils/access-token.util';

/**
 * Return a component or return to home page if access token is verified
 * @param {component} props
 * @returns component | redirect to home page
 */
export default function OnlyPublic({ component }) {
  const router = useRouter();
  if (!isAccessTokenVerifed) {
    return component;
  }
  router.push('/');
}

OnlyPublic.propTypes = {
  component: PropTypes.element.isRequired
};
