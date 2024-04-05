import React, { useRef } from 'react'
import NavBar from '../componentes/NavBar'
import HeroSection from '../componentes/HeroSection'
import Competencies from '../componentes/Competencies'
import SearchSection from './../componentes/SearchSection';
import Fotter from '../componentes/Fotter'
import StaticsAndAlarm from '../componentes/StaticsAndAlarm'
import bell from "../assets/images/bell.png"
import statics from "../assets/images/statics.png"

const landingPage = () => {
  const competenciesScrollTo = useRef(null)
  const staticsScrollTo = useRef(null)
  const alarmScrollTo = useRef(null)
  const handleScroll = (place) => {

    if (place == 1) {
      competenciesScrollTo.current.scrollIntoView({ behavior: 'smooth' });

    } else if (place == 2) {
      staticsScrollTo.current.scrollIntoView({ behavior: 'smooth' });

    } else if (place == 3) {
      alarmScrollTo.current.scrollIntoView({ behavior: 'smooth' });

    }

  }
  return (
    <div>
      <NavBar handleScroll={handleScroll} />
      <HeroSection />
      <Competencies ref={competenciesScrollTo} />
      <StaticsAndAlarm
        ref={staticsScrollTo}
        bgColor="bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor"
        divHeaderColor="bg-gray-200"
        textContentColor="text-fontColor-whiteBaseColor"
        headerText="خدمة الإحصائيات"
        contentLineOne="وهي خدمة تستطـــيع من خلالها الإطـــلاع علــــى جميــــع"
        contentLineTwo="احصائيات المنافســــات المتعلقــــة بنشـــاط الشركة"
        buttonStyle="bg-white hover:bg-gray-200"
        buttonTextColor="text-fontColor-textBlue"
        imgSrc={statics}
        imgStyle="h-40 w-[15%]"

      />
      <StaticsAndAlarm
        ref={alarmScrollTo}
        bgColor="bg-gray-200"
        divHeaderColor="bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor"
        textContentColor="text-fontColor-textBlue"
        headerText="خدمة التنبيهات"
        contentLineOne="وهي خدمة تمكنك من تصنيف النشاطات والجهات الحكومية وتسمح"
        contentLineTwo="للمستخدم باستلام الرسائل التذكيرية للمنافسات الجديده وغيرها"
        buttonStyle="bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor"
        buttonTextColor="text-fontColor-whiteBaseColor"
        imgSrc={bell}
        imgStyle="h-[15rem] w-[10%]"

      />
      <SearchSection />
      <Fotter />
    </div>
  )
}

export default landingPage
