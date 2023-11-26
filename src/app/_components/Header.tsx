import { Button } from "@/components/ui/button";
import { getSiteSettings } from "@/fetches/getSiteSettings";
import { Media } from "@/types/payload-types";
import { FC } from "react";

export const Header: FC = async () => {
  const siteSettings = await getSiteSettings();
  const logo = siteSettings.logo as Media;
  return (
    <div className="flex px-[200px] justify-between py-4">
      <img src={logo?.url || ""} alt="" className="w-[140px] h-[40px]" />
      <div className="">
        <Button variant="link">About Us</Button>
        <Button className="">Sign up</Button>
      </div>
    </div>
  );
};
