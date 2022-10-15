import { FcSettings } from 'react-icons/fc';

export default {
  title: 'Website Settings',
  name: 'websiteSettings',
  type: 'object',
  icon: FcSettings,
  fields: [
    {
      title: 'Seo Tags',
      name: 'seo',
      type: 'seo',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'seoImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Github Url',
      name: 'github',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Linkedin Url',
      name: 'linkedin',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Telegram Url',
      name: 'telegram',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Facebook Url',
      name: 'facebook',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Instagram Url',
      name: 'instagram',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Contact Title',
      name: 'contactTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Contact Description',
      name: 'contactDescription',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Contact Phones',
      name: 'contactPhones',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Phone Number',
          name: 'phoneNumber',
          type: 'string',
        },
      ],
    },
    {
      title: 'Contact Emails',
      name: 'contactEmails',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Email',
          name: 'email',
          type: 'string',
        },
      ],
    },
    {
      title: 'Contact Address',
      name: 'contactAddresses',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Address',
          name: 'email',
          type: 'string',
        },
      ],
    },
    {
      title: 'Contact form sender email',
      name: 'contactSenderEmail',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
