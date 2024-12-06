import { CollectionConfig } from 'payload';

const Roles: CollectionConfig = {
  slug: 'roles',
  labels: {
    singular: 'Role',
    plural: 'Roles',
  },
  admin: {
    useAsTitle: 'Role_name', // This field will be displayed as the title in the admin panel.
    defaultColumns: ['id', 'Role_name', 'NetSuite_id'], // Default columns to show in the admin panel.
    description: 'Collection to manage roles within the system.',
  },
  fields: [
    {
      name: 'id',
      type: 'number',
      required: true,
      unique: true,
      label: 'Role ID',
      admin: {
        placeholder: 'Enter Role ID',
      },
    },
    {
      name: 'NetSuite_id',
      type: 'text',
      required: true,
      unique: true,
      label: 'NetSuite ID',
      admin: {
        placeholder: 'Enter NetSuite ID',
      },
    },
    {
      name: 'Role_name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Role Name',
      admin: {
        placeholder: 'Enter Role Name',
      },
    },
    {
        name: 'role_permissions',
        type: 'text',
        required: true,
        unique: true,
        label: 'Role Name',
        admin: {
          placeholder: 'Enter Role Name',
        },
      },
      {
        name: 'permissions',
        type: 'array',
        fields: [
          {
            name: 'permission',
            type: 'text',
          },
        ],
      },
  ],
  timestamps: true, // Adds createdAt and updatedAt fields.
};

export default Roles;