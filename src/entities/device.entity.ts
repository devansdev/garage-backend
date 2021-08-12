import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface DeviceType{
    id?: number;
    name: string;
    status: number;
    lastUpdated: string;
}

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({type: 'integer'})
    status: number;
    
    @Column()
    lastUpdated: string;
}