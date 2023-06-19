'use client';

import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@/common/icons/sidebar/dashboard.icon';
import ArrowIcon from '@/common/icons/sidebar/arrow.icon';
import OfferIcon from '@/common/icons/sidebar/documents/offer.icon';
import OrderIcon from '@/common/icons/sidebar/documents/order.icon';
import DeliveryNotesIcon from '@/common/icons/sidebar/documents/delivery-notes.icon';
import InvoiceIcon from '@/common/icons/sidebar/documents/invoice.icon';
import CreditNotesIcon from '@/common/icons/sidebar/documents/credit-notes.icon';
import RecurringInvoiceIcon from '@/common/icons/sidebar/documents/recurring-invoices.icon';
import PurchaseOrderIcon from '@/common/icons/sidebar/documents/purchase-order.icon';
import InquiriesIcon from '@/common/icons/sidebar/documents/inquiries.icon';
import CorrespondenceIcon from '@/common/icons/sidebar/documents/correspondence.icon';
import CustomerIcon from '@/common/icons/sidebar/administrations/customer.icon';
import ProductIcon from '@/common/icons/sidebar/administrations/products.icon';
import UserRolesIcon from '@/common/icons/sidebar/administrations/users-roles.icon';
import EmployeesIcon from '@/common/icons/sidebar/employee-management/employees.icon';
import ExpendituresIcon from '@/common/icons/sidebar/expenses/expenditures.icon';
import DatabaseIcon from '@/common/icons/sidebar/clouds/database.icon';

const sidebarLinks = [
  { label: 'Dashboard', icon: <DashboardIcon className="" />, href: '/dashboard' },
  {
    label: 'Documents',
    icon: null,
    subLinks: [
      { lablel: 'Offer', icon: <OfferIcon />, href: '/offer' },
      { lablel: 'Order', icon: <OrderIcon />, href: '/dashboard' },
      { lablel: 'Delivery Notes', icon: <DeliveryNotesIcon />, href: '/dashboard' },
      { lablel: 'Invoice', icon: <InvoiceIcon />, href: '/dashboard' },
      { lablel: 'Credits Notes', icon: <CreditNotesIcon />, href: '/dashboard' },
      {
        lablel: 'Recurring Invoices',
        icon: <RecurringInvoiceIcon />,
        href: '/dashboard'
      },
      { lablel: 'Purchase Order', icon: <PurchaseOrderIcon />, href: '/dashboard' },
      { lablel: 'Inquiries', icon: <InquiriesIcon />, href: '/dashboard' },
      { lablel: 'Correspondence', icon: <CorrespondenceIcon />, href: '/dashboard' }
    ]
  },
  {
    label: 'Administrations',
    icon: null,
    subLinks: [
      { lablel: 'Customer', icon: <CustomerIcon />, href: '/customer' },
      { lablel: 'Products', icon: <ProductIcon />, href: '/product' },
      { lablel: 'Categories', icon: <ProductIcon />, href: '/category/create' },
      { lablel: 'Users & Roles', icon: <UserRolesIcon />, href: '/dashboard' }
    ]
  },
  {
    label: 'Employee Management',
    icon: null,
    subLinks: [{ lablel: 'Employees', icon: <EmployeesIcon />, href: '/dashboard' }]
  },
  {
    label: 'Expenses',
    icon: null,
    subLinks: [{ lablel: 'Expenditures', icon: <ExpendituresIcon />, href: '/dashboard' }]
  },
  {
    label: 'Cloud',
    icon: null,
    subLinks: [{ lablel: 'Database', icon: <DatabaseIcon />, href: '/dashboard' }]
  }
];

export default function Sidebar({ toggle, setToggle }) {
  return (
    <div
      className={`${
        toggle ? 'open' : ''
      } offcanva tw-fixed tw-h-screen tw-w-[273px] tw-bg-primary-blue tw-bg-hero-pattern tw-bg-right-top tw-bg-no-repeat`}
    >
      <div className="tw-absolute tw-right-1 tw-top-1 tw-z-[9999] tw-rounded-[4px] tw-border-[1px] tw-border-x-secondary-light-blue xs:tw-block semixl:tw-hidden">
        <ChevronLeftIcon className="tw-text-white" onClick={() => setToggle(!toggle)} />
      </div>
      <div className="tw-p-6">
        <Link className="tw-block" href="/dashboard">
          <img
            className="tw-mx-auto tw-block"
            src="/assets/images/sidebar/quickStepLogo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="multistep-wrapper tw-flex tw-flex-col tw-gap-6 tw-pl-6 tw-pr-5">
        {sidebarLinks.map((navLink) => {
          if (navLink.subLinks) {
            return (
              <Accordion
                key={navLink.label}
                className="!tw-before:none !tw-m-0 !tw-bg-primary-blue !tw-shadow-none"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="!tw-m-0 !tw-h-fit !tw-min-h-fit tw-bg-primary-blue !tw-px-0 !tw-py-0"
                >
                  <div className="tw-flex tw-items-center tw-gap-2">
                    {/* <ArrowIcon className="arrow-cotrol" /> */}
                    <span className="tw-font-dm tw-text-base tw-leading-6 tw-text-white">
                      {navLink.label}
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="tw-bg-primary-blue !tw-px-0 !tw-py-0">
                  <ul className="tw-mt-2 tw-flex tw-flex-col tw-gap-2">
                    {navLink.subLinks.map((subLink) => {
                      return (
                        <Link
                          key={subLink.lablel}
                          href={subLink.href}
                          className="nav-link tw-cursor-pointer tw-rounded-md tw-px-6 tw-py-2"
                        >
                          <div className="tw-flex tw-items-center tw-gap-2">
                            {subLink.icon}
                            <span className="tw-font-dm tw-text-base tw-leading-6 tw-text-white">
                              {subLink.lablel}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          } else {
            return (
              <Link
                key={navLink.label}
                href={navLink.href}
                className="tw-mt-7 tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2"
              >
                {navLink.icon}
                <span className="tw-font-dm tw-text-sm tw-text-white">
                  {navLink.label}
                </span>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired
};
