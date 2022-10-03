import S from '@sanity/desk-tool/structure-builder';
import { FcSettings, FcHome, FcViewDetails } from 'react-icons/fc';

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
      S.divider(),
      S.listItem()
        .icon(FcViewDetails)
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .icon(FcHome)
                .child(
                  S.document()
                    .title('Home Page')
                    .schemaType('homePage')
                    .documentId('homePage')
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['websiteSettings', 'homePage'].includes(listItem.getId())
      ),
    ]);
