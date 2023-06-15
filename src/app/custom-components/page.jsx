'use client';

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { DataGrid } from '@mui/x-data-grid';
import React, { Suspense, useState } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import ErrorIcon from '@/common/icons/error.icon';
import SuccessIcon from '@/common/icons/success.icon';
import CustomTable from '@/common/components/custom-table/custom-table.component';
import {
  RGX_DECIMAL,
  RGX_DIGITS,
  RGX_POSITIVE_DECIMAL,
  RGX_POSITIVE_NEGATIVE_DECIMAL
} from '@/common/constants/regex.constant';
import ArrowUpIcon from '@/common/icons/arrow-up.icon';
import ArrowLeftIcon from '@/common/icons/arrow-left.icon';
import CustomPagination from '@/common/components/paginations/pagination.component';
import FormStepper from '@/common/components/form-stepper/form-stepper.component';
import AddressList from '@/common/components/tests/multiAdres';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import Toaster from '@/common/components/toaster/toaster.component';

export default function Page() {
  const [open, setOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  /// multi input
  const [inputValues, setInputValues] = useState(['']);

  const handleAddInput = () => {
    setInputValues([...inputValues, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  const handlePageChange = (params) => {
    setCurrentPage(params.page);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const clickHandler = () => {
    console.log('clicked');
  };
  const tabs = [
    {
      id: 'customer_details',
      label: 'Personal Details',
      icon: '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0C6.59223 0 4.22656 2.36566 4.22656 5.27344C4.22656 8.18121 6.59223 10.5469 9.5 10.5469C12.4078 10.5469 14.7734 8.18121 14.7734 5.27344C14.7734 2.36566 12.4078 0 9.5 0ZM16.0612 13.992C14.6174 12.5261 12.7035 11.7188 10.6719 11.7188H8.32812C6.29656 11.7188 4.38258 12.5261 2.93883 13.992C1.50215 15.4507 0.710938 17.3763 0.710938 19.4141C0.710938 19.7377 0.973281 20 1.29688 20H17.7031C18.0267 20 18.2891 19.7377 18.2891 19.4141C18.2891 17.3763 17.4979 15.4507 16.0612 13.992Z" fill="#7E7D7D"/></svg>',
      content: '<h1>customer_details</h1>'
    },
    {
      id: 'company_details',
      label: 'Company Details',
      icon: '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5401_102258)"><path d="M11.6083 1.55844L2.45 0.166772C2.025 0.100106 1.59167 0.216772 1.26667 0.491772C0.941667 0.775106 0.75 1.18344 0.75 1.60844V19.1668C0.75 19.6251 1.125 20.0001 1.58333 20.0001H4.29167V15.6251C4.29167 14.8168 4.94167 14.1668 5.75 14.1668H7.83333C8.64167 14.1668 9.29167 14.8168 9.29167 15.6251V20.0001H12.8333V3.00011C12.8333 2.28344 12.3167 1.67511 11.6083 1.55844ZM5.33333 12.2918H4.08333C3.91757 12.2918 3.7586 12.2259 3.64139 12.1087C3.52418 11.9915 3.45833 11.8325 3.45833 11.6668C3.45833 11.501 3.52418 11.342 3.64139 11.2248C3.7586 11.1076 3.91757 11.0418 4.08333 11.0418H5.33333C5.49909 11.0418 5.65806 11.1076 5.77528 11.2248C5.89249 11.342 5.95833 11.501 5.95833 11.6668C5.95833 11.8325 5.89249 11.9915 5.77528 12.1087C5.65806 12.2259 5.49909 12.2918 5.33333 12.2918ZM5.33333 9.79177H4.08333C3.91757 9.79177 3.7586 9.72592 3.64139 9.60872C3.52418 9.4915 3.45833 9.33253 3.45833 9.16677C3.45833 9.00101 3.52418 8.84204 3.64139 8.72483C3.7586 8.60762 3.91757 8.54177 4.08333 8.54177H5.33333C5.49909 8.54177 5.65806 8.60762 5.77528 8.72483C5.89249 8.84204 5.95833 9.00101 5.95833 9.16677C5.95833 9.33253 5.89249 9.4915 5.77528 9.60872C5.65806 9.72592 5.49909 9.79177 5.33333 9.79177ZM5.33333 7.29177H4.08333C3.91757 7.29177 3.7586 7.22592 3.64139 7.10871C3.52418 6.9915 3.45833 6.83253 3.45833 6.66677C3.45833 6.50101 3.52418 6.34204 3.64139 6.22483C3.7586 6.10762 3.91757 6.04177 4.08333 6.04177H5.33333C5.49909 6.04177 5.65806 6.10762 5.77528 6.22483C5.89249 6.34204 5.95833 6.50101 5.95833 6.66677C5.95833 6.83253 5.89249 6.9915 5.77528 7.10871C5.65806 7.22592 5.49909 7.29177 5.33333 7.29177ZM5.33333 4.79177H4.08333C3.91757 4.79177 3.7586 4.72592 3.64139 4.60871C3.52418 4.4915 3.45833 4.33253 3.45833 4.16677C3.45833 4.00101 3.52418 3.84204 3.64139 3.72483C3.7586 3.60762 3.91757 3.54177 4.08333 3.54177H5.33333C5.49909 3.54177 5.65806 3.60762 5.77528 3.72483C5.89249 3.84204 5.95833 4.00101 5.95833 4.16677C5.95833 4.33253 5.89249 4.4915 5.77528 4.60871C5.65806 4.72592 5.49909 4.79177 5.33333 4.79177ZM9.5 12.2918H8.25C8.08424 12.2918 7.92527 12.2259 7.80806 12.1087C7.69085 11.9915 7.625 11.8325 7.625 11.6668C7.625 11.501 7.69085 11.342 7.80806 11.2248C7.92527 11.1076 8.08424 11.0418 8.25 11.0418H9.5C9.66576 11.0418 9.82473 11.1076 9.94194 11.2248C10.0592 11.342 10.125 11.501 10.125 11.6668C10.125 11.8325 10.0592 11.9915 9.94194 12.1087C9.82473 12.2259 9.66576 12.2918 9.5 12.2918ZM9.5 9.79177H8.25C8.08424 9.79177 7.92527 9.72592 7.80806 9.60872C7.69085 9.4915 7.625 9.33253 7.625 9.16677C7.625 9.00101 7.69085 8.84204 7.80806 8.72483C7.92527 8.60762 8.08424 8.54177 8.25 8.54177H9.5C9.66576 8.54177 9.82473 8.60762 9.94194 8.72483C10.0592 8.84204 10.125 9.00101 10.125 9.16677C10.125 9.33253 10.0592 9.4915 9.94194 9.60872C9.82473 9.72592 9.66576 9.79177 9.5 9.79177ZM9.5 7.29177H8.25C8.08424 7.29177 7.92527 7.22592 7.80806 7.10871C7.69085 6.9915 7.625 6.83253 7.625 6.66677C7.625 6.50101 7.69085 6.34204 7.80806 6.22483C7.92527 6.10762 8.08424 6.04177 8.25 6.04177H9.5C9.66576 6.04177 9.82473 6.10762 9.94194 6.22483C10.0592 6.34204 10.125 6.50101 10.125 6.66677C10.125 6.83253 10.0592 6.9915 9.94194 7.10871C9.82473 7.22592 9.66576 7.29177 9.5 7.29177ZM9.5 4.79177H8.25C8.08424 4.79177 7.92527 4.72592 7.80806 4.60871C7.69085 4.4915 7.625 4.33253 7.625 4.16677C7.625 4.00101 7.69085 3.84204 7.80806 3.72483C7.92527 3.60762 8.08424 3.54177 8.25 3.54177H9.5C9.66576 3.54177 9.82473 3.60762 9.94194 3.72483C10.0592 3.84204 10.125 4.00101 10.125 4.16677C10.125 4.33253 10.0592 4.4915 9.94194 4.60871C9.82473 4.72592 9.66576 4.79177 9.5 4.79177ZM19.6 9.03511L13.6667 7.79261V20.0001H19.2917C20.0958 20.0001 20.75 19.3459 20.75 18.5418V10.4601C20.75 9.77177 20.2808 9.18594 19.6 9.03511ZM17.625 17.5001H16.375C16.2092 17.5001 16.0503 17.4343 15.9331 17.317C15.8158 17.1998 15.75 17.0409 15.75 16.8751C15.75 16.7093 15.8158 16.5504 15.9331 16.4332C16.0503 16.316 16.2092 16.2501 16.375 16.2501H17.625C17.7908 16.2501 17.9497 16.316 18.0669 16.4332C18.1842 16.5504 18.25 16.7093 18.25 16.8751C18.25 17.0409 18.1842 17.1998 18.0669 17.317C17.9497 17.4343 17.7908 17.5001 17.625 17.5001ZM17.625 15.0001H16.375C16.2092 15.0001 16.0503 14.9343 15.9331 14.817C15.8158 14.6998 15.75 14.5409 15.75 14.3751C15.75 14.2093 15.8158 14.0504 15.9331 13.9332C16.0503 13.816 16.2092 13.7501 16.375 13.7501H17.625C17.7908 13.7501 17.9497 13.816 18.0669 13.9332C18.1842 14.0504 18.25 14.2093 18.25 14.3751C18.25 14.5409 18.1842 14.6998 18.0669 14.817C17.9497 14.9343 17.7908 15.0001 17.625 15.0001ZM17.625 12.5001H16.375C16.2092 12.5001 16.0503 12.4343 15.9331 12.317C15.8158 12.1998 15.75 12.0409 15.75 11.8751C15.75 11.7093 15.8158 11.5504 15.9331 11.4332C16.0503 11.316 16.2092 11.2501 16.375 11.2501H17.625C17.7908 11.2501 17.9497 11.316 18.0669 11.4332C18.1842 11.5504 18.25 11.7093 18.25 11.8751C18.25 12.0409 18.1842 12.1998 18.0669 12.317C17.9497 12.4343 17.7908 12.5001 17.625 12.5001Z" fill="#7E7D7D"/></g><defs><clipPath id="clip0_5401_102258"><rect width="20" height="20" fill="white" transform="translate(0.75)"/></clipPath></defs></svg>',
      content: '<h1>customer_details</h1>'
    },
    {
      id: 'payment_details',
      label: 'Payment Details',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5401_102259)"><path d="M20 6.36719V5.3125C20 4.10438 19.0206 3.125 17.8125 3.125H2.1875C0.979375 3.125 0 4.10438 0 5.3125V6.36719C0 6.41899 0.0205775 6.46867 0.0572057 6.50529C0.0938339 6.54192 0.143512 6.5625 0.195312 6.5625H19.8047C19.8565 6.5625 19.9062 6.54192 19.9428 6.50529C19.9794 6.46867 20 6.41899 20 6.36719ZM0 8.00781V14.6875C0 15.8956 0.979375 16.875 2.1875 16.875H17.8125C19.0206 16.875 20 15.8956 20 14.6875V8.00781C20 7.95601 19.9794 7.90633 19.9428 7.86971C19.9062 7.83308 19.8565 7.8125 19.8047 7.8125H0.195312C0.143512 7.8125 0.0938339 7.83308 0.0572057 7.86971C0.0205775 7.90633 0 7.95601 0 8.00781ZM5 13.125C5 13.4702 4.72016 13.75 4.375 13.75H3.75C3.40484 13.75 3.125 13.4702 3.125 13.125V12.5C3.125 12.1548 3.40484 11.875 3.75 11.875H4.375C4.72016 11.875 5 12.1548 5 12.5V13.125Z" fill="#7E7D7D"/></g><defs><clipPath id="clip0_5401_102259"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>',
      content: '<h1>customer_details</h1>'
    },
    {
      id: 'discount',
      label: 'Discount',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5401_102260)"><path d="M18.6698 10.2591C18.6301 10.1785 18.6094 10.0899 18.6094 10.0001C18.6094 9.91024 18.6301 9.82161 18.6698 9.74103L19.4157 8.21506C19.831 7.36542 19.502 6.35273 18.6666 5.90949L17.1662 5.1134C17.0867 5.07155 17.0179 5.01199 16.9651 4.93932C16.9123 4.86666 16.8769 4.78282 16.8617 4.6943L16.5682 3.02131C16.4048 2.08983 15.5432 1.46389 14.607 1.59635L12.9252 1.83424C12.8363 1.84709 12.7457 1.83934 12.6602 1.81158C12.5748 1.78381 12.4969 1.73679 12.4325 1.67413L11.2118 0.493195C10.5321 -0.164379 9.46725 -0.164418 8.78757 0.493195L7.56679 1.67424C7.50242 1.73689 7.42452 1.78391 7.33909 1.81167C7.25367 1.83943 7.163 1.84719 7.0741 1.83436L5.39235 1.59647C4.45584 1.46393 3.59451 2.08994 3.43112 3.02142L3.13768 4.69434C3.12243 4.78286 3.08704 4.8667 3.03425 4.93937C2.98145 5.01204 2.91266 5.07161 2.83319 5.11348L1.33281 5.90957C0.497422 6.35277 0.168361 7.36554 0.583671 8.21518L1.32957 9.74111C1.36927 9.82169 1.38992 9.91032 1.38992 10.0002C1.38992 10.09 1.36927 10.1786 1.32957 10.2592L0.583632 11.7851C0.168322 12.6348 0.497382 13.6475 1.33277 14.0907L2.83315 14.8868C2.91263 14.9286 2.98143 14.9882 3.03423 15.0609C3.08703 15.1335 3.12243 15.2174 3.13768 15.3059L3.43112 16.9789C3.57986 17.8268 4.30697 18.4215 5.14263 18.4214C5.22493 18.4214 5.30845 18.4157 5.39239 18.4038L7.07414 18.1659C7.16304 18.153 7.25371 18.1608 7.33914 18.1886C7.42457 18.2163 7.50248 18.2634 7.56683 18.326L8.78757 19.507C9.12749 19.8358 9.5635 20.0002 9.99967 20.0001C10.4357 20.0001 10.872 19.8357 11.2118 19.507L12.4325 18.326C12.5643 18.1986 12.7438 18.1404 12.9252 18.1659L14.607 18.4038C15.5436 18.5363 16.4048 17.9103 16.5682 16.9788L16.8617 15.3059C16.877 15.2174 16.9123 15.1336 16.9651 15.0609C17.0179 14.9882 17.0867 14.9286 17.1662 14.8868L18.6666 14.0907C19.502 13.6475 19.831 12.6347 19.4157 11.7851L18.6698 10.2591ZM7.69261 4.80926C8.8587 4.80926 9.80741 5.75797 9.80741 6.92406C9.80741 8.09014 8.8587 9.03885 7.69261 9.03885C6.52653 9.03885 5.57782 8.09014 5.57782 6.92406C5.57782 5.75797 6.52653 4.80926 7.69261 4.80926ZM6.60106 14.2143C6.48844 14.3269 6.34083 14.3832 6.19325 14.3832C6.04567 14.3832 5.89802 14.3269 5.78544 14.2143C5.5602 13.9891 5.5602 13.6239 5.78544 13.3986L13.3982 5.78582C13.6234 5.56059 13.9887 5.56059 14.2139 5.78582C14.4391 6.01105 14.4391 6.37625 14.2139 6.60148L6.60106 14.2143ZM12.3066 15.1909C11.1406 15.1909 10.1919 14.2422 10.1919 13.0761C10.1919 11.91 11.1406 10.9613 12.3066 10.9613C13.4727 10.9613 14.4214 11.91 14.4214 13.0761C14.4214 14.2422 13.4727 15.1909 12.3066 15.1909Z" fill="#7E7D7D"/><path d="M12.3057 12.113C11.7757 12.113 11.3445 12.5443 11.3445 13.0743C11.3445 13.6043 11.7757 14.0355 12.3057 14.0355C12.8358 14.0355 13.267 13.6043 13.267 13.0743C13.267 12.5443 12.8358 12.113 12.3057 12.113ZM7.69171 5.96094C7.16168 5.96094 6.73047 6.39215 6.73047 6.92218C6.73047 7.45222 7.16168 7.88347 7.69171 7.88347C8.22175 7.88347 8.653 7.45226 8.653 6.92218C8.65296 6.39219 8.22175 5.96094 7.69171 5.96094Z" fill="#7E7D7D"/></g><defs><clipPath id="clip0_5401_102260"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>',
      content: '<h1>customer_details</h1>'
    },
    {
      id: 'manage_terms',
      label: 'Manage Terms',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.166 1.04297H2.49935C2.11312 1.04472 1.7432 1.19893 1.47009 1.47204C1.19698 1.74515 1.04277 2.11507 1.04102 2.5013V17.5013C1.04277 17.8875 1.19698 18.2575 1.47009 18.5306C1.7432 18.8037 2.11312 18.9579 2.49935 18.9596H14.9993C15.091 18.9596 15.1827 18.9596 15.2743 18.9513C15.2842 18.9414 15.2954 18.933 15.3077 18.9263C15.4599 18.5096 15.5607 18.0758 15.6077 17.6346C15.4088 17.6847 15.2044 17.7099 14.9993 17.7096C14.2811 17.7096 13.5922 17.4243 13.0843 16.9164C12.5764 16.4085 12.291 15.7196 12.291 15.0013C12.291 14.283 12.5764 13.5941 13.0843 13.0862C13.5922 12.5783 14.2811 12.293 14.9993 12.293C15.21 12.2922 15.4199 12.3174 15.6243 12.368V2.5013C15.6226 2.11507 15.4684 1.74515 15.1953 1.47204C14.9222 1.19893 14.5522 1.04472 14.166 1.04297ZM4.58268 4.3763H12.0827C12.2484 4.3763 12.4074 4.44215 12.5246 4.55936C12.6418 4.67657 12.7077 4.83554 12.7077 5.0013C12.7077 5.16706 12.6418 5.32603 12.5246 5.44324C12.4074 5.56045 12.2484 5.6263 12.0827 5.6263H4.58268C4.41692 5.6263 4.25795 5.56045 4.14074 5.44324C4.02353 5.32603 3.95768 5.16706 3.95768 5.0013C3.95768 4.83554 4.02353 4.67657 4.14074 4.55936C4.25795 4.44215 4.41692 4.3763 4.58268 4.3763ZM4.58268 7.70964H12.0827C12.2484 7.70964 12.4074 7.77548 12.5246 7.89269C12.6418 8.0099 12.7077 8.16888 12.7077 8.33464C12.7077 8.5004 12.6418 8.65937 12.5246 8.77658C12.4074 8.89379 12.2484 8.95964 12.0827 8.95964H4.58268C4.41692 8.95964 4.25795 8.89379 4.14074 8.77658C4.02353 8.65937 3.95768 8.5004 3.95768 8.33464C3.95768 8.16888 4.02353 8.0099 4.14074 7.89269C4.25795 7.77548 4.41692 7.70964 4.58268 7.70964ZM9.16602 15.6263H4.58268C4.41692 15.6263 4.25795 15.5605 4.14074 15.4432C4.02353 15.326 3.95768 15.1671 3.95768 15.0013C3.95768 14.8355 4.02353 14.6766 4.14074 14.5594C4.25795 14.4422 4.41692 14.3763 4.58268 14.3763H9.16602C9.33178 14.3763 9.49075 14.4422 9.60796 14.5594C9.72517 14.6766 9.79102 14.8355 9.79102 15.0013C9.79102 15.1671 9.72517 15.326 9.60796 15.4432C9.49075 15.5605 9.33178 15.6263 9.16602 15.6263ZM9.99935 12.293H4.58268C4.41692 12.293 4.25795 12.2271 4.14074 12.1099C4.02353 11.9927 3.95768 11.8337 3.95768 11.668C3.95768 11.5022 4.02353 11.3432 4.14074 11.226C4.25795 11.1088 4.41692 11.043 4.58268 11.043H9.99935C10.1651 11.043 10.3241 11.1088 10.4413 11.226C10.5585 11.3432 10.6243 11.5022 10.6243 11.668C10.6243 11.8337 10.5585 11.9927 10.4413 12.1099C10.3241 12.2271 10.1651 12.293 9.99935 12.293Z" fill="#7E7D7D"/><path d="M15.6235 11.0928C15.1091 11.0173 14.585 11.0438 14.0809 11.1709C13.5768 11.2979 13.1027 11.523 12.6856 11.8333C12.2685 12.1436 11.9166 12.5331 11.65 12.9794C11.3834 13.4257 11.2073 13.9201 11.1318 14.4344C11.0563 14.9488 11.0829 15.473 11.2099 15.977C11.337 16.4811 11.5621 16.9553 11.8724 17.3723C12.1827 17.7894 12.5721 18.1413 13.0184 18.4079C13.4647 18.6745 13.9591 18.8506 14.4735 18.9261C14.6475 18.9496 14.8229 18.9608 14.9985 18.9594C15.0902 18.9594 15.1818 18.9594 15.2735 18.9511C16.2437 18.8845 17.1554 18.463 17.8348 17.7672C18.5141 17.0713 18.9135 16.1497 18.9568 15.1782C19 14.2067 18.6842 13.2532 18.0694 12.4997C17.4546 11.7462 16.5839 11.2454 15.6235 11.0928ZM15.6068 17.6344C15.4079 17.6845 15.2036 17.7097 14.9985 17.7094C14.2802 17.7094 13.5913 17.4241 13.0834 16.9162C12.5755 16.4083 12.2902 15.7194 12.2902 15.0011C12.2902 14.2828 12.5755 13.5939 13.0834 13.086C13.5913 12.5781 14.2802 12.2928 14.9985 12.2928C15.2091 12.292 15.419 12.3172 15.6235 12.3678C16.218 12.5077 16.7475 12.8448 17.1259 13.3242C17.5043 13.8036 17.7093 14.397 17.7073 15.0077C17.7054 15.6184 17.4967 16.2105 17.1153 16.6875C16.7339 17.1645 16.2022 17.4982 15.6068 17.6344Z" fill="#7E7D7D"/><path d="M14.5833 16.4597C14.5012 16.4597 14.42 16.4435 14.3442 16.412C14.2684 16.3806 14.1996 16.3345 14.1416 16.2763L13.3083 15.443C13.2469 15.3858 13.1976 15.3168 13.1635 15.2401C13.1293 15.1635 13.111 15.0807 13.1095 14.9968C13.108 14.9129 13.1234 14.8295 13.1549 14.7517C13.1863 14.6738 13.2331 14.6032 13.2924 14.5438C13.3518 14.4845 13.4225 14.4377 13.5003 14.4062C13.5781 14.3748 13.6615 14.3594 13.7454 14.3608C13.8293 14.3623 13.9121 14.3807 13.9887 14.4149C14.0654 14.449 14.1344 14.4983 14.1916 14.5597L14.5833 14.9513L15.8083 13.7263C15.9268 13.6159 16.0835 13.5558 16.2454 13.5587C16.4073 13.5615 16.5618 13.6271 16.6763 13.7417C16.7908 13.8562 16.8564 14.0107 16.8593 14.1726C16.8621 14.3345 16.802 14.4912 16.6916 14.6097L15.025 16.2763C14.967 16.3345 14.8982 16.3806 14.8224 16.412C14.7466 16.4435 14.6654 16.4597 14.5833 16.4597Z" fill="#7E7D7D"/></svg>',
      content: '<h1>customer_details</h1>'
    }
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'fullName', headerName: 'Full name', width: 250 }
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, fullName: 'Jon Snow' },
    {
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      age: 42,
      fullName: 'Cersei Lannister'
    },
    {
      id: 3,
      lastName: 'Lannister',
      firstName: 'Jaime',
      age: 45,
      fullName: 'Jaime Lannister'
    },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, fullName: 'Arya Stark' },
    {
      id: 5,
      lastName: 'Targaryen',
      firstName: 'Daenerys',
      age: null,
      fullName: 'Daenerys Targaryen'
    },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, fullName: 'Melisandre' },
    {
      id: 7,
      lastName: 'Clifford',
      firstName: 'Ferrara',
      age: 44,
      fullName: 'Ferrara Clifford'
    },
    {
      id: 8,
      lastName: 'Frances',
      firstName: 'Rossini',
      age: 36,
      fullName: 'Rossini Frances'
    },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, fullName: 'Harvey Roxie' }
  ];
  // show or hide columns
  // const [open, setOpen] = useState(false);
  const initialColumnState = {
    id: true,
    firstName: true,
    lastName: true,
    age: true
  };
  const [columnState, setColumnState] = useState(initialColumnState);

  const handleToggleColumn = (columnName) => {
    setColumnState({
      ...columnState,
      [columnName]: !columnState[columnName]
    });
  };

  const handleManageColumns = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // table row extends
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (params) => {
    if (params.id === expandedRow) {
      setExpandedRow(null);
    } else {
      setExpandedRow(params.id);
    }
  };

  const columnss = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    {
      field: 'details',
      headerName: 'Details',
      width: 120,
      renderCell: (params) => (
        <button onClick={() => handleRowClick(params)}>Expand row</button>
      )
    }
  ];

  const rowss = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  ];

  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <p>Hello World</p>
      <button onClick={handleManageColumns}>Manage Columns</button>
      {open && (
        <div>
          {columns.map((col) => (
            <div key={col.field}>
              <label>
                <input
                  type="checkbox"
                  checked={columnState[col.field]}
                  onChange={() => handleToggleColumn(col.field)}
                />
                {col.headerName}
              </label>
            </div>
          ))}
          <button onClick={handleClose}>Close</button>
        </div>
      )}
      <div>
        <CustomButton text="Submit" className="btn-outline" />
        <CustomButton text="Submit" className="btn-primary" />
        <CustomButton text="Submit" className="btn-secondary" />

        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          onClose={handleClose}
        >
          <Alert icon={<SuccessIcon />} className="alert-success" onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
        </Snackbar>

        <p>Hello World</p>
      </div>
      {/* <CustomTable /> */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rowss} columns={columnss} expandedRows={[expandedRow]} />
        {expandedRow !== null && (
          <div className="details">
            <h3>Details for row {expandedRow}</h3>
            <p>Extra details go here</p>
          </div>
        )}
      </div>
      <div className="tw-w-full">
        <AddressList />
      </div>
      <div>
        {inputValues.map((value, index) => (
          <div key={index}>
            <input
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <button onClick={() => handleRemoveInput(index)}>Remove Input</button>
          </div>
        ))}
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </Suspense>
  );
}
