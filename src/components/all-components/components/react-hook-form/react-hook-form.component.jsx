'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import SimpleSelect from '@/common/components/custom-select/simple-select.component';
import Select from '@/common/components/select/select.component';
import CustomCheckbox from '@/common/components/custom-checkbox/custom-checkbox.component';
import CustomSwitch from '@/common/components/custom-switch/custom-switch.component';
import CustomRadioGroup from '@/common/components/radio-group/radio-group.component';
import CustomButton from '@/common/components/custom-button/custom-button.component';

const validationSchema = yup.object({
  firstName: yup.string().max(5, 'company name must be at most 5 characters long')
});

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange'
  });

  return (
    <div className="tw-m-5">
      <h3 className="tw-text-2xl tw-font-bold">React Hook Form</h3>
      <hr />
      <div className="tw-m-5 tw-border-text-dark-gray">
        <form
          onSubmit={handleSubmit((data) => {
            // alert(JSON.stringify(errors))
            alert(JSON.stringify(data));
          })}
        >
          <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-1">
            <div className="tw-w-1/2">
              <CustomInput
                type="text"
                name="firstName"
                label="First Name:"
                placeholder="First Name"
                register={register}
                errors={errors}
                isRequired
              />
            </div>
            <div className="tw-w-1/2">
              <CustomInput
                type="text"
                name="lastName"
                label="Last Name:"
                placeholder="Last Name"
                register={register}
                isRequired
              />
            </div>
          </div>
          <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-1">
            <div className="tw-w-1/2">
              <SimpleSelect
                label="Select Education"
                placeholder="Select Education"
                name="education"
                options={[
                  { label: 'Matric', value: 'matric' },
                  { label: 'Intermediate', value: 'intermediate' },
                  { label: 'Graduation', value: 'graduation' },
                  { label: 'Masters', value: 'masters' }
                ]}
                register={register}
              />
            </div>
            <div className="tw-w-1/2">
              <Select
                label="Select User"
                placeholder="Select User"
                name="user"
                options={[
                  { label: 'Hamza', value: 'hamza' },
                  { label: 'Areeb', value: 'areeb' },
                  { label: 'Jaffer', value: 'jaffer' }
                ]}
                register={register}
              />
            </div>
          </div>
          <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-1">
            <div className="tw-w-1/2">
              <CustomCheckbox
                name="checkbox"
                label="Checkbox"
                register={register}
                isRequired
              />
            </div>
            <div className="tw-w-1/2">
              <CustomSwitch name="switch" label="Switch" register={register} isRequired />
            </div>
            <div className="tw-w-1/2">
              <CustomRadioGroup
                register={register}
                name="radio"
                label="Select Gender"
                radioOptions={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                  { label: 'Other', value: 'other' }
                ]}
                defaultValue="other"
              />
            </div>
            <CustomButton type="Submit" className="btn-primary" text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
