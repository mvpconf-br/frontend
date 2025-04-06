// src/components/shared/FormInput.tsx
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control, FieldValues, Path } from 'react-hook-form'

interface FormFieldsProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
}

const FormFields = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
}: FormFieldsProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="font-semibold text-base text-gray-dark">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type}
            className="w-full border-gray-medium text-gray-medium text-base pt-2 pr-2 pb-2 pl-4 h-14
    focus:border-none focus:text-primary-brand focus:outline-primary-brand
    focus-visible:ring-primary-brand/50 focus-visible:ring-[2px]"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFields
