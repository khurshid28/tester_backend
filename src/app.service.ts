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


  async findOne(id: number) {
    return this.prisma.test.findUnique({
      where: { id },
    });
  }

  // Update by ID
  async update(id: number, data: { question?: string; name?: string }) {
    return this.prisma.test.update({
      where: { id },
      data,
    });
  }

  // Delete by ID
  async delete(id: number) {
    return this.prisma.test.delete({
      where: { id },
    });
  }
}
