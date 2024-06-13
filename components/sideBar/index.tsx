import React from 'react'
import style from "./side_bar.module.scss"
import IconStatistic from '../icon/IconStatistic'
import IconWhatsApp from '../icon/IconWhatsApp'

const SideBar = () => {
  return (
    <div className={style.side_bar_wrapper}>
        <div>
            <IconStatistic/>
            <p>Inbox Analytics</p>
        </div>
        <div>
            <IconWhatsApp/>
            <p className={style.focus}>Click to whatsapp ads (CTWA)</p>
        </div>
    </div>
  )
}

export default SideBar