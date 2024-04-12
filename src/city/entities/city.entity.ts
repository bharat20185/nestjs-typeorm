import { Country } from "src/country/entities/country.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'city'})
export class City {
    @PrimaryGeneratedColumn({ name: 'city_id'})
    id: number;

    @Column({ name: 'city'})
    name: string;

    @ManyToOne(() => Country, country => country.cities)
    @JoinColumn({ name: 'country_id' })
    country: Country;

    @Column({ name: 'last_update', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    lastUpdated: Date;
}
