const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    const params = {
        Key: {
            "UserId": {
                S: "user_0.8268808631963369"
            }
        },
        TableName: "compare-yourself"
    };
    dynamodb.deleteItem(params, function (err, data) {
        if (err) {
            console.log(err);
            callback(err);     
        } else {
            console.log(data);
            callback(null, data);
        }
    });
};