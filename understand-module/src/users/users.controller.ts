import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/')
  public getUsers(@Param() param: string, @Query() query: string) {
    return ['Get Request For Users', param, query];
  }

  @Post('/signup')
  public createUser(@Body() body: string) {
    return body;
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
