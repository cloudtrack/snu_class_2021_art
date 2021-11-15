var aws = require('aws-sdk');

var ddb = new aws.DynamoDB()

exports.handler = (event, context, callback) => {
  console.log(event);
  console.log(context);
  console.log(callback);

  // Add user to dynamodb table according to custom:role in userAttributes
  if (event.request.userAttributes.sub) {
    console.log("Adding user to dynamodb table");
    let tableName;

    if (event.request.userAttributes["custom:role"] == "teacher") {
      tableName = "TeacherTable";
    } else if (event.request.userAttributes["custom:role"] == "student") {
      tableName = "StudentTable";
    } else {
      console.log("No custom:role attribute found");
      callback(null, event);
    }

    var params = {
      TableName: tableName,
      Item: {
        "email": {
          S: event.request.userAttributes.email
        },
        "email_verified": {
          BOOL: event.request.userAttributes.email_verified == 'true'
        },
        "name": {
          S: "User" + event.request.userAttributes.sub
        },
        "profile": {
          S: "" // TODO: probably add a default profile pic
        },
        "role": {
          S: event.request.userAttributes["custom:role"]
        }
      }
    };

    ddb.putItem(params, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Added user to dynamodb table");
      }
    });

    callback(null, event);

  } else {
    console.log("No user to add to dynamodb table");
    callback(null, event);
  }
};
