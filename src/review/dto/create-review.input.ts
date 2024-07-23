import { InputType, Int, Field, Float } from '@nestjs/graphql';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

@InputType()
export class CreateReviewInput {
  @Field(() => String)
  @JoiSchema(Joi.string().required())
  text: string

  @Field(() => Float)
  @JoiSchema(Joi.number().required())
  rate: number

  @Field(() => Float)
  @JoiSchema(Joi.number().required())
  productsId: number

  @Field(() => Float)
  @JoiSchema(Joi.number().required())
  userId: number
}
