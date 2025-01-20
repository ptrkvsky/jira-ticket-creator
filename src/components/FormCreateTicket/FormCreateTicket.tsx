'use client';

import { SelectProjectField } from '@/components/SelectProjectField/SelectProjectField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { useFormCreateTicket } from '@/hooks/useFormCreateTicket';
import { IFormCreateTicket } from '@/schemas/SchemaCreateTicket';

import { FormProvider } from 'react-hook-form';

export function FormCreateTicket() {
  const form = useFormCreateTicket();

  function onSubmit(data: IFormCreateTicket) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
          <SelectProjectField />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </FormProvider>
  );
}
