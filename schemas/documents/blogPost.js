import { FcFile } from 'react-icons/fc';
import React from 'react';
import PreviewUrl from '../../components/previewUrl';

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
      title: 'Preview Url',
      name: 'previewUrl',
      type: 'string',
      inputComponent: PreviewUrl,
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
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'object',
          fields: [
            {
              title: 'Approved',
              name: 'approved',
              type: 'boolean',
            },
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Email',
              name: 'email',
              type: 'string',
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'text',
            },
            {
              title: 'Date',
              type: 'datetime',
              name: 'date',
            },
          ],
          preview: {
            select: {
              approved: 'approved',
              name: 'name',
              email: 'email',
              comment: 'comment',
            },
            prepare(selection) {
              const { approved, name, email, comment } = selection;
              return {
                title: `${name} - ${email} `,
                subtitle: comment, // YYYY-MM-DD --> YYYY
                media: (
                  <span style={{ fontSize: '1.5rem' }}>
                    {approved ? '✅' : '❌'}
                  </span>
                ),
              };
            },
          },
        },
      ],
    },
  ],
};
