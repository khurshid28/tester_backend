import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class CategoryService {
 constructor(private prisma: PrismaService){}

  
 async create(data: {
    name? : string
  }) {
    return await this.prisma.category.create({
      data
    }) ;
  }

 async findAll() {
    return await this.prisma.category.findMany({
      include : {
        subcategories : true
      }
    })
  }

  async findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
      include : {
        subcategories : true
      }
    });
  }

  async update(id: number, data: {
    name?:string
  }) {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
