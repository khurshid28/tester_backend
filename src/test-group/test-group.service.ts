import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, TestGroup } from 'generated/prisma';


@Injectable()
export class TestGroupService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TestGroupCreateInput): Promise<TestGroup> {
    return this.prisma.testGroup.create({ data });
  }

  async findAll(): Promise<TestGroup[]> {
    return this.prisma.testGroup.findMany({
      include: { tests: true, subCategory: true },
    });
  }

  async findOne(id: number): Promise<TestGroup | null> {
    return this.prisma.testGroup.findUnique({
      where: { id },
      include: { tests: true, subCategory: true },
    });
  }

  async update(id: number, data: Prisma.TestGroupUpdateInput): Promise<TestGroup> {
    return this.prisma.testGroup.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<TestGroup> {
    return this.prisma.testGroup.delete({
      where: { id },
    });
  }
}
