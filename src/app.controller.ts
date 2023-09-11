import { Controller, Get, Param, Header } from '@nestjs/common';
import { AppService } from './app.service';

const frontURL = process.env.FRONT_URL ?? 'http://localhost:5173';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':owner/:repo')
  @Header('Access-Control-Allow-Origin', frontURL)
  getCommitHistory(@Param('owner') owner: string, @Param('repo') repo: string) {
    return this.appService.getCommitHistory(owner, repo);
  }
}
