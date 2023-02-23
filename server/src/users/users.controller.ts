// import { Controller, Post, Body } from '@nestjs/common';
// import { OAuth2Client } from 'google-auth-library';
// import { UsersService } from './users.service';

// const client = new OAuth2Client(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
// );

// @Controller('users')
// export class UsersController {
//   constructor(private usersService: UsersService) { }
//   @Post('/login')
//   async login(@Body('token') token): Promise<any> {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });
//     // log the ticket payload in the console to see what we have
//     const payload = ticket.getPayload();
//     const { email, name, picture: image } = payload;
//     const user = this.usersService.createOrFind({ email, name, image })
//     return user
//   }
// }
