import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(@InjectRepository(City) private repo: Repository<City>) {}

  create(createCityDto: CreateCityDto) {
    const city = this.repo.create(createCityDto);
    
    return this.repo.save(city);
  }

  findAll() {
    return this.repo.find({
      relations: ['country'],
      select: {
        id: true,
        name: true,
        country: {
          id: true,
          name: true,
        },
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
