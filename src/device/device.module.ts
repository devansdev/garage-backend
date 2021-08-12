import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { Device } from 'src/entities/device.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Device])
  ],
  providers: [DeviceService],
  controllers: [DeviceController]
})
export class DeviceModule {}
