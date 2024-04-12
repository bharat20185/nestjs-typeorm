import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActorService {

  constructor(
    @InjectRepository(Actor) private repo: Repository<Actor>
  ) {}


  create(createActorDto: CreateActorDto) {
    const actor = this.repo.create(createActorDto);
    return this.repo.save(actor);    
  }

  findAll() {
    return this.repo.find({
      select: ['id', 'firstName', 'lastName']
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({id});
  }

  async update(id: number, updateActorDto: UpdateActorDto) {
    return this.repo.update(id, {...updateActorDto});    
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
