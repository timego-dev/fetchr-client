import { FC } from "react";
import { IContentBlock1, IHeroBlock } from "../../types/page";
import { Media } from "../../types/payload-types";
import { serializeSlate } from "../../utils/slateSerialize";
import { Button } from "../ui/button";

export const ContentBlock1: FC<IContentBlock1> = (props) => {
  const { blockType, blockName, columns, id } = props;

  return (
    <div className="flex px-[200px] justify-between py-20 flex-wrap md:flex-nowrap ">
      <div className="grid grid-flow-row grid-cols-3 gap-x-6 min-h-[366px]">
        {columns?.map((i) => (
          <div
            key={i.id}
            className="bg-[#bde0fe] rounded-[40px] p-10 relative pt-0">
            <img
              src={(i.image as Media)?.url || ""}
              alt=""
              className="w-[300px] h-[300px] mt-[-150px] mx-auto"
            />
            <div className="flex flex-col gap-y-5">
              <h2 className="text-[36px] text-center leading-[44px]">
                {i.title}
              </h2>
              <div className="text-center max-w-[411px]">
                {serializeSlate(i.description || [])}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
