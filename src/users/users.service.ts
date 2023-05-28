import { Injectable } from '@nestjs/common';
import { User } from './domains/user.domain';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(cat: User) {
    this.users.push(cat);
  }

  get(): User[] {
    return this.users;
  }
}
