import { Controller, Request, Post, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  @Post('/login/oauth')
  async loginOauth(@Body('token') token): Promise<any> {
    const user = await this.authService.validateGoogleToken(token);
    const dbUser = await this.usersService.findOrCreate(user);
    const jwtToken = await this.authService.issueJwtToken({ username: dbUser.email, userId: dbUser.id});
    return jwtToken;
  }
}
