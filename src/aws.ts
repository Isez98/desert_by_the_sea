// import AWS from 'aws-sdk'
// // **DO THIS**:
// //   Replace BUCKET_NAME with the bucket name.
// //
// const albumBucketName = 'dbtsr-albums'

// **DO THIS**:
//   Replace this block of code with the sample code located at:
//   Cognito -- Manage Identity Pools -- [identity_pool_name] -- Sample Code -- JavaScript
//
// Initialize the Amazon Cognito credentials provider
// AWS.config.region = 'us-east-2'; // Region
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-2:82248c44-bd93-4b3f-9deb-581f5f9bc147',
// });

// Create a new service object
// let s3 = new AWS.S3({
//   apiVersion: '2006-03-01',
//   params: {Bucket: albumBucketName}
// });

// A utility function to create HTML.

// List the photo albums that exist in the bucket.

// Show the photos that exist in an album.
// function viewAlbum(albumName: any) {
//   var albumPhotosKey = encodeURIComponent(albumName) + '/';
//   s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
//     if (err) {
//       return alert('There was an error viewing your album: ' + err.message);
//     }
//     // 'this' references the AWS.Response instance that represents the response
//     console.log(data)
//   })
// }

// export default viewAlbum;
