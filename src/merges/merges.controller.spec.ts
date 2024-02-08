import { Test, TestingModule } from '@nestjs/testing';
import { MergesController } from './merges.controller';
import { MergesService } from './merges.service';

describe('MergesController', () => {
  let controller: MergesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MergesController],
      providers: [MergesService],
    }).compile();

    controller = module.get<MergesController>(MergesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
