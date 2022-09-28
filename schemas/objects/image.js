export default {
  title: 'Image',
  name: 'seoImage',
  type: 'image',
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Alt text',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
