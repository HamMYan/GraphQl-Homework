import { JoiSchema } from 'nestjs-joi';
import { CreateReviewInput } from './create-review.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';
import * as Joi from 'joi';

@InputType()
export class UpdateReviewInput{
    @Field(() => Float)
    @JoiSchema(Joi.number().required())
    id: number

    @Field(() => String)
    @JoiSchema(Joi.string().required())
    text: string
  
    @Field(() => Float)
    @JoiSchema(Joi.number().required())
    rate: number
}
