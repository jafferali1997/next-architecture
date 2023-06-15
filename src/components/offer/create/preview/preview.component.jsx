import React from 'react';
import Link from 'next/link';

function OfferPreview() {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-gap-20">
        <div className="tw-flex tw-justify-between">
          <h1 className="tw-text-2xl tw-font-bold tw-leading-[29px]">100020</h1>
          <Link href="/">
            <img
              alt="null"
              src="/assets/images/logo.png"
              className="tw-h-[70.05px] tw-w-[216px]"
            />
          </Link>
        </div>

        <div className="tw-flex tw-justify-between">
          <div className="tw-flex tw-flex-col tw-gap-4">
            <div>
              <div className="tw-text-lg tw-font-semibold tw-leading-6 tw-text-black">
                A. No
              </div>
              <div className="tw-text-base tw-font-normal tw-font-semibold tw-leading-[22px] tw-text-[#646464]">
                2021-200002
              </div>
            </div>
            <div>
              <div className="tw-text-lg tw-font-semibold tw-leading-6 tw-text-black">
                Delivery Date
              </div>
              <div className="tw-text-base tw-font-normal tw-font-semibold tw-leading-[22px] tw-text-[#646464]">
                01/22/2023
              </div>
            </div>
            <div>
              <div className="tw-text-lg tw-font-semibold tw-leading-6 tw-text-black">
                Contact Person
              </div>
              <div className="tw-text-base tw-font-normal tw-font-semibold tw-leading-[22px] tw-text-[#646464]">
                Ali
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-4">
            <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
              RS consulting & sales GmbH
            </div>
            <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
              RomanSchellenberg
            </div>
            <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
              Schlegelstr. 33
            </div>
            <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
              95447 Bayreuth
            </div>
            <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
              Germany
            </div>
          </div>
        </div>

        <div>
          <div className="tw-text-base tw-font-medium tw-leading-6 tw-text-black">
            Dear Sir or Madam,
          </div>
          <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
            we would be happy to confirm your order.
          </div>
        </div>

        <section className=" tw-bg-[#FFFFFF tw-h-[378px] tw-w-[1072px] tw-gap-4 tw-rounded-[20px] tw-border tw-border-solid tw-border-[#E2E2E2] tw-p-6">
          <div>
            <table class="... tw-w-full tw-border-collapse tw-rounded-[20px_0px_0px_0px] ">
              <thead>
                <tr>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                    Position
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                    Designation
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                    Quantity
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                    Unit
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                    Price
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                    Tax
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                    Discount
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    21
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    Jane Cooper
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    23
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    pc
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    300
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    0.401
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    10 %
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    2300
                  </td>
                </tr>
                <tr>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    21
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    Jane Cooper
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    23
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    pc
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    300
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    0.401
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    10 %
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    2300
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" tw-mt-[15px] tw-flex tw-flex-row tw-items-start tw-justify-between tw-rounded-[20px] tw-bg-[#fafafa] tw-px-6 tw-py-4">
            <div className="tw-flex tw-flex-col tw-justify-between tw-gap-4">
              <div className="tw-text-base tw-font-medium tw-leading-[19px] tw-text-[#646464]">
                Net Amount
              </div>
              <div className="tw-text-base tw-font-medium tw-leading-[19px] tw-text-[#646464]">
                Plus VAT
              </div>
              <div className="tw-text-base tw-font-semibold tw-leading-[19px] tw-text-text-black">
                Invoice Amount
              </div>
            </div>

            <div className="tw-flex tw-flex-col tw-justify-between tw-gap-4 tw-text-right">
              <div className="tw-text-base tw-font-medium tw-leading-[19px] tw-text-[#646464]">
                6555.0
              </div>
              <div className="tw-text-base tw-font-medium tw-leading-[19px] tw-text-[#646464]">
                12.40{' '}
              </div>
              <div className="tw-text-base tw-font-semibold tw-leading-[19px] tw-text-text-black">
                7919.40
              </div>
            </div>
          </div>
        </section>

        <div>
          <div className="tw-text-base tw-font-medium tw-leading-6 tw-text-black">
            Dear Sir or Madam,
          </div>
          <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
            we would be happy to confirm your order.
          </div>
        </div>
      </div>
      <div className="tw-mt-6 tw-text-sm tw-font-normal tw-leading-[21px] tw-text-[#646464]">
        I hereby confirm the above order:
      </div>

      <div className="tw-mt-[22px] tw-flex tw-items-center tw-gap-[50px]">
        <div className=" tw-text-sm tw-font-medium tw-leading-[21px] tw-text-black">
          Date, Signature:
        </div>
        <div>QR Code</div>
      </div>
    </>
  );
}

export default OfferPreview;