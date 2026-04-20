import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'Get Request For Users';
  }

  @Post()
  public createUser() {
    return 'Post Request For Create User';
  }
  @Put()
  public updateUser() {
    return 'Put Request For Update User';
  }
  @Patch()
  public updateFullUser() {
    return 'Patch Request For Update Full User';
  }
  @Delete()
  public deleteUser() {
    return 'Delete Request For Delete User';
  }
}
