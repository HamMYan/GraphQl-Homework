import { InputType, Int, Field, Float } from '@nestjs/graphql';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  @JoiSchema(Joi.string().required())
  name: string

  @Field(() => String)
  @JoiSchema(Joi.string().required())
  description: string

  @Field(() => Float)
  @JoiSchema(Joi.number().required())
  price: number

  @Field(() => Float)
  @JoiSchema(Joi.number().required())
  count: number
  
  @Field(() => Float)
  @JoiSchema(Joi.number().required())
  userId: number
}
