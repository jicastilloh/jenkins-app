import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JenkinsModule } from './jenkins/jenkins.module';

@Module({
  imports: [JenkinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
