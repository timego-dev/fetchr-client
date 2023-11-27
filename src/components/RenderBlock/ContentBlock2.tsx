"use client";
import { FC, useState } from "react";
import { IContentBlock1, IContentBlock2, IHeroBlock } from "../../types/page";
import { Media } from "../../types/payload-types";
import { serializeSlate } from "../../utils/slateSerialize";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const ContentBlock2: FC<IContentBlock2> = (props) => {
  const { blockType, blockName, tabs, title, id } = props;
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className=" px-[200px] py-20 md:flex-nowrap bg-bg-default">
      <h2 className="text-[45px] leading-[52px] mb-20 text-center">{title}</h2>
      <div className="grid grid-cols-[362px_1fr] gap-x-6 ">
        <div className="bg-[#fdf1f2] p-3 rounded-2xl">
          {tabs?.map((i, index) => (
            <button
              onClick={() => {
                setCurrentTab(index);
              }}
              key={i.id}
              className={cn(
                "flex gap-x-3 p-4 rounded-full w-full",
                index === currentTab && "bg-[#ffd9e0]",
              )}>
              <img src={(i.icon as Media)?.url || ""} alt="" />
              <div>{i.title}</div>
            </button>
          ))}
        </div>
        <div className="bg-[#fdf1f2] p-10 relative ">
          <div className="flex flex-col gap-5 max-w-[360px]">
            <div className="font-semibold">{tabs?.[currentTab].title}</div>
            <div className="text-base text-description max-w-[491px] ">
              {serializeSlate(tabs?.[currentTab].description || [])}
            </div>
          </div>
          <img
            src={(tabs?.[currentTab]?.image as Media).url || " "}
            alt=""
            className="absolute top-[-40px] right-[20%]"
          />
        </div>
      </div>
    </div>
  );
};
