export const LoadingScreen = () => {
  return (
    <main className="flex h-screen items-center justify-center bg-primary">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-[#f9f9f9]">Loading...</h1>
        <div className="h-24 w-24 animate-spin rounded-full border-8 border-primary-foreground">
          quickly, quickly
        </div>
      </div>
    </main>
  );
};
