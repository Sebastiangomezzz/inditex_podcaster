import { BrowserRouter as Router } from "react-router-dom";
//Components
import { Layout } from "./components/common/Layout/Layout";
import { Header } from "./components/common/Header/Header";
//Views (Podcaster component is a routing component)
import { PodCaster } from "./views/podCaster/PodCaster";

export const App = () => {
  return (
    <Router>
      <Layout header={<Header />}>
        <PodCaster />
      </Layout>
    </Router>
  );
};
