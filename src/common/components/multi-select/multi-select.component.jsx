import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import useMultiSelect from './use-multi-select.hook';
import ArrowDownIcon from '@/common/icons/arrow-down.icon';
import ArrowUpIcon from '@/common/icons/arrow-up.icon';

/**
 * @param options will take array of objects that will be listed
 * @returns
 */

export default function MultiSelect({
  options,
  handleChange,
  placeholder = 'Select Option(s)',
  search = true,
  isClearable = true,
  maxDisplayOptions = 4,
  defaultOptions = null,
  addClickHandler = null,
  readOnly = false
}) {
  const {
    open,
    setOpen,
    selectedOptions,
    filteredOptions,
    ref,
    toggleDropDown,
    getPlaceholder,
    isSelectedClass,
    optionClickHandler,
    removeOptionHandler,
    clearAllClickHandler,
    handleInputChangeHandler,
    isSearching
  } = useMultiSelect(options, handleChange, defaultOptions, search, readOnly);

  const renderOptions = (options) => {
    return options?.map((option, index) => (
      <div
        key={option?.id}
        className={`noCloseOptions tw-w-full tw-cursor-pointer tw-border-gray-100 hover:tw-bg-teal-100 ${isSelectedClass(
          option
        )} ${index !== 0 ? 'tw-border-t' : ''}`}
        onClick={() => optionClickHandler(option)}
      >
        <div className="noCloseOptions tw-relative tw-flex tw-w-full tw-items-center tw-border-l-2 tw-border-transparent tw-p-2 tw-pl-2 hover:tw-border-teal-100">
          <div className="noCloseOptions tw-flex tw-w-full tw-items-center">
            <div className="noCloseOptions tw-mx-2 tw-leading-6">{option?.label}</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="tw-mt-5 tw-flex tw-w-11 tw-w-full">
      <div className="tw-w-full">
        <div className="tw-relative tw-flex tw-flex-col tw-items-center">
          <div className="tw-w-full">
            <div className="tw-my-2 tw-flex tw-rounded tw-border tw-border-gray-200 tw-bg-white tw-p-1">
              <div className="tw-flex tw-flex-auto tw-flex-wrap">
                {selectedOptions?.map((option, index) => {
                  if (index < maxDisplayOptions) {
                    return (
                      <div
                        key={option?.id}
                        className="tw-m-1 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-teal-300 tw-bg-teal-100 tw-px-2 tw-py-1 tw-font-medium tw-text-teal-700 "
                      >
                        <div className="tw-max-w-full tw-flex-initial tw-text-xs tw-font-normal tw-leading-none">
                          {option?.label}
                        </div>
                        {!readOnly && (
                          <div
                            className="tw-flex tw-flex-auto tw-flex-row-reverse"
                            onClick={() => removeOptionHandler(option)}
                          >
                            <ClearIcon className="-tw-mr-1 tw-h-5 tw-w-5 tw-text-gray-400 hover:tw-cursor-pointer hover:tw-text-gray-700" />
                          </div>
                        )}
                      </div>
                    );
                  }
                  return '';
                })}
                {selectedOptions?.length > maxDisplayOptions && (
                  <div className="flex tw-m-1 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-teal-300 tw-bg-teal-100 tw-px-2 tw-py-1 tw-font-medium tw-text-teal-700">
                    <div className="tw-flex tw-max-w-full tw-items-center tw-justify-center tw-text-xs tw-font-normal tw-leading-none">
                      <AddIcon className="tw-h-3 tw-w-3" />
                      {selectedOptions.length - maxDisplayOptions} more
                    </div>
                  </div>
                )}
                <div className="tw-flex-1">
                  <input
                    ref={ref}
                    placeholder={getPlaceholder(placeholder)}
                    className="click-text tw-h-full tw-w-full tw-appearance-none tw-bg-transparent tw-p-1 tw-px-2 tw-text-gray-800 tw-outline-none"
                    onClick={toggleDropDown}
                    onChange={handleInputChangeHandler}
                    readOnly={readOnly}
                  />
                </div>
              </div>
              <div className="tw-flex tw-items-center tw-pl-2 tw-text-gray-300">
                {!readOnly && isClearable && selectedOptions?.length > 1 && (
                  <div onClick={clearAllClickHandler}>
                    <ClearIcon className="tw-mr-1 tw-h-5 tw-w-5 tw-text-gray-400 hover:tw-cursor-pointer hover:tw-text-gray-700" />
                  </div>
                )}
                <div className="-tw-mr-1 tw-h-full tw-border-l tw-border-gray-200">
                  <button
                    type="button"
                    className="noCloseOptions tw-ml-1 tw-h-full tw-w-6 tw-cursor-pointer tw-text-gray-600 tw-outline-none focus:tw-outline-none"
                    onClick={toggleDropDown}
                    onBlur={() => {
                      if (open) setOpen(false);
                    }}
                  >
                    {open && (
                      <ArrowUpIcon className="noCloseOptions -tw-mr-3 tw-h-5 tw-w-5 tw-text-gray-400" />
                    )}
                    {!open && (
                      <ArrowDownIcon className="noCloseOptions -tw-mr-3 tw-h-5 tw-w-5 tw-text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {open && (
            <div className="tw-lef-0 tw-absolute tw-top-[100%] tw-z-[999] tw-w-full  tw-rounded tw-bg-white tw-text-black  tw-shadow">
              <div className="tw-flex tw-max-h-[200px] tw-w-full tw-flex-col tw-overflow-y-auto">
                {addClickHandler && (
                  <div
                    className="tw-flex tw-max-w-full tw-items-center"
                    onClick={addClickHandler}
                  >
                    <AddIcon className="tw-h-3 tw-w-3" />
                    <p>create new group</p>
                  </div>
                )}
                {filteredOptions && isSearching
                  ? renderOptions(filteredOptions)
                  : renderOptions(options)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const optionShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
});

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(optionShape).isRequired,
  handleChange: PropTypes.func.isRequired,
  addClickHandler: PropTypes.func,
  placeholder: PropTypes.string,
  search: PropTypes.bool,
  isClearable: PropTypes.bool,
  maxDisplayOptions: PropTypes.number,
  defaultOptions: PropTypes.arrayOf(optionShape),
  readOnly: PropTypes.bool
};
