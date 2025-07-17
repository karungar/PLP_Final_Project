import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const LoadingSpinner = ({ className }) => {
  return (
    <Loader2 
      className={cn("animate-spin text-blue-600", className)} 
    />
  );
};

export default LoadingSpinner;
