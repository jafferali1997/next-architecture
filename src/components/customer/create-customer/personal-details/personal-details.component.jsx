'use client';

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
    priceGroup,
    addPrice,
    setAddPrice,
    setPriceOptions,
    addPriceGroup,
    data,
    discountGroup,
    setDiscountOptions,
    addDiscount,
    setAddDiscount,
    addDiscountGroup,
    setIsSubmit,
    router,
    errors,
    openPopup,
    setOpenPopup,
    handleButtonClickedit
  } = usePersonalDetails({ handleTabClick, handleTabCompleted });

  return (
    <div className="personal-details-wrapper">
      <div className="content-header ">
        <h3 className="form-inner-heading">Personal Details</h3>
      </div>
      <div className="content-body">
        {router?.query?.id && data && priceGroup && discountGroup && (
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
            priceGroup={priceGroup}
            addPrice={addPrice}
            setAddPrice={setAddPrice}
            setPriceOptions={setPriceOptions}
            addPriceGroup={addPriceGroup}
            data={data}
            discountGroup={discountGroup}
            setDiscountOptions={setDiscountOptions}
            addDiscount={addDiscount}
            setAddDiscount={setAddDiscount}
            addDiscountGroup={addDiscountGroup}
            setIsSubmit={setIsSubmit}
            errors={errors}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            handleButtonClickedit={handleButtonClickedit}
          />
        )}
        {!router?.query?.id && (
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
            priceGroup={priceGroup}
            addPrice={addPrice}
            setAddPrice={setAddPrice}
            setPriceOptions={setPriceOptions}
            addPriceGroup={addPriceGroup}
            data={data}
            discountGroup={discountGroup}
            setDiscountOptions={setDiscountOptions}
            addDiscount={addDiscount}
            setAddDiscount={setAddDiscount}
            addDiscountGroup={addDiscountGroup}
            setIsSubmit={setIsSubmit}
            errors={errors}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            handleButtonClickedit={handleButtonClickedit}
          />
        )}
      </div>
    </div>
  );
}

PersonalDetails.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
