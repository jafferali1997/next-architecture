'use client';

import PropTypes from 'prop-types';
import useFormStepperHook from './use-form-stepper.hook';
import Tab from '../tab/tab.component';

export default function FormStepper({
  title = '',
  module = '',
  tabs,
  children,
  ...props
}) {
  // const { id, setId } = useFormStepperHook();
  return (
    <div className="form-stepper-body">
      <div className="form-stepper-form">
        {/* <div className="form-stepper-form-header tw-items-center">
          <h2>{title}</h2>
          <p>
            {module} {module ? '#:' : ''} <span>{id}</span>
          </p>
        </div> */}
        <div className="form-stepper-form-body">
          {tabs ? <Tab key="1" tabs={tabs} /> : children}
        </div>
      </div>
    </div>
  );
}

FormStepper.propTypes = {
  title: PropTypes.string,
  module: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  tabs: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node
};
