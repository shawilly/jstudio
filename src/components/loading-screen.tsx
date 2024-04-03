export const LoadingScreen = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-primary">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white">Loading...</h1>
        <div className="animate-spin w-24 h-24 border-8 border-primary-foreground rounded-full">quickly, quickly</div>
      </div>
    </main>
  );
};
