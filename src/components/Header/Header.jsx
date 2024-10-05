import Nav from "../Nav/Nav.jsx";
export default function HeaderComponent() {
    const Logo = './logo.png'
    return (
        <div className="container mx-auto max-w-[1170px]">
            <div className="flex h-[130px] items-center justify-between">
                <div><img src={Logo} alt="Logo Principal" /></div>
                <div><Nav /></div>
            </div>
        </div>
    );
}