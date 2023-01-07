export default {
  name: "drink",
  title: "drink",
  type: "document",
  fields: [
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "price",
      type: "string",
    },
    {
      name: "details",
      title: "details",
      type: "string",
    },
  ],
};
