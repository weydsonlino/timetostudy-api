import { z } from 'zod';
import { PrismaService } from '../../prisma/prisma.service';

export default z.object({
  name: z
    .string()
    .min(0)
    .max(30, { message: 'Nome de usuario deve ter menos de 30 caracteres' }),
  email: z
    .string()
    .email()
    .refine(
      async (email: string) => {
        const prisma = new PrismaService();
        return !(await prisma.user.findUnique({ where: { email } }));
      },
      {
        message: 'Email já está em uso',
      },
    ),
  password: z
    .string()
    .min(8, { message: 'Senha deve ter no minimo 8 caracteres' }),
});
