import React from 'react';

import { withDocument } from 'part:@sanity/form-builder';

function PreviewUrl(props) {
  if (props?.document?.slug?.current) {
    return (
      <p>
        Preview Url:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://taoufiqlotfi.tech/blog/preview/${props?.document?.slug?.current}`}
        >
          https://taoufiqlotfi.tech/blog/preview/
          {props?.document?.slug?.current}
        </a>
        {/* ... */}
      </p>
    );
  }else{
    return null
  }
}

export default withDocument(PreviewUrl);
