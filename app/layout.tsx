import { Outfit, Squada_One } from "next/font/google";
import "./styles/globals.scss";

// export const outfit = Outfit({
//   subsets: ["latin"],
//   display: "swap",
// });

// export const squada_one = Squada_One({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata = {
  title: "Home - Legion Universe",
  description: "Next generation superheroes",
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
