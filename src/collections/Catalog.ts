import { CollectionConfig } from 'payload';

const Catalogs: CollectionConfig = {
  slug: 'catalogs',
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
      name: 'name',
      type: 'text', // Name of the catalog
      required: true,
    },
    {
      name: 'customer_id',
      type: 'number', // Foreign key to Customer
      required: true,
    },
    {
      name: 'url',
      type: 'text', // URL of the catalog
      unique: true,
      required: true,
    },
    {
      name: 'pin',
      type: 'text', // Catalog pin
    },
    {
      name: 'collection_id',
      type: 'number', // Foreign key to Collection
      required: true,
    },
    {
      name: 'netsuite_id',
      type: 'number', // Unique identifier in NetSuite
      unique: true,
      required: true,
    },
    {
      name: 'created_date',
      type: 'date', // Creation timestamp
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'updated_date',
      type: 'date', // Update timestamp
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default Catalogs;