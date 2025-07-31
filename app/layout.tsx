// app/layout.tsx
import "@/styles/globals.css"; // Update path if your CSS is elsewhere

export const metadata = {
  title: "My App",
  description: "Built with App Router",
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
