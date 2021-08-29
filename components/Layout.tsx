import Container from 'react-bootstrap/Container';
import Seo from './Seo';
import Navigation from './Navigation';
import Footer from '../components/Footer';

const LayoutContainer: React.FC = ({ children }) => {
    return (
        <div>
            <Seo />
            <Navigation />
            <Container className={"p-4"}>
                {children}
            </Container>
            <Footer />
        </div>
    );
}

export default LayoutContainer;