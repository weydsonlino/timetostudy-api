import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { IUserResponse } from './user.interface';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUser(user: User): Promise<IUserResponse> {
    return this.prisma.user
      .create({
        data: user,
      })
      .then((data) => ({
        message: 'User created successfully',
        data,
      }))
      .catch((error) => ({
        message: 'Error ao criar o usuario',
        error,
      }));
  }

  async getUser(id: number): Promise<IUserResponse> {
    return this.prisma.user
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((data) => ({
        message: 'User found',
        data,
      }))
      .catch((error) => ({
        message: 'Error ao buscar o usuario',
        error,
      }));
  }
  async getAllUsers(): Promise<IUserResponse> {
    return this.prisma.user
      .findMany()
      .then((data) => ({
        message: 'Users found',
        data,
      }))
      .catch((error) => ({
        message: 'Error ao buscar os usuarios',
        error,
      }));
  }
  async deleteUser(id: number): Promise<IUserResponse> {
    return this.prisma.user
      .delete({
        where: {
          id: id,
        },
      })
      .then((data) => ({
        message: 'User deleted',
        data,
      }))
      .catch((error) => ({
        message: 'Error ao deletar o usuario',
        error,
      }));
  }
  async updateUser(id: number, user: User): Promise<IUserResponse> {
    return this.prisma.user
      .update({
        where: {
          id: id,
        },
        data: user,
      })
      .then((data) => ({
        message: 'User updated',
        data,
      }))
      .catch((error) => ({
        message: 'Error ao atualizar o usuario',
        error,
      }));
  }
}
