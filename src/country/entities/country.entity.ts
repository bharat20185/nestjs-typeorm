import { City } from "src/city/entities/city.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'country'})
export class Country {
    @PrimaryGeneratedColumn({ name: 'country_id'})
    id: number;

    @Column({ name: 'country'})
    name: string;

    @Column({ name: 'last_update', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    lastUpdated: Date;

    @OneToMany(() => City, city => city.country, { cascade: true })
    cities: City[];
}
