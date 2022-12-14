import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingContextProvider } from "../../context/LoadingContext";

const queryClient = new QueryClient();

export const TestWrapperComponentWithBrowserRouter = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider value={{ isContextLoading: true }}>
        <BrowserRouter>{children}</BrowserRouter>
      </LoadingContextProvider>
    </QueryClientProvider>
  );
};

export const TestWrapperComponentWithMemoryRouter = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider value={{ isContextLoading: true }}>
        <MemoryRouter>{children}</MemoryRouter>
      </LoadingContextProvider>
    </QueryClientProvider>
  );
};
