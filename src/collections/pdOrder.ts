import { CollectionConfig } from 'payload';

const ProductDesigns: CollectionConfig = {
  slug: 'product-designs',
  admin: {
    useAsTitle: 'name', // Use the `name` field as the title in the admin panel
  },
  access: {
    read: () => true,   // Public read access
    create: () => true, // Public create access
    update: () => true, // Public update access
    delete: () => true, // Public delete access
    admin: () => true,  // Admin access
  },
  fields: [
    {
      name: 'id',
      type: 'text', // Primary key as a string
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
      name: 'prodstatus',
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
      name: 'assigned_sketcher_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'assigned_designer_id',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'sketcher_notes',
      type: 'textarea',
    },
    {
      name: 'designer_notes',
      type: 'textarea',
    },
    {
      name: 'approval_notes',
      type: 'textarea',
    },
    {
      name: 'approved_by',
      type: 'number', // Foreign key as an integer
    },
    {
      name: 'netsuite_item_id',
      type: 'number',
      unique: true,
      required: true,
    },
    {
      name: 'collection_id',
      type: 'number', // Foreign key to ItemCollection
    },
    {
      name: 'collectiongroup_name',
      type: 'text',
    },
    {
      name: 'category_name',
      type: 'text',
    },
    {
      name: 'subcategory_name',
      type: 'text',
    },
    {
      name: 'brand_name',
      type: 'text',
    },
    {
      name: 'style_name',
      type: 'text',
    },
    {
      name: 'occasion',
      type: 'text',
    },
    {
      name: 'request_type',
      type: 'select',
      options: [
        { value: 'concept', label: 'Concept' },
        { value: 'product_design', label: 'Product Design' },
      ],
      required: true,
    },
    {
      name: 'metal_type',
      type: 'text',
    },
    {
      name: 'metal_color',
      type: 'text',
    },
    {
      name: 'size',
      type: 'text',
    },
    {
      name: 'expected_gross_wt',
      type: 'number', // Float
    },
    {
      name: 'expected_net_wt',
      type: 'number', // Float
    },
    {
      name: 'diamond_range',
      type: 'text',
    },
    {
      name: 'color_stone_range',
      type: 'text',
    },
    {
      name: 'priority',
      type: 'text',
    },
    {
      name: 'remarks',
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
      name: 'po_no',
      type: 'text',
    },
    {
      name: 'promise_date',
      type: 'date',
    },
    {
      name: 'planning_date',
      type: 'date',
    },
    {
      name: 'required_designs',
      type: 'textarea',
    },
    {
      name: 'product_type_id',
      type: 'number',
    },
    {
      name: 'gender_id',
      type: 'number',
    },
    {
      name: 'category_id',
      type: 'number',
    },
    {
      name: 'sub_category_id',
      type: 'number',
    },
    {
      name: 'brand_id',
      type: 'number',
    },
    {
      name: 'style_id',
      type: 'number',
    },
    {
      name: 'occasion_id',
      type: 'number',
    },
    {
      name: 'metal_type_id',
      type: 'number',
    },
    {
      name: 'metal_color_id',
      type: 'number',
    },
    {
      name: 'priority_id',
      type: 'number',
    },
    {
      name: 'is_item_received',
      type: 'checkbox',
    },
    {
      name: 'customer_id',
      type: 'number',
    },
    {
      name: 'created_by',
      type: 'number',
    },
    {
      name: 'concept_id',
      type: 'number',
    },
    {
      name: 'job_id',
      type: 'number',
    },
    {
      name: 'version',
      type: 'text',
    },
    {
      name: 'sketcher_id',
      type: 'array',
      fields: [
        {
          name: 'id',
          type: 'number',
        },
      ],
    },
    {
      name: 'opportunity_id',
      type: 'number',
    },
  ],
};

export default ProductDesigns;