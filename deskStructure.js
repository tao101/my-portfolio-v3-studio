import S from '@sanity/desk-tool/structure-builder';
import { FcSettings } from 'react-icons/fc';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Website Settings')
        .icon(FcSettings)
        .child(
          S.document()
            .title('Website Settings')
            .schemaType('websiteSettings')
            .documentId('websiteSettings')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['websiteSettings'].includes(listItem.getId())
      ),
    ]);
