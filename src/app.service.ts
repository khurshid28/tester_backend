import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  create(data: { question?: string; name?: string }) {
    return this.prisma.test.create({ data });
  }

  findAll() {
    return this.prisma.test.findMany();
  }
}
