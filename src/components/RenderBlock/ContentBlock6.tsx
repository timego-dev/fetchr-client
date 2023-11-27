import { FC } from "react";
import {
  IContentBlock1,
  IContentBlock3,
  IContentBlock5,
  IContentBlock6,
  IHeroBlock,
} from "../../types/page";
import { Media } from "../../types/payload-types";
import { serializeSlate } from "../../utils/slateSerialize";
import { Button } from "../ui/button";

export const ContentBlock6: FC<IContentBlock6> = (props) => {
  const { blockType, blockName, title, id, image } = props;

  return (
    <div className=" px-[200px]  p-20  md:flex-nowrap min-h-[784px] bg-bg-default overflow-hidden relative">
      <div className="flex flex-col gap-y-10 items-center justify-center z-10">
        <img src={(image as Media)?.url || ""} alt="" />
        <h3 className="text-[45px] leading-[52px]">{title}</h3>
        <Button>{props.Button?.text}</Button>
      </div>
    </div>
  );
};
