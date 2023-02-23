import { Injectable } from '@nestjs/common';
import { User } from './user.entity'
import { User as IUser } from './interfaces/user.interface'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async findOrCreate(user: IUser) : Promise<User>{
    let userInDb = await this.usersRepository.findOneBy({email: user.email});
    if (!userInDb) {
      await this.usersRepository.insert(user);
      userInDb = await this.usersRepository.findOneBy({email: user.email});
    }
    return userInDb;
  }

}
