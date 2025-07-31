// app/layout.tsx
import '@/styles/globals.css'; // update path if needed

export const metadata = {
  title: 'My App',
  description: 'Built with Next.js App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
