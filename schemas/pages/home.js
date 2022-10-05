import { FcHome } from 'react-icons/fc';

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'object',
  icon: FcHome,
  fields: [
    {
      title: 'Home Section Profile Picture',
      name: 'profilePic',
      type: 'seoImage',
    },
    {
      title: 'Home Section Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'About Section Title',
      name: 'aboutTitle',
      type: 'string',
    },
    {
      title: 'About Section Subtitle',
      name: 'aboutSubtitle',
      type: 'string',
    },
    {
      title: 'Languages',
      name: 'languages',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Freelance',
      name: 'freelance',
      type: 'boolean',
    },
    {
      title: 'Resume Link',
      name: 'resumeLink',
      type: 'url',
    },
    {
      title: 'About Image',
      name: 'aboutImage',
      type: 'seoImage',
    },
    {
      title: 'Skills Section Title',
      name: 'skillsTitle',
      type: 'string',
    },
    {
      title: 'Skills Section Subtitle',
      name: 'skillsSubtitle',
      type: 'string',
    },
    {
      title: 'First Skill Title',
      name: 'firstSkillTitle',
      type: 'string',
    },
    {
      title: 'First Skill Percentage',
      name: 'firstSkillPercentage',
      type: 'number',
      description: 'must be between 0 and 1',
      validation: (Rule) => Rule.required().min(0).max(1),
    },
    {
      title: 'Second Skill Title',
      name: 'secondSkillTitle',
      type: 'string',
    },
    {
      title: 'Second Skill Percentage',
      name: 'secondSkillPercentage',
      type: 'number',
      description: 'must be between 0 and 1',
      validation: (Rule) => Rule.required().min(0).max(1),
    },
    {
      title: 'Third Skill Title',
      name: 'thirdSkillTitle',
      type: 'string',
    },
    {
      title: 'Second Skill Percentage',
      name: 'thirdSkillPercentage',
      type: 'number',
      description: 'must be between 0 and 1',
      validation: (Rule) => Rule.required().min(0).max(1),
    },
    {
      title: 'Fourth Skill Title',
      name: 'fourthSkillTitle',
      type: 'string',
    },
    {
      title: 'Fourth Skill Percentage',
      name: 'fourthSkillPercentage',
      type: 'number',
      description: 'must be between 0 and 1',
      validation: (Rule) => Rule.required().min(0).max(1),
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [
        {
          title: 'Skill',
          name: 'skill',
          type: 'object',
          fields: [
            {
              title: 'Skill Title',
              name: 'skillTitle',
              type: 'string',
            },
            {
              title: 'Skill Percentage',
              name: 'skillPercentage',
              type: 'number',
              description: 'must be between 0 and 1',
              validation: (Rule) => Rule.required().min(0).max(1),
            },
          ],
          preview: {
            select: {
              title: 'skillTitle',
              subtitle: 'skillPercentage',
            },
          },
        },
      ],
    },
    {
      title: 'Services Title',
      name: 'servicesTitle',
      type: 'string',
    },
    {
      title: 'Services Section Subtitle',
      name: 'servicesSubtitle',
      type: 'string',
    },
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [
        {
          title: 'service',
          name: 'service',
          type: 'object',
          fields: [
            {
              title: 'Service Title',
              name: 'serviceTitle',
              type: 'string',
            },
            {
              title: 'Service description',
              name: 'serviceDescription',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'serviceTitle',
            },
          },
        },
      ],
    },
  ],
};
