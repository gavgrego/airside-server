import type { Struct, Schema } from '@strapi/strapi';

export interface TimeHours extends Struct.ComponentSchema {
  collectionName: 'components_time_hours';
  info: {
    displayName: 'Hours';
    icon: 'clock';
  };
  attributes: {
    mondayOpen: Schema.Attribute.Time;
    mondayClose: Schema.Attribute.Time;
    tuesdayOpen: Schema.Attribute.Time;
    tuesdayClose: Schema.Attribute.Time;
    wednesdayOpen: Schema.Attribute.Time;
    wednesdayClose: Schema.Attribute.Time;
    thursdayOpen: Schema.Attribute.Time;
    thursdayClose: Schema.Attribute.Time;
    fridayOpen: Schema.Attribute.Time;
    fridayClose: Schema.Attribute.Time;
    saturdayOpen: Schema.Attribute.Time;
    saturdayClose: Schema.Attribute.Time;
    sundayOpen: Schema.Attribute.Time;
    sundayClose: Schema.Attribute.Time;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'time.hours': TimeHours;
    }
  }
}
