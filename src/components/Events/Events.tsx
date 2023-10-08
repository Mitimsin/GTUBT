import React, { useEffect, useState } from "react";
import "../../styles/events-styles/events.css";

import image1 from "../../assets/image/events/1.jpg";
import image2 from "../../assets/image/events/2.jpg";
import image3 from "../../assets/image/events/3.jpg";
import image4 from "../../assets/image/events/4.jpg";

const Events = () => {
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const imageShuffleTime = 4000; // in ms

  useEffect(() => {
    setTimeout(() => {
      shuffleIndex !== EventImages.length - 1
        ? setShuffleIndex(shuffleIndex + 1)
        : setShuffleIndex(0);
    }, imageShuffleTime);
  }, [shuffleIndex]);

  return (
    <section id="events" className="events-container">
      <div className="events-area">
        <div className="events-zone left">
          <p className="events-header">Neler Yaptık?</p>
          <div className="events-events">
            {EventList.map((event, index) => {
              return (
                <div key={index} className="events-event-box">
                  <div className="events-event-title-box">
                    <div className="events-event-title-dot" />
                    <p className="events-event-title">{event.title}</p>
                  </div>
                  <p className="events-event-info">{event.info}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="events-zone right">
          <div className="events-image-area">
            {EventImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`events-image-box ${
                    shuffleIndex === index
                      ? "current"
                      : shuffleIndex - 1 === index
                      ? "prev"
                      : index === EventImages.length - 1 && shuffleIndex === 0
                      ? "prev"
                      : shuffleIndex + 1 === index
                      ? "next"
                      : shuffleIndex === EventImages.length - 1 && index === 0
                      ? "next"
                      : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`image` + index}
                    className="events-image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const EventList = [
  {
    title: "CYBER KNOWLEDGE",
    info: `
    Siber güvenlikle ilgili genel kültür kazanmayı hedeflediğimiz ve bu
    bilgileri teknik ayrıntılarla güçlendirdiğimiz etkinliğimizde, dört ayrı
    gün boyunca son derece verimli oturumlar gerçekleştirdik. Siber
    güvenliğin tanımından etik boyutlarına kadar geniş bir yelpazede
    bilgi edindik ve bu bilgileri alanında uzman eğitmenlerin uygulamalı
    anlatımlarıyla pekiştirdik. Eventbrite üzerinden ücretsiz biletlerle
    katılan 1,060 katılımcıya ulaştık ve sayfamızı 4,644 kişi ziyaret etti.
    YouTube platformunda paylaştığımız etkinliğimiz toplamda 3,496
    görüntülenme aldı.
    `,

  },
  {
    title: "HEART OF THE GAME",
    info: `Oyun geliştirme ve tasarımıyla ilgili genel bilgi aktarımı, teknik
    detayları öğrenme ve katılımcıların sorularını yanıtlama amacı
    güttüğümüz etkinliğimizde, altı ayrı gün boyunca son derece verimli
    oturumlar düzenledik. Oyun yapım süreci ve oyun dünyasının evrimi,
    tasarım sürecindeki önemli ayrıntılar ve kullanılan teknikler gibi pek
    çok konu başlığını alanında uzman kişilerden dinleme ve sorularımızı
    sorma fırsatı bulduk. Her yayınımız, genel olarak YouTube üzerinden
    
    300'den fazla görüntülemeye ulaştı.`,
  },
  {
    title: "GEEKDAY",
    info: `GeekDay, Gebze Teknik Üniversitesi Bilgisayar Topluluğu'nun vizyonu
    doğrultusunda düzenlenen ve Türkiye genelinden katılımcılara kapılarını
    açan, bir günlük bir etkinliktir. Bu etkinlik, paralel seminerlerden oluşur ve
    bilgisayar dünyasına ilgi duyan, yani "geek" olarak adlandırılan bireyleri,
    bilgisayar bilimlerinin çeşitli alanlarında uzman isimlerle bir araya
    getirerek onlara birebir iletişim fırsatı sunmayı hedefler. Aynı zamanda
    katılımcıların kişisel gelişimine katkı sağlamak amacıyla güncel ve teknik
    
    oturum içerikleri sunar.`,
  },
  {
    title: "TAÇLANDIRMA HAFTASI",
    info: `Verilen eğitimlerden sonra sektörde adını duyurmuş ve alanında
    uzman kişilerin, ilgilendiğimiz yazılım dilinin sektördeki yerini bizlere
    aktarmak amacıyla düzenlediğimiz bir etkinliğimizdir. Bu
    etkinliğimize katılan konuşmacılar arasında C dili için Havelsan’da
    Sistem Mühendisi olan Orhan AKSOY, Java için Softtech’te Full Stack
    Developer olan Kerem DÜNDAR, Javascript için Fibabank’da Kıdemli
    Yazılım Mühendisi olan Zafer AYAN, ve Python için Softtech’te
    Yazılım ve Yapay Zeka Mühendisi olan Ethem Utku AKTAŞ yer
    almıştır. Etkinliğimiz her oturum için genel olarak 450+
    
    görüntülenmeye sahip olup, katılımcılarımızdan olumlu geri dönüşler
    aldık. Bu etkinliklerle bilgi ve deneyim paylaşımını teşvik etmeye ve
    üyelerimize sektördeki gelişmeleri yakından takip etme fırsatı
    
    sunmaya devam ediyoruz.`,
  },
];

const EventImages = [image1, image2, image3, image4];

export default Events;
