import { GlobalStyles } from './styles/GlobalStyles';

import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';

export function App() {
  return (
    <>
      <Layout>
        <NavBar />
      </Layout>

      <GlobalStyles />
    </>
  );
}