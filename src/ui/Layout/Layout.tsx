import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* Content goes here */}
        {children}
      </main>
      <footer>{/* Footer goes here */}</footer>
    </>
  );
}
