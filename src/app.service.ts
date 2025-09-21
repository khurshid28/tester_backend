import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

 async create(data: { question?: string; answer?: string; subCategoryId?: number }) {
   
    return await this.prisma.test.create({ data });
  }

  async findAll() {
    return await this.prisma.test.findMany({
      include : {
        subCategory : true
      }
    });
  }


  async findOne(id: number) {
    return this.prisma.test.findUnique({
      where: { id },
      include : {
        subCategory : true,
      }
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
