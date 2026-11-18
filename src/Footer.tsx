export default function Footer() {
    return (
        <footer className="app-footer">
            <p className="footer-quote">
                ✨ "ყოველი შესრულებული ამოცანა ერთი ნაბიჯია მიზნისკენ"
            </p>
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} TBC Tech School Todo App</span>
                <span className="footer-dot">•</span>
                <span className="footer-author">Keso Tsulaia</span>
            </div>
        </footer>
    );
}
