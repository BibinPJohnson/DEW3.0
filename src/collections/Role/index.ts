import type { CollectionConfig } from 'payload';

const Role: CollectionConfig = {
  slug: 'role',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'netsuite_id', 'sideBarNavigations'],
  },
  fields: [
    {
      name: 'name',
      label: 'Role Name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'netsuite_id',
      label: 'NetSuite ID',
      type: 'number',
      unique: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'sideBarNavigations',
      label: 'Accessible Sidebar Navigations',
      type: 'relationship',
      relationTo: 'sideBar',
      hasMany: true, // Allow multiple sidebar items to be assigned to a role
    },
  ],
};

export default Role;
