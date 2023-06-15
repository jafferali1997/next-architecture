'use client';

import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';

export default function ProductModal({ data, setData, ref, openPopup, setOpenPopup }) {
  const [value, setValue] = useState(data);
  const handleSetValue = (indexToChange, valueToSet) => {
    setValue([
      ...value.map((item, index) => {
        if (index === indexToChange) {
          return { ...item, value: valueToSet };
        }
        return item;
      })
    ]);
  };
  return (
    <Dialog open={openPopup}>
      <div ref={ref} className="tw-w-[389px]">
        <div>
          <DialogTitle>Group</DialogTitle>
        </div>
        <DialogContent>
          {value?.map((item, index) =>
            item.type === 'select' ? (
              <CustomSelect
                label={item.label}
                options={item.options}
                value={item.value}
                onChange={(e) => handleSetValue(index, e.target.value)}
              />
            ) : (
              <CustomInput
                label={item.label}
                type={item.type ?? 'text'}
                value={item.value}
                onChange={(e) => handleSetValue(index, e.target.value)}
              />
            )
          )}
        </DialogContent>
        <DialogActions>
          <CustomButton
            onClick={() => setOpenPopup(false)}
            className=" btn-cancel"
            text="Cancel"
          />
          <CustomButton
            className="btn btn-primary "
            text="Update"
            onClick={() => {
              setData(value);
              setOpenPopup(false);
              //   handleUpdateCategory(idToUpdateCategory, updateValue);
              //   setUpdateValue('');
            }}
          />
        </DialogActions>
      </div>
    </Dialog>
  );
}

ProductModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  ref: PropTypes.object.isRequired,
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired
};
