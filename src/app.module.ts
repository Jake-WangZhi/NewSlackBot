import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlackModule } from './slack/slack.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    SlackModule,
    ClientsModule.register([
      {
        name: 'SLACK_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3000, // replace with your desired port
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
