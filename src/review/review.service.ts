import { Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  async create(createReviewInput: CreateReviewInput) {
    const { text, rate, userId, productsId } = createReviewInput
  
    const user = await this.userRepository.findBy({ id: userId })
    const product = await this.productRepository.findBy({ id: productsId })
  
    if (!user) return { message: 'User not found' }
    if (!product) return { message: 'Product not found' }
  
    return await this.reviewRepository.save({ text, rate, userId, productsId })
  }

  async findAll() {
    return await this.reviewRepository.find()
  }

  async findOne(id: number) {
    const review = await this.reviewRepository.findBy({ id })
    if (!review) return { message: 'Review not found' }

    return review
  }

  async update(id: number, updateReviewInput: UpdateReviewInput) {
    const { text, rate } = updateReviewInput

    const review = await this.reviewRepository.findBy({ id })
    if (!review) return { message: 'Review not found' }

    await this.reviewRepository.update(id, { text, rate })

    const rev = await this.reviewRepository.findBy({ id })
    return rev
  }

  async remove(id: number) {
    const review = await this.reviewRepository.findBy({ id })
    if (!review) return { message: 'Review not found' }
    await this.reviewRepository.delete(id)
    return review
  }
}
