import { FormCreateTicket } from '@/components/FormCreateTicket/FormCreateTicket';

export default async function CreateTicketPage() {
  return (
    <div className='flex min-h-screen'>
      <div className='w-full max-w-lg rounded-lg p-6 shadow-md'>
        <h1 className='mb-4 text-2xl font-bold text-gray-900 dark:text-white'>Créer un Ticket JIRA</h1>
        <FormCreateTicket />
      </div>
    </div>
  );
}
