import "../app/global.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationBar } from "@/components/navigation_bar";
import { M_PLUS_Rounded_1c , Open_Sans} from "next/font/google";

const mplus = M_PLUS_Rounded_1c({ variable: '--font-M-Plus-Rounded-mono', weight: '400' , subsets: ['latin'] , display: 'swap' });
const opensans = Open_Sans({ variable: '--font-Open-Sans', weight: '400' , subsets: ['latin'] , display: 'swap' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html  lang="en">
     
      <head />
     
      <body className={`${mplus.className} bg-background min-h-screen font-sans antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavigationBar />

          <main className="  mx-auto flex-grow p-4">{children}

         
          
          </main>
          </ThemeProvider>
      </body>
     
    </html>

  );
}
