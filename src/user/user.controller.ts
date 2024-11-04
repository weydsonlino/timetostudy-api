import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { IUserResponse } from './user.interface';
import createUserValidation from './validation-schema/createUserValidation';
import { ZodValidationPipe } from '../zod/zod.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createUserValidation))
  createUser(@Body() user: User): Promise<IUserResponse> {
    const response: Promise<IUserResponse> = this.userService.createUser(user);
    if ('error' in response) {
      return response;
    } else {
      return response;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IUserResponse> {
    const response: Promise<IUserResponse> = this.userService.getUser(
      Number(id),
    );
    if ('error' in response) {
      return response;
    } else {
      return response;
    }
  }
  @Get()
  findAll(): Promise<IUserResponse> {
    const response: Promise<IUserResponse> = this.userService.getAllUsers();
    if ('error' in response) {
      return response;
    } else {
      return response;
    }
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<IUserResponse> {
    const response: Promise<IUserResponse> = this.userService.deleteUser(
      Number(id),
    );
    if ('error' in response) {
      return response;
    } else {
      return response;
    }
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): Promise<IUserResponse> {
    const response: Promise<IUserResponse> = this.userService.updateUser(
      Number(id),
      user,
    );
    if ('error' in response) {
      return response;
    } else {
      return response;
    }
  }
}
