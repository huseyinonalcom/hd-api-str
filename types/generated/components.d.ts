import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    content: Attribute.JSON;
    url: Attribute.Text;
    order: Attribute.Integer;
  };
}

export interface MediaGroupImageWithLink extends Schema.Component {
  collectionName: 'components_media_group_image_with_links';
  info: {
    displayName: 'image_with_link';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    linked_url: Attribute.Text;
    order: Attribute.Integer;
    name: Attribute.String;
    description: Attribute.Text;
    locale: Attribute.String;
  };
}

export interface MediaGroupMediaGroup extends Schema.Component {
  collectionName: 'components_media_group_media_groups';
  info: {
    displayName: 'media_group';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image_with_link: Attribute.Component<'media-group.image-with-link', true>;
    name: Attribute.String & Attribute.Unique;
    order: Attribute.Integer;
    description: Attribute.Text;
    fetch_from: Attribute.JSON;
    is_fetched_from_api: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ReservationsReservations extends Schema.Component {
  collectionName: 'components_reservations_reservations';
  info: {
    displayName: 'reservations';
    icon: 'file';
  };
  attributes: {
    client_name: Attribute.String;
    amount: Attribute.Integer & Attribute.DefaultTo<1>;
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
