import type { Attribute, Schema } from '@strapi/strapi';

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    description: '';
    displayName: 'banner';
  };
  attributes: {
    content: Attribute.JSON;
    order: Attribute.Integer;
    url: Attribute.Text;
  };
}

export interface MediaGroupImageWithLink extends Schema.Component {
  collectionName: 'components_media_group_image_with_links';
  info: {
    description: '';
    displayName: 'image_with_link';
    icon: 'landscape';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    linked_url: Attribute.Text;
    locale: Attribute.String;
    name: Attribute.String;
    order: Attribute.Integer;
  };
}

export interface MediaGroupMediaGroup extends Schema.Component {
  collectionName: 'components_media_group_media_groups';
  info: {
    description: '';
    displayName: 'media_group';
    icon: 'landscape';
  };
  attributes: {
    description: Attribute.Text;
    fetch_from: Attribute.JSON;
    image_with_link: Attribute.Component<'media-group.image-with-link', true>;
    is_fetched_from_api: Attribute.Boolean & Attribute.DefaultTo<false>;
    name: Attribute.String & Attribute.Unique;
    order: Attribute.Integer;
  };
}

export interface ReservationsReservations extends Schema.Component {
  collectionName: 'components_reservations_reservations';
  info: {
    displayName: 'reservations';
    icon: 'file';
  };
  attributes: {
    amount: Attribute.Integer & Attribute.DefaultTo<1>;
    client_name: Attribute.String;
    is_deleted: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.banner': BannerBanner;
      'media-group.image-with-link': MediaGroupImageWithLink;
      'media-group.media-group': MediaGroupMediaGroup;
      'reservations.reservations': ReservationsReservations;
    }
  }
}
