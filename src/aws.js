import AWS from 'aws-sdk';
import React from 'react';
// **DO THIS**:
//   Replace BUCKET_NAME with the bucket name.
//
var albumBucketName = 'dbtsr-albums';

// **DO THIS**:
//   Replace this block of code with the sample code located at:
//   Cognito -- Manage Identity Pools -- [identity_pool_name] -- Sample Code -- JavaScript
//
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:82248c44-bd93-4b3f-9deb-581f5f9bc147',
});

// Create a new service object
let s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

// A utility function to create HTML.
function getHtml(template) {
 return template.join('\n');
}


// List the photo albums that exist in the bucket.
function listAlbums() {
  s3.listObjects({Delimiter: '/'}, function(err, data) {
    if (err) {
      return alert('There was an error listing your albums: ' + err.message);
    } else {
      let albums = data.CommonPrefixes.map(function(commonPrefix) {
        let prefix = commonPrefix.Prefix;
        let albumName = decodeURIComponent(prefix.replace('/', ''));
        return(
          console.log(albums)
        )
      });      
    }
  });
}

// Show the photos that exist in an album.
function viewAlbum(albumName) {
  var albumPhotosKey = encodeURIComponent(albumName) + '/';
  s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
    if (err) {
      return alert('There was an error viewing your album: ' + err.message);
    }
    // 'this' references the AWS.Response instance that represents the response
    console.log(data)
  })
}

export default viewAlbum;