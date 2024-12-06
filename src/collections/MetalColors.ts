import { CollectionConfig } from 'payload';

const MetalColors: CollectionConfig = {
  slug: 'metalColors',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
    admin: () => true,
  },
  fields: [
    {
      name: 'metal_color_name',
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

export default MetalColors;
