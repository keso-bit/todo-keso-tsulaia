interface HeaderProps {
    projectName?: string;
    searchTerm?: string;
    onSearchChange?: (value: string) => void;
}

export default function Header({
    projectName = "დღის განმავლობაში შესასრულებელი ამოცანების სია",
    searchTerm = "",
    onSearchChange,
}: HeaderProps) {
    return (
        <header className="app-header">
            <span className="badge">TBC Tech School</span>
            <h1 className="app-title">დღის ამოცანები</h1>
            <p className="app-subtitle">{projectName}</p>

            {/* ძებნის ველი (Search Bar Markup) */}
            <div className="search-container">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    className="search-input"
                    placeholder="მოძებნე ამოცანა..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                />
            </div>
        </header>
    );
}
