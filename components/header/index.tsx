import React from 'react'
import style from "./header.module.scss" 
import Image from "next/image"
import IconTeamInbox from '../icon/IconTeamInbox'
import IconContact from '../icon/IconContact'
import IconBroadcast from '../icon/IconBroadcast'
import IconAutomation from '../icon/IconAutomation'
import IconDashboard from '../icon/IconDashboard'
import IconApi from '../icon/IconApi'
import IconSetting from '../icon/IconSetting'
import IconMore from '../icon/IconMore'
import IconBell from '../icon/IconBell'
import IconDot from '../icon/IconDot'
import IconArrowDown from '../icon/IconArrowDown'
import CustomLine from '../customLine'

const Header = () => {
  return (
    <div className={style.header_wrapper}>
        <Image alt='logo' height={50} width={124} src="/images/logo.png"/>
        <div className={style.navbar}>
            <div>
                <IconTeamInbox/>
                <p>Team Inbox</p>
            </div>
            <div>
                <IconContact/>
                <p>Contacts</p>
            </div>
            <div>
                <IconBroadcast/>
                <p>Broadcast</p>
            </div>
            <div>
                <IconAutomation/>
                <p>Automation</p>
            </div>
            <div>
                <IconDashboard/>
                <p>Dashboard</p>
            </div>
            <div>
                <IconApi/>
                <p>API Docs</p>
            </div>
            <div>
                <IconSetting/>
                <p>Settings</p>
            </div>
        </div>
        <div className={style.right_wrapper}>
            <div className={style.button_wrapper}>
                <IconMore/>
                <CustomLine height={21}/>
                <div className={style.bell_wrapper}>
                    <IconBell/>
                    <IconDot className={style.icon_dot}/>
                </div>
            </div>
            <div className={style.number_wrapper}>
                <p className={style.text_connected}>Connected</p>
                <p className={style.phone_number}>+91 9876543210</p>
            </div>
            <div className={style.user_info}>
                <Image className={style.avatar} width={55} height={55} alt='Avatar' src='/images/avatar.png'/>
                <div className={style.detail}>
                    <p className={style.user_name}>John Mevis</p>
                    <p className={style.user_email}>john.mevis@gmail.com</p>
                </div>
                <IconArrowDown className={style.icon_arrow}/>
            </div>
        </div>
    </div>
  )
}

export default Header