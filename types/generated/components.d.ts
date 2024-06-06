import type { Schema, Attribute } from '@strapi/strapi';

export interface TimeHours extends Schema.Component {
  collectionName: 'components_time_hours';
  info: {
    displayName: 'Hours';
    icon: 'clock';
  };
  attributes: {
    mondayOpen: Attribute.Time;
    mondayClose: Attribute.Time;
    tuesdayOpen: Attribute.Time;
    tuesdayClose: Attribute.Time;
    wednesdayOpen: Attribute.Time;
    wednesdayClose: Attribute.Time;
    thursdayOpen: Attribute.Time;
    thursdayClose: Attribute.Time;
    fridayOpen: Attribute.Time;
    fridayClose: Attribute.Time;
    saturdayOpen: Attribute.Time;
    saturdayClose: Attribute.Time;
    sundayOpen: Attribute.Time;
    sundayClose: Attribute.Time;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'time.hours': TimeHours;
    }
  }
}
