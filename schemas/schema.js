// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import seo from './objects/seo';
import image from './objects/image';
import websiteSettings from './objects/websiteSettings';
import home from './pages/home';
import blogPost from './documents/blogPost';
import category from './documents/category';
import blockContent from './objects/blockContent';
import worksCategory from './objects/worksCategory';
import works from './documents/works';
import contact from './documents/contact';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    seo,
    image,
    websiteSettings,
    blockContent,
    worksCategory,

    //pages
    home,

    blogPost,
    category,
    works,
    contact,
  ]),
});
