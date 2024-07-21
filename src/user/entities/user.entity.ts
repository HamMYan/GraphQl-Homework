import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';
import { Review } from 'src/review/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID, { description: "User id" })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'User name' })
  @Column()
  name: string

  @Field(() => String, { description: 'User Surname' })
  @Column()
  surname: string

  @Field(() => String, { description: 'User Email' })
  @Column()
  email: string

  @Field(() => Float, { description: 'User Age' })
  @Column()
  age: number

  @Field(type => Product)
  @OneToMany(type => Product,products => products.user,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })
  products: Product

  @Field(type => Review)
  @OneToMany(type => Review,review => review.user,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })
  review: Review
}
