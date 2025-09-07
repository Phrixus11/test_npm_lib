import type {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";

type Props = {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';

} & ComponentPropsWithoutRef<'button'>;

export const Button = ({variant = 'primary', className, ...rest}: Props) => {

  const buttonClasses = clsx(
    // Базовые классы
    'px-4 py-2 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',

    // Варианты
    variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    variant === 'outlined' && 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',

    // Состояние disabled
    rest.disabled && 'bg-gray-300 text-gray-500 cursor-not-allowed',

    className
  );

  return (
    <button {...rest} className={buttonClasses }>Button    </button>
  );
};