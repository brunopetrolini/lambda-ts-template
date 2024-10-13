import type { APIGatewayProxyResult } from 'aws-lambda';

export class AwsResponses {
  public static apiGateway(body: unknown, statusCode = 200): APIGatewayProxyResult {
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  }
}
