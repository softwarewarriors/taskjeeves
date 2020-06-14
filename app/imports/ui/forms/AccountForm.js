import SimpleSchema from 'simpl-schema';

const AccountFormSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  email: { label: 'Email', type: String },
  bio: { label: 'Bio', type: String, optional: true, defaultValue: '' },
  hobbies: { label: 'Bio', type: String, optional: true, defaultValue: '' },
});

export {AccountFormSchema};

