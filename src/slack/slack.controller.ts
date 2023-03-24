import { Body, Controller, Get, Header, HttpCode, Post } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { SlackService } from './slack.service';

@Controller('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @EventPattern({
    event: {
      type: 'message',
      channel_type: 'channel',
    },
  })
  async handleMessageEvent(event: any) {
    // Handle the message event
    console.log('Received message event:', event);

    // Send a response
    // ...
    return event.challenge;
  }

  @Get()
  test() {
    console.log('haha');
  }

  @HttpCode(200)
  @Post()
  @Header('content-type', 'text/plain')
  test1(@Body() event: any) {
    this.slackService.modifyTable();
    return event.challenge;
  }
}
