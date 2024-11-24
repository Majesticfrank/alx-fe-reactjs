import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import from react-query
import PostsComponent from './components/PostsComponent';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the QueryClient instance to the entire app
    <QueryClientProvider client={queryClient}>
      <PostsComponent /> {/* Your PostsComponent will now have access to the QueryClient */}
    </QueryClientProvider>
  );
}

export default App;

