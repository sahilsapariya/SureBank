// Mapping of HTTP error status codes to user-friendly error messages
export const errorMessages: Record<number, string> = {
  400: "Oops! Something went wrong. Please check your input.",
  401: "You are not logged in. Please log in to continue.",
  403: "Access denied. You do not have permission to access this resource.",
  404: "We couldn't find what you were looking for.",
  408: "The request took too long. Please try again later.",
  500: "Something went wrong on our end. Please try again later.",
  502: "Bad Gateway. The server is temporarily unavailable.",
  503: "Service is currently unavailable. Please try again later.",
  504: "Request timed out. Please try again later.",
};

// A generic error message used when an unexpected error occurs
export const genericErrorMessage =
  "An unexpected error occurred. Please try again.";
