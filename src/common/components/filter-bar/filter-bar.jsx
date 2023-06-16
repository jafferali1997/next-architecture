import React from 'react'
import DownloadDropdownBtn from '../download-dropdown-button/download-dropdown-button.component'
import CustomSelect from '../custom-select/custom-select.component'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import CustomButton from '../custom-button/custom-button.component'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

export function FilterBar({dropdownoptions, options, option}) {
  return (
    <div className="tw-mt-[17px] tw-bg-[#F7F8F9] tw-px-5 tw-py-3">
    <div className="tw-flex tw-justify-between">
      <div className="tw-flex tw-items-center tw-gap-4">
        <div className='tw-h-[42px]'>

      {/* <DownloadDropdownBtn text="Search" dropdownoptions={dropdownoptions} /> */}
        </div>
        <div className="tw-rounded-[5px] tw-h-[42px] tw-border tw-border-solid tw-border-[#E7EAEE] tw-bg-[#ffffff] tw-px-[9px] tw-py-2.5">
          <img src="/assets/icons/more.svg"  />
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-gap-2">
        <a
          href="/"
          className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-[#7E7D7D] tw-underline"
        >
          {' '}
          Show columns{' '}
        </a>
        <CustomSelect
        className='tw-h-[37px]'
          options={options}
          defaultValue={options && options[0].value}
        />
        {/* <img src="/assets/icons/date-picker.svg" alt="" /> */}
        <div >

        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer
            components={[
              'DatePicker',
              'MobileDatePicker',
              'DesktopDatePicker',
              'StaticDatePicker'
            ]}
          >
            {/* <DemoItem label="Mobile variant"> */}
            <MobileDatePicker
            className="tw-pl-4 tw-h-[37px]"
              defaultValue={dayjs('2022-04-17')}
              // className="datepicker tw-flex tw-flex-row tw-items-center tw-gap-2 tw-rounded-md tw-border tw-border-solid tw-border-[#DDDDDD] tw-bg-[#FFFFFF] tw-px-[15px] tw-py-2"
            />
            {/* </DemoItem> */}
          </DemoContainer>
        </LocalizationProvider>
        </div>

        {/* <input
          placeholder="16/11/2022"
          type="date"
          // id={props.id || props.name}
          className="datepicker tw-bg-[#FFFFFF] tw-flex tw-flex-row tw-items-center tw-gap-2 tw-border tw-px-[15px] tw-py-2 tw-rounded-md tw-border-solid tw-border-[#DDDDDD]"
        /> */}
        <div>
          {/* <img src="/assets/icons/all.svg" alt="" /> */}

          <CustomSelect className='tw-h-[37px]' options={option} defaultValue={option && option[0].value} />
        </div>
        <CustomButton
          text="Send email"
          className="tw-rounded-md tw-bg-[#047857] tw-p-2 tw-h-[37px]"
        />
      </div>
    </div>
  </div>
  )
}

export default FilterBar
