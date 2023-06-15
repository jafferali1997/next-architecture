/* eslint-disable react/forbid-prop-types */
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HorizentalDotsIcon from '@/common/icons/horizental-dots.icon';
import GroupIcon from '@/common/icons/group.icon';
import PencilIcon from '@/common/icons/pencil.icon';
import DeleteIcon from '@/common/icons/delete.icon';

export default function ProductGroup({
  handleModalData,
  handleUpdateInput,
  index,
  item,
  updateType
}) {
  const [threeDot, setThreeDot] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setThreeDot(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleThreeMenu = () => {
    setThreeDot(!threeDot);
  };

  return (
    <div className="tw-my-5 tw-flex tw-h-[79px] tw-w-[296px] tw-flex-row tw-items-start tw-justify-between  tw-gap-3 tw-rounded-md tw-px-4 tw-py-[18px] tw-shadow-[0px_0px_10px_rgba(29,78,216,0.07)]">
      <div className="tw-flex tw-items-center  tw-gap-3">
        <div>
          <GroupIcon />
        </div>
        <div className="tw-flex-col tw-items-center  tw-gap-3">
          <h4 className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-medium-gray">
            Group 1
          </h4>
          <p className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
            32
          </p>
        </div>
      </div>
      <div className="tw-relative" onClick={handleThreeMenu}>
        <div className="hover:tw-cursor-pointer">
          <HorizentalDotsIcon />
        </div>
        {threeDot ? (
          <div
            ref={ref}
            className="tw-absolute tw-bottom-[-66px] tw-left-[-100px] tw-flex tw-h-[74px] tw-w-[92px] tw-flex-col tw-items-start tw-gap-2 tw-rounded-md tw-border tw-border-solid tw-border-[#CECECE] tw-bg-white tw-p-3 "
          >
            <div
              id="three-dot-div-4"
              className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-0 hover:tw-cursor-pointer"
              // onClick={() => handleButtonClickedit(id, value)}
              onClick={() => handleModalData(updateType, index, item)}
            >
              <PencilIcon id="three-dot-pencil" />
              <p
                id="three-dot-p"
                className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-black"
              >
                Edit
              </p>
            </div>
            <div
              id="three-dot-div-5"
              className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-0 hover:tw-cursor-pointer"
              onClick={() => handleUpdateInput(null, index, true)}
            >
              <DeleteIcon id="three-dot-delete" />
              <p
                id="three-dot-div-6"
                className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-black"
              >
                Delete
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

ProductGroup.propTypes = {
  ref: PropTypes.object.isRequired,
  handleModalData: PropTypes.func.isRequired,
  handleUpdateInput: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  updateType: PropTypes.string.isRequired
};
