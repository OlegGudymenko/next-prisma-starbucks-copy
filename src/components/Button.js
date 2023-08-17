import { clsx } from 'clsx';

const Button = (props) => {
  const { 
    children,
    onClick,
    outlined,
    contained,
    color,
    className
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
      '': outlined,
      '': contained
    }),
  };


  const styles = clsx(
    'px-4 py-1.5 border box-border rounded-3xl font-semibold text-sm', 
    colors[color],
    className || ''
  );

  console.log(styles,'styles')
// const styles = ''
  return <button className={styles} onClick={onClick}>{children}</button>
}

export default Button;