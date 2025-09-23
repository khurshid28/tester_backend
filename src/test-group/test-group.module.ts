import { Module } from '@nestjs/common';
import { TestGroupService } from './test-group.service';
import { TestGroupController } from './test-group.controller';

@Module({
  providers: [TestGroupService],
  controllers: [TestGroupController]
})
export class TestGroupModule {}
