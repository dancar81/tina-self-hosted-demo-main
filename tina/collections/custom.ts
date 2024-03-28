import { Collection } from "tinacms";

export const CustomCollection : Collection = {
   
            label: 'Blog Posts',
            name: 'post',
            path: 'content/posts',
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title',
              },
              {
                type: 'string',
                label: 'Post Body',
                name: 'body',
                isBody: true,
              },
            ],
          };
        

