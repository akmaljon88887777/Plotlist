import { Typography } from "@material-tailwind/react";

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
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full items-center justify-center grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, titles, links, br }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <img src={titles} alt="" />
              {br}
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row">
          <Typography
            variant="small"
            className="mb-4 text-center text-[15px] font-normal text-blue-gray-900 md:mb-0"
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
