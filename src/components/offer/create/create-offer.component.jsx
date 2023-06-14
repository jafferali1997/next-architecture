'use client';

import FormStepper from '@/common/components/form-stepper/form-stepper.component';
import SupportIcon from '@/common/icons/support.icon';
import AddCustomer from './add-customer/add-customer.compnent';
import HeaderBody from './header-body/header-body.compnent';
import LineItem from './line-item/line-item.compnent';
import OfferPreview from './preview/preview.component';
import TemplateChoose from './template-choose/template-choose.component';

export default function CreateOffer() {
  const tabs = [
    {
      id: 'customerDetails',
      label: 'Customer Details',
      icon: ` <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8461 14.7162C13.4433 13.5174 11.8379 12.767 10.6933 12.264C10.2449 12.0676 9.00352 11.7344 8.85432 11.1698C8.80092 10.9664 8.80812 10.7746 8.85192 10.5908C8.78227 10.6045 8.71149 10.6116 8.64052 10.6118H7.89472C7.60856 10.6115 7.33421 10.4977 7.13189 10.2953C6.92956 10.093 6.81578 9.81859 6.81552 9.53243C6.81552 8.93783 7.29952 8.45443 7.89472 8.45443H8.64052C8.88692 8.45443 9.12051 8.53783 9.30892 8.68663C9.57699 8.65128 9.8416 8.59335 10.0999 8.51343C10.4261 7.83003 10.6805 7.01283 10.7375 6.30943C10.9809 3.29983 9.13592 1.53903 6.49052 1.84343C4.56712 2.06483 3.41812 3.49903 3.29392 5.34543C3.16832 7.22743 3.86612 8.61743 4.60732 9.63703C4.93192 10.0828 5.27292 10.3694 5.22052 10.9066C5.15972 11.5418 4.48052 11.7188 3.99472 11.914C3.41912 12.1452 2.79912 12.496 2.50632 12.6582C1.49772 13.2152 0.390716 13.886 0.141916 14.8036C-0.409084 16.8372 1.45172 17.4532 2.98792 17.7376C4.30632 17.9808 5.79292 18 7.01572 18C9.22752 18 13.2047 17.9114 13.8461 16.2488C14.0285 15.777 13.9503 15.0252 13.8461 14.7162Z" fill="#FEFEFE"/>
      <path d="M9.11332 9.2286C9.06226 9.14998 8.99239 9.08534 8.91004 9.04054C8.82769 8.99573 8.73547 8.97217 8.64172 8.972H7.89592C7.82089 8.97 7.74621 8.98305 7.67629 9.01038C7.60638 9.03771 7.54266 9.07877 7.48887 9.13114C7.43509 9.18351 7.39234 9.24612 7.36316 9.31527C7.33397 9.38443 7.31893 9.45874 7.31893 9.5338C7.31893 9.60886 7.33397 9.68317 7.36316 9.75233C7.39234 9.82148 7.43509 9.88409 7.48887 9.93646C7.54266 9.98883 7.60638 10.0299 7.67629 10.0572C7.74621 10.0846 7.82089 10.0976 7.89592 10.0956H8.64172C8.74432 10.0955 8.84491 10.0671 8.93239 10.0135C9.01988 9.9599 9.09086 9.88318 9.13752 9.7918C10.1773 9.71 11.0817 9.3924 11.7165 8.9234C11.8623 9.0174 12.0347 9.0724 12.2207 9.0724H12.2675C12.3907 9.07243 12.5128 9.04816 12.6266 9.00099C12.7404 8.95382 12.8438 8.88466 12.9309 8.79749C13.018 8.71031 13.087 8.60682 13.1341 8.49294C13.1811 8.37906 13.2053 8.25702 13.2051 8.1338V6.2602C13.2052 6.08324 13.155 5.9099 13.0604 5.76035C12.9658 5.6108 12.8306 5.49118 12.6707 5.4154C12.5331 2.4068 10.0425 0 7.00012 0C3.95772 0 1.46672 2.4068 1.32972 5.4154C1.16969 5.49106 1.03445 5.61064 0.93976 5.76021C0.845075 5.90978 0.794845 6.08318 0.794923 6.2602V8.1338C0.794765 8.25695 0.818875 8.37893 0.865876 8.49276C0.912876 8.60659 0.981846 8.71004 1.06884 8.79721C1.15584 8.88437 1.25916 8.95354 1.3729 9.00076C1.48664 9.04798 1.60857 9.07232 1.73172 9.0724H1.77912C1.90232 9.07237 2.0243 9.04807 2.1381 9.00088C2.25189 8.95368 2.35527 8.88453 2.44233 8.79736C2.52939 8.71019 2.59841 8.60672 2.64546 8.49287C2.69251 8.37901 2.71665 8.25699 2.71652 8.1338V6.2602C2.71643 6.08571 2.66753 5.91473 2.57536 5.76657C2.48319 5.61841 2.35141 5.49899 2.19492 5.4218C2.32872 2.8868 4.43232 0.8662 7.00012 0.8662C9.56692 0.8662 11.6715 2.8868 11.8047 5.4218C11.6484 5.49913 11.5168 5.6186 11.4247 5.76674C11.3327 5.91488 11.2838 6.08579 11.2837 6.2602V8.1338C11.2837 8.2582 11.3079 8.374 11.3505 8.4822C10.8041 8.8732 10.0087 9.1518 9.11332 9.2286Z" fill="#FEFEFE"/>
      </svg>`,
      content: <LineItem />
    },
    {
      id: 'headerBody',
      label: 'Header & Body',
      icon: `    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3231 4.9979C15.0192 5.00719 14.3544 5.00023 12.6674 5.00023C11.5629 5.00023 10.6671 4.10454 10.6671 2.99997C10.6671 1.31329 10.6602 0.648178 10.6695 0.344349C10.6752 0.156061 10.5247 0.000313334 10.3364 0.000313334H1.6673C0.930933 0.000313334 0.333984 0.597262 0.333984 1.33362V18.6667C0.333984 19.403 0.930933 20 1.6673 20H14.3338C15.0701 20 15.6671 19.403 15.6671 18.6667V5.33102C15.6671 5.14264 15.5114 4.99211 15.3231 4.9979ZM3.08394 3.91691H6.04222C6.13063 3.91691 6.21541 3.95203 6.27792 4.01454C6.34043 4.07705 6.37555 4.16184 6.37555 4.25024C6.37555 4.33865 6.34043 4.42343 6.27792 4.48594C6.21541 4.54845 6.13063 4.58357 6.04222 4.58357H3.08394C2.99553 4.58357 2.91075 4.54845 2.84824 4.48594C2.78573 4.42343 2.75061 4.33865 2.75061 4.25024C2.75061 4.16184 2.78573 4.07705 2.84824 4.01454C2.91075 3.95203 2.99553 3.91691 3.08394 3.91691ZM3.08394 6.00021H7.70886C7.79727 6.00021 7.88205 6.03533 7.94456 6.09784C8.00707 6.16035 8.04219 6.24514 8.04219 6.33354C8.04219 6.42195 8.00707 6.50673 7.94456 6.56924C7.88205 6.63175 7.79727 6.66687 7.70886 6.66687H3.08394C2.99553 6.66687 2.91075 6.63175 2.84824 6.56924C2.78573 6.50673 2.75061 6.42195 2.75061 6.33354C2.75061 6.24514 2.78573 6.16035 2.84824 6.09784C2.91075 6.03533 2.99553 6.00021 3.08394 6.00021ZM13.2504 15.8334C13.2504 15.9218 13.2153 16.0066 13.1528 16.0691C13.0903 16.1316 13.0055 16.1667 12.9171 16.1667H3.08394C2.99553 16.1667 2.91075 16.1316 2.84824 16.0691C2.78573 16.0066 2.75061 15.9218 2.75061 15.8334V9.00016C2.75061 8.91176 2.78573 8.82698 2.84824 8.76447C2.91075 8.70195 2.99553 8.66684 3.08394 8.66684H12.9171C13.0055 8.66684 13.0903 8.70195 13.1528 8.76447C13.2153 8.82698 13.2504 8.91176 13.2504 9.00016V15.8334ZM9.5005 13.2351H3.75059C3.66219 13.2351 3.57741 13.2 3.5149 13.1375C3.45238 13.075 3.41727 12.9902 3.41727 12.9018V11.9317C3.41727 11.8433 3.45238 11.7586 3.5149 11.696C3.57741 11.6335 3.66219 11.5984 3.75059 11.5984H9.5005C9.5889 11.5984 9.67369 11.6335 9.7362 11.696C9.79871 11.7586 9.83383 11.8433 9.83383 11.9317V12.9018C9.83383 12.9902 9.79871 13.075 9.7362 13.1375C9.67369 13.2 9.5889 13.2351 9.5005 13.2351ZM10.8338 9.33349H12.2505C12.3389 9.33349 12.4236 9.36861 12.4862 9.43112C12.5487 9.49363 12.5838 9.57841 12.5838 9.66682V10.5984C12.5838 10.6868 12.5487 10.7716 12.4862 10.8341C12.4236 10.8966 12.3389 10.9318 12.2505 10.9318H10.8338C10.7454 10.9318 10.6606 10.8966 10.5981 10.8341C10.5356 10.7716 10.5005 10.6868 10.5005 10.5984V9.66682C10.5005 9.57841 10.5356 9.49363 10.5981 9.43112C10.6606 9.36861 10.7454 9.33349 10.8338 9.33349ZM3.41727 10.5984V9.66682C3.41727 9.57841 3.45238 9.49363 3.5149 9.43112C3.57741 9.36861 3.66219 9.33349 3.75059 9.33349H9.5005C9.5889 9.33349 9.67369 9.36861 9.7362 9.43112C9.79871 9.49363 9.83383 9.57841 9.83383 9.66682V10.5984C9.83383 10.6868 9.79871 10.7716 9.7362 10.8341C9.67369 10.8966 9.5889 10.9318 9.5005 10.9318H3.75059C3.66219 10.9318 3.57741 10.8966 3.5149 10.8341C3.45238 10.7716 3.41727 10.6868 3.41727 10.5984ZM12.2505 13.2351H10.8338C10.7454 13.2351 10.6606 13.2 10.5981 13.1375C10.5356 13.075 10.5005 12.9902 10.5005 12.9018V11.9317C10.5005 11.8433 10.5356 11.7586 10.5981 11.696C10.6606 11.6335 10.7454 11.5984 10.8338 11.5984H12.2505C12.3389 11.5984 12.4236 11.6335 12.4862 11.696C12.5487 11.7586 12.5838 11.8433 12.5838 11.9317V12.9018C12.5838 12.9902 12.5487 13.075 12.4862 13.1375C12.4236 13.2 12.3389 13.2351 12.2505 13.2351ZM9.5005 15.5001H3.75059C3.66219 15.5001 3.57741 15.4649 3.5149 15.4024C3.45238 15.3399 3.41727 15.2551 3.41727 15.1667V14.2351C3.41727 14.1467 3.45238 14.0619 3.5149 13.9994C3.57741 13.9369 3.66219 13.9018 3.75059 13.9018H9.5005C9.5889 13.9018 9.67369 13.9369 9.7362 13.9994C9.79871 14.0619 9.83383 14.1467 9.83383 14.2351V15.1667C9.83383 15.2551 9.79871 15.3399 9.7362 15.4024C9.67369 15.4649 9.5889 15.5001 9.5005 15.5001ZM12.5838 14.2351V15.1667C12.5838 15.2551 12.5487 15.3399 12.4862 15.4024C12.4236 15.4649 12.3389 15.5 12.2505 15.5H10.8338C10.7454 15.5 10.6606 15.4649 10.5981 15.4024C10.5356 15.3399 10.5005 15.2551 10.5005 15.1667V14.2351C10.5005 14.1467 10.5356 14.0619 10.5981 13.9994C10.6606 13.9369 10.7454 13.9017 10.8338 13.9017H12.2505C12.3389 13.9017 12.4236 13.9369 12.4862 13.9994C12.5487 14.0619 12.5838 14.1467 12.5838 14.2351ZM15.3337 4.33357H12.6671C11.9321 4.33357 11.3338 3.73525 11.3338 3.00026V0.333641C11.3338 0.0381461 11.6924 -0.111851 11.903 0.0978117L15.5696 3.76442C15.7792 3.97404 15.6297 4.33357 15.3337 4.33357Z"
        fill="#7E7D7D"
      />
    </svg>`,
      content: <HeaderBody />
      // content: <AddCustomer />
    },
    {
      id: 'lineItems',
      label: 'Line Items',
      icon: ` <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.45523 8.42256L14.2381 4.50651L11.048 2.66467L4.26508 6.58073L7.45523 8.42256ZM7.19531 8.89616L0.398438 4.97979V12.8131L7.19531 16.7295V8.89616ZM13.2109 12.9062H13.9531V13.6483H13.2109V12.9062ZM7.74219 8.89616V16.7295L11.4531 14.5836V8.92889C11.4516 8.61771 11.5738 8.31868 11.7928 8.09758C12.0117 7.87648 12.3096 7.75142 12.6207 7.74991H13.5938C13.6492 7.54927 13.7684 7.37212 13.9334 7.24527C14.0985 7.11841 14.3003 7.04874 14.5085 7.04678H14.5V4.97979L7.74219 8.89616Z"
        fill="#7E7D7D"
      />
      <path
        d="M16.0953 7.59375H14.5063C14.2871 7.59375 14.1094 7.77145 14.1094 7.99066V8.01715C14.1094 8.23636 14.2871 8.41406 14.5063 8.41406H16.0953C16.3145 8.41406 16.4922 8.23636 16.4922 8.01715V7.99066C16.4922 7.77145 16.3145 7.59375 16.0953 7.59375Z"
        fill="#7E7D7D"
      />
      <path
        d="M10.5006 2.34897L7.45473 0.590454L0.671875 4.50655L3.7177 6.26506L10.5006 2.34897ZM17.9728 8.29682H16.9891C16.9304 8.49037 16.8106 8.6597 16.6477 8.77943C16.4847 8.89915 16.2873 8.96282 16.085 8.96088H14.508C14.3057 8.96282 14.1083 8.89915 13.9453 8.77942C13.7823 8.6597 13.6625 8.49037 13.6039 8.29682H12.6202C12.5379 8.29749 12.4566 8.31438 12.3809 8.34652C12.3051 8.37867 12.2364 8.42543 12.1788 8.48414C12.1211 8.54286 12.0756 8.61236 12.0448 8.68868C12.0141 8.76501 11.9987 8.84665 11.9995 8.92893V16.8235C11.999 16.9048 12.0148 16.9854 12.0459 17.0606C12.077 17.1357 12.1228 17.2039 12.1807 17.2611C12.2385 17.3183 12.3072 17.3633 12.3826 17.3936C12.4581 17.4239 12.5389 17.4388 12.6202 17.4374H17.9728C18.0545 17.439 18.1357 17.4242 18.2117 17.3941C18.2876 17.3639 18.3569 17.319 18.4153 17.2619C18.4738 17.2047 18.5203 17.1366 18.5522 17.0613C18.5841 16.986 18.6007 16.9052 18.6011 16.8235V8.92893C18.601 8.76196 18.5349 8.60178 18.4172 8.48336C18.2995 8.36493 18.1397 8.29787 17.9728 8.29682ZM12.6636 10.134C12.6633 10.0982 12.6701 10.0626 12.6837 10.0294C12.6972 9.99615 12.7171 9.96591 12.7423 9.9404C12.7675 9.91488 12.7975 9.89458 12.8306 9.88067C12.8636 9.86676 12.8991 9.85951 12.935 9.85932H14.2231C14.2961 9.85949 14.366 9.88844 14.4178 9.93988C14.4695 9.99131 14.4989 10.0611 14.4995 10.134V10.318C14.4991 10.3906 14.47 10.4601 14.4184 10.5113C14.3669 10.5624 14.2972 10.591 14.2246 10.5908C14.167 10.5927 14.1104 10.5757 14.0635 10.5424C14.0165 10.509 13.9818 10.4612 13.9646 10.4062H13.2104V11.1484H13.2212C13.2937 11.1484 13.3633 11.1772 13.4146 11.2285C13.4658 11.2798 13.4946 11.3493 13.4946 11.4218C13.4946 11.4943 13.4658 11.5639 13.4146 11.6152C13.3633 11.6664 13.2937 11.6953 13.2212 11.6953H12.935C12.8992 11.6953 12.8638 11.6882 12.8307 11.6744C12.7977 11.6607 12.7677 11.6405 12.7425 11.6151C12.7172 11.5898 12.6973 11.5596 12.6837 11.5265C12.6702 11.4934 12.6633 11.4579 12.6636 11.4221V10.134ZM12.6636 12.6328C12.6636 12.5602 12.6924 12.4907 12.7436 12.4394C12.7949 12.3881 12.8645 12.3593 12.937 12.3593H14.2261C14.2986 12.3593 14.3681 12.3881 14.4194 12.4394C14.4707 12.4907 14.4995 12.5602 14.4995 12.6328V13.9218C14.4995 13.9943 14.4707 14.0639 14.4194 14.1152C14.3681 14.1664 14.2986 14.1953 14.2261 14.1953H12.937C12.8645 14.1953 12.7949 14.1664 12.7436 14.1152C12.6924 14.0639 12.6636 13.9943 12.6636 13.9218V12.6328ZM13.2213 16.6953H12.935C12.8997 16.6963 12.8646 16.6902 12.8317 16.6774C12.7988 16.6646 12.7688 16.6453 12.7435 16.6207C12.7181 16.5961 12.698 16.5667 12.6843 16.5341C12.6706 16.5016 12.6635 16.4667 12.6636 16.4314V15.1433C12.6627 15.0699 12.6907 14.999 12.7414 14.946C12.7921 14.8929 12.8616 14.8618 12.935 14.8593H14.2231C14.297 14.8616 14.3671 14.8925 14.4187 14.9454C14.4702 14.9984 14.4992 15.0693 14.4995 15.1433V15.4067C14.4979 15.4786 14.4683 15.5471 14.4168 15.5974C14.3654 15.6476 14.2963 15.6758 14.2244 15.6757C14.1525 15.6756 14.0834 15.6474 14.0321 15.597C13.9808 15.5466 13.9513 15.4781 13.9498 15.4062H13.2104V16.1484H13.2213C13.2938 16.1484 13.3633 16.1772 13.4146 16.2285C13.4659 16.2798 13.4947 16.3493 13.4947 16.4218C13.4947 16.4943 13.4659 16.5639 13.4146 16.6152C13.3633 16.6664 13.2938 16.6953 13.2213 16.6953ZM15.2394 15.6305L14.2452 16.6247C14.2198 16.6501 14.1896 16.6702 14.1564 16.684C14.1233 16.6977 14.0877 16.7048 14.0518 16.7048C14.0159 16.7048 13.9803 16.6977 13.9472 16.684C13.914 16.6702 13.8838 16.6501 13.8584 16.6247L13.4214 16.1877C13.396 16.1623 13.3758 16.1322 13.3621 16.099C13.3483 16.0658 13.3413 16.0303 13.3413 15.9944C13.3413 15.9585 13.3483 15.9229 13.3621 15.8897C13.3758 15.8565 13.396 15.8264 13.4214 15.801C13.4468 15.7756 13.4769 15.7555 13.5101 15.7417C13.5433 15.728 13.5788 15.7209 13.6147 15.7209C13.6506 15.7209 13.6862 15.728 13.7194 15.7417C13.7525 15.7555 13.7827 15.7756 13.8081 15.801L14.0517 16.0446L14.8525 15.2439C14.9037 15.1926 14.9733 15.1638 15.0458 15.1638C15.1183 15.1638 15.1879 15.1926 15.2392 15.2439C15.2905 15.2951 15.3193 15.3647 15.3193 15.4372C15.3193 15.5097 15.2905 15.5793 15.2392 15.6306L15.2394 15.6305ZM15.2394 10.5817L14.2452 11.5759C14.2198 11.6013 14.1896 11.6214 14.1564 11.6352C14.1233 11.6489 14.0877 11.656 14.0518 11.656C14.0159 11.656 13.9803 11.6489 13.9472 11.6352C13.914 11.6214 13.8838 11.6013 13.8584 11.5759L13.4214 11.1389C13.396 11.1135 13.3758 11.0834 13.3621 11.0502C13.3483 11.017 13.3413 10.9815 13.3413 10.9456C13.3413 10.9097 13.3483 10.8741 13.3621 10.8409C13.3758 10.8077 13.396 10.7776 13.4214 10.7522C13.4468 10.7268 13.4769 10.7067 13.5101 10.6929C13.5433 10.6792 13.5788 10.6721 13.6147 10.6721C13.6506 10.6721 13.6862 10.6792 13.7194 10.6929C13.7525 10.7067 13.7827 10.7268 13.8081 10.7522L14.0517 10.9958L14.8525 10.1951C14.9037 10.1438 14.9733 10.115 15.0458 10.115C15.1183 10.115 15.1879 10.1438 15.2392 10.1951C15.2905 10.2463 15.3193 10.3159 15.3193 10.3884C15.3193 10.4609 15.2905 10.5305 15.2392 10.5818L15.2394 10.5817ZM17.658 16.0703H15.9405C15.868 16.0703 15.7985 16.0414 15.7472 15.9902C15.6959 15.9389 15.6671 15.8693 15.6671 15.7968C15.6671 15.7243 15.6959 15.6548 15.7472 15.6035C15.7985 15.5522 15.868 15.5234 15.9405 15.5234H17.658C17.7305 15.5234 17.8 15.5522 17.8513 15.6035C17.9026 15.6548 17.9314 15.7243 17.9314 15.7968C17.9314 15.8693 17.9026 15.9389 17.8513 15.9902C17.8 16.0414 17.7305 16.0703 17.658 16.0703ZM17.658 13.5703H15.9405C15.868 13.5703 15.7985 13.5414 15.7472 13.4902C15.6959 13.4389 15.6671 13.3693 15.6671 13.2968C15.6671 13.2243 15.6959 13.1548 15.7472 13.1035C15.7985 13.0522 15.868 13.0234 15.9405 13.0234H17.658C17.7305 13.0234 17.8 13.0522 17.8513 13.1035C17.9026 13.1548 17.9314 13.2243 17.9314 13.2968C17.9314 13.3693 17.9026 13.4389 17.8513 13.4902C17.8 13.5414 17.7305 13.5703 17.658 13.5703ZM17.658 11.0703H15.9405C15.868 11.0703 15.7985 11.0414 15.7472 10.9902C15.6959 10.9389 15.6671 10.8693 15.6671 10.7968C15.6671 10.7243 15.6959 10.6548 15.7472 10.6035C15.7985 10.5522 15.868 10.5234 15.9405 10.5234H17.658C17.7305 10.5234 17.8 10.5522 17.8513 10.6035C17.9026 10.6548 17.9314 10.7243 17.9314 10.7968C17.9314 10.8693 17.9026 10.9389 17.8513 10.9902C17.8 11.0414 17.7305 11.0703 17.658 11.0703Z"
        fill="#7E7D7D"
      />
    </svg>`,
      content: <AddCustomer />
    },
    {
      id: 'footerDetails',
      label: 'Footer Details',
      icon: `    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4987 0H2.41536C1.6112 0 0.957031 0.654167 0.957031 1.45833V11.875C0.957031 12.6792 1.6112 13.3333 2.41536 13.3333H19.4987C20.3029 13.3333 20.957 12.6792 20.957 11.875V1.45833C20.957 0.654167 20.3029 0 19.4987 0ZM19.4987 15H2.41536C1.6112 15 0.957031 15.6542 0.957031 16.4583V18.5417C0.957031 19.3458 1.6112 20 2.41536 20H19.4987C20.3029 20 20.957 19.3458 20.957 18.5417V16.4583C20.957 15.6542 20.3029 15 19.4987 15Z"
        fill="#7E7D7D"
      />
    </svg>`,
      content: <AddCustomer />
    },
    {
      id: 'chooseTemplate',
      label: 'Choose Template',
      icon: `    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 0H1.5C0.9 0 0.5 0.4 0.5 1V19C0.5 19.6 0.9 20 1.5 20H15.5C16.1 20 16.5 19.6 16.5 19V1C16.5 0.4 16.1 0 15.5 0ZM2.5 2H6.5V9H2.5V2ZM13.5 17H3.5C2.9 17 2.5 16.6 2.5 16C2.5 15.4 2.9 15 3.5 15H13.5C14.1 15 14.5 15.4 14.5 16C14.5 16.6 14.1 17 13.5 17ZM13.5 13H3.5C2.9 13 2.5 12.6 2.5 12C2.5 11.4 2.9 11 3.5 11H13.5C14.1 11 14.5 11.4 14.5 12C14.5 12.6 14.1 13 13.5 13ZM13.5 9H9.5C8.9 9 8.5 8.6 8.5 8C8.5 7.4 8.9 7 9.5 7H13.5C14.1 7 14.5 7.4 14.5 8C14.5 8.6 14.1 9 13.5 9ZM13.5 5H9.5C8.9 5 8.5 4.6 8.5 4C8.5 3.4 8.9 3 9.5 3H13.5C14.1 3 14.5 3.4 14.5 4C14.5 4.6 14.1 5 13.5 5Z"
        fill="#7E7D7D"
      />
    </svg>`,
      content: <AddCustomer />
    },
    {
      id: 'preview',
      label: 'Preview',
      icon: `   <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.833333 5.24996C1.05435 5.24996 1.26631 5.16216 1.42259 5.00588C1.57887 4.8496 1.66667 4.63764 1.66667 4.41663V3.16663C1.66667 2.70663 2.04083 2.33329 2.5 2.33329H3.75C3.97101 2.33329 4.18298 2.2455 4.33926 2.08922C4.49554 1.93293 4.58333 1.72097 4.58333 1.49996C4.58333 1.27895 4.49554 1.06698 4.33926 0.910704C4.18298 0.754423 3.97101 0.666626 3.75 0.666626H2.5C1.12167 0.666626 0 1.78829 0 3.16663V4.41663C0 4.63764 0.0877974 4.8496 0.244078 5.00588C0.400358 5.16216 0.61232 5.24996 0.833333 5.24996ZM17.5 0.666626H16.25C16.029 0.666626 15.817 0.754423 15.6607 0.910704C15.5045 1.06698 15.4167 1.27895 15.4167 1.49996C15.4167 1.72097 15.5045 1.93293 15.6607 2.08922C15.817 2.2455 16.029 2.33329 16.25 2.33329H17.5C17.9592 2.33329 18.3333 2.70663 18.3333 3.16663V4.41663C18.3333 4.63764 18.4211 4.8496 18.5774 5.00588C18.7337 5.16216 18.9457 5.24996 19.1667 5.24996C19.3877 5.24996 19.5996 5.16216 19.7559 5.00588C19.9122 4.8496 20 4.63764 20 4.41663V3.16663C20 1.78829 18.8783 0.666626 17.5 0.666626ZM0 14.8333C0 16.2116 1.12167 17.3333 2.5 17.3333H3.75C3.97101 17.3333 4.18298 17.2455 4.33926 17.0892C4.49554 16.9329 4.58333 16.721 4.58333 16.5C4.58333 16.2789 4.49554 16.067 4.33926 15.9107C4.18298 15.7544 3.97101 15.6666 3.75 15.6666H2.5C2.04083 15.6666 1.66667 15.2933 1.66667 14.8333V13.5833C1.66667 13.3623 1.57887 13.1503 1.42259 12.994C1.26631 12.8378 1.05435 12.75 0.833333 12.75C0.61232 12.75 0.400358 12.8378 0.244078 12.994C0.0877974 13.1503 0 13.3623 0 13.5833V14.8333ZM19.1667 12.75C18.9457 12.75 18.7337 12.8378 18.5774 12.994C18.4211 13.1503 18.3333 13.3623 18.3333 13.5833V14.8333C18.3333 15.2933 17.9592 15.6666 17.5 15.6666H16.25C16.029 15.6666 15.817 15.7544 15.6607 15.9107C15.5045 16.067 15.4167 16.2789 15.4167 16.5C15.4167 16.721 15.5045 16.9329 15.6607 17.0892C15.817 17.2455 16.029 17.3333 16.25 17.3333H17.5C18.8783 17.3333 20 16.2116 20 14.8333V13.5833C20 13.3623 19.9122 13.1503 19.7559 12.994C19.5996 12.8378 19.3877 12.75 19.1667 12.75ZM9.99917 14.0583C13.2075 14.0583 15.9408 12.0416 16.6492 9.14996C16.6742 9.04996 16.6742 8.94996 16.6492 8.84996C15.9408 5.95829 13.2075 3.94163 9.99917 3.94163C6.79083 3.94163 4.0575 5.95829 3.34917 8.84996C3.32417 8.94996 3.32417 9.04996 3.34917 9.14996C4.0575 12.0416 6.79083 14.0583 9.99917 14.0583ZM9.99917 6.49996C11.3742 6.49996 12.4992 7.62496 12.4992 8.99996C12.4992 10.375 11.3742 11.5 9.99917 11.5C8.62417 11.5 7.49917 10.375 7.49917 8.99996C7.49917 7.62496 8.62417 6.49996 9.99917 6.49996Z"
        fill="#7E7D7D"
      />
    </svg>`,
      content: <AddCustomer />
    }
  ];
  return (
    <>
      <div className="tw-flex tw-items-center tw-justify-between tw-bg-secondary-gray">
        <div className="tw-flex tw-items-center tw-gap-[16px] tw-p-[24px]">
          <img src="/assets/images/back-btn.svg" alt="back" />
          <h2 className="admin-top-heading">Create Offer</h2>
          <p className="admin-top-p">Offer #</p>{' '}
          <span className="header-span">10075</span>
        </div>
      </div>
      <div className="create-offer-wrapper">
        <div className="content">
          <div className="body">
            <FormStepper
              title="Create Offer"
              gridCol="tw-grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto]"
              module="Offer"
              tabs={tabs}
            />
          </div>
        </div>
      </div>
    </>
  );
}
