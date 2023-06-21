import React, { useState } from 'react';
import { Grid } from '@mui/material';
import DashboardCards from './components/cards/cards.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';

const options = [
  { value: 'today', label: 'Today' },
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'tomorrow', label: 'Tomorrow' }
];

export default function Dashboard() {
  return (
    <div className="tw-bg-secondary-gray tw-px-6 tw-py-8">
      <DashboardCards />

      <Grid container spacing={0} className="tw-ml-0 tw-mt-4 tw-w-full tw-gap-y-5">
        <Grid item xs={12} lg={5}>
          <div className="panel xs:tw-mr-[0px] semixl:tw-mr-[10px]">
            <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-3">
              <h2 className="tw-font-dm tw-text-base tw-font-bold tw-capitalize tw-leading-8 tw-text-text-dark-gray">
                Recent Documents
              </h2>
              <CustomSelect
                options={options}
                defaultValue={options[0].value}
                className="!tw-px-0"
              />
            </div>

            {/* <div className="timeline_wrapper tw-mt-4 tw-max-h-[272px] tw-overflow-y-auto">
              <ul className="tw-flex tw-flex-col">
                <li className="tw-border-b-[1px] tw-border-border-gray3 tw-py-4">
                  hello
                </li>
              </ul>
            </div> */}
          </div>
        </Grid>
        {/* <Grid item xs={12} lg={7}>
          <div className="panel xs:tw-mr-[0px] semixl:tw-ml-[10px]">B</div>
        </Grid> */}
      </Grid>
    </div>
  );
}
