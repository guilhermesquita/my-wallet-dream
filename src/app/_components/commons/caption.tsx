import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import InfoIcon from "./icons/infoIcon";

export interface CaptionProps {
  title: string;
  textTooltip?: string;
}

const Caption = ({ textTooltip, title }: CaptionProps) => {
  return (
    <h3 className="font-bold text-[30px] flex gap-1">
      {title}
      {textTooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="mb-4">
              <InfoIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>{textTooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </h3>
  );
};

export default Caption;
