export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative h-full">{children}</div>;
}
