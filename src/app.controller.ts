import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':owner/:repo')
  getCommitHistory(@Param('owner') owner: string, @Param('repo') repo: string) {
    return this.appService.getCommitHistory(owner, repo);
  }
}
