import { HelloWorldCommand } from '@/domain/commands/hello-world';

describe('[Commands] HelloWorld', () => {
  it('should be able to return a hello world message with the given name', async () => {
    const sut = new HelloWorldCommand();

    const result = await sut.execute({ name: 'John Doe' });

    expect(result.message).toBe('Hello, John Doe!');
  });
});
