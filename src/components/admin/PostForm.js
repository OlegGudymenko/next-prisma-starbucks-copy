import Link from 'next/link';
import FormField from '@/components/form/FormField';
import Button from '@/components/Button';
import SelectControl from '@/components/form/SelectField';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Alert }from '@mui/material';
import { useController,} from 'react-hook-form';

const SELECT_OPTIONS = [
  {
    value: 'LEFT',
    label: 'Left'
  },
  {
    value: 'RIGHT',
    label: 'Right'
  },
];

const ImageField = ({ name, control }) => {
  const {
    field: {
      value
    },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  if(value) {
    return (
      <img 
        alt={name}
        src={value}
      />
    )
  }

}

export default function PostForm({ 
  onSubmit,
  error,
  control
}) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-screen">
      {error && <Alert className='mb-4 mt-2' severity="error">{'An error has occurred: ' + error.message}</Alert>}
      <div className="mt-6">
        <Link 
          className='underline hover:no-underline text-green-700 flex items-center' 
          href='/admin'
        >
          <AiOutlineArrowLeft className="mr-1"/> <span>Back to posts list</span></Link>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-12 mt-8 mb-8">
          <div >
            <FormField 
              name='title'
              label='Title'
              control={control}
            />
            <div className="mt-8">
              <FormField 
                name='background'
                label='Background color'
                control={control}
              />
            </div>
          </div>
          <FormField 
            name='content'
            label='Content'
            multiline
            rows={5}
            control={control}
          />
        </div>
        <div className="grid grid-cols-2 gap-12 mb-8">
          <SelectControl 
            name='imagePosition'
            label='Image Position'
            control={control}
            options={SELECT_OPTIONS}
          />
          <FormField 
            name='buttonText'
            label='Button text'
            control={control}
          />
        </div>
        <div className="grid grid-cols-2 gap-12 mb-8">
          <FormField 
            name='imageUrl'
            label='Image URL'
            control={control}
          />
          <FormField 
            name='link'
            label='Button link'
            control={control}
          />
        </div>
        <div className="grid grid-cols-2 gap-12 -mt-4">
          <ImageField name='imageUrl'  control={control}/>
          <div className=" w-1/2 flex flex-col ml-auto">
           <Button 
            type='submit' 
            className='mr-2 px-8 py-2'
            color='green'
            outlined
          >Save</Button>
        </div>
        </div>
       
      </form>
    </div>
  )
}
