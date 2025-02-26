import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
  collectionName: 'about_uses';
  info: {
    displayName: 'AboutUs';
    pluralName: 'about-uses';
    singularName: 'about-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localized_content: Attribute.Blocks;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    video_url: Attribute.Text;
  };
}

export interface ApiAddressAddress extends Schema.CollectionType {
  collectionName: 'addresses';
  info: {
    description: '';
    displayName: 'Address';
    pluralName: 'addresses';
    singularName: 'address';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    city: Attribute.String & Attribute.Required;
    client: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::client.client'
    >;
    country: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    deliveries: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::delivery.delivery'
    >;
    documents: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::document.document'
    >;
    documentsDel: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::document.document'
    >;
    doorNumber: Attribute.String & Attribute.Required;
    establishment: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'api::establishment.establishment'
    >;
    floor: Attribute.String & Attribute.DefaultTo<'0'>;
    name: Attribute.String & Attribute.Required;
    province: Attribute.String;
    publishedAt: Attribute.DateTime;
    shippingDistance: Attribute.Decimal;
    street: Attribute.String & Attribute.Required;
    supplier: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::supplier.supplier'
    >;
    tasks: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::task.task'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::user-info.user-info'
    >;
    user_info: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'api::user-info.user-info'
    >;
    zipCode: Attribute.String & Attribute.Required;
  };
}

