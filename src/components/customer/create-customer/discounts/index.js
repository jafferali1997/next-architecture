import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import axios from 'axios';
import FormInput from '@/common/components/form-input';
import StepperFooter from '@/common/components/form-stepper/stepper-footer';
import CustomAlert from '@/common/components/custom-alert';

const validationSchema = yup.object({
  // Define your validation rules here.
  discount: yup
    .number()
    .max(9999999999, 'Discount must be at most 10 characters long')
    .min(1, 'Discount must be minimum 1 characters')
    .required('Discount is required'),
  days: yup.number().required('day is required')
});

export default function Discount({ handleTabClick, handleTabCompleted }) {
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    async function fetchMyAPI() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
      );
      if (res.data.result.data.customer.discount) {
        setData(res.data.result.data.customer.discount);
      } else {
        setData({});
      }
    }

    if (id) {
      fetchMyAPI();
    }
  }, []);

  const onSubmit = async (value) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/discount`,
        { ...value, customerId: router.query.id }
      );
      if (res.data.status) {
        handleTabClick('manage_terms');
        handleTabCompleted('discount');
      } else {
        CustomAlert(res.data.message, 'Error');
      }
    } catch (e) {
      CustomAlert(e.response.data.error[0].msg, 'Error');
    }
  };
  return (
    <div className="discount-details-wrapper">
      <div className="content-header ">
        <h3>Discount</h3>
      </div>
      <div className="content-body">
        {router.query.id && data && (
          <Formik
            initialValues={{ ...data }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-row-two-col">
                  <FormInput
                    isSubmit={isSubmit}
                    label="Discount Amount "
                    name="discount"
                    placeholder="Discount amount"
                    type="text"
                    isRequired={true}
                  />
                </div>
                <div className="form-row-one-col">
                  <FormInput
                    isSubmit={isSubmit}
                    label="Cash Discount"
                    name="days"
                    placeholder="Cash Discount"
                    type="days"
                    isRequired={true}
                  />
                  <div className="discount-days-suggestions">
                    <h4>Suggestions</h4>
                    <div className="days-boxes">
                      <div className="singe-day">2 days</div>
                      <div className="singe-day">7 days</div>
                      <div className="singe-day">10 days</div>
                    </div>
                  </div>
                </div>
                <StepperFooter
                  handleTabClick={handleTabClick}
                  back="payment_details"
                  setIsSubmit={setIsSubmit}
                />
              </Form>
            )}
          </Formik>
        )}
        {!router.query.id && (
          <Formik
            initialValues={{ ...data }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-row-two-col">
                  <FormInput
                    isSubmit={isSubmit}
                    label="Discount Amount "
                    name="discount"
                    placeholder="Discount amount"
                    type="text"
                    isRequired={true}
                  />
                </div>
                <div className="form-row-one-col">
                  <FormInput
                    isSubmit={isSubmit}
                    label="Cash Discount"
                    name="days"
                    placeholder="Cash Discount"
                    type="days"
                    isRequired={true}
                  />
                  <div className="discount-days-suggestions">
                    <h4>Suggestions</h4>
                    <div className="days-boxes">
                      <div className="singe-day">2 days</div>
                      <div className="singe-day">7 days</div>
                      <div className="singe-day">10 days</div>
                    </div>
                  </div>
                </div>
                <StepperFooter
                  handleTabClick={handleTabClick}
                  back="payment_details"
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
