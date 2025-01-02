import React from "react";
import FooterLogo from "../Image/FooterLogo";
import InstaImg from "../Image/InstaImg";
import FacebookImg from "../Image/FacebookImg";
import TwitterImg from "../Image/TwitterImg";
import BetaImg from "../Image/BetaImg";
import Link from "next/link";

const Footer = () => {
  const dapp = [
    { id: 0, title: "Projects", category: "Dapp", link: "/" },
    { id: 1, title: "Nodes", category: "Dapp", link: "/" },
    { id: 2, title: "Live charts", category: "Dapp", link: "/" },
    { id: 3, title: "Categories", category: "Dapp", link: "/" },
    { id: 4, title: "Airdrops", category: "Dapp", link: "/" },
    { id: 5, title: "Settings", category: "Dapp", link: "/" },
  ];

  const links = [
    { id: 0, title: "About Us", category: "Links", link: "/" },
    { id: 1, title: "What we do", category: "Links", link: "/" },
    { id: 2, title: "News", category: "Links", link: "/" },
    { id: 3, title: "Projects", category: "Links", link: "/" },
    { id: 4, title: "FAQ", category: "Links", link: "/" },
    { id: 5, title: "Offices", category: "Links", link: "/" },
  ];

  const contactInfo = [
    {
      id: 0,
      title: "info@premarketcap.com",
      category: "Contact Info",
      link: "mailto:info@premarketcap.com",
    },
    {
      id: 1,
      title: "Telephone : + (999) 345 6789",
      category: "Contact Info",
      link: null,
    },
    {
      id: 2,
      title: "Fax : + (09912) 345 6789",
      category: "Contact Info",
      link: null,
    },
    {
      id: 3,
      title: "Email : contact@premarketcap.com",
      category: "Contact Info",
      link: "mailto:contact@premarketcap.com",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between mb-14 mt-20 max-md:mt-10 max-md:mb-2 w-full">
      {/* Sol Kısım (Logo ve Açıklama) */}
      <div className="flex justify-center flex-col w-full  text-left">
        {/* Logo ve Beta etiketi */}
        <div className="flex max-w-md items-end mb-4 justify-center">
          <FooterLogo />
          <BetaImg />
        </div>

        {/* Açıklama */}
        <p className=" max-md:mt-4 leading-[26.7px] max-md:leading-[19px] text-[15px] max-w-lg max-md:text-[]">
          PreMarketCap is a trusted platform for investors seeking comprehensive
          market cap data and analytics. From real-time updates to deep industry
          insights, we empower you to make informed investment decisions. Join
          us!
        </p>

        <div className="flex items-center  mt-12 mb-10 justify-between max-w-lg">
          <div className=" flex items-center gap-5">
            <FacebookImg />
            <TwitterImg />
            <InstaImg />
          </div>
          <Link
            href="mailto:info@premarketcap.com"
            className="text-[13.35px] leading-[21px]  text-[#2ED3C8]  lg:hidden"
          >
            info@premarketcap.com
          </Link>
        </div>
      </div>

      {/* Sağ Kısım (Dapp, Links ve Contact Info) */}
      <div className="hidden lg:flex justify-center items-start gap-28">
        {/* Dapp Section */}
        <div>
          <div className="font-bold text-[23px] leading-[45px] mb-4">Dapp</div>
          <ul className="space-y-2">
            {dapp.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="text-[13.35px] leading-[21px] text-[#2ED3C8] "
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <div className="font-bold text-[23px] leading-[45px] mb-4">Links</div>
          <ul className="space-y-2">
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="text-[13.35px] leading-[21px] text-[#2ED3C8] "
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <div className="font-bold text-[23px] leading-[45px] mb-4">
            Contact Info
          </div>
          <ul className="space-y-2">
            {contactInfo.map((item) => (
              <li key={item.id}>
                {item.link ? (
                  <Link
                    href={item.link}
                    className="text-[13.35px] leading-[21px] text-[#2ED3C8] "
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span className="text-[13.35px] leading-[21px] text-[#2ED3C8]">
                    {item.title}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
