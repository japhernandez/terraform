import { Get, Mapping } from "@tsclean/core";

@Mapping("/api/v1/")
export class HelloWordController {
  constructor() {}

  @Get("hello-world")
  async getHelloWorld(): Promise<string> {
    return "Hello World!";
  }
}
