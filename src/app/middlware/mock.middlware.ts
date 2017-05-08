export class MockDB {
  users: [
    { email: 'gal@xxx.com', name: 'Gal', password: 'gal' },
    { email: 'gal2@xxx.com', name: 'Gal-2', password: 'gal2' },
    { email: 'qwe@qwe.qwe', name: 'Gal Tamir', password: 'qwe' }
    ];

  meetups: [
    {
      meetupId: 1001,
      title: 'Title for 1001',
      subtitle: 'sub-title for 1001',
      startDate: 'Mon May 08 2017 16:00:00 GMT+0300 (IDT)',
      endDate: 'Mon May 08 2017 18:00:00 GMT+0300 (IDT)',
      description: 'Description for 1001',
      participants: [
        { participantId: 101,
          name: 'Gal - 101'
        },
        { participantId: 102,
          name: 'Yoni - 102'
        },
        { participantId: 103,
          name: 'Ben Or - 103'
        },
        { participantId: 104,
          name: 'Nir - 104'
        },
        { participantId: 105,
          name: 'User - 105'
        },
        { participantId: 106,
          name: 'User - 106'
        },
        { participantId: 107,
          name: 'User - 107'
        },
        { participantId: 108,
          name: 'User - 108'
        },
        { participantId: 101,
          name: 'User - 101'
        }
        ]
    },
    {
      meetupId: 1002,
      title: 'Title for 1002',
      subtitle: 'sub-title for 1002',
      startDate: 'Tue May 09 2017 16:00:00 GMT+0300 (IDT)',
      endDate: 'Tue May 09 2017 18:00:00 GMT+0300 (IDT)',
      description: 'Description for 1002',
      participants: [
        { participantId: 201,
          name: 'Gal - 201'
        },
        { participantId: 202,
          name: 'Yoni - 202'
        },
        { participantId: 203,
          name: 'Ben Or - 203'
        },
        { participantId: 204,
          name: 'Nir - 204'
        }
        ]
    },
    {
      meetupId: 1003,
      title: 'Title for 1003',
      subtitle: 'sub-title for 1003',
      startDate: 'Wed May 10 2017 16:00:00 GMT+0300 (IDT)',
      endDate: 'Wed May 10 2017 18:00:00 GMT+0300 (IDT)',
      description: 'Description for 1003',
    }
    ];
}
