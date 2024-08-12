export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-factura bg-fixed bg-cover bg-no-repeat h-full">
      <div className="absolute inset-0 w-full h-full bg-[rgba(34,34,34,0.3)] content-none">
        {children}
      </div>
    </div>
  );
}
