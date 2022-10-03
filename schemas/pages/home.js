import { FcHome } from 'react-icons/fc';

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'object',
  icon: FcHome,
  fields: [
    {
      title: 'Profile Picture',
      name: 'profilePic',
      type: 'seoImage',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
};
