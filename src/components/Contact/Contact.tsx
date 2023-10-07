import React, { useEffect, useState } from "react";
import "../../styles/contact-styles/contact.css";

import wave from "../../assets/image/wave.svg";
import Footer from "../Footer/Footer";

import qr from "../../assets/image/qr.png";
import SocialLink from "./SocialLink";
import {
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaDiscord,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCardMembership } from "react-icons/md";
import { GiRomanToga } from "react-icons/gi";

const Contact = () => {
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
    <section id="contact" className="contact-container">
      <div className="transition-image-box  rotate">
        <img src={wave} alt="" className="transition-image" />
      </div>
      <div className="contact-box">
        <p className="contact-header">Aramıza Katılmaya Hazır Mısın?</p>
        <div className="contact-area">
          <div className="contact-zone-left">
            {soicalNetworks.map((network, index) => {
              return (
                <SocialLink
                  key={index}
                  url={network.url}
                  name={network.name}
                  icon={network.icon}
                  isMobile={mobile}
                />
              );
            })}
          </div>
          <div className="contact-zone-right">
            <button
              className="contact-qr-box"
              onClick={() => {
                const url = "https://linktr.ee/gtubt";
                window.open(url, "_blank");
              }}
            >
              <img src={qr} alt="qr" className="contact-qr" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

const soicalNetworks = [
  {
    url: "https://www.instagram.com/gtubt",
    name: "Instagram",
    icon: FaInstagram,
  },
  {
    url: "https://www.twitter.com/gtubt",
    name: "Twitter",
    icon: FaXTwitter,
  },
  {
    url: "https://www.youtube.com/c/gtubt",
    name: "Youtube",
    icon: FaYoutube,
  },
  {
    url: "https://t.me/joinchat/TdjSZkPhS5BjZTk0",
    name: "Telegram",
    icon: FaTelegram,
  },
  {
    url: "https://discord.com/invite/EFpvDfz8Gx",
    name: "Discord",
    icon: FaDiscord,
  },
  {
    url: "https://www.linkedin.com/company/gtubt/",
    name: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeub75atkfQ6rKbfS49KvNK_xDnChHhtuzdTcZcLox7yebj-g/viewform",
    name: "Üye Kayıdı",
    icon: MdCardMembership,
  },
  {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeeLmbkloYnv2ybkWY7kVJ_wJKRV4miPteMWt9NGiUDpEPr_Q/viewform",
    name: "Ekip Başvurusu",
    icon: GiRomanToga,
  },
];

export default Contact;
