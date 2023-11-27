import { FC } from "react";
import { IContentBlock1, IContentBlock3, IHeroBlock } from "../../types/page";
import { Media } from "../../types/payload-types";
import { serializeSlate } from "../../utils/slateSerialize";
import { Button } from "../ui/button";

export const ContentBlock3: FC<IContentBlock3> = (props) => {
  const { blockType, blockName, description, title, id } = props;

  return (
    <div className="flex px-[200px] justify-center py-20  md:flex-nowrap min-h-[620px] bg-white ">
      <div className="flex flex-col gap-y-10 items-center justify-center">
        <h3 className="text-[45px] leading-[52px]">{title}</h3>
        <div className="max-w-[600px] text-center">
          {serializeSlate(description || [])}
        </div>
        <Button>{props.Button?.text}</Button>
      </div>
    </div>
  );
};
