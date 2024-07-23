import { JoiSchema } from 'nestjs-joi';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';
import * as Joi from 'joi';

@InputType()
export class UpdateUserInput{
    @Field(() => Float, { description: 'User Id' })
    @JoiSchema(Joi.number().required())
    id: number
  
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
