import React from "react";
import "../../styles/aboutus-styles/aboutus.css";
import logo from "../../assets/image/main_logo.png";
import { Link } from "react-router-dom";

const Aboutus = () => {
    return (
        <section id="aboutus" className="aboutus-container">
            <div className="aboutus-zone left">
                <img src={logo} alt="aboutus" className="aboutus-image" />
            </div>
            <div className="aboutus-zone right">
                <p className="aboutus-header">Biz Kimiz?</p>
                <p className="aboutus-text">
                    Teknolojiyi seven ve sevdirmeye çalışan bir topluluğuz.{" "}
                    <span className="aboutus-highlight">
                        GTU Bilgisayar Topluluğu
                    </span>{" "}
                    olarak 2016 yılından bu yana her seni üye sayısını artırarak
                    daha çok kişiye teknolojiyi sevdirmeyi amaçlıyoruz.
                    Öğrenmenin bulaşıcı olduğuna inanıyoruz. Öğrendiklerimizi
                    birbirimize öğretiyoruz. <br />
                    <br />
                    Topluluğun daha geniş kitlelere yayılmasını ve hep beraber
                    geliştirmeyi istiyoruz.{" "}
                    <span className="aboutus-highlight">
                        ETKİNLİKLERİMİZ ve ATÖLYELERİMİZ
                    </span>{" "}
                    ile meraklısı olduğumuz konuları birinci ağızdan duyup,
                    sektörün usta isimleriyle birebir iletişime geçiyoruz.
                </p>
                <Link
                    to={"/geekday"}
                    className="navbar-special"
                    style={{
                        alignSelf: "center",
                        marginTop: 12,
                        paddingLeft: 28,
                        paddingRight: 28,
                        paddingTop: 16,
                        paddingBottom: 16,
                    }}
                >
                    GeekDay!
                </Link>
            </div>
        </section>
    );
};

export default Aboutus;
