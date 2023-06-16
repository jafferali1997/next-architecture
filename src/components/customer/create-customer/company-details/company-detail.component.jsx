import PropTypes from 'prop-types';
import useCompanyDetails from './use-company-details.hook';
import FormForCompanyDetails from './components/form-for-company-details/form-for-company-details';
import useCountryCity from '@/common/hooks/use-country-city.hook';
import COUNTRIES from '@/common/constants/countries.constant';

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
    selectedCountry,
    selectedCity,
    handleCityChange,
    setIsSubmit,
    additionalHandles,
    errors,
    handleAddInput,
    handleInputChange,
    inputValues,
    control
  } = useCompanyDetails({ handleTabClick, handleTabCompleted });

  const { handleCountryChange, cities } = useCountryCity();

  return (
    <div className="company-details-wrapper">
      <div className="content-header ">
        <h3 className="form-inner-heading">Company Details</h3>
      </div>
      <div className="content-body">
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
          countries={COUNTRIES}
          cities={cities}
          handleCityChange={handleCityChange}
          handleTabClick={handleTabClick}
          setIsSubmit={setIsSubmit}
          additionalHandles={additionalHandles}
          errors={errors}
          handleAddInput={handleAddInput}
          handleInputChange={handleInputChange}
          inputValues={inputValues}
          control={control}
        />
      </div>
    </div>
  );
}

CompanyDetails.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
