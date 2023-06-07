'use client';

import { PropTypes } from 'prop-types';
import DeleteIcon from '@/common/icons/delete.icon';
import PencilIcon from '@/common/icons/pencil.icon';
import ThreedotIcon from '@/common/icons/threedot.icon';
import useMenuDropdown from './use-menu-drop-down.hook';

export default function MenuDropDown({
  handleButtonClickedit,
  id,
  handleDeleteCategory
}) {
  const { handleThreeMenu, threeDot } = useMenuDropdown();
  return (
    <div className="tw-flex tw-items-center ">
      <div
        className="tw-relative tw-m-auto tw-flex tw-w-8 tw-justify-center"
        onClick={handleThreeMenu}
      >
        {threeDot ? (
          <div className=" tw-absolute tw-bottom-[-66px] tw-left-[-86px] tw-flex tw-h-[74px] tw-w-[92px] tw-flex-col tw-items-start tw-gap-2 tw-rounded-md tw-border tw-border-solid tw-border-[#CECECE] tw-bg-white tw-p-3 ">
            <div
              className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-0"
              onClick={() => handleButtonClickedit(id)}
            >
              <PencilIcon />
              <p className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-black">
                Edit
              </p>
            </div>
            <div
              className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-0"
              onClick={() => handleDeleteCategory(id)}
            >
              <DeleteIcon />
              <p className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-black">
                Delete
              </p>
            </div>
          </div>
        ) : null}

        <ThreedotIcon className="threedot" />
      </div>

      <img src="/assets/images/arwo-icon.svg" alt="arwo-icon" />
    </div>
  );
}

MenuDropDown.propTypes = {
  handleButtonClickedit: PropTypes.func.isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
