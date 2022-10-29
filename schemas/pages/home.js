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
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Home Section Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'About Section Title',
      name: 'aboutTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'About Section Subtitle',
      name: 'aboutSubtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Languages',
      name: 'languages',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Freelance',
      name: 'freelance',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Resume Link',
      name: 'resumeLink',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'About Image',
      name: 'aboutImage',
      type: 'seoImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Skills Section Title',
      name: 'skillsTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Skills Section Subtitle',
      name: 'skillsSubtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'First Skill Title',
      name: 'firstSkillTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Services Section Subtitle',
      name: 'servicesSubtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      validation: (Rule) => Rule.required(),
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
              type: 'text',
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
    {
      title: 'Educational Qualifications Title',
      name: 'educationalQualificationsTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Educational Qualifications',
      name: 'educationalQualifications',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Educational Qualification',
          name: 'educationalQualification',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Subtitle',
              name: 'subtitle',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text',
            },
            {
              title: 'Year',
              name: 'year',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Working Experiences Title',
      name: 'workingExperiencesTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Working Experiences',
      name: 'workingExperiences',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Working Experiences',
          name: 'workingExperience',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Subtitle',
              name: 'subtitle',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text',
            },
            {
              title: 'Year',
              name: 'year',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Reviews',
      name: 'reviews',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'review',
          name: 'review',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Position',
              name: 'subtitle',
              type: 'string',
            },
            {
              title: 'Picture',
              name: 'picture',
              type: 'seoImage',
            },
            {
              title: 'Stars',
              name: 'stars',
              type: 'number',
              validation: (Rule) => Rule.min(0).max(5).required(),
            },
            {
              title: 'description',
              name: 'description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};
