import { FC } from "react";
import {
  IContentBlock1,
  IContentBlock3,
  IContentBlock4,
  IHeroBlock,
} from "../../types/page";
import { Media } from "../../types/payload-types";
import { serializeSlate } from "../../utils/slateSerialize";
import { Button } from "../ui/button";

export const ContentBlock4: FC<IContentBlock4> = (props) => {
  const { blockType, blockName, description, title, id, image } = props;

  return (
    <div className="flex px-[200px] justify-center py-20  md:flex-nowrap min-h-[620px] bg-bg-default ">
      <div className="flex flex-col gap-y-10 items-center justify-center max-w-[876px]">
        <img src={(image as Media).url || ""} alt="" />
        <h3 className="text-[45px] leading-[52px] text-center">{title}</h3>
        <div className="max-w-[600px] text-center">
          {serializeSlate(description || [])}
        </div>
      </div>
    </div>
  );
};
