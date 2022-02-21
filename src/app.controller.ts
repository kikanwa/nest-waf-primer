import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello2')
  @Render('index.html') getHello2(): {} {
    return this.appService.getHello2();
  }

  @Get('home') 
  @Render('home.html') 
  getHome(): {} {
    return this.appService.getHome();
  }
  @Get('about-us')
  @Render('about-us.html') 
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }
}
function getAboutUs(): any {
  throw new Error('Function not implemented.');
}

