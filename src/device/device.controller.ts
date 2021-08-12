import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { DeviceType } from 'src/entities/device.entity';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Get('list')
  async list(@Request() req) {
    return this.deviceService.findAll();
  }
    
  @Post('/')
  async create(@Body() body: any) {
      const params: any = body;
      if (!params.name) {
          return {
              message: 'name is required'
          };
      }
      const device: DeviceType = {
          name: params.name,
          status: 1,
        lastUpdated:''
      };
      return this.deviceService.add(device);
  }
}
