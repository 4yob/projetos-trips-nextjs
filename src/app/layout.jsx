import "./globals.css";

export const metadata = {
    title: "TRIPS.COM",
    description: "Diário de Viagens",
    icons: {
        icon: "/icons/logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}