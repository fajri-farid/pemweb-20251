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

// ------------------- ELEMENT HTML -------------------
const form = document.getElementById('form-mahasiswa');
const elId = document.getElementById('id');
const elNama = document.getElementById('nama');
const elNim = document.getElementById('nim');
const elAlamat = document.getElementById('alamat');
const tbody = document.getElementById('tbody');
const btnReset = document.getElementById('btn-reset');

// ------------------- FUNGSI RENDER -------------------
function render() {
  if (!Array.isArray(data)) data = [];
  tbody.innerHTML = ''; // Kosongkan tabel sebelum render ulang
  data.forEach((row, idx) => {
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
