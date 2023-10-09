import React, { useEffect, useRef, useState } from "react";
import "../../styles/contact-styles/contact.css";
import emailjs from "@emailjs/browser";

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

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);
  const [sendButton, setSendButton] = useState(true);

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

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;

    const nameInput = (e.currentTarget as HTMLFormElement)[
      "user_name"
    ] as HTMLInputElement;
    const emailInput = (e.currentTarget as HTMLFormElement)[
      "user_email"
    ] as HTMLInputElement;
    const phoneInput = (e.currentTarget as HTMLFormElement)[
      "user_phone"
    ] as HTMLInputElement;
    const messageInput = (e.currentTarget as HTMLFormElement)[
      "user_message"
    ] as HTMLInputElement;

    if (
      !nameInput.value ||
      !emailInput.value ||
      !phoneInput.value ||
      !messageInput.value
    ) {
      alert("Lütfen bütün alanları doldurun.");
      return;
    }

    if (!emailRegex.test(emailInput.value)) {
      alert("Lütfen geçerli bir mail adresi girin.");
      return;
    }

    if (messageInput.value.length < 10) {
      alert("En az 10 karakterli bir mesaj giriniz.");
      return;
    }

    setSendButton(false);

    if (form.current) {
      emailjs
        .sendForm(
          "service_l0j89vd",
          "template_3j84dt5",
          form.current,
          "lXB9J6TM3NlFx7g-1"
        )
        .then(
          (result) => {
            form.current?.reset();
            alert(
              "Mesajınız tarafımıza başarıyla ulaştı. Aramıza katıldığın için çok mutluyuz!"
            );
            setSendButton(true);
          },
          (error) => {
            alert("Mesajınızı alınırken bir hata oluştu!");
            setSendButton(true);
          }
        );
    }
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-box">
        <p className="contact-header">İletişim Kanallarımız</p>
        <div className="contact-area">
          <form ref={form} onSubmit={handleSend} className="contact-zone-left">
            <div className="contact-input-row">
              <input
                type="text"
                name="user_name"
                className="contact-input"
                placeholder="Ad Soyad"
              />
            </div>
            <div className="contact-input-row">
              <input
                type="text"
                name="user_email"
                className="contact-input"
                placeholder="Mail"
              />
              <input
                type="text"
                name="user_phone"
                className="contact-input"
                placeholder="Telefon"
              />
            </div>
            <div className="contact-input-row tall">
              <textarea
                name="user_message"
                className="contact-input"
                placeholder="Mesaj"
                style={{ resize: "none" }}
              />
            </div>
            <div className="contact-input-row">
              <button
                className={`contact-button ${sendButton ? "" : "blur"}`}
                disabled={!sendButton}
              >
                Gönder <span className="effect-bubble one" />
                <span className="effect-bubble two" />
                <span className="effect-bubble three" />
                <span className="effect-bubble four" />
              </button>
            </div>
          </form>
          <div className="seperator" />
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
            <div className="contact-social-links">
              {soicalNetworks.map((network, index) => {
                return (
                  <SocialLink
                    key={index}
                    url={network.url}
                    icon={network.icon}
                    isMobile={mobile}
                  />
                );
              })}
            </div>
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
    icon: FaInstagram,
  },
  {
    url: "https://www.twitter.com/gtubt",
    icon: FaXTwitter,
  },
  {
    url: "https://www.youtube.com/c/gtubt",
    icon: FaYoutube,
  },
  {
    url: "https://t.me/joinchat/TdjSZkPhS5BjZTk0",
    icon: FaTelegram,
  },
  {
    url: "https://discord.com/invite/EFpvDfz8Gx",
    icon: FaDiscord,
  },
  {
    url: "https://www.linkedin.com/company/gtubt/",
    icon: FaLinkedinIn,
  },
];

export default Contact;
