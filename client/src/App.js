import { Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Layout from "./components/layout/Layout";
import DashboardPage from "./pages/dashboard";
import AboutUsPage from "./pages/aboutus";
import DestinationPage from "./pages/destinations";
import PastTripsPage from "./pages/pasttrips";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Footer from "./components/layout/Footer";
import ContactPage from "./pages/contact";

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/pasttrips" element={<PastTripsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Layout>
    </ApolloProvider>
  );
}

export default App;
