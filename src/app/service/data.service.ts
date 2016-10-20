import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {
  private data: number[] = [];

  constructor(private logService: LogService) {}

  addData(input: number) {
    this.data.push(input);
    this.logService.writeLog('added');
  }

  getData() {
    return this.data;
  }
}
