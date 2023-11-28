import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./routes/Router";
import GlobalStyle from "./utils/GlobalStyle";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}
