import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export function FormFieldWrapper({ children }: { children: React.ReactNode }) {
  return (
    <FormItem>
      <FormLabel>Projet</FormLabel>
      {children} {/* Render `SelectProject` here */}
      <FormMessage />
    </FormItem>
  );
}
