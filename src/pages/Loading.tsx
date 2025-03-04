const Loading = () => {
  return (
    <main className='h-screen max-h-screen w-full bg-[#d88188] bg-[url("/images/backgrounds/pink.png")] bg-cover bg-center bg-no-repeat dark:bg-[#205848] dark:bg-none'>
      <div className='mx-auto flex h-full max-w-2xl flex-col items-center justify-center text-center text-slate-100'>
        <span className='aspect-ratio loading loading-ring absolute aspect-square h-auto w-56' />
      </div>
    </main>
  );
};
export default Loading;
