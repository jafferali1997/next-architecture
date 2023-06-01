'use client';

import PropTypes from 'prop-types';
import usePaymentDetails from './use-payment-detail.hook';
import FormForPaymentDetails from './components/form-for-payment-details/form-for-payment-detail.component';

export default function PaymentDetails({ handleTabClick, handleTabCompleted }) {
  const {
    handleSubmit,
    onSubmit,
    register,
    bankDetail,
    setBankDetail,
    setCreditCard,
    creditCard,
    setIsSubmit,
    router,
    data,
    errors
  } = usePaymentDetails({ handleTabClick, handleTabCompleted });
  return (
    <div className="payment-details-wrapper">
      <div className="content-header ">
        <h3>Payment Details</h3>
      </div>
      <div className="content-body">
        {router?.query?.id && data && (
          <FormForPaymentDetails
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            bankDetail={bankDetail}
            setBankDetail={setBankDetail}
            setCreditCard={setCreditCard}
            creditCard={creditCard}
            setIsSubmit={setIsSubmit}
            handleTabClick={handleTabClick}
            errors={errors}
            data={data}
          />
        )}

        {!router?.query?.id && (
          <FormForPaymentDetails
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            bankDetail={bankDetail}
            setBankDetail={setBankDetail}
            setCreditCard={setCreditCard}
            creditCard={creditCard}
            setIsSubmit={setIsSubmit}
            handleTabClick={handleTabClick}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
}

PaymentDetails.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
