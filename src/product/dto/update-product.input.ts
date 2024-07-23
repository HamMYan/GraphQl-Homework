import { JoiSchema } from 'nestjs-joi';
import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';
import * as Joi from 'joi';

@InputType()
export class UpdateProductInput {
    @Field(() => Float)
    @JoiSchema(Joi.number().required())
    id: number

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
}
