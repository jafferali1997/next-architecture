'use client';

import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogTitle, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';

export default function ProductModal({ data, setData, ref, openPopup, setOpenPopup }) {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue([...data]);
  }, [data]);

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
              <Select
                label={item.label}
                value={item.value}
                onChange={(e) => handleSetValue(index, e.target.value)}
                className="tw-w-full"
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: 240
                }}
              >
                {item?.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
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
            text={value?.[0]?.button}
            onClick={() => {
              setData(value);
              setValue();
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
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  ref: PropTypes.object.isRequired,
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired
};
