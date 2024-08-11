import NavBar from "../components/core/NavBar";
import Footer from "../components/core/Footer";
import "./globals.css";

const inter = ({ subsets: ["latin"] });

export const metadata = {
  title: "TheRealGRBow | Home",
  description:
    "TheRealGRBow, event organizer, and part time streamer on Twitch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="flex justify-center pb-3">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

