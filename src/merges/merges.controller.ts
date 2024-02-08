import { Controller, Post, Body } from '@nestjs/common';
import { MergesService } from './merges.service';
import { NewMergeDto } from './dto/NewMerge.dto';

@Controller('merges')
export class MergesController {
  constructor(private readonly mergesService: MergesService) {}

  @Post()
  storeMerge(@Body() newMergeDto: NewMergeDto): string {
    console.log(newMergeDto);
    return this.mergesService.storeMerge();
  }
}
