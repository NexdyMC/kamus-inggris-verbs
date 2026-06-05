fetch('language/id-ID.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('verb-table');
        data.verb.forEach(item => {
            const row = `<tr>
                <td>${item.v1}</td>
                <td>${item.v2}</td>
                <td>${item.v3}</td>
                <td>${item.ing}</td>
                <td>${item.tr}</td>
                <td><span class="tag ${item.type}">${item.type}</span></td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error:', error));