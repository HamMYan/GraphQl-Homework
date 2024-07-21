import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Review } from 'src/review/entities/review.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String)
  @Column()
  name: string

  @Field(() => String)
  @Column()
  description: string

  @Field(() => Float)
  @Column()
  price: number

  @Field(() => Float)
  @Column()
  count: number

  @Field(type => User)
  @ManyToOne(type => User, user => user.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User

  @Field(type => Review)
  @OneToMany(type => Review,review => review.products,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })
  review: Review
}
