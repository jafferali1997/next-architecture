'use client';

import PropTypes from 'prop-types';
import useCompanyDetails from './use-company-details.hook';
import FormForCompanyDetails from './components/form-for-company-details/form-for-company-details';

export default function CompanyDetails({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    onSubmit,
    isAdditional,
    status,
    setStatus,
    isShowInPdf,
    setIsShowInPdf,
    isVatEnabled,
    setIsVatEnabled,
    handleCountryChange,
    selectedCountry,
    countries,
    cities,
    selectedCity,
    handleCityChange,
    setIsSubmit,
    additionalHandles,
    router,
    data,
    errors
  } = useCompanyDetails({ handleTabClick, handleTabCompleted });
  return (
    <div className="company-details-wrapper">
      <div className="content-header ">
        <h3 className="form-inner-heading">Company Details</h3>
      </div>
      <div className="content-body">
        {router?.query?.id && data && (
          <FormForCompanyDetails
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            isAdditional={isAdditional}
            status={status}
            setStatus={setStatus}
            isShowInPdf={isShowInPdf}
            setIsShowInPdf={setIsShowInPdf}
            isVatEnabled={isVatEnabled}
            setIsVatEnabled={setIsVatEnabled}
            handleCountryChange={handleCountryChange}
            selectedCountry={selectedCountry}
            countries={countries}
            cities={cities}
            selectedCity={selectedCity}
            handleCityChange={handleCityChange}
            handleTabClick={handleTabClick}
            setIsSubmit={setIsSubmit}
            additionalHandles={additionalHandles}
            errors={errors}
            data={data}
          />
        )}
        {!router?.query?.id && (
          <FormForCompanyDetails
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            isAdditional={isAdditional}
            status={status}
            setStatus={setStatus}
            isShowInPdf={isShowInPdf}
            setIsShowInPdf={setIsShowInPdf}
            isVatEnabled={isVatEnabled}
            setIsVatEnabled={setIsVatEnabled}
            handleCountryChange={handleCountryChange}
            selectedCountry={selectedCountry}
            countries={countries}
            cities={cities}
            selectedCity={selectedCity}
            handleCityChange={handleCityChange}
            handleTabClick={handleTabClick}
            setIsSubmit={setIsSubmit}
            additionalHandles={additionalHandles}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
}

CompanyDetails.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
