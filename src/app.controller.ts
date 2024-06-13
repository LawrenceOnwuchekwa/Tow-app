import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
  //   private readonly searchmodule:SearchModule
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get(':query')
  // async search(@Param('query') query:string, @Query() options: any,{}){
  //   const results = await this.searchmodule.search(query, options);
  //   return results;

  }

