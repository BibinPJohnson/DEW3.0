import type { CollectionConfig } from 'payload';

const SideBar: CollectionConfig = {
  slug: 'sideBar',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'link'],
  },
  fields: [
    {
      name: 'name',
      label: 'Navigation Name',
      type: 'text',
      maxLength: 255,
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      validate: (value) => {
        if (typeof value !== 'string' || !value.startsWith('/')) {
          return 'Link must start with a forward slash (/)';
        }
        return true;
      },
    },
  ],
};

export default SideBar;
