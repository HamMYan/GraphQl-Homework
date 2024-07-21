import { InputType, Int, Field, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User name' })
  name: string

  @Field(() => String, { description: 'User Surname' })
  surname: string

  @Field(() => String, { description: 'User Email' })
  email: string

  @Field(() => Float, { description: 'User Age' })
  age: number
}
