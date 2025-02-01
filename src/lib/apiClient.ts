import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_DOMAIN_IP, // Replace with your FastAPI base URL
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Placeholder: Modify the request before it is sent
    // Examples:
    // - Add Authorization headers
    // - Attach custom headers
    // - Log outgoing requests

    return config; // Always return the modified config
  },
  (error: AxiosError) => {
    // Placeholder: Handle errors during request setup
    // Examples:
    // - Log the error
    // - Retry logic for request preparation errors

    return Promise.reject(error); // Always reject the error
  },
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Placeholder: Handle responses globally
    // Examples:
    // - Transform response data
    // - Log successful responses
    // - Handle specific status codes

    return response; // Always return the response
  },
  (error: AxiosError) => {
    // Placeholder: Handle errors globally
    // Examples:
    // - Retry logic
    // - Log errors
    // - Redirect on 401 Unauthorized

    return Promise.reject(error); // Always reject the error
  },
);

// Define specific types for `data` and `params`
type RequestData = Record<string, unknown>;
type RequestParams = Record<string, string | number | boolean | undefined>;

// Centralized API request function with strong typing
export const apiRequest = async <T>(
  method: AxiosRequestConfig['method'], // HTTP method (GET, POST, PUT, DELETE, etc.)
  url: string, // API endpoint
  data: RequestData = {}, // Request body (for POST, PUT, etc.)
  params: RequestParams = {}, // Query parameters (for GET requests)
): Promise<T> => {
  try {
    // Ensure method is in uppercase
    // const normalizedMethod =
    //   method?.toUpperCase() as AxiosRequestConfig["method"];

    const response: AxiosResponse<T> = await apiClient({
      method,
      url,
      data,
      params,
    });
    console.log(response);
    return response.data; // Return the response data as the specified type
  } catch (error) {
    console.error('API Request Error:', error);
    throw error; // Forward the error for handling in the calling code
  }
};
