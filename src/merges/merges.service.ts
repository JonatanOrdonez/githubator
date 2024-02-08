import { Injectable } from '@nestjs/common';

@Injectable()
export class MergesService {
  storeMerge(): string {
    return 'Store merge!';
  }
}
