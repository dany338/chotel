import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from './room.entity';

@Entity({ name: 'reservation' })
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  startDate: string;

  @Column({ type: 'varchar', length: 20 })
  endDate: string;

  @ManyToOne(() => Room, (room) => room.reservations)
  room: Room;

  @Column({ type: 'int', width: 11 })
  score: number;
}
