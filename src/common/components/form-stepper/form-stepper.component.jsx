'use client';

import PropTypes from 'prop-types';
import FormStepperHook from './form-stepper.hook';
import Tab from '../tab/tab.component';

export default function FormStepper({ title, module, tabs, children, ...props }) {
  const { id, setId } = FormStepperHook;
  return (
    <div className="form-stepper-body">
      <div className="form-stepper-form">
        <div className="form-stepper-form-header">
          <h2>{title}</h2>
          <p>
            {module} #: <span>{id}</span>
          </p>
        </div>
        <div className="form-stepper-form-body">
          {tabs ? <Tab tabs={tabs} /> : children}
        </div>
      </div>
    </div>
  );
}

FormStepper.propTypes = {
  title: PropTypes.string.isRequired,
  module: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf,
  children: PropTypes.node
};
