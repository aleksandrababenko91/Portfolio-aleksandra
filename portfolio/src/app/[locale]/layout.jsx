import Header from '@/src/components/shared/Header/Header';
import Footer from '@/src/components/shared/Footer/Footer';
import "./globals.css";


export const metadata = {
  title: "Portfolio Aleksandra Babenko",
  description: "Front-end developer Portfolio",
};

export default function LocaleLayout ({ children, params: { locale } }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );

}