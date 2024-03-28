import { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "md",
  ui: {
    router: () => "/",
  },
  fields: [
   
    {
      type: "string",
      name: "header",
      label: "Header",
    },

    {
      type: 'rich-text',
      label: 'Post Body',
      name: 'body',
      isBody: true,
    },
   
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.header,
          };
        },
      },
      fields: [
        { type: "string", name: "header" },
        { type: "string", name: "description" },
        { type: "string", name: "url" },
      ],
    },
  ],
};
