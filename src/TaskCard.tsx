interface TaskCardProps {
    taskDetails: string;
    completed: boolean;
    onToggle?: () => void;
}

export default function TaskCard({ taskDetails, completed, onToggle }: TaskCardProps) {
    return (
        <div
            className={`task-card ${completed ? "task-completed" : "task-pending"}`}
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onToggle?.();
                }
            }}
        >
            <div className="task-content">
                <span className={`task-checkbox ${completed ? "checked" : ""}`}>
                    {completed ? "✓" : ""}
                </span>
                <span className="task-title">{taskDetails}</span>
            </div>
            <span className={`status-badge ${completed ? "badge-completed" : "badge-pending"}`}>
                {completed ? "დასრულებულია" : "მუშაობის პროცესშია"}
            </span>
        </div>
    );
}
