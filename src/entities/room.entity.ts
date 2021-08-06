import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Reservation } from './reservation.entity';

@Entity({ name: 'room' })
@Unique('unique-room-code', ['code'])
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  type: string;

  @Column({ type: 'varchar', length: 20 })
  beds: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations: Reservation[];
}
