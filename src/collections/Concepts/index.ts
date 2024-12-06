import { CollectionConfig } from 'payload';

export const Concepts: CollectionConfig = {
  slug: 'concepts',
  fields: [
    {
      name: 'netsuite_id',
      type: 'number',
      unique: true,
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'created_date',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'updated_date',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Initiated', value: 'Initiated' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Completed', value: 'Completed' },
        { label: 'Approved', value: 'Approved' },
      ],
      required: true,
      defaultValue: 'Initiated',
    },
    {
      name: 'approval_notes',
      type: 'textarea',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sketches_count',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'cad_count',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'renderings_count',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'image_urls',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'total_time_spent',
      type: 'text', // You could use a custom format for intervals if needed
    },
  ],
};