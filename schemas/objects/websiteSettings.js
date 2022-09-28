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
    },
    {
      title: 'Github Url',
      name: 'github',
      type: 'url',
    },
    {
      title: 'Linkedin Url',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Telegram Url',
      name: 'telegram',
      type: 'url',
    },
    {
      title: 'Facebook Url',
      name: 'facebook',
      type: 'url',
    },
    {
      title: 'Instagram Url',
      name: 'instagram',
      type: 'url',
    },
  ],
};
