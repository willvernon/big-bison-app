const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen items-center justify-center bg-[#111827]">
      {children}
    </main>
  );
};

export default AuthLayout;
