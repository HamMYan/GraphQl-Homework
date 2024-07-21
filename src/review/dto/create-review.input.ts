import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field(() => String)
  text: string

  @Field(() => Float)
  rate: number
}
