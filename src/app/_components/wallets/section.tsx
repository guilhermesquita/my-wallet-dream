import { WalletListMock } from "@/app/_mock/wallets-mock";
import InfoIcon from "../commons/icons/infoIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import AddWalletButton from "./add-wallet-button";
import CardWallet from "./card";

const SectionWallet = () => {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-[30px] flex gap-1">
        Meus Wallets
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="mb-4">
              <InfoIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h3>
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
