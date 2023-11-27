import { FC } from "react";
import {
  IContentBlock1,
  IContentBlock3,
  IContentBlock5,
  IHeroBlock,
} from "../../types/page";
import { Media } from "../../types/payload-types";
import { serializeSlate } from "../../utils/slateSerialize";
import { Button } from "../ui/button";

export const ContentBlock5: FC<IContentBlock5> = (props) => {
  const { blockType, blockName, description, title, id, image } = props;

  return (
    <div className="flex px-[200px] justify-center pt-20  md:flex-nowrap min-h-[784px] bg-white overflow-hidden relative">
      <div className="flex flex-col gap-y-20 items-center justify-center z-10">
        <h3 className="text-[45px] leading-[52px] text-center">{title}</h3>
        <img src={(image as Media)?.url || ""} alt="" />
      </div>
      <div className=" text-center text-[500px] leading-[648px] text-primary font-bold absolute bottom-[-200px] ">
        {serializeSlate(description || [])}
      </div>
    </div>
  );
};
