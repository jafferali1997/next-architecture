'use client';

import PropTypes from 'prop-types';
import AUTH from '@/common/constants/auth.constant';
import OnlyPublic from './only-public.component';
import Private from './private.component';

/**
 * Return the component according to it's type
 * @param {component, type} props commponet and type of the component
 * @returns component
 */
export default function Auth({ component, type = AUTH.PUBLIC }) {
  switch (type) {
    case AUTH.PUBLIC:
      return component;
    case AUTH.PRIVATE:
      return <Private component={component} />;
    case AUTH.ONLY_PUBLIC:
      return <OnlyPublic component={component} />;
  }
}

Auth.propTypes = {
  component: PropTypes.element.isRequired,
  type: PropTypes.string
};
