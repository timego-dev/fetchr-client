import { SiteSetting } from "../types/payload-types";
export const getSiteSettings = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/globals/siteSettings?locale=en&draft=false&depth=1`,
  ).then<SiteSetting>((res) => res.json());
};
