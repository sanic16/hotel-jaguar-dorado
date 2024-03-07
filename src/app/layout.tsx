import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationContextProvider } from "@/context/navigation-context";
import Sidebar from "@/sections/navbar/Sidebar";
import Modal from "@/components/modal/Modal";
import { hotelName } from "@/utils/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: hotelName,
  description: "Hotel de lujo en Antigua Guatemala, con una vista espectacular al volcán de Agua. Habitaciones de lujo, restaurante, bar, piscina y spa. Reserva ahora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationContextProvider>
          <Sidebar />
          <main>
            {children}
          </main>
          <Modal />
        </NavigationContextProvider>
      </body>
    </html>
  );
}
