import { FcFilingCabinet } from 'react-icons/fc';

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: FcFilingCabinet,
  fields: [
    {
      title: 'Category Title',
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
      title: 'Category Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
};
