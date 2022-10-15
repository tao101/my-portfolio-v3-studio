import { FcFile } from 'react-icons/fc';

export default {
  title: 'Blog Post',
  name: 'blogPost',
  type: 'document',
  icon: FcFile,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        //Change to schema title to automatically populate
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
            .trim()
            //Remove spaces
            .replace(/\s+/g, '-'),
        //Remove special characters

        validation: (Rule) => Rule.required(),
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'seoImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Categories',
      name: 'Categories',
      type: 'array',
      of: [
        {
          title: 'category',
          name: 'category',
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Content',
      name: 'Content',
      type: 'blockContent',
    },
  ],
};
