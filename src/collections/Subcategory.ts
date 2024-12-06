import { CollectionConfig } from 'payload';

const Subcategory: CollectionConfig = {
  slug: 'subcategory',
  admin: {
    useAsTitle: 'name', // Use the `name` field as the display title in the admin panel
  },
  fields: [
    {
      name: 'id',
      type: 'number', // Primary key
      unique: true,
      required: true,
    },
    {
      name: 'netsuite_id',
      type: 'number', // Primary key for NetSuite integration
      unique: true,
      required: true,
    },
    {
      name: 'name',
      type: 'text', // Name of the subcategory
      required: true,
    },
    {
      name: 'category_id',
      type: 'text', // Foreign key reference to Category
      required: true,
    },
    {
      name: 'subcategory_code',
      type: 'text', // Code for the subcategory
      unique: true,
      required: true,
    },
  ],
};

export default Subcategory;