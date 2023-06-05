import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'booking'
})
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @Column()
    userId: string;

    @Column()
    objectId: string;


}