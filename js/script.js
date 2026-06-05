let verbData = [];

// panggil file json
fetch('/language/id-ID.json')
.then(response => response.json())
.then(data => {
    verbData = data.verb;
    renderTable(verbData);
});

// Render tabel verb
function renderTable(data) {
    const tableBody = document.getElementById('verb-table');
    tableBody.innerHTML = ''; // Kosongkan tabel sebelum render
    
    data.forEach(item => {
        // Menambahkan class 'search' pada setiap baris agar bisa dipanggil
        const row = document.createElement('tr');
        row.className = 'search'; 
        row.innerHTML = `
            <td>${item.v1}</td>
            <td>${item.v2}</td>
            <td>${item.v3}</td>
            <td>${item.ing}</td>
            <td>${item.tr}</td>
            <td><span class="tag ${item.type}">${item.type}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

// Fitur Search
document.getElementById('searchBar').addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('.search'); // Memanggil semua baris dengan class .search

    rows.forEach(row => {
        const v1 = row.cells[0].textContent.toLowerCase();
        const v2 = row.cells[1].textContent.toLowerCase();
        const v3 = row.cells[2].textContent.toLowerCase();
        const v3 = row.cells[3].textContent.toLowerCase();
        const tr = row.cells[4].textContent.toLowerCase();
        
        // Cek apakah input ada di V1 atau di Arti (tr)
        if (v1.includes(searchTerm) || v2.includes(searchTerm) || v3.includes(searchTerm) || tr.includes(searchTerm)) {
            row.style.display = ''; // Tampilkan
        } else {
            row.style.display = 'none'; // Sembunyikan
        }
    });
});