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
    errors,
    paymentType,
    setPaymentType
  } = usePaymentDetails({ handleTabClick, handleTabCompleted });
  return (
    <div className="payment-details-wrapper">
      <div className="content-header ">
        <h3 className="form-inner-heading">Payment Details</h3>
      </div>
      <div className="content-body">
        {/* {router?.query?.id && data && ( */}
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
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />
        {/* )} */}

        {/* {!router?.query?.id && (
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
            paymentType={paymentType}
    setPaymentType={setPaymentType}
          />
        )} */}
      </div>
    </div>
  );
}

PaymentDetails.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
