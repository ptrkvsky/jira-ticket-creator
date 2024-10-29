import Image from 'next/image';

import ExtensionDetails from '@/app/(delete-this-and-modify-page.tsx)/ExtensionDetails';
import NavigationBar from '@/app/(delete-this-and-modify-page.tsx)/NavigationBar';
import SetupDetails from '@/app/(delete-this-and-modify-page.tsx)/SetupDetails';

const HomePage: React.FC = () => {
    return (
        <main className='mx-auto flex h-screen max-w-3xl flex-col justify-center gap-6 px-3 pt-6 font-[family-name:var(--font-geist-sans)] sm:gap-12 sm:px-0 sm:pt-0'>
            <NavigationBar />
            <div className='justify-centersm:items-start row-start-2 flex flex-col items-center gap-8'>
                <div className='flex items-center gap-4'>
                    <Image
                        className='dark:invert'
                        src='https://nextjs.org/icons/next.svg'
                        alt='Next.js logo'
                        width={180}
                        height={38}
                        priority
                    />
                    <h6 className='text-3xl font-bold'>+</h6>
                    {/* prettier-ignore */}
                    <div className="mr-4 flex items-center space-x-2 lg:mr-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-8"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokelinecapp="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokelinecapp="round" stroke-linejoin="round" stroke-width="32"></line></svg><span className="hidden font-bold lg:inline-block text-lg">shadcn/ui</span></div>
                </div>
                <ol className='list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left'>
                    <li className='mb-2'>
                        Get started by editing{' '}
                        <code className='rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]'>
                            src/app/page.tsx
                        </code>
                        .
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>
                <div className='flex items-center gap-4'>
                    <a
                        className='flex h-10 flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-neutral-200 px-4 text-sm transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 sm:h-12 sm:px-5 sm:text-base'
                        href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Image
                            className='invert dark:invert-0'
                            src='https://nextjs.org/icons/vercel.svg'
                            alt='Vercel logomark'
                            width={20}
                            height={20}
                        />
                        Deploy now
                    </a>
                    <a
                        className='flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base'
                        href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Read Next.js docs
                    </a>
                </div>
            </div>
            <div className='row-start-3 hidden flex-wrap items-center justify-center gap-6 sm:flex'>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image aria-hidden src='https://nextjs.org/icons/file.svg' alt='File icon' width={16} height={16} />
                    Learn
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/window.svg'
                        alt='Window icon'
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/globe.svg'
                        alt='Globe icon'
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </div>
            <div className='space-y-6'>
                <h2 className='text-center text-lg'>Whats included?</h2>
                <SetupDetails />
            </div>
            <div className='space-y-6'>
                <h2 className='text-center text-lg'>VS Code Extensions</h2>
                <ExtensionDetails />
            </div>
        </main>
    );
};

export default HomePage;
