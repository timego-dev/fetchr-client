import { FC } from "react";
import { IHeroBlock } from "../../types/page";
import { Media } from "../../types/payload-types";
import { serializeSlate } from "../../utils/slateSerialize";
import { Button } from "../ui/button";

export const HeroBlock: FC<IHeroBlock> = (props) => {
  const { blockType, title, description, image, id } = props;
  console.log("🚀 ~ file: HeroBlock.tsx:7 ~ description:", description);
  return (
    <div className="flex px-[200px] justify-between py-4 flex-wrap md:flex-nowrap min-h-screen">
      <div className="flex flex-col  justify-center gap-y-10 md:w-1/2 w-full">
        <div className="text-[57px] leading-[64px] max-w-[619px]">{title}</div>
        <div className="text-base text-description max-w-[491px] ">
          {serializeSlate(description || [])}
        </div>
        <div>
          <Button>{props.Button?.text}</Button>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src={(image as Media)?.url || ""}
          alt=""
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
