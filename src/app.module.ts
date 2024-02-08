import { Module } from '@nestjs/common';
import { MergesController } from './merges/merges.controller';
import { MergesService } from './merges/merges.service';

@Module({
  imports: [],
  controllers: [MergesController],
  providers: [MergesService],
})
export class AppModule {}
