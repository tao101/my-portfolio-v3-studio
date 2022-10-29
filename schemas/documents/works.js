import { FcBriefcase } from 'react-icons/fc';

export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  icon: FcBriefcase,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Main image',
      name: 'mainImage',
      type: 'seoImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Works Categories',
      name: 'Categories',
      type: 'array',
      of: [
        {
          title: 'category',
          name: 'category',
          type: 'reference',
          to: [{ type: 'worksCategory' }],
        },
      ],
    },
    {
      title: 'Live url',
      name: 'liveUrl',
      type: 'url',
    },
    {
      title: 'Youtube Url',
      name: 'youtubeUrl',
      type: 'url',
    },
    {
      title: 'Github Url',
      name: 'githubUrl',
      type: 'url',
    },
    {
      title: 'Photo Gallery',
      name: 'photoGallery',
      type: 'array',
      of: [
        {
          title: 'Photo',
          name: 'photo',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'image',
              name: 'image',
              type: 'seoImage',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              image: 'image.image',
            },
            prepare(selection) {
              const { title, image } = selection;
              return {
                title: title,
                media: image,
              };
            },
          },
        },
      ],
    },
  ],
};
