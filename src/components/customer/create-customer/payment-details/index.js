import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import cardValidator from 'card-validator';
import axios from 'axios';
import { useRouter } from 'next/router';
import FormInput from '@/common/components/form-input';
import StepperFooter from '@/common/components/form-stepper/stepper-footer';
import CustomAlert from '@/common/components/custom-alert';

const validationSchema = yup.object({
  // Define your validation rules here.
  onwerName: yup
    .string()
    .max(100, 'Account must be at most 100 characters long')
    .min(1, 'Account must be minimum 1 characters')
    .required('Account is required'),
  iban: yup
    .string()
    .max(34, 'IBAN must be at most 34 characters long')
    .min(15, 'IBAN must be minimum 15 characters')
    .matches(/^[^.]*$/, {
      message: 'No period'
    })
    .matches(/^[^.]*$/, {
      message: 'Invalid postal'
    })
    .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
      message: 'Invalid postal'
    })
    .required('IBAN is required'),
  bicNumber: yup
    .string()
    .max(11, 'BIC must be at most 11 characters long')
    .min(8, 'BIC must be minimum 8 characters')
    .required('bic is required'),
  mandateReference: yup
    .string()
    .max(18, 'Mandate Reference must be at most 18 characters long')
    .min(6, 'Mandate Reference must be minimum 6 characters')
    .required('Mandate Reference is required'),
  mandateDate: yup.string().required('Mandate Date is required')
});

