import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.category.findMany({
      include: { tests: true }, // testlar bilan birga qaytadi
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
      include: { tests: true },
    });
  }

  create(data: { name: string }) {
    return this.prisma.category.create({ data });
  }

  update(id: number, data: { name?: string }) {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
