import React from "react";

import { FiExternalLink, FiGithub } from "react-icons/fi";

import {
  TbBrandTelegram,
  TbBrandFacebook,
  TbBrandTwitter,
} from "react-icons/tb";

export const socialMedia = [
  {
    sm: "Github",
    icon: <FiGithub />,
    url: "https://github.com/Life1sOk",
  },
  {
    sm: "telegram",
    icon: <TbBrandTelegram />,
    url: "https://t.me/mrandreyt",
  },
  {
    sm: "facebook",
    icon: <TbBrandFacebook />,
    url: "https://www.facebook.com/andrey.tsoy.3975",
  },
  {
    sm: "twitter",
    icon: <TbBrandTwitter />,
    url: "https://twitter.com/AndreyTsoy_dev",
  },
];

export const locationBasics = {
  email: "andreytsoy.webdev@gmail.com",
  number: "+77056187051",
  location: "Kazakhstan, Almaty",
};

export const socialIcons = {
  github: <FiGithub />,
  view: <FiExternalLink />,
};
