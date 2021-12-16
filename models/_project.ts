/**
 * Generated by '@kentico/kontent-model-generator@4.1.0' at 'Thu, 09 Dec 2021 17:29:42 GMT'
 */
export const projectModel = {
  languages: {
    csCZ: {
      codename: 'cs-CZ',
      name: 'Czech',
    },
    enUS: {
      codename: 'en-US',
      name: 'English',
    },
  },
  contentTypes: {
    agenda: {
      codename: 'agenda',
      name: 'Agenda',
      elements: {
        date_time__to_date_time: {
          codename: 'date_time__to_date_time',
          name: 'To Date Time',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
        date_time__from_date_time: {
          codename: 'date_time__from_date_time',
          name: 'From Date Time',
        },
        sessions: {
          codename: 'sessions',
          name: 'Sessions',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
      },
    },
    break: {
      codename: 'break',
      name: 'Break',
      elements: {
        room: {
          codename: 'room',
          name: 'Room',
        },
        duration: {
          codename: 'duration',
          name: 'Duration',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
      },
    },
    chunk: {
      codename: 'chunk',
      name: 'Chunk',
      elements: {
        body: {
          codename: 'body',
          name: 'Body',
        },
        media: {
          codename: 'media',
          name: 'Media',
        },
        type: {
          codename: 'type',
          name: 'Type',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
      },
    },
    event: {
      codename: 'event',
      name: 'Event',
      elements: {
        date_time__to_date_time: {
          codename: 'date_time__to_date_time',
          name: 'To Date Time',
        },
        sponsors: {
          codename: 'sponsors',
          name: 'Sponsors',
        },
        title: {
          codename: 'title',
          name: 'Title',
        },
        venue: {
          codename: 'venue',
          name: 'Venue',
        },
        description: {
          codename: 'description',
          name: 'Description',
        },
        date_time__from_date_time: {
          codename: 'date_time__from_date_time',
          name: 'From Date Time',
        },
        hero_image: {
          codename: 'hero_image',
          name: 'Hero Image',
        },
        agendas: {
          codename: 'agendas',
          name: 'Agendas',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
      },
    },
    floor: {
      codename: 'floor',
      name: 'Floor',
      elements: {
        map: {
          codename: 'map',
          name: 'Map',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
      },
    },
    map: {
      codename: 'map',
      name: 'Map',
      elements: {
        file: {
          codename: 'file',
          name: 'File',
        },
        tooltip: {
          codename: 'tooltip',
          name: 'Tooltip',
        },
        latitude: {
          codename: 'latitude',
          name: 'Latitude',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
        type: {
          codename: 'type',
          name: 'Type',
        },
        longitude: {
          codename: 'longitude',
          name: 'Longitude',
        },
      },
    },
    media: {
      codename: 'media',
      name: 'Media',
      elements: {
        type: {
          codename: 'type',
          name: 'Type',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
        asset: {
          codename: 'asset',
          name: 'Asset',
        },
      },
    },
    newsletter: {
      codename: 'newsletter',
      name: 'Newsletter',
      elements: {
        media: {
          codename: 'media',
          name: 'Media',
        },
        subject: {
          codename: 'subject',
          name: 'Subject',
        },
        body: {
          codename: 'body',
          name: 'Body',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
      },
    },
    page: {
      codename: 'page',
      name: 'Page',
      elements: {
        subpages: {
          codename: 'subpages',
          name: 'Subpages',
        },
        url: {
          codename: 'url',
          name: 'URL Slug',
        },
        show_in_navigation: {
          codename: 'show_in_navigation',
          name: 'Show in navigation',
        },
        title: {
          codename: 'title',
          name: 'Title',
        },
        content: {
          codename: 'content',
          name: 'Content',
        },
      },
    },
    presentation: {
      codename: 'presentation',
      name: 'Presentation',
      elements: {
        media: {
          codename: 'media',
          name: 'Media',
        },
        description: {
          codename: 'description',
          name: 'Description',
        },
        topic: {
          codename: 'topic',
          name: 'Topic',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
      },
    },
    room: {
      codename: 'room',
      name: 'Room',
      elements: {
        name: {
          codename: 'name',
          name: 'Name',
        },
        floor: {
          codename: 'floor',
          name: 'Floor',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
        seating_capacity: {
          codename: 'seating_capacity',
          name: 'Seating Capacity',
        },
        map: {
          codename: 'map',
          name: 'Map',
        },
      },
    },
    session: {
      codename: 'session',
      name: 'Session',
      elements: {
        speaker: {
          codename: 'speaker',
          name: 'Speaker',
        },
        date_time__to_date_time: {
          codename: 'date_time__to_date_time',
          name: 'To Date Time',
        },
        date_time__from_date_time: {
          codename: 'date_time__from_date_time',
          name: 'From Date Time',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
        presentation: {
          codename: 'presentation',
          name: 'Presentation',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
        location: {
          codename: 'location',
          name: 'Location',
        },
      },
    },
    social_media_post: {
      codename: 'social_media_post',
      name: 'Social Media Post',
      elements: {
        type: {
          codename: 'type',
          name: 'Type',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
        topic: {
          codename: 'topic',
          name: 'Topic',
        },
        title: {
          codename: 'title',
          name: 'Title',
        },
        body: {
          codename: 'body',
          name: 'Body',
        },
        media: {
          codename: 'media',
          name: 'Media',
        },
      },
    },
    speaker: {
      codename: 'speaker',
      name: 'Speaker',
      elements: {
        bio: {
          codename: 'bio',
          name: 'Bio',
        },
        media: {
          codename: 'media',
          name: 'Media',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
        first_name: {
          codename: 'first_name',
          name: 'First Name',
        },
        job_title: {
          codename: 'job_title',
          name: 'Job Title',
        },
        last_name: {
          codename: 'last_name',
          name: 'Last Name',
        },
      },
    },
    sponsor: {
      codename: 'sponsor',
      name: 'Sponsor',
      elements: {
        media: {
          codename: 'media',
          name: 'Media',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
        body: {
          codename: 'body',
          name: 'Body',
        },
      },
    },
    venue: {
      codename: 'venue',
      name: 'Venue',
      elements: {
        rooms: {
          codename: 'rooms',
          name: 'Rooms',
        },
        name: {
          codename: 'name',
          name: 'Name',
        },
        journey_stage: {
          codename: 'journey_stage',
          name: 'Journey Stage',
        },
        address: {
          codename: 'address',
          name: 'Address',
        },
        media: {
          codename: 'media',
          name: 'Media',
        },
        description: {
          codename: 'description',
          name: 'Description',
        },
        nearby_lodging: {
          codename: 'nearby_lodging',
          name: 'Nearby Lodging',
        },
        map: {
          codename: 'map',
          name: 'Map',
        },
      },
    },
    wsl_root: {
      codename: 'wsl_root',
      name: 'WSL Root',
      elements: {
        subpages: {
          codename: 'subpages',
          name: 'Subpages',
        },
      },
    },
  },
  taxonomies: {
    journey_stage: {
      codename: 'journey_stage',
      name: 'Journey Stage',
      terms: {
        discovery: {
          codename: 'discovery',
          name: 'Discovery',
          terms: {},
        },
        planning: {
          codename: 'planning',
          name: 'Planning',
          terms: {},
        },
        participation: {
          codename: 'participation',
          name: 'Participation',
          terms: {},
        },
        post_conference: {
          codename: 'post_conference',
          name: 'Post Conference',
          terms: {},
        },
        follow_up: {
          codename: 'follow_up',
          name: 'Follow Up',
          terms: {},
        },
      },
    },
    topic: {
      codename: 'topic',
      name: 'Topic',
      terms: {
        mvc: {
          codename: 'mvc',
          name: 'MVC',
          terms: {},
        },
        headless: {
          codename: 'headless',
          name: 'Headless',
          terms: {},
        },
        _net: {
          codename: '_net',
          name: '.NET',
          terms: {},
        },
        artificial_intelligence: {
          codename: 'artificial_intelligence',
          name: 'Artificial Intelligence',
          terms: {},
        },
        break: {
          codename: 'break',
          name: 'Break',
          terms: {},
        },
        administration: {
          codename: 'administration',
          name: 'Administration',
          terms: {},
        },
        javascript: {
          codename: 'javascript',
          name: 'JavaScript',
          terms: {},
        },
      },
    },
  },
};