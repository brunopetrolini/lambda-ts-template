import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { z } from 'zod';

import { makeHelloWorldCommand } from '@/infra/factories/hello-world-command';
import { AwsResponses } from '@/infra/utils/aws-responses-mapper';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const command = makeHelloWorldCommand();

  const bodySchema = z.object({
    name: z.string().min(3),
  });

  const eventBody = JSON.parse(event.body || '{}');
  const validationResult = bodySchema.safeParse(eventBody);

  if (validationResult.error) {
    return AwsResponses.apiGateway({ message: 'Invalid input' }, 400);
  }

  const { name } = validationResult.data;
  const result = await command.execute({ name });

  return AwsResponses.apiGateway(result);
};
