import { CollectionConfig } from 'payload';

const Concept: CollectionConfig = {
  slug: 'concepts',
  admin: {
    useAsTitle: 'name' // Use the `name` field as the title in the admin panel
  },
  fields: [
    {
      name: 'id',
      type: 'text', // Primary key as a string
      unique: true,
      required: true,
    },
    {
      name: 'netsuite_id',
      type: 'number', // Unique integer ID
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
      type: 'textarea',
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
    {
      name: 'status',
      type: 'select',
      options: [
        { value: 'initiated', label: 'Initiated' },
        { value: 'in_progress', label: 'In Progress' },
        { value: 'completed', label: 'Completed' },
        { value: 'approved', label: 'Approved' },
      ],
      required: true,
      defaultValue: 'initiated',
    },
    {
      name: 'created_by',
      type: 'text', // Foreign key to Employee
      required: true,
    },
    {
      name: 'approved_by',
      type: 'text', // Foreign key to Employee (nullable)
    },
    {
      name: 'approval_notes',
      type: 'textarea',
    },
    {
      name: 'sketches_count',
      type: 'number', // Integer count of sketches
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'cad_count',
      type: 'number', // Integer count of CAD files
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'renderings_count',
      type: 'number', // Integer count of renderings
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'image_urls',
      type: 'array', // Array of image URLs
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
      type: 'text', // Time interval representation
    },
    {
        name: 'brand_id',
        type: 'number', // Foreign key to Brand
        required: true,
      },
      {
        name: 'sketch_id',
        type: 'number', // Foreign key to Sketch
        required: true,
      },
      {
        name: 'cad_id',
        type: 'number', // Foreign key to CAD
        required: true,
      },
      {
        name: 'design_id',
        type: 'number', // Foreign key to Design
        required: true,
      },
      {
        name: 'order_status_id',
        type: 'number', // Foreign key to Order Status
        required: true,
      },
    ],
  };

export default Concept;
