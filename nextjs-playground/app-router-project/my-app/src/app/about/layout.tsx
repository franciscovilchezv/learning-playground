export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>Test</p>
      <section>{children}</section>
    </div>
  );
}
