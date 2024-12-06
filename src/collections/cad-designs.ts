import { CollectionConfig } from 'payload';

const CadDesigns: CollectionConfig = {
  slug: 'cadDesigns',
  admin: {
    useAsTitle: 'orderName',
  },
  access: {
    create: () => true, // Anyone can create
    read: () => true,   // Anyone can read
    update: () => true, // Anyone can update
    delete: () => true, // Anyone can delete
  },
  fields: [
    {
      name: 'orderName',
      type: 'text',
      required: true,
    },
    {
      name: 'orderDate',
      type: 'date',
      required: true,
    },
    {
      name: 'designerDetails',
      type: 'group',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
        },
        {
          name: 'designerID',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'orderStatus',
      type: 'select',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Shipped',
          value: 'shipped',
        },
        {
          label: 'Delivered',
          value: 'delivered',
        },
      ],
      required: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media', // Assuming 'media' is the slug for the image collection
      required: false,
      maxDepth: 0,
      admin: {
        description: 'Select multiple images related to the order.',
      },
    },
  ],
};

export default CadDesigns;
