import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Contact {
  @Prop()
  name: String;

  @Prop()
  phone: String;

  @Prop()
  email: String;

  @Prop()
  companyName: String;

  @Prop()
  companySize: String;

  @Prop()
  product: String;

  @Prop()
  description: String;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
