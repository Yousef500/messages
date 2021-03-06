import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 'Hi there';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id: ', id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
}
