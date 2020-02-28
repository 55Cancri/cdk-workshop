import { APIGatewayEvent } from 'aws-lambda'

// is it working?
exports.handler = async (event: APIGatewayEvent) => {
  console.log('request:', JSON.stringify(event, undefined, 2))
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `Hello, CDK! You've hit ${event.path}\n`
  }
}
