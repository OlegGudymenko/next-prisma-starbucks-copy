import { clsx } from 'clsx';

const Button = (props) => {
  const { 
    children,
    onClick,
    outlined,
    contained,
    color,
    className,
    type = 'button',
    
  } = props;

  const colors = {
    white: clsx({
      '': outlined,
      '': contained
    }),
    black: clsx({
      'bg-white border-black text-black hover:bg-gray-200': outlined,
      'bg-black border-black text-white hover:bg-gray-700 hover:border-gray-700': contained
    }),
    green: clsx({
      'bg-white border-green-800 text-green-800 hover:bg-green-50 ': outlined,
      'bg-green-800 border-green-800 text-white': contained
    }),
  };


  const styles = clsx(
    'px-4 py-1.5 border box-border rounded-full font-semibold text-sm', 
    colors[color],
    className || ''
  );

  return <button type={type} className={styles} onClick={onClick}>{children}</button>
}

export default Button;