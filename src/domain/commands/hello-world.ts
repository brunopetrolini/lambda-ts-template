export namespace HelloWorldCommand {
  export interface Input {
    name: string;
  }

  export interface Output {
    message: string;
  }
}

export class HelloWorldCommand {
  public async execute({ name }: HelloWorldCommand.Input): Promise<HelloWorldCommand.Output> {
    return { message: `Hello, ${name}!` };
  }
}
