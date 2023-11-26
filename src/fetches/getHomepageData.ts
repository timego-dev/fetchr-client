import { Home, SiteSetting } from "../types/payload-types";

export const getHomepageData = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/globals/home?locale=en&draft=false&depth=1`,
  ).then<Home>((res) => res.json());
};
