const AWS = require('aws-sdk');


const deleteTask = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters

        await dynamodb.delete({
            TableName: 'TaskTable',
            Key: { id }
        }).promise()

        return {
            satus: 200,
            body: JSON.stringify({
                message: 'Task deleted',
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {
    deleteTask
}