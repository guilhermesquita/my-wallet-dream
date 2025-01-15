import SectionDreams from "../_components/dreams/section";
import Header from "../_components/header/Header";
import SectionWallet from "../_components/wallets/section";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-10 space-y-11">
      <Header />

      <SectionWallet />
      <SectionDreams />
    </main>
  );
}
