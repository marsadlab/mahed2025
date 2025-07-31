// Only apply click toggle for mobile (max-width: 768px)
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = toggle.parentElement;
            parent.classList.toggle('open');
        }
    });
});

const mockData = {
    'task-1': [
        { id: 342408, f1: 0.72, accuracy: 0.73, precision: 0.71, recall: 0.7 },
        { id: 342726, f1: 0.72, accuracy: 0.72, precision: 0.72, recall: 0.72 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
        { id: 342740, f1: 0.71, accuracy: 0.72, precision: 0.7, recall: 0.71 },
    ],
    'task-2': [
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
        { id: 123456, f1: 0.81, accuracy: 0.8, precision: 0.79, recall: 0.82 },
    ],
    'task-3': [
        { id: 999999, f1: 0.61, accuracy: 0.63, precision: 0.6, recall: 0.62 },
        { id: 999999, f1: 0.61, accuracy: 0.63, precision: 0.6, recall: 0.62 },
        { id: 999999, f1: 0.61, accuracy: 0.63, precision: 0.6, recall: 0.62 },
        { id: 999999, f1: 0.61, accuracy: 0.63, precision: 0.6, recall: 0.62 },
        { id: 999999, f1: 0.61, accuracy: 0.63, precision: 0.6, recall: 0.62 },
        { id: 999999, f1: 0.61, accuracy: 0.63, precision: 0.6, recall: 0.62 },
        { id: 999999, f1: 0.61, accuracy: 0.63, precision: 0.6, recall: 0.62 },
    ],
};

function openDrawer(taskId) {
    document.getElementById('taskTitle').innerText = taskId
        .replace('-', ' ')
        .toUpperCase();
    const tbody = document.getElementById('drawerTableBody');
    tbody.innerHTML = '';

    const rows = mockData[taskId] || [];
    rows.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.id}</td>
        <td>${item.f1.toFixed(2)}</td>
        <td>${item.accuracy.toFixed(2)}</td>
        <td>${item.precision.toFixed(2)}</td>
        <td>${item.recall.toFixed(2)}</td>
      `;
        tbody.appendChild(tr);
    });

    document.getElementById('bottomDrawer').classList.add('open');
}

function closeDrawer() {
    document.getElementById('bottomDrawer').classList.remove('open');
}
