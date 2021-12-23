import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex-grow">{children}</main>
    </div>
  );
}
