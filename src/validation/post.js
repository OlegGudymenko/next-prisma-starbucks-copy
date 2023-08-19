import * as yup from 'yup';

export const postSchema = yup.object({
  id: yup.string(),
  title: yup.string().required().label('Title'),
  content: yup.string().required().label('Content'),
  link: yup.string().required().label('Link'),
  buttonText: yup.string().required().label('Button text'),
  background: yup.string().required().label('Background'),
  imageUrl:  yup.string().required().label('Image URL'),
  imagePosition:  yup.string().required().label('Image position'),
});
