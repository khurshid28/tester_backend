import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @Post('register')
  @HttpCode(HttpStatus.OK)
  async register(@Body() dto: { login: string; password: string; name: string }) {
    return this.authService.createUser(dto.login, dto.password, dto.name);
  }


  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: { login: string; password: string }) {
    const user = await this.authService.validateUser(body.login, body.password);
    return this.authService.login(user);
  }
}
