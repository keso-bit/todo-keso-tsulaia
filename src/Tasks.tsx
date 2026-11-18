import { useState } from "react";
import TaskCard from "./TaskCard";

type FilterType = "all" | "completed" | "pending";

export default function Tasks() {
    const [filter, setFilter] = useState<FilterType>("all");

    const [allTasks, setAllTasks] = useState([
        {
            id: 1,
            title: "დილის ვარჯიში და საუზმე",
            completed: true,
        },
        {
            id: 2,
            title: "TBC Tech School-ის ლექციის ნახვა",
            completed: true,
        },
        {
            id: 3,
            title: "React-ის დავალების დაწერა",
            completed: false,
        },
        {
            id: 4,
            title: "კომპონენტების სტილების გამართვა",
            completed: false,
        },
        {
            id: 5,
            title: "დავალების რევიუ და გაგზავნა",
            completed: false,
        },
    ]);

    const toggleTask = (id: number) => {
        setAllTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const totalCount = allTasks.length;
    const completedCount = allTasks.filter((t) => t.completed).length;
    const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    const filteredTasks = allTasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    });

    return (
        <section className="tasks-section">
            {/* ცალ-ცალკე საკლიკო სტატისტიკის ბარათები */}
            <div className="stats-grid">
                {/* 1. სულ ამოცანები */}
                <button
                    type="button"
                    className={`stat-card ${filter === "all" ? "active" : ""}`}
                    onClick={() => setFilter("all")}
                >
                    <div className="stat-icon">📋</div>
                    <div className="stat-info">
                        <span className="stat-value">{totalCount}</span>
                        <span className="stat-label">ყველა ამოცანა</span>
                    </div>
                </button>

                {/* 2. შესრულებული რაოდენობა */}
                <button
                    type="button"
                    className={`stat-card ${filter === "completed" ? "active" : ""}`}
                    onClick={() => setFilter(filter === "completed" ? "all" : "completed")}
                >
                    <div className="stat-icon">✅</div>
                    <div className="stat-info">
                        <span className="stat-value">{completedCount} / {totalCount}</span>
                        <span className="stat-label">შესრულებული</span>
                    </div>
                </button>

                {/* 3. დაგროვილი პროცენტი */}
                <button
                    type="button"
                    className={`stat-card ${filter === "pending" ? "active" : ""}`}
                    onClick={() => setFilter(filter === "pending" ? "all" : "pending")}
                >
                    <div className="stat-icon">📈</div>
                    <div className="stat-info">
                        <span className="stat-value">{progressPercent}%</span>
                        <span className="stat-label">პროგრესი</span>
                    </div>
                </button>
            </div>

            {/* პროგრესის ზოლი */}
            <div className="progress-container">
                <div className="progress-info">
                    <span>დღის საერთო პროგრესი</span>
                    <span>{completedCount} შესრულებული {totalCount}-დან ({progressPercent}%)</span>
                </div>
                <div className="progress-bar-bg">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* ფილტრის ინდიკატორი */}
            {filter !== "all" && (
                <div className="filter-notice">
                    <span>
                        ნაჩვენებია: <strong>{filter === "completed" ? "მხოლოდ შესრულებული" : "შესასრულებელი (პროცესში)"}</strong>
                    </span>
                    <button
                        type="button"
                        className="clear-filter-btn"
                        onClick={() => setFilter("all")}
                    >
                        ყველას ჩვენება
                    </button>
                </div>
            )}

            {/* დავალებების სია */}
            <div className="tasks-list">
                {filteredTasks.length === 0 ? (
                    <div className="empty-state">
                        {filter === "completed" 
                            ? "ჯერ არცერთი ამოცანა არ არის შესრულებული." 
                            : "ყველა ამოცანა შესრულებულია! 🎉"}
                    </div>
                ) : (
                    filteredTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            taskDetails={task.title}
                            completed={task.completed}
                            onToggle={() => toggleTask(task.id)}
                        />
                    ))
                )}
            </div>
        </section>
    );
}
