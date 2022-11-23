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
        slugify: (str) => {
          str = str.replace(/^\s+|\s+$/g, ''); // trim
          str = str.toLowerCase();

          // remove accents, swap ñ for n, etc
          var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
          var to = 'aaaaeeeeiiiioooouuuunc------';
          for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
          }

          str = str
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .trim()
            .replace('-', '')
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

          if (str.endsWith('-')) {
            str = str.substring(0, str.length - 1);
          }

          return str;
        },
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
