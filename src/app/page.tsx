import "./page.scss";
import Header from "../Component/Header/Header";
import Landing from "../Component/Landing/Landing";
import Footer from "../Component/Footer/Footer";
import Contact from "../Component/Contact/Contact";
import Content from "../Component/Content/Content";

export default function Home() {
  return (
    <div className="homePageContainer">
      <Header />
      <Landing />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}
