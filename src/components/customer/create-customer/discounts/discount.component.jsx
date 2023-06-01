'use client';

import PropTypes from 'prop-types';
import FormForDiscount from './components/form-for-discount/form-for-discount.components';
import useDiscount from './use-discount.hook';

export default function Discount({ handleTabClick, handleTabCompleted }) {
  const { errors, register, handleSubmit, onSubmit, setIsSubmit, router, data } =
    useDiscount({
      handleTabClick,
      handleTabCompleted
    });
  return (
    <div className="discount-details-wrapper">
      <div className="content-header ">
        <h3>Discount</h3>
      </div>
      <div className="content-body">
        {router?.query?.id && data && (
          <FormForDiscount
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            handleTabClick={handleTabClick}
            setIsSubmit={setIsSubmit}
            data={data}
          />
        )}
        {!router?.query?.id && (
          <FormForDiscount
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            handleTabClick={handleTabClick}
            setIsSubmit={setIsSubmit}
          />
        )}
      </div>
    </div>
  );
}

Discount.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
