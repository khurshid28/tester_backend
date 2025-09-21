import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubcategoryService {
  constructor(private prisma: PrismaService){}

  
  async create(data: {
     name? : string;
     categoryId?: number
   }) {
     return await this.prisma.subCategory.create({
       data
     }) ;
   }
 
  async findAll() {
     return await this.prisma.subCategory.findMany({
       include : {
         tests : true,
         category : true
       }
     })
   }
 
   async findOne(id: number) {
     return this.prisma.subCategory.findUnique({
       where: { id },
       include : {
         tests : true,
         category : true
       }
     });
   }
 
   async update(id: number, data: {
     name?:string
   }) {
     return this.prisma.subCategory.update({
       where: { id },
       data,
     });
   }
 
   async remove(id: number) {
     return this.prisma.subCategory.delete({
       where: { id },
     });
   }
}
