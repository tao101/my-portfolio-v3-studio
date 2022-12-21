import React from 'react';

import { FcContacts } from 'react-icons/fc';

export default {
  title: 'Contact Request',
  name: 'contactRequest',
  type: 'document',
  icon: FcContacts,
  fields: [
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'NEW', value: 'NEW' },
          { title: 'VIEWED', value: 'VIEWED' },
        ], // <-- predefined values
      },
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Subject',
      name: 'subject',
      type: 'string',
    },
    {
      title: 'Message',
      name: 'message',
      type: 'text',
    },
  ],
  preview: {
    select: {
      status: 'status',
      name: 'name',
      email: 'email',
      subject: 'subject',
    },
    prepare(selection) {
      const { status, name, email, subject } = selection;
      return {
        title: `${name} - ${email} `,
        subtitle: subject, // YYYY-MM-DD --> YYYY
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {status == 'NEW' ? '🆕' : '✅'}
          </span>
        ),
      };
    },
  },
};
