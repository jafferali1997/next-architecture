/* eslint-disable react/forbid-prop-types */

'use client';

import { KeyboardArrowDown } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Select } from '@mui/material';
import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import useProductModal from './use-product-modal.hook';

export default function ProductModal({ data, setData, ref, openPopup, setOpenPopup }) {
  const { value, handleSetValue, setValue } = useProductModal(data);
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
