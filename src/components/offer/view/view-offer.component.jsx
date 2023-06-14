import React from 'react';
import Breadscrumb from '@/common/components/breadscrumb/breadscrumb.component';
import PlusIcon from '@/common/icons/plus.icon';
import DownloadDropdownBtn from '@/common/components/download-dropdown-button/download-dropdown-button.component';
import Grid from '@mui/material/node/Grid';

import TableFilterTabs from '@/common/components/table-filter-tabs/table-filter-table.component';

const breadscrumbs = [
  { id: 1, name: 'Documents', link: '/documents' },
  { id: 2, name: 'Offers', link: '/offer' }
];

const dropdownoptions = [
  { id: 1, name: 'option1', link: '/option1' },
  { id: 2, name: 'option2', link: '/option2' },
  { id: 3, name: 'option3', link: '/option3' }
];

const offers = [
  { id: 1, status: 'Open', value: '€94,628.67', icon: '/assets/images/offers/open.svg' },
  {
    id: 2,
    status: 'Invoiced',
    value: '€94,628.67',
    icon: '/assets/images/offers/invoiced.svg'
  },
  {
    id: 3,
    status: 'Profit',
    value: '€94,628.67',
    icon: '/assets/images/offers/profit.svg'
  }
];

const filteropions = [
    {id:1, name:'filter', label:'Overview'},
    {id:1, name:'filter', label:'Draft'},
    {id:1, name:'filter', label:'Rejected'},
    {id:1, name:'filter', label:'Template'}
]

export default function ViewOffer() {
  return (
    <div className="tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] tw-pb-8 tw-pt-3">
      <Breadscrumb breadscrumbs={breadscrumbs} current={'Overview'} />

      <div className="tw-mt-2 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2">
        <h2 className="tw-font-dm tw-text-[22px] tw-font-medium tw-capitalize tw-leading-8 tw-text-text-dark-gray">
          Offers
        </h2>

        <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-4">
          <DownloadDropdownBtn text="Download Offers" dropdownoptions={dropdownoptions} />
          <a
            href="/"
            className="btn-primary-blue tw-flex tw-items-center tw-gap-1 tw-rounded-md tw-border-none tw-p-3 tw-text-sm tw-font-medium"
          >
            <PlusIcon /> Create
          </a>
        </div>
      </div>

      <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-5">
        {offers.map((item) => {
          return (
            <div
              key={item.id}
              className="tw-box-border tw-flex tw-flex-1 tw-items-center tw-justify-between tw-gap-3 tw-rounded-[10px] tw-border-[1px] tw-border-solid tw-border-border-gray tw-bg-white !tw-px-5 !tw-py-2"
            >
              <div className="tw-flex tw-items-center tw-gap-3">
                <span className="tw-font-dm tw-text-[12px] tw-font-normal tw-text-text-medium-gray">
                  {item.status}
                </span>
                <span className="tw-font-dm tw-text-[14px] tw-font-normal tw-leading-5 tw-text-text-black">
                  {item.value}
                </span>
              </div>
              <img
                className="tw-h-[42px] tw-w-[42px] tw-rounded-full"
                src={item.icon}
                alt="open icon"
              />
            </div>
          );
        })}
      </div>

      <div className="tw-bg-white tw-border-border-gray tw-border-[1px] tw-rounded-[10px] tw-py-5 tw-mt-4">
        <TableFilterTabs filteropions={filteropions}/>
      </div>
    </div>
  );
}
