import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device, DeviceType } from 'src/entities/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
  ) {}

  findAll(): Promise<Device[]> {
    return this.deviceRepository.find();
  }

  findOne(id: string): Promise<Device> {
    return this.deviceRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.deviceRepository.delete(id);
  }

  add(device: DeviceType) {
    return this.deviceRepository.save(device);
  }
}
