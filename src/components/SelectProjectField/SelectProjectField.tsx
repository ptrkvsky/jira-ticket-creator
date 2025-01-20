import { FormFieldWrapper } from '@/components/FormFieldWrapper/FormFieldWrapper';
import { SelectProject } from '@/components/SelectProjet/SelectProject';
import { FormField, FormItem, FormMessage } from '@/components/ui/form';

import { useFormContext } from 'react-hook-form';

export function SelectProjectField() {
  const form = useFormContext();
  console.log(form.watch('project'));

  return (
    <FormField
      control={form.control}
      name='project'
      render={({ field }) => (
        <FormItem>
          <FormFieldWrapper>
            <SelectProject field={field} />
          </FormFieldWrapper>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
