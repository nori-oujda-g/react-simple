import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
interface NavProp {
    id: number
    link: string;
    text: string;
}
const links: NavProp[] = [
    { id: 1, link: '#/', text: 'home' },
    { id: 2, link: '#/test', text: 'Test' },
    { id: 3, link: '#/counter', text: 'Counter' },
    { id: 4, link: '#/clients', text: 'Clients' },
    { id: 5, link: '#/tasktable', text: 'Tasktable' },
    { id: 6, link: '#/json', text: 'json' },
    // {id:100, link: '', text: '' },
]

function MyNave() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >MY FRONT</Navbar.Brand>
                    <Nav className="me-auto">
                        {links.map((link) => (<Nav.Link key={link.id} href={link.link}>{link.text} </Nav.Link>))}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNave;