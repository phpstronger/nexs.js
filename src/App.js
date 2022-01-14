import Header from "@Components/Header";
import Footer from "@Components/Footer";

const App = ({
    children
}) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default App;