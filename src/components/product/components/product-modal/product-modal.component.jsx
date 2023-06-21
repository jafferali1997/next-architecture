/* eslint-disable react/forbid-prop-types */

'use client';

import { KeyboardArrowDown } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Select } from '@mui/material';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import useProductModal from './use-product-modal.hook';
import CustomSelect from '@/common/components/custom-select/custom-select.component';

export default function ProductModal({ data, setData, openPopup, setOpenPopup }) {
  const { value, handleSetValue, setValue } = useProductModal(data);
  return (
    <Dialog open={openPopup ?? false} onClose={() => setOpenPopup(false)}>
      <div className="tw-w-[389px]">
        <div>
          <DialogTitle className="tw-pb-0">Group</DialogTitle>
        </div>
        <DialogContent className="tw-p-5">
          {value?.map((item, index) =>
            item.type === 'select' ? (
              <CustomSelect
                label={item.label}
                value={item.value}
                onChange={(e) => handleSetValue(index, e.target.value)}
                options={item.options}
              />
            ) : (
              // <Select
              //   label={item.label}
              //   value={item.value}
              //   onChange={(e) => handleSetValue(index, e.target.value)}
              //   className="tw-w-full"
              //   indicator={<KeyboardArrowDown />}
              //   sx={{
              //     width: 240
              //   }}
              // >
              //   {item?.options?.map((option) => (
              //     <option key={option.value} value={option.value}>
              //       {option.label}
              //     </option>
              //   ))}
              // </Select>
              <div className="tw-mt-4">
                <CustomInput
                  label={item.label}
                  type={item.type ?? 'text'}
                  value={item.value}
                  onChange={(e) => handleSetValue(index, e.target.value)}
                />
              </div>
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
            className="btn btn-primary tw-h-[30px] tw-w-[90px] tw-min-w-[90px]"
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
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired
};
