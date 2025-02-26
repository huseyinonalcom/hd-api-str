module.exports = ({ env }) => ({
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "1y",
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("MAIL_HOST"),
        port: env("MAIL_PORT"),
        secure: false,
        auth: {
          user: env("MAIL_USER"),
          pass: env("MAIL_PASS"),
        },
      },
      settings: {
        defaultFrom: env("MAIL_USER"),
        defaultReplyTo: env("MAIL_USER"),
      },
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("R2_ACCESS_KEY_ID"),
        secretAccessKey: env("R2_ACCESS_SECRET"),
        endpoint: env("R2_ENDPOINT"),
        params: {
          Bucket: env("R2_BUCKET"),
        },
        cloudflarePublicAccessUrl: env("R2_PUBLIC_ACCESS_URL"),
        pool: false,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
