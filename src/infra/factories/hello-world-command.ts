import { HelloWorldCommand } from '@/domain/commands/hello-world';

export const makeHelloWorldCommand = (): HelloWorldCommand => {
  return new HelloWorldCommand();
};
