import { HttpException, HttpStatus } from '@nestjs/common';

export class SomethingWrongException extends HttpException {
  constructor() {
    super('Something Wrong', HttpStatus.BAD_REQUEST);
  }
}
