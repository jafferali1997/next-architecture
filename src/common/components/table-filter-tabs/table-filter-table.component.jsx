import React from 'react'

export default function TableFilterTabs({filteropions}) {
  return (
        <div className="tw-mx-5 tw-flex tw-items-center tw-gap-6 tw-border-b-2 tw-border-solid tw-border-disabled-input">
            {
                filteropions.map((item) => {
                    return(
                        <div key={item.id}>
                            <input className='table_filter_radio tw-hidden' type="radio" name={item.name} id={item.label} value={item.label} />
                            <label className='tw-p-2 tw-font-dm tw-font-normal tw-text-sm tw-leading-5 tw-inline-block tw-text-text-medium-gray tw-translate-y-[2px] tw-border-b-[1] tw-border-green-600' for={item.label}>{item.label}</label>
                        </div>
                    )
                })
            }
            
        </div>
  )
}
