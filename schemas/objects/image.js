export default {
  title: 'Image',
  name: 'seoImage',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
        isHighlighted: true, // <-- Defaults to false
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt text',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
