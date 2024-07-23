import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async create(createUserInput: CreateUserInput) {
    const { name, surname, age, email } = createUserInput
    const user = await this.userRepository.findOne({ where: { email } })
    if (user) return { message: `${email} - has arleady` }

    return await this.userRepository.save({ name, surname, age, email })
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) return { message: 'User not found' }
    return user
  }

  async update(updateUserInput: UpdateUserInput) {
    const {id, name, surname, age, email } = updateUserInput

    const user = await this.userRepository.findOneBy({ id })
    if (!user) return { message: 'User not found' }

    await this.userRepository.update(id,{ name, surname, age, email })  

    return await this.userRepository.findOneBy({ id })
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) return { message: 'User not found' }

    await this.userRepository.delete(id)  

    return user
  }
}
