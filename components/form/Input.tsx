import { cn } from '@/utils/cn';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  registration: UseFormRegisterReturn;
  error?: FieldError;
  type?: 'text' | 'password' | 'number' | 'email';
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

export const Input = ({
  registration,
  error,
  type = 'text',
  isRequired = false,
  label,
  placeholder,
  isDisabled = false,
}: Props) => {
  return (
    <label>
      <div className="text-sm font-medium">
        {label}
        {isRequired && <span className="text-accent">*</span>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className={cn(
          'w-full px-4 py-2 max-sm:py-2.5 border placeholder:text-primary-dark bg-background focus:outline-none rounded-full',
          error ? 'border-error' : 'border-primary',
          isDisabled && 'opacity-50 cursor-not-allowed'
        )}
      />
      {error && <p className="mt-1 text-xs text-error">{error.message}</p>}
    </label>
  );
};
