'use client';

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DashboardIcon from '@/common/icons/sidebar/dashboard.icon';
import ArrowIcon from '@/common/icons/sidebar/arrow.icon';
import CustomerIcon from '@/common/icons/sidebar/customer';

export default function Sidebar() {
  return (
    <div className="tw-fixed tw-h-screen tw-w-[273px] tw-bg-primary-blue tw-bg-hero-pattern tw-bg-right-top tw-bg-no-repeat">
      <div className="tw-p-6">
        <a className="tw-block" href="/">
          <img
            className="tw-mx-auto tw-block"
            src="assets/images/sidebar/quickStepLogo.svg"
            alt="logo"
          />
        </a>

        <a
          href="/dashboard"
          className="tw-mt-7 tw-flex tw-items-center tw-gap-2 tw-px-6 tw-py-2"
        >
          <DashboardIcon className="" />
          <span className="tw-font-dm tw-text-sm tw-text-white">Dashboard</span>
        </a>
      </div>

      <div className="multistep-wrapper tw-flex tw-flex-col tw-gap-6 tw-px-6">
        <Accordion className="!tw-before:none !tw-m-0 !tw-bg-primary-blue !tw-shadow-none">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="!tw-m-0 !tw-h-fit !tw-min-h-fit tw-bg-primary-blue !tw-px-0 !tw-py-0"
          >
            <div className="tw-flex tw-items-center tw-gap-2">
              <ArrowIcon className="arrow-cotrol" />
              <span className="tw-font-dm tw-text-base tw-leading-6 tw-text-white">
                Documents
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails className="tw-bg-primary-blue !tw-px-0 !tw-py-0">
            <ul className="tw-mt-2 tw-flex tw-flex-col tw-gap-2">
              <li className="nav-link active tw-rounded-md tw-px-6 tw-py-2 active:tw-bg-white">
                <a href="/dashboard" className="tw-flex tw-items-center tw-gap-2">
                  <CustomerIcon />
                  <span className="tw-font-dm tw-text-base tw-leading-6 tw-text-white">
                    Customer
                  </span>
                </a>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion className="!tw-before:none !tw-m-0 !tw-bg-primary-blue !tw-shadow-none">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="!tw-m-0 !tw-h-fit !tw-min-h-fit tw-bg-primary-blue !tw-px-0 !tw-py-0"
          >
            <div className="tw-flex tw-items-center tw-gap-2">
              <ArrowIcon className="arrow-cotrol" />
              <span className="tw-font-dm tw-text-base tw-leading-6 tw-text-white">
                Documents
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails className="tw-bg-primary-blue !tw-px-0 !tw-py-0">
            <ul className="tw-mt-2 tw-flex tw-flex-col tw-gap-2">
              <li className="nav-link active tw-rounded-md tw-px-6 tw-py-2 active:tw-bg-white">
                <a href="/dashboard" className="tw-flex tw-items-center tw-gap-2">
                  <CustomerIcon />
                  <span className="tw-font-dm tw-text-base tw-leading-6 tw-text-white">
                    Customer
                  </span>
                </a>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
