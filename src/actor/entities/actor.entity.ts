import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'actor',
    schema: 'sakila',
})
export class Actor {
    @PrimaryGeneratedColumn({name: 'actor_id'})
    id: number;

    @Column({name: 'first_name', length: 45})
    firstName: string;

    @Column({name: 'last_name', length: 45})
    lastName: string;

    @Column({name: 'last_update', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    lastUpdate: Date;
}
