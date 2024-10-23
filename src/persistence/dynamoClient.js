let AWSXRay = require('aws-xray-sdk');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
require('dotenv').config();
AWS.config.update({ region: process.env.AWS_REGION });
const crypto = require("crypto");

let dynamoDbClient = new AWS.DynamoDB.DocumentClient();

exports.getAll = async function (table) {
  const segment = AWSXRay.getSegment();
  const subsegment = segment.addNewSubsegment('GetAllCountries');

  const params = {
    // Specify which items in the results are returned.
    // FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",
    // Define the expression attribute value, which are substitutes for the values you want to compare.
    // ExpressionAttributeValues: {
    //   ":topic": { S: "SubTitle2" },
    //   ":s": { N: 1 },
    //   ":e": { N: 2 },
    // },
    // // Set the projection expression, which are the attributes that you want.
    // ProjectionExpression: "Season, Episode, Title, Subtitle",
    // Limit: 1,
    TableName: table
  };


  let items = await dynamoDbClient.scan(params).promise().then(function(data){
    return data.Items;
  })
  .catch(function (err) {
    return null
  });

  subsegment.close();

  return items
}

exports.delete = async function (table, key) {
  const segment = AWSXRay.getSegment();
  const subsegment = segment.addNewSubsegment('DeleteCountry');

  const params = {
    Key: {
      'Code': key
    },
    TableName: table
  };

  let items = await dynamoDbClient.delete(params).promise().then(function(data){
    return data;
  })
  .catch(function (err) {
    return null
  });

  subsegment.close();

  return items
}