/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    siteSettings: SiteSetting;
    home: Home;
  };
}
export interface User {
  id: string;
  roles: ('ADMIN' | 'AUTHOR')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Media {
  id: string;
  alt?: string | null;
  createdBy?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface SiteSetting {
  id: string;
  logo?: string | Media | null;
  saleEmails?:
    | {
        email: string;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Home {
  id: string;
  title?: string | null;
  slug: string;
  content?:
    | (
        | {
            title?: string | null;
            image?: string | Media | null;
            description?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            Button?: {
              text?: string | null;
              bgColor?: ('A1905B' | '050201') | null;
              action?: ('link' | 'button') | null;
              link?: string | null;
              width?: string | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'heroBlock';
          }
        | {
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
            blockType: 'contentBlock1';
          }
        | {
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
            blockType: 'contentBlock2';
          }
        | {
            title?: string | null;
            description?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            Button?: {
              text?: string | null;
              bgColor?: ('A1905B' | '050201') | null;
              action?: ('link' | 'button') | null;
              link?: string | null;
              width?: string | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'contentBlock3';
          }
        | {
            title?: string | null;
            description?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            image?: string | Media | null;
            Button?: {
              text?: string | null;
              bgColor?: ('A1905B' | '050201') | null;
              action?: ('link' | 'button') | null;
              link?: string | null;
              width?: string | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'contentBlock4';
          }
        | {
            title?: string | null;
            description?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            image?: string | Media | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'contentBlock5';
          }
        | {
            title?: string | null;
            Button?: {
              text?: string | null;
              bgColor?: ('A1905B' | '050201') | null;
              action?: ('link' | 'button') | null;
              link?: string | null;
              width?: string | null;
            };
            image?: string | Media | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'contentBlock6';
          }
      )[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

