import Grid from '@mui/material/node/Grid';
import React, { useState } from 'react';

const cards = [
  {
    icon: '/assets/images/dashboard/users.svg',
    trendicon: '/assets/images/dashboard/trendup.svg',
    trendstatus: 'up',
    trendvalue: '20%',
    trendlable: 'Since last week',
    value: '146',
    valuelable: 'Offers'
  },
  {
    icon: '/assets/images/dashboard/users.svg',
    trendicon: '/assets/images/dashboard/trendup.svg',
    trendstatus: 'up',
    trendvalue: '17%',
    trendlable: 'Since last week',
    value: '240',
    valuelable: 'Assignments'
  },
  {
    icon: '/assets/images/dashboard/wallet.svg',
    trendicon: '/assets/images/dashboard/trenddown.svg',
    trendstatus: 'down',
    trendvalue: '20%',
    trendlable: 'Since last week',
    value: '240',
    valuelable: 'Earning'
  },
  {
    icon: '/assets/images/dashboard/wallet.svg',
    trendicon: '/assets/images/dashboard/trendup.svg',
    trendstatus: 'up',
    trendvalue: '15%',
    trendlable: 'Since last week',
    value: '$140.00',
    valuelable: 'Bills',
    extended: [
      {
        id: 'outstandingBills',
        label: 'Outstanding Bills',
        value: 3
      },
      {
        id: 'total',
        label: 'Total',
        value: 481.95
      },
      {
        id: 'overdueInvoices',
        label: 'Overdue Invoices',
        value: '20'
      },
      {
        id: 'total',
        label: 'Total',
        value: '118149.75'
      }
    ]
  }
];

export default function Dashboard() {
  const [extendedtoggle, setExtendedToggle] = useState(false);

  return (
    <div className="tw-bg-secondary-gray tw-px-6 tw-py-8">
      <div className="tw-grid tw-gap-7 xs:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4">
        {cards.map((item) => {
          return (
            <div className="tw-rounded-[20px] tw-border-[1px] tw-border-border-gray2 tw-bg-white tw-px-4 tw-py-[14px]">
              <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between">
                <img
                  className="tw-h-[54px] tw-w-[60px] tw-rounded-[14px]"
                  src={item.icon}
                  alt="card icon"
                />

                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-right">
                  <div className="tw-flex tw-items-center tw-justify-end tw-gap-1">
                    <img
                      className="tw-h-5 tw-w-5"
                      src={item.trendicon}
                      alt="trend icon"
                    />
                    <span
                      className={`tw-font-dm tw-text-base tw-font-medium tw-leading-5 ${
                        item.trendstatus == 'up' ? 'tw-text-green-500' : 'tw-text-red-500'
                      }`}
                    >
                      {item.trendvalue}
                    </span>
                  </div>
                  <h2 className="tw-font-dm tw-text-base tw-font-normal tw-leading-6 ">
                    {item.trendlable}
                  </h2>
                </div>
              </div>

              <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-3">
                <div>
                  <h2 className="tw-mb-3 tw-mt-[18px] tw-font-dm tw-text-xl tw-font-medium tw-leading-6 tw-text-secondary-black">
                    {item.value}
                  </h2>
                  <p className="tw-font-dm tw-text-sm tw-font-normal tw-leading-7 tw-text-text-dark-gray">
                    {item.valuelable}
                  </p>
                </div>
                {item.extended ? (
                  <h3
                    onClick={() => setExtendedToggle(!extendedtoggle)}
                    className="tw-cursor-pointer tw-select-none tw-font-dm tw-text-base tw-font-medium tw-leading-6 tw-text-dark-gray"
                  >
                    {' '}
                    {extendedtoggle ? 'Read Less -' : 'Read More +'}
                  </h3>
                ) : (
                  ''
                )}
              </div>

              {item.extended?.map((data) => {
                return (
                  <div
                    key={data.id}
                    className={`${
                      extendedtoggle ? 'tw-block' : 'tw-hidden'
                    } tw-mt-2 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2`}
                  >
                    <p className="tw-font-dm tw-text-sm tw-font-normal tw-leading-5 tw-text-dark-gray">
                      {data.label}
                    </p>
                    <p className="tw-font-dm tw-text-[20px] tw-font-medium tw-leading-[30px] tw-text-dark-gray">
                      {data.value}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
