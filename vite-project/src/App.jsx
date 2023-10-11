import {Layout} from "antd";
import styles from './App.module.css';
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";


const App = () => {
    return (
        <Layout className={styles.layout}>
            <Header />
            <Main />
            <Footer />
        </Layout>
    );
}

export default App
