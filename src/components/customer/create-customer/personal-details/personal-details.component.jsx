import PropTypes from 'prop-types';
import FormForPersonalDetails from './components/form-for-personal-details/form-for-personal-details.compoments';
import usePersonalDetails from './use-personal-details';

export default function PersonalDetails({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    onSubmit,
    handleCountryChange,
    selectedCity,
    selectedCountry,
    handleCityChange,
    countries,
    cities,
    data,
    setIsSubmit,
    errors,
    allPriceGroup,
    setAllPriceGroup,
    selectedPriceGroup,
    setSelectedPriceGroup,
    allDiscountGroup,
    setAllDiscountGroup,
    selectedDiscountGroup,
    setSelectedDiscountGroup,
    control
  } = usePersonalDetails({ handleTabClick, handleTabCompleted });

  return (
    <div className="personal-details-wrapper">
      <div className="content-header ">
        <h3 className="form-inner-heading">Personal Details</h3>
      </div>
      <div className="content-body">
        <FormForPersonalDetails
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          handleCountryChange={handleCountryChange}
          selectedCity={selectedCity}
          selectedCountry={selectedCountry}
          handleCityChange={handleCityChange}
          countries={countries}
          cities={cities}
          data={data}
          setIsSubmit={setIsSubmit}
          errors={errors}
          allPriceGroup={allPriceGroup}
          setAllPriceGroup={setAllPriceGroup}
          selectedPriceGroup={selectedPriceGroup}
          setSelectedPriceGroup={setSelectedPriceGroup}
          allDiscountGroup={allDiscountGroup}
          setAllDiscountGroup={setAllDiscountGroup}
          selectedDiscountGroup={selectedDiscountGroup}
          setSelectedDiscountGroup={setSelectedDiscountGroup}
          control={control}
        />
      </div>
    </div>
  );
}

PersonalDetails.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
