import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { isLoginVerified } from '@/common/utils/access-token.util';

/**
 * Return a component or return to home page if access token is verified
 * @param {component} props
 * @returns component | redirect to home page
 */
export default function OnlyPublic({ component }) {
  const router = useRouter();
  if (!isLoginVerified()) {
    if (typeof window === 'object') {
      router.push('/');
    }
  }
  return component;
}

OnlyPublic.propTypes = {
  component: PropTypes.element.isRequired
};
