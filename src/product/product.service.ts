import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  async create(createProductInput: CreateProductInput) {
    const { name, description, price, count, userId } = createProductInput

    const user = await this.userRepository.findOneBy({ id: userId })
    if (!user) return { message: 'User not found' }

    const product = await this.productRepository.save({ name, description, price, count, userId })

    return product
  }

  async findAll() {
    return await this.productRepository.find()
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id })
    if (!product) return { message: 'Product not found' }
    return product
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    const { name, description, price, count } = updateProductInput

    const product = await this.productRepository.findOneBy({ id })
    if (!product) return { message: 'Product not found' }

    await this.productRepository.update(id, { name, description, price, count })

    return await this.productRepository.findOneBy({ id })
  }

  async remove(id: number) {
    const product = await this.productRepository.findOneBy({ id })
    if (!product) return { message: 'Product not found' }

    await this.productRepository.delete(id)

    return product
  }
}
