import { Media } from "./payload-types";

export enum BLOCK_TYPE {
  heroBlock = "heroBlock",
  contentBlock1 = "contentBlock1",
  contentBlock2 = "contentBlock2",
  contentBlock3 = "contentBlock3",
  contentBlock4 = "contentBlock4",
  contentBlock5 = "contentBlock5",
  contentBlock6 = "contentBlock6",
}

export type IBlock =
  | IHeroBlock
  | IContentBlock2
  | IContentBlock3
  | IContentBlock4
  | IContentBlock5
  | IContentBlock6;

export type IHeroBlock = {
  title?: string | null;
  image?: string | Media | null;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  Button?: {
    text?: string | null;
    bgColor?: ("A1905B" | "050201") | null;
    action?: ("link" | "button") | null;
    link?: string | null;
    width?: string | null;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: "heroBlock";
};

export type IContentBlock1 = {
  columns?:
    | {
        title?: string | null;
        description?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        image?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "contentBlock1";
};

export type IContentBlock2 = {
  title?: string | null;
  tabs?:
    | {
        title?: string | null;
        description?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        image?: string | Media | null;
        icon?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "contentBlock2";
};
export type IContentBlock3 = {
  title?: string | null;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  Button?: {
    text?: string | null;
    bgColor?: ("A1905B" | "050201") | null;
    action?: ("link" | "button") | null;
    link?: string | null;
    width?: string | null;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: "contentBlock3";
};
export type IContentBlock4 = {
  title?: string | null;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  image?: string | Media | null;
  Button?: {
    text?: string | null;
    bgColor?: ("A1905B" | "050201") | null;
    action?: ("link" | "button") | null;
    link?: string | null;
    width?: string | null;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: "contentBlock4";
};
export type IContentBlock5 = {
  title?: string | null;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "contentBlock5";
};
export type IContentBlock6 = {
  title?: string | null;
  Button?: {
    text?: string | null;
    bgColor?: ("A1905B" | "050201") | null;
    action?: ("link" | "button") | null;
    link?: string | null;
    width?: string | null;
  };
  image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "contentBlock6";
};
