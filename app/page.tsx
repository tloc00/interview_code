import Image from "next/image";
import style from "./page.module.scss";
import Header from "@/components/header";
import SideBar from "@/components/sideBar";
import Campain from "@/components/campaign";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className={style.contain_wrapper}>
        <SideBar/>
        <Campain/>
      </div>
    </div>
  );
}
