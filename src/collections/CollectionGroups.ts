import { CollectionConfig } from 'payload';

const CollectionGroups: CollectionConfig = {
  slug: 'collectionGroups',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
    admin: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'number', // Primary key
      unique: true,
      required: true,
    },
    {
      name: 'collectiongroup_name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'netsuite_id',
      type: 'number',
      unique: true,
    },
    {
      name: 'created_date',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'updated_date',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default CollectionGroups;
