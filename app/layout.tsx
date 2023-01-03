import Head from "./head";
import Providers from "./providers"

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
