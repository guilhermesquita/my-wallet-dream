import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface CardWalletProps {
  nameWallet: string;
  priceWallet: number;
  descriptionWallet?: string;
}

const CardWallet = ({
  nameWallet,
  priceWallet,
  descriptionWallet,
}: CardWalletProps) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="mb-4">
            <Card className="w-[193px] h-[178px] flex flex-col bg-mld-white700 border-2 border-black cursor-pointer hover:bg-mld-gray100 transition">
              <CardHeader className="flex flex-col justify-between h-full text-start">
                <CardTitle className="leading-[1.25] text-[20px]">
                  {nameWallet}
                </CardTitle>
                {descriptionWallet && (
                  <CardDescription className="text-[12px] text-black line-clamp-3">
                    {descriptionWallet}
                  </CardDescription>
                )}
                <p className="text-mld-gray300 text-[12px]">
                  valor total: R$ {priceWallet}
                </p>
              </CardHeader>
            </Card>
          </TooltipTrigger>
          {descriptionWallet && (
            <TooltipContent className="w-[400px] ml-3 space-y-3 p-3">
              <h4 className="text-[25px] font-semibold border-b-2 border-mld-gray200">
                {nameWallet}
              </h4>
              <p>{descriptionWallet}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default CardWallet;
