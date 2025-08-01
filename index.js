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
        { rank:1, name: 'HTU', f1: 0.723, accuracy: 0.725, precision: 0.717, recall: 0.730 },
        { rank:2, name: 'NYUAD', f1: 0.721, accuracy: 0.723, precision: 0.716, recall: 0.729 },
        { rank:3, name: 'AAA', f1: 0.707, accuracy: 0.712, precision: 0.705, recall: 0.710 },
        { rank:3, name: 'NguyenTriet', f1: 0.707, accuracy: 0.705, precision: 0.692, recall: 0.737 },
        { rank:4, name: 'LoveHeaven', f1: 0.703, accuracy: 0.713, precision: 0.710, recall: 0.699 },
        { rank:5, name: 'lmoudjari', f1: 0.701, accuracy: 0.707, precision: 0.704, recall: 0.698 },
        { rank:6, name: 'phucclone', f1: 0.700, accuracy: 0.700, precision: 0.689, recall: 0.718 },
        { rank:7, name: 'novatriee', f1: 0.698, accuracy: 0.697, precision: 0.685, recall: 0.716 },
        { rank:8, name: 'CUET_Zahra_Duo', f1: 0.695, accuracy: 0.699, precision: 0.694, recall: 0.697 },
        { rank:9, name: 'ahmedabdou', f1: 0.695, accuracy: 0.705, precision: 0.704, recall: 0.699 },
        { rank:10, name: 'trantranuit', f1: 0.694, accuracy: 0.700, precision: 0.696, recall: 0.691 },
        { rank:11, name: 'SmolLab_SEU', f1: 0.682, accuracy: 0.688, precision: 0.678, recall: 0.694 },
        { rank:12, name: 'Quasar', f1: 0.674, accuracy: 0.689, precision: 0.699, recall: 0.658 },
        { rank:13, name: 'abit7431', f1: 0.673, accuracy: 0.682, precision: 0.674, recall: 0.673 },
        { rank:14, name: 'xya22er', f1: 0.672, accuracy: .676, precision: 0.667, recall: 0.677 },
        { rank:15, name: 'sudo_apt', f1: 0.671, accuracy: 0.672, precision: 0.662, recall: 0.689 },
        { rank:16, name: 'Not Dot', f1: 0.669, accuracy: 0.680, precision: 0.674, recall: 0.664 },
        { rank:17, name: 'michaelibrahim', f1: 0.665, accuracy: 0.686, precision: 0.692, recall: .650 },
        { rank:18, name: 'minhtriet', f1: 0.659, accuracy: 0.654, precision: 0.647, recall: 0.696 },
        { rank:18, name: 'nguyenminhtriet', f1: 0.659, accuracy: 0.654, precision: 0.647, recall: 0.696 },
        { rank:19, name: 'Senimeo', f1: 0.651, accuracy: 0.660, precision: 0.653, recall: 0.658 },
        { rank:20, name: 'saham', f1: 0.650, accuracy: 0.659, precision: 0.653, recall: 0.647 },
        { rank:20, name: 'AraNLP', f1: 0.650, accuracy: 0.677, precision: 0.696, recall: 0.630 },
        { rank:21, name: 'turabusmani', f1: 0.647, accuracy: 0.662, precision: 0.662, recall: 0.638 },
        { rank:22, name: 'ANLP-UniSo', f1: 0.595, accuracy: 0.595, precision: 0.585, recall: 0.630 },
        { rank:23, name: 'REGLAT', f1: 0.579, accuracy: 0.580, precision: 0.568, recall: 0.605 },
        { rank:24, name: 'shadmansaleh', f1: 0.483, accuracy: 0.480, precision: 0.518, recall: 0.598 },
        { rank:25, name: 'ibad-ur-rehman', f1: 0.481, accuracy: 0.656, precision: 0.490, recall: 0.475 },
    ],
    'task-2': [
        { rank:1, name: 'NYUAD', f1: 0.578, accuracy: 0.750, precision: 0.612, recall: 0.578 },
        { rank:2, name: 'NguyenTriet', f1: 0.553, accuracy: 0.721, precision: 0.543, recall: 0.589 },
        { rank:3, name: 'HTU', f1: 0.535, accuracy: 0.713, precision: 0.549, recall: 0.576 },
        { rank:4, name: 'CUET_823', f1: 0.518, accuracy: 0.729, precision: 0.617, recall: 0.509 },
        { rank:5, name: 'SmolLab_SEU', f1: 0.514, accuracy: 0.709, precision: 0.531, recall: 0.525 },
        { rank:6, name: 'Quasar', f1: 0.480, accuracy: 0.727, precision: 0.499, recall: 0.480 },
        { rank:7, name: 'deleted_user_25186', f1: 0.459, accuracy: 0.692, precision: 0.476, recall: 0.457 },
        { rank:8, name: 'saham', f1: 0.434, accuracy: 0.714, precision: 0.474, recall: 0.441 },
        { rank:9, name: 'turabusmani', f1: 0.398, accuracy: 0.495, precision: 0.385, recall: 0.453 },
        { rank:10, name: 'MultiMinds', f1: 0.349, accuracy: 0.482, precision: 0.338, recall: 0.398 },
        { rank:11, name: 'ashfaq', f1: 0.336, accuracy: 0.525, precision: 0.332, recall: 0.387 },


    ],
    'task-3': [
        { rank:1, name: 'NYUAD', f1: 0.796, accuracy: 0.8, precision: 0.794, recall: 0.804 },
        { rank:2, name: 'yassirea', f1: 0.750, accuracy: 0.758, precision: 0.748, recall: 0.753 },
        { rank:3, name: 'Araminds', f1: 0.744, accuracy: 0.762, precision: 0.756, recall: 0.739 },
        { rank:4, name: 'thinkingNodes', f1: 0.718, accuracy: 0.754, precision: 0.776, recall: 0.711 },
        { rank:5, name: 'Not Dot', f1: 0.684, accuracy: 0.728, precision: 0.746, recall: 0.681 },
        { rank:6, name: 'joy_2004114', f1: 0.629, accuracy: 0.664, precision: 0.648, recall: 0.627 },
        { rank:7, name: 'dark5037', f1: 0.497, accuracy: 0.648, precision: 0.796, recall: 0.560 },
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
        <td>${item.rank}</td>
        <td>${item.name}</td>
        <td>${item.f1.toFixed(3)}</td>
        <td>${item.accuracy.toFixed(3)}</td>
        <td>${item.precision.toFixed(3)}</td>
        <td>${item.recall.toFixed(3)}</td>
      `;
        tbody.appendChild(tr);
    });

    document.getElementById('bottomDrawer').classList.add('open');
}

function closeDrawer() {
    document.getElementById('bottomDrawer').classList.remove('open');
}