export default function PaymentDetials({ handleTabClick, handleTabCompleted }) {
  const [data, setData] = useState();
  const [bankDetail, setBankDetail] = useState(true);
  const [creditCard, setCreditCard] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);

  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    async function fetchMyAPI() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
      );
      if (res.data.result.data.customer.paymentDetails) {
        setData(res.data.result.data.customer.paymentDetails);
        setBankDetail(
          res.data.result.data.customer.paymentDetails.paymentMethod === 'bankDetail'
        );
        setCreditCard(
          res.data.result.data.customer.paymentDetails.paymentMethod === 'creditCard'
        );
      } else {
        setData({});
      }
    }
    if (id) {
      fetchMyAPI();
    }
  }, [router]);

  useEffect(() => {
    if (!bankDetail) {
      const validationCreditSchema = yup.object({
        // Define your validation rules here.
        creditCardName: yup
          .string()
          .max(50, 'Credit Card Name must be at most 50 characters long')
          .min(1, 'Credit Card Name must be minimum 1 characters')
          .required('Credit Card Name is required'),
        creditCardNo: yup
          .number()
          // .test(
          //   'test-number',
          //   'Credit Card number is invalid',
          //   (value) => cardValidator.number(value).isValid
          // )
          .required('Credit Card Number is required'),
        cvv: yup
          .string()
          .matches(/^[0-9]{3,4}$/, 'CVV must be at most 3 or 4 characters long')
          .required('CVV is required'),
        creditCardExpiry: yup.string().required('Credit Card Expiry is required')
      });
      setValidationSchemaState(validationCreditSchema);
    }
    if (bankDetail) {
      setValidationSchemaState(validationSchema);
    }
  }, [bankDetail]);

  const onSubmit = async (value) => {
    console.log(value);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/payment-detail`,
        {
          ...value,
          paymentMethod: bankDetail ? 'bankDetail' : 'creditCard',
          customerId: router.query.id
        }
      );
      if (res.data.status) {
        handleTabClick('discount');
        handleTabCompleted('payment_details');
      } else {
        CustomAlert(res.data.message, 'Error');
      }
    } catch (e) {
      CustomAlert(e.response.data.error[0].msg, 'Error');
    }
  };

  return (
    <div className="payment-details-wrapper">
      <div className="content-header ">
        <h3>Payment Details</h3>
      </div>
      <div className="content-body">
        {router.query.id && data && (
          <Formik
            initialValues={{ ...data }}
            validationSchema={validationSchemaState}
            validateOnChange={false}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                <div className="payment-details-radios">
                  <label>
                    <b>Payment By </b>
                    <span>*</span>
                  </label>
                  <div className="payment-details-bank">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Bank Details"
                      name="bankDetail"
                      checked={bankDetail}
                      handleChangeRadio={(e) => {
                        setBankDetail(e.target.checked);
                        setCreditCard(!e.target.checked);
                      }}
                      placeholder="Company Name"
                      type="radio"
                    />
                  </div>
                  <div className="payment-details-card">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Credit Card Details"
                      name="creditDetail"
                      checked={creditCard}
                      handleChangeRadio={(e) => {
                        setCreditCard(e.target.checked);
                        setBankDetail(!e.target.checked);
                      }}
                      placeholder="Company Name"
                      type="radio"
                    />
                  </div>
                </div>

                {bankDetail && (
                  <>
                    <div className="form-row-two-col">
                      <FormInput
                        isSubmit={isSubmit}
                        label="IBAN Number"
                        name="iban"
                        placeholder="IBAN Number"
                        type="text"
                        isRequired={true}
                      />
                    </div>
                    <div className="form-row">
                      <FormInput
                        isSubmit={isSubmit}
                        label="Account owner name"
                        name="onwerName"
                        placeholder="Account owner name"
                        type="text"
                        isRequired={true}
                      />

                      <FormInput
                        isSubmit={isSubmit}
                        label="BIC Number"
                        name="bicNumber"
                        placeholder="BIC Number"
                        type="text"
                        isRequired={true}
                      />
                      <FormInput
                        isSubmit={isSubmit}
                        label="Mandate Reference"
                        name="mandateReference"
                        placeholder="Mandate Reference"
                        type="number"
                        isRequired={true}
                      />
                      <FormInput
                        isSubmit={isSubmit}
                        label="Mandate Date"
                        name="mandateDate"
                        placeholder="03/13/2023"
                        type="date"
                        isRequired={true}
                      />
                    </div>
                  </>
                )}
                {!bankDetail && (
                  <div className="form-row">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Credit Card Name"
                      name="creditCardName"
                      placeholder="Credit Card Name"
                      type="text"
                      isRequired={true}
                    />
                    <FormInput
                      isSubmit={isSubmit}
                      label="Credit Card Number"
                      name="creditCardNo"
                      placeholder="Credit Card Number"
                      type="number"
                      isRequired={true}
                    />
                    <FormInput
                      isSubmit={isSubmit}
                      label="Expiry Date"
                      name="creditCardExpiry"
                      placeholder="03/13/2023"
                      type="date"
                      isRequired={true}
                    />
                    <FormInput
                      isSubmit={isSubmit}
                      label="CVV"
                      name="cvv"
                      placeholder="CVV"
                      type="number"
                      isRequired={true}
                    />
                  </div>
                )}

                <StepperFooter
                  handleTabClick={handleTabClick}
                  back="company_details"
                  setIsSubmit={setIsSubmit}
                />
              </Form>
            )}
          </Formik>
        )}

        {!router.query.id && (
          <Formik
            initialValues={{ ...data }}
            validationSchema={validationSchemaState}
            validateOnChange={false}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                <div className="payment-details-radios">
                  <label>
                    <b>Payment By </b>
                    <span>*</span>
                  </label>
                  <div className="payment-details-bank">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Bank Details"
                      name="bankDetail"
                      checked={bankDetail}
                      handleChangeRadio={(e) => {
                        setBankDetail(e.target.checked);
                        setCreditCard(!e.target.checked);
                      }}
                      placeholder="Company Name"
                      type="radio"
                    />
                  </div>
                  <div className="payment-details-card">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Credit Card Details"
                      name="creditDetail"
                      checked={creditCard}
                      handleChangeRadio={(e) => {
                        setCreditCard(e.target.checked);
                        setBankDetail(!e.target.checked);
                      }}
                      placeholder="Company Name"
                      type="radio"
                    />
                  </div>
                </div>

                {bankDetail && (
                  <>
                    <div className="form-row-two-col">
                      <FormInput
                        isSubmit={isSubmit}
                        label="IBAN Number"
                        name="iban"
                        placeholder="IBAN Number"
                        type="text"
                        isRequired={true}
                      />
                    </div>
                    <div className="form-row">
                      <FormInput
                        isSubmit={isSubmit}
                        label="Account owner name"
                        name="onwerName"
                        placeholder="Account owner name"
                        type="text"
                        isRequired={true}
                      />

                      <FormInput
                        isSubmit={isSubmit}
                        label="BIC Number"
                        name="bicNumber"
                        placeholder="BIC Number"
                        type="text"
                        isRequired={true}
                      />
                      <FormInput
                        isSubmit={isSubmit}
                        label="Mandate Reference"
                        name="mandateReference"
                        placeholder="Mandate Reference"
                        type="number"
                        isRequired={true}
                      />
                      <FormInput
                        isSubmit={isSubmit}
                        label="Mandate Date"
                        name="mandateDate"
                        placeholder="03/13/2023"
                        type="date"
                        isRequired={true}
                      />
                    </div>
                  </>
                )}
                {!bankDetail && (
                  <div className="form-row">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Credit Card Name"
                      name="creditCardName"
                      placeholder="Credit Card Name"
                      type="text"
                      isRequired={true}
                    />
                    <FormInput
                      isSubmit={isSubmit}
                      label="Credit Card Number"
                      name="creditCardNo"
                      placeholder="Credit Card Number"
                      type="number"
                      isRequired={true}
                    />
                    <FormInput
                      isSubmit={isSubmit}
                      label="Expiry Date"
                      name="creditCardExpiry"
                      placeholder="03/13/2023"
                      type="date"
                      isRequired={true}
                    />
                    <FormInput
                      isSubmit={isSubmit}
                      label="CVV"
                      name="cvv"
                      placeholder="CVV"
                      type="number"
                      isRequired={true}
                    />
                  </div>
                )}
                <StepperFooter
                  handleTabClick={handleTabClick}
                  back="company_details"
                  setIsSubmit={setIsSubmit}
                />
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
