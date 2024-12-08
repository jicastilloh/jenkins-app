import { Injectable } from '@nestjs/common';
import { CreateJenkinDto } from './dto/create-jenkin.dto';
// import { UpdateJenkinDto } from './dto/update-jenkin.dto';
import path = require('path');
import fs = require('fs')

@Injectable()
export class JenkinsService {
  create(createJenkinDto: CreateJenkinDto) {
    return 'This action adds a new jenkin';
  }

  findAll() {

    const result = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'public', 'data.json'), 'utf8'));

    return result;
  }

  findOne(id: number) {

    const result = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'public', 'data.json'), 'utf8'));

    const persons = result.persons.map((person) => {
      if (person.id == id) {
        return person
      }else{
        return null
      }
    })

    const personFound = persons.filter(res => res != null)

    return personFound[0];
  }

  // update(id: number, updateJenkinDto: UpdateJenkinDto) {
  //   return `This action updates a #${id} jenkin`;
  // }

  remove(id: number) {
    return `This action removes a #${id} jenkin`;
  }
}
