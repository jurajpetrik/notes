import { Injectable, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService
  ) { }

  async validateGoogleToken(token: string): Promise<User> {
    const clientId = this.configService.get<string>("GOOGLE_CLIENT_ID");
    const clientSecret = this.configService.get<string>("GOOGLE_CLIENT_SECRET");

    const client = new OAuth2Client(clientId, clientSecret);;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId

    });
    const payload = ticket.getPayload();
    const { email, name, picture: image } = payload;
    return {email, name, image};
  }

  async issueJwtToken(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
