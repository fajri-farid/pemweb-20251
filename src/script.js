// ------------------- PERSISTENSI DATA -------------------
const STORAGE_KEY = 'crud_mahasiswa'; // Key localStorage

// Load data dari localStorage, jika kosong kembalikan array kosong
const loadData = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

// Simpan array data ke localStorage
const saveData = (list) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

// ------------------- STATE -------------------
let data = loadData(); // Array data mahasiswa
let autoId = data.reduce((m, o) => Math.max(m, o.id), 0) + 1; // Auto-increment ID
let filteredData = [...data];

// ------------------- ELEMENT HTML -------------------
const form = document.getElementById('form-mahasiswa');
const elId = document.getElementById('id');
const elNama = document.getElementById('nama');
const elNim = document.getElementById('nim');
const elAlamat = document.getElementById('alamat');
const tbody = document.getElementById('tbody');
const btnReset = document.getElementById('btn-reset');
const elSearch = document.getElementById('search');
const elSort = document.getElementById('sort');
const sortWrapper = document.getElementById('sort-wrapper');
const trigger = sortWrapper.querySelector('.trigger');
const options = sortWrapper.querySelectorAll('.options li');
const triggerLabel = sortWrapper.querySelector('.trigger span');
const tableSection = document.getElementById('table-section');

// ------------------- FUNGSI RENDER -------------------
function render() {
  if (!Array.isArray(data)) filteredData = [];
  tbody.innerHTML = ''; // Kosongkan tabel sebelum render ulang

  // Hapus pesan "Data tidak ditemukan" jika ada
  const notFound = document.querySelector('#empty-state');
  if (notFound) notFound.remove();

  if (filteredData.length === 0) {
    const notFoundData = document.createElement('div');
    notFoundData.id = 'empty-state';
    notFoundData.innerHTML = `
      <img src="./assets/no-data.svg" alt="Data tidak ditemukan"/>
      <p>Data mahasiswa tidak ditemukan</p>
    `;
    tableSection.appendChild(notFoundData);
    return;
  }

  const sortedData = sortData(filteredData);

  sortedData.forEach((row, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
          <td>${idx + 1}</td>
          <td>${row.nama}</td>
          <td>${row.nim}</td>
          <td>${row.alamat}</td>
          <td class="table-actions">
    <div class="action-buttons">
      <button type="button" data-edit="${
        row.id
      }" class="edit" aria-label="Edit Data Mahasiswa ${row.nama}">Edit</button>
      <button type="button" data-del="${
        row.id
      }" class="hapus" aria-label="Hapus Data Mahasiswa ${
        row.nama
      }">Hapus</button>
    </div>
  </td>
        `;
    tbody.appendChild(tr);
  });
}

// ------------------- SEARCH FUNCTIONALITY START -------------------
function initSearchFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const searchKeyword = params.get('search') || '';
  if (searchKeyword) {
    elSearch.value = searchKeyword;
    filteredData = data.filter(
      (m) =>
        m.nama.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        m.nim.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  } else {
    filteredData = [...data];
  }
  render();
}

elSearch.addEventListener('input', (e) => {
  const searchKeyword = e.target.value.toLowerCase().trim();

  const params = new URLSearchParams(window.location.search);
  if (searchKeyword) {
    params.set('search', searchKeyword);
  } else {
    params.delete('search');
  }

  const queryString = params.toString();

  const newUrl = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname;
  window.history.replaceState({}, '', newUrl);

  if (searchKeyword === '') {
    filteredData = [...data];
  } else {
    filteredData = data.filter(
      (m) =>
        m.nama.toLowerCase().includes(searchKeyword) ||
        m.nim.toLowerCase().includes(searchKeyword)
    );
  }
  render();
});
// ------------------- SEARCH FUNCTIONALITY END -------------------

// ------------------- SORT FUNCTIONALITY START -------------------
trigger.addEventListener('click', () => {
  sortWrapper.classList.toggle('open');
});

options.forEach((option) => {
  option.addEventListener('click', () => {
    const value = option.getAttribute('data-value');
    const html = option.innerHTML;

    triggerLabel.innerHTML = html;
    elSort.value = value;
    elSort.parentElement.classList.remove('open');

    render();
  });
});

document.addEventListener('click', (e) => {
  if (!sortWrapper.contains(e.target)) {
    sortWrapper.classList.remove('open');
  }
});

function sortData(list) {
  const sortValue = elSort.value;

  if (sortValue === 'nama-asc') {
    return [...list].sort((a, b) => a.nama.localeCompare(b.nama));
  }
  if (sortValue === 'nama-desc') {
    return [...list].sort((a, b) => b.nama.localeCompare(a.nama));
  }
  if (sortValue === 'nim-asc') {
    return [...list].sort((a, b) => a.nim.localeCompare(b.nim));
  }
  if (sortValue === 'nim-desc') {
    return [...list].sort((a, b) => b.nim.localeCompare(a.nim));
  }
  return list;
}
// ------------------- SORT FUNCTIONALITY END -------------------

// ------------------- FORM SUBMIT (CREATE / UPDATE) -------------------
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Mencegah reload halaman

  const idVal = elId.value.trim();
  const nama = elNama.value.trim();
  const nim = elNim.value.trim();
  const alamat = elAlamat.value.trim();

  if (!nama || !nim || !alamat)
    return alert('Nama, NIM, dan Alamat wajib diisi.');

  if (idVal) {
    // UPDATE DATA
    const idNum = Number(idVal);
    const idx = data.findIndex((x) => x.id === idNum);
    if (idx >= 0) {
      data[idx].nama = nama;
      data[idx].nim = nim;
      data[idx].alamat = alamat;
    }
  } else {
    // CREATE DATA BARU
    data.push({ id: autoId++, nama, nim, alamat });
  }

  saveData(data); // Simpan data
  render(); // Render ulang tabel
  form.reset(); // Reset form
  elId.value = '';
  elNama.focus(); // Fokus ke input nama
});

// ------------------- RESET FORM -------------------
btnReset.addEventListener('click', () => {
  form.reset();
  elId.value = '';
  elNama.focus();
});

// ------------------- HANDLER TOMBOL EDIT / HAPUS -------------------
tbody.addEventListener('click', (e) => {
  const editId = e.target.getAttribute('data-edit');
  const delId = e.target.getAttribute('data-del');

  if (editId) {
    // EDIT DATA
    const item = data.find((x) => x.id === Number(editId));
    if (item) {
      elId.value = item.id;
      elNama.value = item.nama;
      elNim.value = item.nim;
      elAlamat.value = item.alamat;
      elNama.focus();
    }
  }

  if (delId) {
    // DELETE DATA
    const idNum = Number(delId);
    if (confirm('Yakin hapus data ini?')) {
      data = data.filter((x) => x.id !== idNum);
      saveData(data);
      render();
    }
  }
});

// ------------------- INIT -------------------
render(); // Render tabel saat halaman pertama kali dibuka
initSearchFromUrl(); // Inisialisasi pencarian dari URL
