import { CollectionConfig } from 'payload';

const Task: CollectionConfig = {
  slug: 'tasks',
  admin: {
    useAsTitle: 'title', // Use the `title` field as the display title in the admin panel
  },
  fields: [
    {
      name: 'id',
      type: 'number', // Primary key
      unique: true,
      required: true,
    },
    {
      name: 'title',
      type: 'text', // Task title
      required: true,
    },
    {
      name: 'assigned_to_id',
      type: 'number', // Foreign key to Employee
      required: true,
    },
    {
      name: 'priority_id',
      type: 'number', // Foreign key to Priority
      required: true,
    },
    {
      name: 'status_id',
      type: 'number', // Foreign key to Status
      required: true,
    },
    {
      name: 'send_email',
      type: 'checkbox', // Boolean to indicate if an email should be sent
      defaultValue: false,
    },
    {
      name: 'start_date',
      type: 'date', // Start date of the task
    },
    {
      name: 'due_date',
      type: 'date', // Due date of the task
    },
    {
      name: 'completed_date',
      type: 'date', // Completion date of the task
    },
    {
      name: 'start_time',
      type: 'text', // Start time in string or time format
    },
    {
      name: 'end_time',
      type: 'text', // End time in string or time format
    },
    {
      name: 'description',
      type: 'textarea', // Description of the task
    },
    {
      name: 'is_sketch',
      type: 'checkbox', // Boolean to indicate if it's a sketch task
      defaultValue: false,
    },
    {
      name: 'is_cad',
      type: 'checkbox', // Boolean to indicate if it's a CAD task
      defaultValue: false,
    },
    {
      name: 'customer_id',
      type: 'number', // Foreign key to Customer
      required: true,
    },
    {
      name: 'concept_id',
      type: 'number', // Foreign key to Concept
      required: true,
    },
    {
      name: 'pd_order_id',
      type: 'number', // Foreign key to PD Order
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

export default Task;