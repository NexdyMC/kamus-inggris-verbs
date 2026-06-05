let verbData = [];

// Fetch data
fetch('/language/id-ID.json')
    .then(response => response.json())
    .then(data => {
        verbData = data.verb;
        renderTable(verbData);
    });

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
        const tr = row.cells[4].textContent.toLowerCase();
        
        // Cek apakah input ada di V1 atau di Arti (tr)
        if (v1.includes(searchTerm) || tr.includes(searchTerm)) {
            row.style.display = ''; // Tampilkan
        } else {
            row.style.display = 'none'; // Sembunyikan
        }
    });
});