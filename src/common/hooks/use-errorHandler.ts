import {
  errorMessages,
  genericErrorMessage,
} from "@surebank/lib/errorMessages";
import logger from "@surebank/lib/logger";
import { useToast } from "./use-toast";

interface ErrorResponse {
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
  status?: number;
  message?: string;
}

export const useErrorHandler = () => {
  const { toast } = useToast();

  const handleError = (
    errorOrMessage: ErrorResponse | string,
    fallbackMessage?: string,
  ) => {
    let statusCode: number | undefined;
    let userMessage: string;

    if (
      typeof errorOrMessage !== "string" &&
      (errorOrMessage.response || errorOrMessage.status)
    ) {
      statusCode =
        errorOrMessage.response?.status ?? errorOrMessage.status ?? 0;
      userMessage =
        errorOrMessage.response?.data?.message ??
        errorMessages[statusCode] ??
        fallbackMessage ??
        genericErrorMessage;

      logger.error("API Error Details:", errorOrMessage);

      toast({
        title: "Error",
        description: userMessage,
        variant: "destructive", // Adjust styling as needed
      });

      return { statusCode, userMessage };
    }

    userMessage =
      typeof errorOrMessage === "string"
        ? errorOrMessage
        : (fallbackMessage ?? genericErrorMessage);

    logger.error("Custom Error:", userMessage);

    toast({
      title: "Error",
      description: userMessage,
      variant: "destructive",
    });

    return { userMessage };
  };

  return { handleError };
};