export interface ApiBannerBanner extends Schema.CollectionType {
  collectionName: 'banners';
  info: {
    displayName: 'banner';
    pluralName: 'banners';
    singularName: 'banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    images: Attribute.Component<'media-group.image-with-link', true>;
    localized_description: Attribute.JSON;
    localized_title: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    description: '';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    headCategory: Attribute.Relation<
      'api::category.category',
      'manyToOne',
      'api::category.category'
    >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    localized_name: Attribute.JSON;
    Name: Attribute.String & Attribute.Required;
    priority: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    products: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::product.product'
    >;
    products_multi_categories: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::product.product'
    >;
    promos: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::promo.promo'
    >;
    publishedAt: Attribute.DateTime;
    subCategories: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClientClient extends Schema.CollectionType {
  collectionName: 'clients';
  info: {
    description: '';
    displayName: 'Client';
    pluralName: 'clients';
    singularName: 'client';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    addresses: Attribute.Relation<
      'api::client.client',
      'oneToMany',
      'api::address.address'
    >;
    category: Attribute.String & Attribute.Required;
    company: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    createrFsID: Attribute.String;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    documents: Attribute.Relation<
      'api::client.client',
      'oneToMany',
      'api::document.document'
    >;
    establishment: Attribute.Relation<
      'api::client.client',
      'manyToOne',
      'api::establishment.establishment'
    >;
    firstName: Attribute.String & Attribute.Required;
    fsID: Attribute.String;
    lastName: Attribute.String & Attribute.Required;
    login: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    phone: Attribute.String;
    promos: Attribute.Relation<
      'api::client.client',
      'manyToMany',
      'api::promo.promo'
    >;
    publishedAt: Attribute.DateTime;
    taxID: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::client.client',
      'manyToOne',
      'api::user-info.user-info'
    >;
  };
}

export interface ApiConfigConfig extends Schema.SingleType {
  collectionName: 'configs';
  info: {
    displayName: 'config';
    pluralName: 'configs';
    singularName: 'config';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::config.config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    data: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::config.config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDeliveryDelivery extends Schema.CollectionType {
  collectionName: 'deliveries';
  info: {
    description: '';
    displayName: 'Delivery';
    pluralName: 'deliveries';
    singularName: 'delivery';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    completed: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::delivery.delivery',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Date & Attribute.Required;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    deliveryAddress: Attribute.Relation<
      'api::delivery.delivery',
      'manyToOne',
      'api::address.address'
    >;
    deliveryTaker: Attribute.String;
    deliveryTakerPhone: Attribute.String;
    document_products: Attribute.Relation<
      'api::delivery.delivery',
      'oneToMany',
      'api::document-product.document-product'
    >;
    establishment: Attribute.Relation<
      'api::delivery.delivery',
      'manyToOne',
      'api::establishment.establishment'
    >;
    files: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    incoming: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    issuingUser: Attribute.Relation<
      'api::delivery.delivery',
      'manyToOne',
      'api::user-info.user-info'
    >;
    lift: Attribute.Boolean & Attribute.DefaultTo<false>;
    liftPhone: Attribute.String;
    note: Attribute.String;
    publishedAt: Attribute.DateTime;
    receivingUser: Attribute.Relation<
      'api::delivery.delivery',
      'manyToOne',
      'api::user-info.user-info'
    >;
    supplier_order_products: Attribute.Relation<
      'api::delivery.delivery',
      'oneToMany',
      'api::supplier-order-product.supplier-order-product'
    >;
    timeEnd: Attribute.Time;
    timeStart: Attribute.Time & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::delivery.delivery',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentProductDocumentProduct
  extends Schema.CollectionType {
  collectionName: 'document_products';
  info: {
    description: '';
    displayName: 'DocumentProduct';
    pluralName: 'document-products';
    singularName: 'document-product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amount: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::document-product.document-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    delivered: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    delivery: Attribute.Relation<
      'api::document-product.document-product',
      'manyToOne',
      'api::delivery.delivery'
    >;
    description: Attribute.Text;
    discount: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    document: Attribute.Relation<
      'api::document-product.document-product',
      'manyToOne',
      'api::document.document'
    >;
    name: Attribute.String & Attribute.Required;
    product: Attribute.Relation<
      'api::document-product.document-product',
      'manyToOne',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    subTotal: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    tax: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    taxSubTotal: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::document-product.document-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    value: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
  };
}

export interface ApiDocumentDocument extends Schema.CollectionType {
  collectionName: 'documents';
  info: {
    description: '';
    displayName: 'Document';
    pluralName: 'documents';
    singularName: 'document';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    client: Attribute.Relation<
      'api::document.document',
      'manyToOne',
      'api::client.client'
    >;
    comment: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Date & Attribute.Required;
    decisionMaker: Attribute.String;
    delAddress: Attribute.Relation<
      'api::document.document',
      'manyToOne',
      'api::address.address'
    >;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    docAddress: Attribute.Relation<
      'api::document.document',
      'manyToOne',
      'api::address.address'
    >;
    document_products: Attribute.Relation<
      'api::document.document',
      'oneToMany',
      'api::document-product.document-product'
    >;
    establishment: Attribute.Relation<
      'api::document.document',
      'manyToOne',
      'api::establishment.establishment'
    >;
    files: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    fromDocID: Attribute.BigInteger;
    fsID: Attribute.String;
    invoiced: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    managerNote: Attribute.Text;
    note: Attribute.String;
    number: Attribute.BigInteger & Attribute.Required;
    payments: Attribute.Relation<
      'api::document.document',
      'oneToMany',
      'api::payment.payment'
    >;
    phase: Attribute.Integer & Attribute.Required;
    prefix: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    reference: Attribute.String;
    support_tickets: Attribute.Relation<
      'api::document.document',
      'oneToMany',
      'api::support-ticket.support-ticket'
    >;
    tasks: Attribute.Relation<
      'api::document.document',
      'oneToMany',
      'api::task.task'
    >;
    toDocID: Attribute.BigInteger;
    type: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::document.document',
      'manyToOne',
      'api::user-info.user-info'
    >;
  };
}

export interface ApiEstablishmentEstablishment extends Schema.CollectionType {
  collectionName: 'establishments';
  info: {
    description: '';
    displayName: 'Establishment';
    pluralName: 'establishments';
    singularName: 'establishment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.Relation<
      'api::establishment.establishment',
      'oneToOne',
      'api::address.address'
    >;
    bankAccount1: Attribute.String & Attribute.Required;
    bankAccount2: Attribute.String;
    bankAccount3: Attribute.String;
    category: Attribute.String & Attribute.Required;
    clients: Attribute.Relation<
      'api::establishment.establishment',
      'oneToMany',
      'api::client.client'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::establishment.establishment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    deliveries: Attribute.Relation<
      'api::establishment.establishment',
      'oneToMany',
      'api::delivery.delivery'
    >;
    documents: Attribute.Relation<
      'api::establishment.establishment',
      'oneToMany',
      'api::document.document'
    >;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    phone2: Attribute.String;
    publishedAt: Attribute.DateTime;
    shelves: Attribute.Relation<
      'api::establishment.establishment',
      'oneToMany',
      'api::shelf.shelf'
    >;
    supplier_orders: Attribute.Relation<
      'api::establishment.establishment',
      'oneToMany',
      'api::supplier-order.supplier-order'
    >;
    taxID: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::establishment.establishment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'api::establishment.establishment',
      'oneToMany',
      'api::user-info.user-info'
    >;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    displayName: 'homePage';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    layout: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiParkingParking extends Schema.SingleType {
  collectionName: 'parkings';
  info: {
    displayName: 'Parking';
    pluralName: 'parkings';
    singularName: 'parking';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::parking.parking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localized_content: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::parking.parking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerPartner extends Schema.CollectionType {
  collectionName: 'partners';
  info: {
    displayName: 'Partner';
    pluralName: 'partners';
    singularName: 'partner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    order: Attribute.Integer;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentPayment extends Schema.CollectionType {
  collectionName: 'payments';
  info: {
    description: '';
    displayName: 'Payment';
    pluralName: 'payments';
    singularName: 'payment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment.payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Date & Attribute.Required;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    document: Attribute.Relation<
      'api::payment.payment',
      'manyToOne',
      'api::document.document'
    >;
    method: Attribute.String & Attribute.Required;
    note: Attribute.String;
    origin: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::payment.payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::payment.payment',
      'manyToOne',
      'api::user-info.user-info'
    >;
    value: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    verified: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ApiProductCollectionProductCollection
  extends Schema.CollectionType {
  collectionName: 'product_collections';
  info: {
    description: '';
    displayName: 'ProductCollection';
    pluralName: 'product-collections';
    singularName: 'product-collection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgColor: Attribute.String;
    category: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-collection.product-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    localized_description: Attribute.JSON;
    localized_name: Attribute.JSON;
    name: Attribute.String & Attribute.Required;
    products: Attribute.Relation<
      'api::product-collection.product-collection',
      'manyToMany',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    right: Attribute.Boolean & Attribute.DefaultTo<false>;
    tags: Attribute.Text;
    textColor: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::product-collection.product-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductColorProductColor extends Schema.CollectionType {
  collectionName: 'product_colors';
  info: {
    description: '';
    displayName: 'ProductColor';
    pluralName: 'product-colors';
    singularName: 'product-color';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Attribute.String &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-color.product-color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    products: Attribute.Relation<
      'api::product-color.product-color',
      'oneToMany',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::product-color.product-color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductExtraProductExtra extends Schema.CollectionType {
  collectionName: 'product_extras';
  info: {
    description: '';
    displayName: 'ProductExtra';
    pluralName: 'product-extras';
    singularName: 'product-extra';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    armrest_height: Attribute.Decimal & Attribute.DefaultTo<0>;
    barcode: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-extra.product-extra',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    diameter: Attribute.Decimal & Attribute.DefaultTo<0>;
    new: Attribute.Boolean & Attribute.DefaultTo<false>;
    packaged_dimensions: Attribute.String;
    packaged_weight: Attribute.Decimal & Attribute.DefaultTo<0>;
    packaged_weight_net: Attribute.Decimal & Attribute.DefaultTo<0>;
    per_box: Attribute.Integer & Attribute.DefaultTo<1>;
    product: Attribute.Relation<
      'api::product-extra.product-extra',
      'oneToOne',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    seat_height: Attribute.Decimal & Attribute.DefaultTo<0>;
    tags: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::product-extra.product-extra',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    weight: Attribute.Decimal & Attribute.DefaultTo<0>;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    description: '';
    displayName: 'Product';
    pluralName: 'products';
    singularName: 'product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Attribute.Boolean & Attribute.DefaultTo<true>;
    categories: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::category.category'
    >;
    category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::category.category'
    >;
    color: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    deleted: Attribute.Boolean & Attribute.DefaultTo<false>;
    depth: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    description: Attribute.Text;
    discountRange: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    document_products: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::document-product.document-product'
    >;
    height: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    imageDirections: Attribute.JSON;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    internalCode: Attribute.String & Attribute.Required;
    localized_description: Attribute.JSON;
    material: Attribute.String;
    minOrderAmount: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    minStock: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    name: Attribute.String & Attribute.Required;
    priceBeforeDiscount: Attribute.Decimal & Attribute.DefaultTo<0>;
    product_collections: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::product-collection.product-collection'
    >;
    product_color: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::product-color.product-color'
    >;
    product_extra: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::product-extra.product-extra'
    >;
    productLine: Attribute.String;
    promos: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::promo.promo'
    >;
    publishedAt: Attribute.DateTime;
    reservations: Attribute.Component<'reservations.reservations', true>;
    shelves: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::shelf.shelf'
    >;
    supplier: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::supplier.supplier'
    >;
    supplier_order_products: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::supplier-order-product.supplier-order-product'
    >;
    supplierCode: Attribute.String & Attribute.Required & Attribute.Unique;
    tax: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    value: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    width: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    description: '';
    displayName: 'Project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    localized_description: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPromoPromo extends Schema.CollectionType {
  collectionName: 'promos';
  info: {
    description: '';
    displayName: 'Promo';
    pluralName: 'promos';
    singularName: 'promo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categories: Attribute.Relation<
      'api::promo.promo',
      'manyToMany',
      'api::category.category'
    >;
    clients: Attribute.Relation<
      'api::promo.promo',
      'manyToMany',
      'api::client.client'
    >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::promo.promo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    discount: Attribute.Decimal & Attribute.Required;
    discountIsPercentage: Attribute.Boolean & Attribute.Required;
    endDate: Attribute.Date & Attribute.Required;
    image: Attribute.Media<'images' | 'files'>;
    maxUsesPerClient: Attribute.Integer;
    maxUsesTotal: Attribute.Integer;
    perAmount: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    products: Attribute.Relation<
      'api::promo.promo',
      'manyToMany',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    startDate: Attribute.Date & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::promo.promo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReferenceReference extends Schema.CollectionType {
  collectionName: 'references';
  info: {
    displayName: 'Reference';
    pluralName: 'references';
    singularName: 'reference';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reference.reference',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localized_content: Attribute.JSON;
    order: Attribute.Integer;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::reference.reference',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShelfShelf extends Schema.CollectionType {
  collectionName: 'shelves';
  info: {
    description: '';
    displayName: 'Shelf';
    pluralName: 'shelves';
    singularName: 'shelf';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shelf.shelf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    establishment: Attribute.Relation<
      'api::shelf.shelf',
      'manyToOne',
      'api::establishment.establishment'
    >;
    level: Attribute.String & Attribute.Required & Attribute.DefaultTo<'0'>;
    product: Attribute.Relation<
      'api::shelf.shelf',
      'manyToOne',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    region: Attribute.String & Attribute.Required & Attribute.DefaultTo<'A'>;
    stack: Attribute.String & Attribute.Required & Attribute.DefaultTo<'0'>;
    stock: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    supplier_order_products: Attribute.Relation<
      'api::shelf.shelf',
      'oneToMany',
      'api::supplier-order-product.supplier-order-product'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::shelf.shelf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteBannerSiteBanner extends Schema.SingleType {
  collectionName: 'site_banners';
  info: {
    displayName: 'SiteBanner';
    pluralName: 'site-banners';
    singularName: 'site-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banners: Attribute.Component<'banner.banner', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-banner.site-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::site-banner.site-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSitePopupSitePopup extends Schema.SingleType {
  collectionName: 'site_popups';
  info: {
    description: '';
    displayName: 'SitePopup';
    pluralName: 'site-popups';
    singularName: 'site-popup';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-popup.site-popup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    img: Attribute.Text;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::site-popup.site-popup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.Text;
  };
}

export interface ApiStoreLocationStoreLocation extends Schema.SingleType {
  collectionName: 'store_locations';
  info: {
    displayName: 'StoreLocation';
    pluralName: 'store-locations';
    singularName: 'store-location';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::store-location.store-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localized_content: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::store-location.store-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSupplierOrderProductSupplierOrderProduct
  extends Schema.CollectionType {
  collectionName: 'supplier_order_products';
  info: {
    description: '';
    displayName: 'SupplierOrderProduct';
    pluralName: 'supplier-order-products';
    singularName: 'supplier-order-product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amountDelivered: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    amountOrdered: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::supplier-order-product.supplier-order-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    delivery: Attribute.Relation<
      'api::supplier-order-product.supplier-order-product',
      'manyToOne',
      'api::delivery.delivery'
    >;
    product: Attribute.Relation<
      'api::supplier-order-product.supplier-order-product',
      'manyToOne',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    shelf: Attribute.Relation<
      'api::supplier-order-product.supplier-order-product',
      'manyToOne',
      'api::shelf.shelf'
    >;
    subTotal: Attribute.Decimal & Attribute.Required;
    supplier_order: Attribute.Relation<
      'api::supplier-order-product.supplier-order-product',
      'manyToOne',
      'api::supplier-order.supplier-order'
    >;
    tax: Attribute.Integer & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::supplier-order-product.supplier-order-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    value: Attribute.Decimal & Attribute.Required;
  };
}

export interface ApiSupplierOrderSupplierOrder extends Schema.CollectionType {
  collectionName: 'supplier_orders';
  info: {
    description: '';
    displayName: 'SupplierOrder';
    pluralName: 'supplier-orders';
    singularName: 'supplier-order';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    completed: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::supplier-order.supplier-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Date & Attribute.Required;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    discount: Attribute.Decimal & Attribute.DefaultTo<0>;
    establishment: Attribute.Relation<
      'api::supplier-order.supplier-order',
      'manyToOne',
      'api::establishment.establishment'
    >;
    publishedAt: Attribute.DateTime;
    reference: Attribute.String;
    supplier: Attribute.Relation<
      'api::supplier-order.supplier-order',
      'manyToOne',
      'api::supplier.supplier'
    >;
    supplier_order_products: Attribute.Relation<
      'api::supplier-order.supplier-order',
      'oneToMany',
      'api::supplier-order-product.supplier-order-product'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::supplier-order.supplier-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::supplier-order.supplier-order',
      'manyToOne',
      'api::user-info.user-info'
    >;
  };
}

export interface ApiSupplierSupplier extends Schema.CollectionType {
  collectionName: 'suppliers';
  info: {
    description: '';
    displayName: 'Supplier';
    pluralName: 'suppliers';
    singularName: 'supplier';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    addresses: Attribute.Relation<
      'api::supplier.supplier',
      'oneToMany',
      'api::address.address'
    >;
    contactMail: Attribute.Email;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::supplier.supplier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    name: Attribute.String & Attribute.Required;
    orderMail: Attribute.Email;
    orderTime: Attribute.Integer;
    phone: Attribute.String;
    products: Attribute.Relation<
      'api::supplier.supplier',
      'oneToMany',
      'api::product.product'
    >;
    publishedAt: Attribute.DateTime;
    supplier_orders: Attribute.Relation<
      'api::supplier.supplier',
      'oneToMany',
      'api::supplier-order.supplier-order'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::supplier.supplier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSupportTicketMessageSupportTicketMessage
  extends Schema.CollectionType {
  collectionName: 'support_ticket_messages';
  info: {
    description: '';
    displayName: 'SupportTicketMessage';
    pluralName: 'support-ticket-messages';
    singularName: 'support-ticket-message';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::support-ticket-message.support-ticket-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dateTime: Attribute.DateTime & Attribute.Required;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    message: Attribute.Text & Attribute.Required;
    publishedAt: Attribute.DateTime;
    support_ticket: Attribute.Relation<
      'api::support-ticket-message.support-ticket-message',
      'manyToOne',
      'api::support-ticket.support-ticket'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::support-ticket-message.support-ticket-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::support-ticket-message.support-ticket-message',
      'manyToOne',
      'api::user-info.user-info'
    >;
  };
}

export interface ApiSupportTicketSupportTicket extends Schema.CollectionType {
  collectionName: 'support_tickets';
  info: {
    description: '';
    displayName: 'SupportTicket';
    pluralName: 'support-tickets';
    singularName: 'support-ticket';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::support-ticket.support-ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    description: Attribute.Text & Attribute.Required;
    document: Attribute.Relation<
      'api::support-ticket.support-ticket',
      'manyToOne',
      'api::document.document'
    >;
    files: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    note: Attribute.String;
    openDate: Attribute.Date & Attribute.Required;
    publishedAt: Attribute.DateTime;
    reference: Attribute.Text;
    solution: Attribute.Text;
    solved: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    solvedDate: Attribute.Date;
    support_ticket_messages: Attribute.Relation<
      'api::support-ticket.support-ticket',
      'oneToMany',
      'api::support-ticket-message.support-ticket-message'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::support-ticket.support-ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTaskTask extends Schema.CollectionType {
  collectionName: 'tasks';
  info: {
    description: '';
    displayName: 'Task';
    pluralName: 'tasks';
    singularName: 'task';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.Relation<
      'api::task.task',
      'manyToOne',
      'api::address.address'
    >;
    completed: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::task.task', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    dateCreated: Attribute.Date & Attribute.Required;
    deleted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    description: Attribute.Text & Attribute.Required;
    document: Attribute.Relation<
      'api::task.task',
      'manyToOne',
      'api::document.document'
    >;
    files: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    issuingUser: Attribute.Relation<
      'api::task.task',
      'manyToOne',
      'api::user-info.user-info'
    >;
    notes: Attribute.String;
    publishedAt: Attribute.DateTime;
    receivingUser: Attribute.Relation<
      'api::task.task',
      'manyToOne',
      'api::user-info.user-info'
    >;
    taskDate: Attribute.Date & Attribute.Required;
    type: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::task.task', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTestTest extends Schema.SingleType {
  collectionName: 'tests';
  info: {
    displayName: 'test';
    pluralName: 'tests';
    singularName: 'test';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::test.test', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    media_groups: Attribute.Component<'media-group.media-group', true>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::test.test', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiUserInfoUserInfo extends Schema.CollectionType {
  collectionName: 'user_infos';
  info: {
    description: '';
    displayName: 'UserInfo';
    pluralName: 'user-infos';
    singularName: 'user-info';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    addresses: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::address.address'
    >;
    clients: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::client.client'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-info.user-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    documents: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::document.document'
    >;
    establishment: Attribute.Relation<
      'api::user-info.user-info',
      'manyToOne',
      'api::establishment.establishment'
    >;
    firstName: Attribute.String;
    fsAPIKey: Attribute.Text;
    fsID: Attribute.Text;
    issuedDeliveries: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::delivery.delivery'
    >;
    issuedTasks: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::task.task'
    >;
    lastName: Attribute.String;
    login: Attribute.Relation<
      'api::user-info.user-info',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    ownAddress: Attribute.Relation<
      'api::user-info.user-info',
      'oneToOne',
      'api::address.address'
    >;
    payments: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::payment.payment'
    >;
    phone: Attribute.String;
    publishedAt: Attribute.DateTime;
    receivedDeliveries: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::delivery.delivery'
    >;
    receivedTasks: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::task.task'
    >;
    supplier_orders: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::supplier-order.supplier-order'
    >;
    support_ticket_messages: Attribute.Relation<
      'api::user-info.user-info',
      'oneToMany',
      'api::support-ticket-message.support-ticket-message'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::user-info.user-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWebsiteWebsite extends Schema.SingleType {
  collectionName: 'websites';
  info: {
    description: '';
    displayName: 'Website';
    pluralName: 'websites';
    singularName: 'website';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::website.website',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    media_groups: Attribute.Component<'media-group.media-group', true>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::website.website',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    client_info: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::client.client'
    >;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user_info: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::user-info.user-info'
    >;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::address.address': ApiAddressAddress;
      'api::banner.banner': ApiBannerBanner;
      'api::category.category': ApiCategoryCategory;
      'api::client.client': ApiClientClient;
      'api::config.config': ApiConfigConfig;
      'api::delivery.delivery': ApiDeliveryDelivery;
      'api::document-product.document-product': ApiDocumentProductDocumentProduct;
      'api::document.document': ApiDocumentDocument;
      'api::establishment.establishment': ApiEstablishmentEstablishment;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::parking.parking': ApiParkingParking;
      'api::partner.partner': ApiPartnerPartner;
      'api::payment.payment': ApiPaymentPayment;
      'api::product-collection.product-collection': ApiProductCollectionProductCollection;
      'api::product-color.product-color': ApiProductColorProductColor;
      'api::product-extra.product-extra': ApiProductExtraProductExtra;
      'api::product.product': ApiProductProduct;
      'api::project.project': ApiProjectProject;
      'api::promo.promo': ApiPromoPromo;
      'api::reference.reference': ApiReferenceReference;
      'api::shelf.shelf': ApiShelfShelf;
      'api::site-banner.site-banner': ApiSiteBannerSiteBanner;
      'api::site-popup.site-popup': ApiSitePopupSitePopup;
      'api::store-location.store-location': ApiStoreLocationStoreLocation;
      'api::supplier-order-product.supplier-order-product': ApiSupplierOrderProductSupplierOrderProduct;
      'api::supplier-order.supplier-order': ApiSupplierOrderSupplierOrder;
      'api::supplier.supplier': ApiSupplierSupplier;
      'api::support-ticket-message.support-ticket-message': ApiSupportTicketMessageSupportTicketMessage;
      'api::support-ticket.support-ticket': ApiSupportTicketSupportTicket;
      'api::task.task': ApiTaskTask;
      'api::test.test': ApiTestTest;
      'api::user-info.user-info': ApiUserInfoUserInfo;
      'api::website.website': ApiWebsiteWebsite;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
