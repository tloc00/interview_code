import React from 'react'
import IconCalendar from '../icon/IconCalendar'
import CustomLine from '../customLine'
import IconArrowDown from '../icon/IconArrowDown'
import style from "./campaign.module.scss"
import IconSearch from '../icon/IconSearch'
import IconExclaimation from '../icon/IconExclaimation'
import IconFacebook from '../icon/IconFacebook'
import IconExternal from '../icon/IconExternal'
import IconArrowLeft from '../icon/IconArrowLeft'
import IconArrowRight from '../icon/IconArrowRight'

const tableHeaders = [
    "Campaign name",
    "Ad name",
    "Date",
    "Impressions",
    "Clicks",
    "Contacts",
    "Export"
]

const Campain = () => {
  return (
    <div className={style.campaign_wrapper}>
        <div className={style.container_sort}>
            <div className={style.date_filter}>
                <p className={style.text_header}>Date range filter</p>
                <div className={style.date_sort}>
                    <div>
                        <p>Date picker from</p>
                        <div className={style.calendar_wrapper}>
                            <p>05/28/2021</p>
                            <IconCalendar/>
                        </div>
                    </div>
                    <CustomLine height={75}/>
                    <div>
                        <p>Date picker to</p>
                        <div className={style.calendar_wrapper}>
                            <p>05/28/2021</p>
                            <IconCalendar/>
                        </div>
                    </div>
                    <CustomLine height={75}/>
                    <div>
                        <p>Period</p>
                        <div className={style.select_date_wrapper}>
                            <p>Last 3 days</p>
                            <IconArrowDown/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.sort_wrapper}>
                <div className={style.drop_box_item}>
                    <p>Ad account :</p>
                    <div>
                        <p>Select account</p>
                        <IconArrowDown/>
                    </div>
                </div>
                <div className={style.drop_box_item}>
                    <p>Sorted by:</p>
                    <div>
                        <p>Last updated</p>
                        <IconArrowDown/>
                    </div>
                </div>
                <div className={style.search_wrapper}>
                    <input placeholder='Search...'/>
                    <IconSearch/>
                </div>
            </div>
        </div>
        <div className={style.body}>
            <div className={style.table_header_wrapper}>
                {tableHeaders.map((item, index) => 
                    <div className={style.table_header} key={index}>
                        <p>{item}</p>
                        <IconExclaimation/>
                    </div>
                )}
            </div>
            <div className={style.table_body}>
                <p className={style.text_connect}>Connect your Facebook Ad account to view insights</p>
                <IconFacebook/>
                <p className={style.text_click}>Click the connect button below to setup Facebook ad account<br/>to view insights of CTWA campaigns</p>
                <button className={style.button_connect}>
                    <p>Connect</p>
                    <IconExternal/>
                </button>
            </div>
        </div>
        <div className={style.table_footer}>
                <p className={style.text_per_page}>Row per pages:</p>
                <div className={style.page_wrapper}>
                    <p className={style.page_number}>7</p>
                    <IconArrowDown/>
                </div>
                <p className={style.page_description}>1–5 of 20</p>
                <IconArrowLeft/>
                <p className={style.text_previous}>Previous</p>
                <p className={style.text_next}>Next</p>
                <IconArrowRight/>
            </div>
    </div>
  )
}

export default Campain