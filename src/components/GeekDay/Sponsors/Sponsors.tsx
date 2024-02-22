import React from "react";
import "../../../styles/geekday-styles/sponsors-styles/sponsors.css";

import SponsorBox from "./SponsorBox";

import GoldSponsors from "../../../assets/json/GoldSponsors.json";
import SilverSponsors from "../../../assets/json/SilverSponsors.json";
import ExtraSponsors from "../../../assets/json/ExtraSponsors.json";

export enum SponsorLevels {
    GOLD = "gold",
    SILVER = "silver",
    BRONZE = "bronze",
    EXTRA = "black",
}

const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors-container">
            <div className="sponsor-header-box">
                <p className="sponsor-header">Sponsorlarımız</p>
                <p className="sponsor-info">
                    Etkinliğimizi sizlerle buluşturmamızı sağlayana değerli
                    sponsorlarımız
                </p>
            </div>
            <div className="sponsor-zone">
                <p className="sponsor-title">Altın Sponsorlarımız</p>
                <div className="sponsor-list">
                    {GoldSponsors.map((sponsor, index) => {
                        return (
                            <SponsorBox
                                key={index}
                                name={sponsor.name}
                                info={sponsor.info}
                                level={SponsorLevels.GOLD}
                                image={sponsor.image}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="sponsor-zone">
                <p className="sponsor-title">Gümüş Sponsorlarımız</p>
                <div className="sponsor-list">
                    {SilverSponsors.map((sponsor, index) => {
                        return (
                            <SponsorBox
                                key={index}
                                name={sponsor.name}
                                info={sponsor.info}
                                level={SponsorLevels.SILVER}
                                image={sponsor.image}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="sponsor-zone">
                <p className="sponsor-title">Ek Sponsorlarımız</p>
                <div className="sponsor-list">
                    {ExtraSponsors.map((sponsor, index) => {
                        return (
                            <SponsorBox
                                key={index}
                                name={sponsor.name}
                                info={sponsor.info}
                                level={SponsorLevels.EXTRA}
                                image={sponsor.image}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
