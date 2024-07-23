import { InputType, Field, Float, ID } from '@nestjs/graphql';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';


@InputType()
export class CreateUserInput {

  @Field(() => String, { description: 'User name' })
  @JoiSchema(Joi.string().required())
  name: string

  @Field(() => String, { description: 'User Surname' })
  @JoiSchema(Joi.string().required())
  surname: string

  @Field(() => String, { description: 'User Email' })
  @JoiSchema(Joi.string().required())
  email: string

  @Field(() => Float, { description: 'User Age' })
  @JoiSchema(Joi.number().required())
  age: number

  
}
