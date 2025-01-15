import { WalletListMock } from "@/app/_mock/wallets-mock";
import AddWalletButton from "./add-wallet-button";
import CardWallet from "./card";
import Caption from "../commons/caption";

const SectionWallet = () => {
  return (
    <div className="space-y-3">
      <Caption title="Meus Wallets" textTooltip="qualquer texto aqui" />
      <div className="flex flex-wrap gap-12">
        {WalletListMock.map((wallet) => {
          return (
            <CardWallet
              key={wallet.idWallet}
              nameWallet={wallet.nameWallet}
              descriptionWallet={wallet.descriptionWallet}
              priceWallet={wallet.value}
            />
          );
        })}
        <AddWalletButton />
      </div>
    </div>
  );
};

export default SectionWallet;
