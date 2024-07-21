import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

//Review userId, productId

@ObjectType()
export class Review {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String)
  @Column()
  text: string

  @Field(() => Float)
  @Column()
  rate: number

  @Field(type => User)
  @ManyToOne(type => User,user => user.review,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })
  user: User

  @Field(type => Product)
  @ManyToOne(type => Product,products => products.review,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })
  products: Product
}
