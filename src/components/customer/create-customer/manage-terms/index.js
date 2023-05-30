import axios from 'axios';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import StepperFooter from '@/common/components/form-stepper/stepper-footer';
import FormInput from '@/common/components/form-input';

import CustomAlert from '@/common/components/custom-alert';

let validationSchema = yup.object({});

export default function ManageTerms({ handleTabClick, resetTabCompleted }) {
  const [selectedValue, setSelectedValue] = useState('paymentDateSelect');
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);

  const router = useRouter();

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  const transformValue = (value) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const i in value) {
      if (value[i].match(/[A-Z]/)) {
        const temp = value[i].match(/[A-Z]/)[0];
        return value.replace(temp, ` ${temp.toLowerCase()}`);
      }
    }
  };

  useEffect(() => {
    const { id } = router.query;

    async function fetchMyAPI() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
      );
      if (res.data.result.data.customer) {
        setData({
          [res.data.result.data.customer.paymentTermsName]:
            res.data.result.data.customer.paymentTerms,
          deliveryTerm: res.data.result.data.customer.deliveryTerms
        });
        setSelectedValue(
          res.data.result.data.customer.paymentTermsName ?? 'paymentDateSelect'
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
    if (selectedValue) {
      validationSchema = yup.object({
        [selectedValue.substring(0, selectedValue.length - 6)]: yup
          .string()
          .required(
            `${transformValue(
              selectedValue.substring(0, selectedValue.length - 6)
            )} is required`
          )
      });
      console.log(validationSchema);
      setValidationSchemaState(validationSchema);
    }
  }, [selectedValue]);

  const onSubmit = async (value) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/payment-terms`,
        {
          paymentTerms: value[selectedValue],
          paymentTermsName: selectedValue,
          customerId: router.query.id
        }
      );
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/delivery-terms`,
        {
          deliveryTerms: value.deliveryTerm,
          customerId: router.query.id
        }
      );
      if (res.data.status) {
        CustomAlert('Customer Created Successfully', 'Success');
        resetTabCompleted();
        router.push('/customer');
        handleTabClick('customer_details');
      } else {
        CustomAlert(res.data.message, 'Error');
      }
    } catch (e) {
      CustomAlert(e.response.data.error[0].msg, 'Error');
    }
  };
  return (
    <div className="mange-terms-details-wrapper ">
      <div className="content-header ">
        <h3>Terms of payments</h3>
      </div>
      <div className="content-body">
        {router.query.id && data && (
          <Formik
            initialValues={{ ...data }}
            validationSchema={validationSchemaState}
            validateOnChange={false}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, handleSubmit, handleReset }) => (
              <Form onSubmit={handleSubmit}>
                <div className="payment-details-radios tw-mb-5">
                  <div className="payment-details-bank">
                    <FormInput
                      isSubmit={isSubmit}
                      label="payment terms as date"
                      name="paymentDateSelect"
                      type="radio"
                      checked={selectedValue === 'paymentDateSelect'}
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      value="paymentDateSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'paymentDateSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="paymentDate"
                          placeholder="03/13/2023"
                          type="date"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-card">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Payment terms in days"
                      name="PaymentDaysSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'PaymentDaysSelect'}
                      value="PaymentDaysSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'PaymentDaysSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="PaymentDays"
                          placeholder="Payment terms"
                          type="days"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-bank">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Cash discount target as a date"
                      name="cashDiscountSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'cashDiscountSelect'}
                      value="cashDiscountSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'cashDiscountSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="cashDiscount"
                          placeholder="13/03/2023"
                          type="date"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-card">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Discount and %"
                      name="discountSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'discountSelect'}
                      value="discountSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'discountSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="discount"
                          placeholder="Discount and %"
                          type="text"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-bank">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Discount amount"
                      name="discountAmountSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'discountAmountSelect'}
                      value="discountAmountSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'discountAmountSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="discountAmount"
                          placeholder="Discount amount"
                          type="text"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-card">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Total amount minus discount"
                      name="minusDiscountSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'minusDiscountSelect'}
                      value="minusDiscountSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'minusDiscountSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="minusDiscount"
                          placeholder="Total amount minus discount"
                          type="text"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <h3>Terms of delivery</h3>
                <div className="form-row-two-col">
                  <FormInput
                    isSubmit={isSubmit}
                    name="deliveryTerm"
                    placeholder="Delivery Terms"
                    type="textarea"
                    isRequired={true}
                  />
                  {/* <FormInput
                  isSubmit={isSubmit}
                name="paymentTerm"
                placeholder="IBAN Number"
                type="textarea"
                isRequired={true}
              /> */}
                </div>
                <StepperFooter
                  handleTabClick={handleTabClick}
                  back="discount"
                  setIsSubmit={setIsSubmit}
                  submitText="Submit"
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
            {({ isSubmitting, handleSubmit, handleReset }) => (
              <Form onSubmit={handleSubmit}>
                <div className="payment-details-radios tw-mb-5">
                  <div className="payment-details-bank">
                    <FormInput
                      isSubmit={isSubmit}
                      label="payment terms as date"
                      name="paymentDateSelect"
                      type="radio"
                      checked={selectedValue === 'paymentDateSelect'}
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      value="paymentDateSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'paymentDateSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="paymentDate"
                          placeholder="03/13/2023"
                          type="date"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-card">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Payment terms in days"
                      name="PaymentDaysSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'PaymentDaysSelect'}
                      value="PaymentDaysSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'PaymentDaysSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="PaymentDays"
                          placeholder="Payment terms"
                          type="days"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-bank">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Cash discount target as a date"
                      name="cashDiscountSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'cashDiscountSelect'}
                      value="cashDiscountSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'cashDiscountSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="cashDiscount"
                          placeholder="13/03/2023"
                          type="date"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-card">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Discount and %"
                      name="discountSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'discountSelect'}
                      value="discountSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'discountSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="discount"
                          placeholder="Discount and %"
                          type="text"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-bank">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Discount amount"
                      name="discountAmountSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'discountAmountSelect'}
                      value="discountAmountSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'discountAmountSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="discountAmount"
                          placeholder="Discount amount"
                          type="text"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                  <div className="payment-details-card">
                    <FormInput
                      isSubmit={isSubmit}
                      label="Total amount minus discount"
                      name="minusDiscountSelect"
                      type="radio"
                      onClick={() => {
                        if (selectedValue !== 'paymentDateSelect') handleReset();
                      }}
                      checked={selectedValue === 'minusDiscountSelect'}
                      value="minusDiscountSelect"
                      handleChangeRadio={handleChangeRadio}
                    />
                    {selectedValue === 'minusDiscountSelect' && (
                      <div className="radio-expanded">
                        <FormInput
                          isSubmit={isSubmit}
                          name="minusDiscount"
                          placeholder="Total amount minus discount"
                          type="text"
                          isRequired={false}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <h3>Terms of delivery</h3>
                <div className="form-row-two-col">
                  <FormInput
                    isSubmit={isSubmit}
                    name="deliveryTerm"
                    placeholder="Delivery Terms"
                    type="textarea"
                    isRequired={true}
                  />
                  {/* <FormInput
                  isSubmit={isSubmit}
                  name="paymentTerm"
                  placeholder="IBAN Number"
                  type="textarea"
                  isRequired={true}
                /> */}
                </div>
                <StepperFooter
                  handleTabClick={handleTabClick}
                  back="discount"
                  setIsSubmit={setIsSubmit}
                  submitText="Submit"
                />
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
