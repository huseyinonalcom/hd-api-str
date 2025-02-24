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
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: env("R2_ACCESS_KEY_ID"),
          secretAccessKey: env("R2_ACCESS_SECRET"),
        },
        region: env("R2_REGION"),
        endpoint: env("R2_ENDPOINT"),
        params: {
          Bucket: env("R2_BUCKET"),
        },
      },
    },
  },
});
