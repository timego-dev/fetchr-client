import { FC } from "react";
import { Home } from "../../types/payload-types";
import { BLOCK_TYPE } from "../../types/page";
import { HeroBlock } from "./HeroBlock";
import { ContentBlock1 } from "./ContentBlock1";
import { ContentBlock2 } from "./ContentBlock2";
import { ContentBlock3 } from "./ContentBlock3";
import { ContentBlock4 } from "./ContentBlock4";
import { ContentBlock5 } from "./ContentBlock5";
import { ContentBlock6 } from "./ContentBlock6";

const RenderBlocks: FC<{ blocks: Home["content"] }> = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block) => {
        switch (block.blockType) {
          case BLOCK_TYPE.heroBlock:
            return <HeroBlock {...block} key={block.id} />;
          case BLOCK_TYPE.contentBlock1:
            return <ContentBlock1 {...block} key={block.id} />;
          case BLOCK_TYPE.contentBlock2:
            return <ContentBlock2 {...block} key={block.id} />;
          case BLOCK_TYPE.contentBlock3:
            return <ContentBlock3 {...block} key={block.id} />;
          case BLOCK_TYPE.contentBlock4:
            return <ContentBlock4 {...block} key={block.id} />;
          case BLOCK_TYPE.contentBlock5:
            return <ContentBlock5 {...block} key={block.id} />;
          case BLOCK_TYPE.contentBlock6:
            return <ContentBlock6 {...block} key={block.id} />;

          default:
            return null;
        }
      })}
    </>
  );
};

export default RenderBlocks;
