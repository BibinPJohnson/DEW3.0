import { CollectionConfig } from 'payload';

const Sketches: CollectionConfig = {
  slug: 'sketches',
  admin: {
    useAsTitle: 'netsuite_id', // Display `netsuite_id` as the title in the admin panel
  },
  fields: [
    {
      name: 'netsuite_id',
      type: 'number',
      unique: true,
      required: true,
    },
    {
      name: 'task_id',
      type: 'text', // Foreign key as a string
      required: true,
    },
    {
      name: 'sketcher_id',
      type: 'text', // Foreign key as a string
      required: true,
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
      name: 'detailed_estimate',
      type: 'group',
      fields: [
        { name: 'gross_weight', type: 'number' },
        { name: 'net_weight', type: 'number' },
        { name: 'diamond_range', type: 'text' },
        { name: 'color_stones_count', type: 'number' },
      ],
    },
    {
      name: 'time_spent',
      type: 'text', // Interval as a text field
    },
    {
      name: 'brand_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'designer_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'collection_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'category_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'sub_category_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'actual_design_complete_date',
      type: 'date',
    },
    {
      name: 'days_since_brief_date',
      type: 'number', // Calculated field as a number
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'user_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'customer_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'days_since_in_sketch',
      type: 'number', // Calculated field as a number
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'special_instructions',
      type: 'textarea',
    },
    {
      name: 'special_instructions_office_use',
      type: 'checkbox',
    },
    {
      name: 'concept_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'moved_to_cad',
      type: 'checkbox',
    },
    {
      name: 'approval_id',
      type: 'number', // Foreign key as an integer
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
  ],
};

export default Sketches;

