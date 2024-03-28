import { Typography } from "@material-tailwind/react";
import "./style.css";
const SITEMAP = [
  {
    titles:
      "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/black-logo.png",
    links: [
      "If you consider that Plot Listing template is useful for your website, please support us a little via PayPal.",
    ],
    br: <br />,
  },
  {
    title: "Helpful Links",
    marginRight: -100,
    links: ["Categories", "Reviews", "Listing", "Contact Us"],
  },
  {
    title: "",
    links: ["About Us", "Awards", "Useful Sites", "Privacy Policy"],
  },
  {
    title: "Contact Us",
    links: ["27th Street of New Town, Digital Villa"],
    grid: "010-020-0340",
    grid2: "010-020-0340",
    br2: <br />,
    marginTop: -70,
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full bg-[#fff] border-t border-[#d2d1d1] text-[#2a2a2a]">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full items-center justify-center grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(
            (
              {
                title,
                titles,
                links,
                br,
                grid2,
                grid,
                br2,
                marginTop,
                marginRight,
              },
              key
            ) => (
              <div key={key} className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  style={{ marginTop, marginRight }}
                  className="mb-4 margin font-bold capitalize opacity-50 text-[20px] text-[#2a2a2a]"
                >
                  {title}
                </Typography>
                <img src={titles} alt="" />
                {br}
                <ul className="space-y-1 text-[#2a2a2a]">
                  {links.map((link, key) => (
                    <Typography
                      key={key}
                      as="li"
                      color="blue-gray"
                      className="font-light "
                    >
                      <a
                        href="#"
                        className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#2a2a2a]"
                      >
                        {link}
                        {br2}
                        {br2}
                        <div className="flex justify-between text-[#2a2a2a]">
                          <div>{grid}</div>
                          <div>{grid2}</div>
                        </div>
                      </a>
                    </Typography>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row">
          <Typography
            variant="small"
            className="mb-4 text-center text-[15px] font-normal text-[#2a2a2a] md:mb-0"
          >
            <p>Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.</p>
            <br />
            <p>Design: TemplateMo</p>
          </Typography>
        </div>
      </div>
    </footer>
  );
}
