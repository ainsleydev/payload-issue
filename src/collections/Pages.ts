import { Reviews } from '@/blocks/Reviews';
import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  timestamps: true,
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: 'Hero',
              admin: {
                hideGutter: true,
              },
              fields: [
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'The main title of the page.',
                  },
                },
                {
                  name: 'lead',
                  label: 'Lead',
                  type: 'textarea',
                  required: true,
                  admin: {
                    description:
                      'A short description that appears below the title.',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [
                Reviews,
              ],
            },
          ],
        },
      ],
    },
  ],
};
