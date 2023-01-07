import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "63cium4o",
    dataset: 'production',
    apiVersion: '2022-12-04',
    useCdn: true,
    token: 'skoZt65pVHm6qQgYWu4hi6YeLoIpsscBh6CUirIa6bFFUBmQqWBg2F7SCazgR7ikNlNc7ILUkk8BArV9wfbyruMu3QZjI3x3kLwM1xV3eUzHw4XHn1OhqlUmYnVvfEusRBdy8ac6QE5hun2QCyhbbEezV8vviCaflkvXSlDH4PM1sQLm5TSM'
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
