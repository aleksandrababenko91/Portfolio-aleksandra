import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer/Footer';
import "../app/styles/global.scss";

export const metadata = {
  title: "Portfolio Aleksandra Babenko",
  description: "Front-end developer Portfolio",
};

export default function LocaleLayout ({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );

}