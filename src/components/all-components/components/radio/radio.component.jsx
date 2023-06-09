import CustomRadio from '@/common/components/custom-radio/custom-radio.component';
import CustomRadioGroup from '@/common/components/radio-group/radio-group.component';

export default function Radio() {
  return (
    <div className="tw-m-5">
      <h3 className="tw-text-2xl tw-font-bold">Radio</h3>
      <hr />
      <div className="tw-m-5">
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
          <CustomRadio value="v1" name="radio" label="Small Radio" size="sm" />
          <CustomRadio value="v2" name="radio" label="Default Radio" defaultChecked />
          <CustomRadio value="v3" name="radio" label="Disabled Radio" disabled />
          <CustomRadio
            value="v4"
            name="radio4"
            label="Disabled Checked Switch"
            defaultChecked
            disabled
          />
        </div>
        <hr />
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
          <CustomRadioGroup
            radioOptions={[
              { label: 'Radio 1', value: 'radio1', defaultChecked: true },
              { label: 'Radio 2', value: 'radio2' },
              { label: 'Radio 3', value: 'radio3' }
            ]}
            label="Radio Group (Select One):"
          />
        </div>
      </div>
    </div>
  );
}
