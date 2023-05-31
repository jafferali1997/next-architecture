'use client';

import PropTypes from 'prop-types';
import FormForManageTerms from './components/form-for-manage-terms/form-for-manage-terms.component';
import useMangeTerm from './use-manage-terms.hook';

export default function ManageTerms({ handleTabClick, resetTabCompleted }) {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    selectedValue,
    handleChangeRadio,
    setIsSubmit,
    handleReset,
    data,
    router
  } = useMangeTerm({ handleTabClick, resetTabCompleted });
  return (
    <div className="mange-terms-details-wrapper ">
      <div className="content-header ">
        <h3>Terms of payments</h3>
      </div>
      <div className="content-body">
        {router?.query?.id && data && (
          <FormForManageTerms
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            selectedValue={selectedValue}
            handleChangeRadio={handleChangeRadio}
            handleTabClick={handleTabClick}
            setIsSubmit={setIsSubmit}
            handleReset={handleReset}
            data={data}
          />
        )}
        {!router?.query?.id && (
          <FormForManageTerms
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            selectedValue={selectedValue}
            handleChangeRadio={handleChangeRadio}
            handleTabClick={handleTabClick}
            setIsSubmit={setIsSubmit}
            handleReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}

ManageTerms.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  resetTabCompleted: PropTypes.func.isRequired
};
