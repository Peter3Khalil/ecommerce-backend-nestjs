import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('me')
  getStatus(@Res() res: Response) {
    return res.json({ status: 'ok' });
  }
}
