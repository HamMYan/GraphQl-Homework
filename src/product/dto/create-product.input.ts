import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  description: string

  @Field(() => Float)
  price: number

  @Field(() => Float)
  count: number
}
