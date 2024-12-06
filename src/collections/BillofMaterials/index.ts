import { CollectionConfig } from 'payload';

export const BillofMaterials: CollectionConfig = {
  slug: 'bill-of-materials',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'usecomponentyield',
      type: 'checkbox',
      admin: {
        description: 'Indicates whether to use component yield.',
      },
    },
    {
      name: 'available_for_all_assemblies',
      type: 'checkbox',
      admin: {
        description: 'If true, this BOM is available for all assemblies.',
      },
    },
    {
      name: 'restrict_to_assemblies_id',
      type: 'array',
      fields: [
        {
          name: 'assembly_id',
          type: 'number',
        },
      ],
      admin: {
        description: 'Restrict the BOM to specific assemblies.',
      },
    },
    {
      name: 'available_for_all_locations',
      type: 'checkbox',
      admin: {
        description: 'If true, this BOM is available for all locations.',
      },
    },
    {
      name: 'restrict_to_locations_id',
      type: 'array',
      fields: [
        {
          name: 'location_id',
          type: 'number',
        },
      ],
      admin: {
        description: 'Restrict the BOM to specific locations.',
      },
    },
    {
      name: 'subsidiary_id',
      type: 'number',
      admin: {
        description: 'Foreign key reference to the subsidiary.',
      },
    },
    {
      name: 'include_child_subsidiaries',
      type: 'checkbox',
      admin: {
        description: 'Include child subsidiaries of the specified subsidiary.',
      },
    },
    {
      name: 'revision_id',
      type: 'number',
      admin: {
        description: 'Foreign key reference to the revision.',
      },
    },
    {
      name: 'revision_name',
      type: 'text',
    },
    {
      name: 'revision_effective_start_date',
      type: 'date',
    },
    {
      name: 'revision_effective_end_date',
      type: 'date',
    },
    {
      name: 'date_modified',
      type: 'date',
      admin: {
        description: 'The date when this BOM was last modified.',
      },
    },
    {
      name: 'bom_quantity',
      type: 'number',
      admin: {
        description: 'The quantity specified for this BOM.',
      },
    },
  ],
};