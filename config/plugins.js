module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_S3_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_S3_ACCESS_SECRET'),
        region: env('AWS_S3_REGION'),
        params: {
            Bucket: env('AWS_S3_BUCKET_NAME'),
        },
      },
    },
  }
});
