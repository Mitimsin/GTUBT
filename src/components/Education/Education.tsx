import React, { useEffect, useState } from "react";
import "../../styles/education-styles/education.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import image1 from "../../assets/image/education/1.jpg";
import image2 from "../../assets/image/education/2.jpg";
import image3 from "../../assets/image/education/3.jpg";
import image4 from "../../assets/image/education/4.jpg";

import { FaReact } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { BsShieldLockFill } from "react-icons/bs";
import { LuGamepad2 } from "react-icons/lu";

import EducationBox from "./EducationBox";

const Education = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 1024);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <section id="education" className="education-container">
      <p className="education-title">Neler Öğrettik?</p>
      {mobile ? (
        <Swiper
          className="education-area"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {EducationList.map((education, index) => {
            return (
              <SwiperSlide key={index} className="education-swiper-slide">
                <EducationBox
                  index={index}
                  title={education.title}
                  title2={education.title2}
                  info={education.info}
                  img={education.img}
                  icon={education.icon}
                  isMobile={mobile}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="education-area">
          {EducationList.map((education, index) => {
            return (
              <EducationBox
                key={index}
                index={index}
                title={education.title}
                title2={education.title2}
                info={education.info}
                img={education.img}
                icon={education.icon}
                isMobile={mobile}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

const EducationList = [
  {
    title: "Mobil Uygulama",
    title2: "Atolyesi",
    info: "Bu atölye süresince, katılımcılarımız mobil uygulama geliştirmenin temel adımlarını adım adım öğrendiler. Deneyimli eğitmenlerimiz rehberliğinde, mobil uygulama tasarlama, kullanıcı deneyimi optimizasyonu ve temel programlama konularında pratik bilgiler kazandılar. Eğitimimiz interaktif çalışmalar, canlı örnekler ve katılımcıların projeleriyle renklendi.",
    img: image1,
    icon: BiLogoFlutter,
  },
  {
    title: "Web Geliştirme",
    title2: "Atolyesi",
    info: "Düzenlediğimiz Web Geliştirme Atölyesi'nde, katılımcılarımıza dijital dünyanın kapılarını aralamak için bir fırsat sunduk. Bu atölyede, web geliştirmenin temel prensiplerini anladık ve katılımcılar olarak kendi projelerimizi oluşturma şansını yakaladık. Eğitmenlerimiz, web sitesi tasarlamanın yanı sıra kullanıcı deneyimi optimizasyonu, etkili içerik yönetimi ve modern web teknolojileri gibi konularda katılımcılara detaylı bilgiler sundular. Atölye süresince gerçekleştirdiğimiz interaktif çalışmalar ve canlı örneklerle, katılımcılarımızın web geliştirme dünyasına sağlam bir adım atmalarını sağladık.",
    img: image2,
    icon: FaReact,
  },
  {
    title: "Kriptoloji",
    title2: "Atolyesi",
    info: "Bilgisayar Topluluğu olarak düzenlediğimiz Kriptoloji Atölyesi'nde, katılımcılarımıza şifrelerin ve güvenliğin dünyasını keşfetme fırsatı verdik. Bu atölye boyunca, şifreleme yöntemlerini anladık, güvenlik açıklarını tespit etme tekniklerini öğrendik ve kriptografinin temel konularında bilgi sahibi olduk. Gerçek yaşam senaryoları üzerinden örneklerle pratik uygulamalar gerçekleştirerek, katılımcılarımızın kriptoloji alanındaki becerilerini güçlendirmelerine yardımcı olduk.",
    img: image3,
    icon: BsShieldLockFill,
  },
  {
    title: "Oyun Geliştirme",
    title2: "Atolyesi",
    info: "Oyun Geliştirme Atölyesi'nde, katılımcılarımıza oyun geliştirmenin heyecanını yaşama şansı sunduk. Bu atölyede, oyun mekaniği tasarlama, grafik ve ses tasarımı, temel programlama konularında uzmanlaşma fırsatı bulduk. Katılımcılarımız, gerçek oyun geliştirme senaryoları üzerinden örneklerle pratik bilgiler öğrenirken, kendi oyun projelerini oluşturma deneyimini yaşadılar. Canlı örnekler ve interaktif çalışmalarla dolu atölye, katılımcılarımızın yaratıcılıklarını serbest bırakmalarına olanak tanıdı.",
    img: image4,
    icon: LuGamepad2,
  },
];

export default Education;
