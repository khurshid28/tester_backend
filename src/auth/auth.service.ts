import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService,private prisma: PrismaService) {}

  async validateUser(login: string, password: string) {
    const user = await this.prisma.user.findUnique({
        where : {
            login
        }
    });

    if (!user) {
      throw new UnauthorizedException('Bunday foydalanuvchi topilmadi');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Parol xato');
    }

    // passwordni tashlab yuboramiz
    const { password: _, ...result } = user;
    return result;
  }


  async login(user:  { login: string; id: number }) {
    const payload = { id: user.id, login: user.login};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async createUser(login: string, password: string, name?: string) {
    return this.prisma.user.create({
      data: { login, password, name },
    });
  }
}
