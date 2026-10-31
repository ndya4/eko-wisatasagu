"use strict";

/* ============================================================
   GAMBAR: file di folder img/ (nama file = kunci di bawah)
   Foto yang belum ada otomatis diganti latar hijau polos.
   ============================================================ */
const IMG = {};
["hero", "pemandu", "gerbang", "menyaring", "menokok", "goti", "menebang", "ampas-sagu", "gazebo", "dapur-bakar", "pusat-pengolahan", "paparisa", "sagu-gula", "sinole", "tomi-tomi", "mie-sagu"]
  .forEach(k => IMG[k] = ["img/" + k + ".jpg"]);

const GALERI = [
  { src: ["img/gerbang.jpg"], cap: "Gerbang masuk Eko Wisata Sagu Negeri Rutong" },
  { src: ["img/hero.jpg"], cap: "Gapura kayu di tengah hutan sagu" },
  { src: ["img/gazebo.jpg"], cap: "Gazebo istirahat di dalam hutan sagu" },
  { src: ["img/pusat-pengolahan.jpg"], cap: "Pusat pengolahan sagu (goti) dan papan proses pembuatan sagu" },
  { src: ["img/pemandu.jpg"], cap: "Pemandu menjelaskan pengolahan sagu kepada pelajar" },
  { src: ["img/menebang.jpg"], cap: "Warga membelah batang sagu" },
  { src: ["img/ampas-sagu.jpg"], cap: "Empulur sagu setelah ditokok" },
  { src: ["img/menokok.jpg"], cap: "Menokok empulur sagu dengan alat tradisional" },
  { src: ["img/menyaring.jpg"], cap: "Pati sagu hasil penyaringan" },
  { src: ["img/goti.jpg"], cap: "Talang penyaringan dan pengendapan pati" },
  { src: ["img/dapur-bakar.jpg"], cap: "Dapur Bakar Sagu" },
  { src: ["img/paparisa.jpg"], cap: "Paparisa Sagu, pondok peralatan sagu tradisional" },
  { src: ["img/sagu-gula.jpg"], cap: "Sagu gula" },
  { src: ["img/sinole.jpg"], cap: "Sinole" },
  { src: ["img/tomi-tomi.jpg"], cap: "Tomi-Tomi Wine produksi Rutong" }
];

/* ============================================================
   DATA (berdasarkan jurnal Marsegu 2024, ANTARA, dan RRI)
   ============================================================ */
const atraksi = [
  { img: "gerbang", t: "Jelajah Hutan Sagu & Jalur Wa'a", d: "Berjalan di hutan sagu seluas 14,5 hektare lewat jalur pelepah sagu yang nyaman dan teduh, sambil mengenal jenis dan ciri pohon sagu." },
  { img: "pemandu", t: "Belajar Bersama Pemandu", d: "Pemandu warga Rutong menjelaskan sagu dan cara pengolahannya, cocok untuk pelajar, keluarga, dan rombongan." },
  { img: "menyaring", t: "Pengolahan Sagu Tradisional", d: "Melihat proses dari menebang dan membelah batang, menumbuk empulur, menyaring pati, hingga mengendapkannya." }
];

atraksi.push({ img: "dapur-bakar", t: "Dapur Bakar & Paparisa Sagu", d: "Mengunjungi dapur bakar sagu dan pondok paparisa yang memajang peralatan pengolahan sagu tradisional." });
const kuliner = [
  { t: "Papeda & Ikan Kuah Kuning", d: "Bubur sagu kental dengan ikan berkuah kuning, bagian dari Paket Galoba." },
  { t: "Mie Sagu", d: "Mi dari pati sagu buatan kelompok usaha mie sagu Rutong, disajikan sebagai makan siang pada Paket Tomi-Tomi." },
  { t: "Sagu Gula", d: "Olahan sagu tradisional yang dicampur gula merah dan kelapa." },
  { t: "Karu-Karu & Uha", d: "Karu-karu: campuran pati sagu dan kelapa mentah yang digoreng. Uha: campuran serupa yang dibakar dalam bungkusan." },
  { t: "Sinole", d: "Kudapan olahan sagu yang dijajakan di lokasi wisata." },
  { t: "Tomi-Tomi", d: "Buah tomi-tomi diolah warga menjadi sirop, wine berkadar alkohol sekitar 1%, dan selai." }
];

const sagoSteps = [
  { t: "Menebang & Membelah", img: "menebang", cap: "Menebang dan membelah batang sagu", d: "Pohon sagu yang sudah matang ditebang, lalu batangnya dibelah untuk mengambil empulur, bagian dalam batang yang mengandung pati." },
  { t: "Menumbuk Empulur", img: "menokok", cap: "Menokok empulur sagu", d: "Empulur ditumbuk dengan alat tradisional hingga menjadi serpihan halus. Di Maluku, proses ini dikenal dengan istilah menokok." },
  { t: "Menyaring Pati", img: "menyaring", cap: "Pati sagu hasil penyaringan", d: "Serpihan diremas dengan air agar pati terlepas dari serat, lalu disaring dengan peralatan tradisional." },
  { t: "Mengendapkan di Goti", img: "goti", cap: "Talang penyaringan pati", d: "Air yang membawa pati ditampung dan didiamkan di goti sehingga pati sagu mengendap di dasarnya." },
  { t: "Diolah Jadi Hidangan", img: "dapur-bakar", cap: "Dapur bakar sagu, tempat pati diolah", d: "Pati yang terkumpul dikeringkan atau langsung dimasak menjadi papeda, mie sagu, sagu lempeng, dan aneka olahan lain." }
];

const persiapan = [
  "Pakaian nyaman dan menyerap keringat",
  "Alas kaki yang nyaman untuk berjalan",
  "Topi atau payung serta tabir surya",
  "Air minum pribadi",
  "Kamera atau ponsel dengan baterai penuh",
  "Hubungi pengelola untuk konfirmasi jadwal",
  "Hormati adat dan jaga kebersihan hutan sagu"
];

const quizData = [
  { q: "Ekowisata Sagu Rutong berada di kecamatan apa?", o: ["Salahutu", "Leitimur Selatan", "Nusaniwe", "Teluk Ambon"], a: 1 },
  { q: "Tiga jenis sagu yang ada di Rutong adalah...", o: ["Ihur, Tuni, Molat", "Natsepa, Liang, Ora", "Papeda, Sinole, Lempeng", "Nani, Runut, Tumang"], a: 0 },
  { q: "Pati sagu diendapkan di alat tradisional bernama...", o: ["Nani", "Runut", "Goti", "Tumang"], a: 2 },
  { q: "Peringkat berapa Rutong pada ADWI 2023 kategori desa wisata digital dan konten kreatif?", o: ["1", "2", "4", "10"], a: 2 },
  { q: "Berapa tarif Paket Ekowisata Sagu menurut data di website ini?", o: ["Rp5.000", "Rp25.000", "Rp50.000", "Rp80.000"], a: 0 }
];

/* ============================================================
   UTILITAS
   ============================================================ */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const rupiah = (n) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
const store = {
  get(k, def) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? def; } catch { return def; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("show"), 2200);
}
function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

/* ============================================================
   PEMUAT GAMBAR (coba sumber satu per satu)
   ============================================================ */
const probe = (src) => new Promise(res => {
  const im = new Image();
  im.onload = () => res(src);
  im.onerror = () => res(null);
  im.src = src;
});
async function firstWorking(list) {
  for (const s of list) {
    const ok = await probe(s);
    if (ok) return ok;
  }
  return null;
}
const usedRemote = new Set();
async function paintImages(root = document) {
  const nodes = [...root.querySelectorAll("[data-img]:not(.has)")];
  await Promise.all(nodes.map(async el => {
    const list = IMG[el.dataset.img];
    if (!list) return;
    const url = await firstWorking(list);
    if (!url) { if (el.hasAttribute("data-optional")) el.remove(); return; }
    el.style.setProperty("--src", `url("${url}")`);
    el.classList.add("has");
    if (url.startsWith("http")) usedRemote.add(url);
    if (el.dataset.img === "hero") el.setAttribute("data-loaded", "1");
  }));
}

const slot = (key, label) => `<figure class="ph" data-img="${key}" role="img" aria-label="${esc(label)}"></figure>`;

/* ============================================================
   ATRAKSI (carousel) & KULINER
   ============================================================ */
$("#atraksiGrid").innerHTML = atraksi.map(x => `
  <article class="slide">
    ${slot(x.img, x.t)}
    <div class="slide-body"><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></div>
  </article>`).join("");

const KIMG = { "Mie Sagu": "mie-sagu", "Sagu Gula": "sagu-gula", "Sinole": "sinole", "Tomi-Tomi": "tomi-tomi" };
$("#kulinerGrid").innerHTML = kuliner.map(x => `<li>${KIMG[x.t] ? `<figure class="ph food-thumb" data-img="${KIMG[x.t]}" data-optional role="img" aria-label="${esc(x.t)}"></figure>` : ""}<h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></li>`).join("");

/* ============================================================
   PROSES SAGU
   ============================================================ */
$("#steps").innerHTML = sagoSteps.map((s, i) =>
  `<button class="step-btn ${i === 0 ? "active" : ""}" data-i="${i}" role="tab" aria-selected="${i === 0}"><span class="n">${i + 1}</span>${esc(s.t)}</button>`).join("");
function showStep(i) {
  const s = sagoSteps[i];
  const photo = s.img ? `<figure class="ph step-photo" data-img="${s.img}" data-optional role="img" aria-label="${esc(s.cap)}"></figure>` : "";
  $("#stepDetail").innerHTML = `${photo}<div class="step-text"><h4>Tahap ${i + 1}: ${esc(s.t)}</h4><p>${esc(s.d)}</p></div>`;
  paintImages($("#stepDetail"));
  $$(".step-btn").forEach((b, k) => { b.classList.toggle("active", k === i); b.setAttribute("aria-selected", k === i); });
}
$("#steps").addEventListener("click", e => {
  const b = e.target.closest(".step-btn");
  if (b) showStep(Number(b.dataset.i));
});
showStep(0);

/* ============================================================
   TOKO (tiket dan olahan sagu). Ubah data di array produk.
   img = kunci gambar di IMG; harga non-tiket hanya contoh.
   ============================================================ */
const produk = [
  { id: "t1", k: "tiket", nama: "Paket Ekowisata Sagu", harga: 5000, unit: "/ orang", img: "gerbang", d: "Tur hutan sagu, demonstrasi pengolahan sagu, dan penjelasan pemandu." },
  { id: "t2", k: "tiket", nama: "Paket Tomi-Tomi", harga: 50000, unit: "/ orang", img: "pemandu", pop: true, d: "Isi paket dasar ditambah makan siang mie sagu dan suvenir jus tomi-tomi." },
  { id: "t3", k: "tiket", nama: "Paket Galoba", harga: 80000, unit: "/ orang", img: "dapur-bakar", d: "Isi paket dasar ditambah makan siang papeda ikan kuah kuning dan suvenir kerajinan." },
  { id: "m1", k: "makanan", nama: "Tepung Sagu", harga: 25000, unit: "/ pak", img: "menyaring", d: "Tepung (pati) sagu hasil olahan warga Rutong, bahan dasar papeda dan aneka kue." },
  { id: "m2", k: "makanan", nama: "Mie Sagu", harga: 20000, unit: "/ pak", img: "mie-sagu", d: "Mi dari sagu buatan kelompok usaha mie sagu Negeri Rutong." },
  { id: "m3", k: "makanan", nama: "Sagu Gula", harga: 15000, unit: "/ pak", img: "sagu-gula", d: "Olahan sagu dengan gula merah dan kelapa." },
  { id: "m4", k: "makanan", nama: "Sinole", harga: 15000, unit: "/ pak", img: "sinole", d: "Kudapan olahan sagu khas yang dijajakan di lokasi wisata." },
  { id: "m5", k: "makanan", nama: "Tomi-Tomi Wine 250 ml", harga: 40000, unit: "/ botol", img: "tomi-tomi", d: "Fermentasi buah tomi-tomi, kadar alkohol sekitar 1%. Dijual terbatas sesuai pesanan, khusus usia 18 tahun ke atas." }
];
const KAT = { semua: "Semua", tiket: "Tiket & Paket", makanan: "Makanan & Minuman" };
let kat = "semua";
let cart = store.get("rtg_cart", {});
const prodById = id => produk.find(p => p.id === id);
const cartLines = () => Object.entries(cart).map(([id, q]) => ({ p: prodById(id), q })).filter(x => x.p && x.q > 0);
function fmtTanggal(v) {
  if (!v) return "";
  return new Date(v + "T00:00:00").toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
function renderShop() {
  $("#shopChips").innerHTML = Object.entries(KAT).map(([k, v]) => `<button type="button" class="chip ${k === kat ? "active" : ""}" data-k="${k}">${esc(v)}</button>`).join("");
  $("#shopGrid").innerHTML = produk.filter(p => kat === "semua" || p.k === kat).map(p => `
    <article class="prod">${p.pop ? '<span class="tagline">Paling diminati</span>' : ""}
      ${slot(p.img, p.nama)}
      <div class="prod-body"><h3>${esc(p.nama)}</h3><p>${esc(p.d)}</p>
        <div class="prod-foot"><span class="prod-price">${rupiah(p.harga)} <small>${esc(p.unit)}</small></span>
        <button class="btn primary small" type="button" data-add="${p.id}">Tambah</button></div></div>
    </article>`).join("");
  paintImages($("#shopGrid"));
}
function renderCart() {
  const lines = cartLines();
  const total = lines.reduce((s, x) => s + x.p.harga * x.q, 0);
  $("#cartCount").textContent = lines.reduce((s, x) => s + x.q, 0);
  $("#cartItems").innerHTML = lines.length ? lines.map(({ p, q }) => `
    <div class="cl"><b>${esc(p.nama)}</b><div class="qty"><button type="button" data-dec="${p.id}" aria-label="Kurangi">-</button><span>${q}</span><button type="button" data-inc="${p.id}" aria-label="Tambah">+</button></div>
    <span class="sub">${rupiah(p.harga)} x ${q} = ${rupiah(p.harga * q)}</span></div>`).join("") : '<p class="cart-empty">Keranjang masih kosong.</p>';
  $("#cTotal").textContent = rupiah(total);
  $("#cTglWrap").hidden = !lines.some(x => x.p.k === "tiket");
  store.set("rtg_cart", cart);
}
function setQty(id, d) {
  cart[id] = Math.max(0, Math.min(99, (cart[id] || 0) + d));
  if (!cart[id]) delete cart[id];
  renderCart();
}
function openCart(open) {
  $("#cart").classList.toggle("open", open);
  $("#cart").setAttribute("aria-hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
}
$("#shopChips").addEventListener("click", e => { const b = e.target.closest("[data-k]"); if (b) { kat = b.dataset.k; renderShop(); } });
$("#shopGrid").addEventListener("click", e => { const b = e.target.closest("[data-add]"); if (b) { setQty(b.dataset.add, 1); toast("Ditambahkan ke keranjang"); } });
$("#cartItems").addEventListener("click", e => {
  const i = e.target.closest("[data-inc]"), d = e.target.closest("[data-dec]");
  if (i) setQty(i.dataset.inc, 1); if (d) setQty(d.dataset.dec, -1);
});
$("#cartOpen").addEventListener("click", () => openCart(true));
$("#cartClose").addEventListener("click", () => openCart(false));
$("#cartBack").addEventListener("click", () => openCart(false));
document.addEventListener("keydown", e => { if (e.key === "Escape" && $("#cart").classList.contains("open")) openCart(false); });
$("#cTanggal").min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
function buildOrder() {
  const lines = cartLines();
  if (!lines.length) { toast("Keranjang masih kosong"); return null; }
  const nama = $("#cNama").value.trim(), tgl = $("#cTanggal").value;
  const needDate = lines.some(x => x.p.k === "tiket");
  $("#errCNama").textContent = nama.length < 3 ? "Nama minimal 3 karakter." : "";
  $("#errCTanggal").textContent = needDate && !tgl ? "Pilih tanggal kunjungan." : "";
  if (nama.length < 3 || (needDate && !tgl)) return null;
  const total = lines.reduce((s, x) => s + x.p.harga * x.q, 0);
  return `Halo, Pengelola Ekowisata Sagu Negeri Rutong.\n\nSaya ${nama} ingin memesan:\n` +
    lines.map(x => `- ${x.q} x ${x.p.nama} (${rupiah(x.p.harga * x.q)})`).join("\n") +
    `\n\nEstimasi total: ${rupiah(total)}` + (needDate ? `\nTanggal berkunjung: ${fmtTanggal(tgl)}` : "") +
    `\n\nMohon info ketersediaan dan cara pembayarannya. Terima kasih.`;
}
$("#cartCopy").addEventListener("click", async () => {
  const text = buildOrder();
  if (!text) return;
  try { await navigator.clipboard.writeText(text); toast("Pesan disalin"); }
  catch { toast("Gagal menyalin, salin manual ya"); }
});
$("#cartMail").addEventListener("click", () => {
  const text = buildOrder();
  if (!text) return;
  location.href = "mailto:ekowisatasagu@gmail.com?subject=" + encodeURIComponent("Pesanan Toko Ekowisata Sagu Rutong") + "&body=" + encodeURIComponent(text);
});
$("#miniProducts").innerHTML = produk.filter(p => ["m3", "m4", "m5"].includes(p.id)).map(p =>
  `<div class="mini">${slot(p.img, p.nama)}<div><b>${esc(p.nama)}</b><span>${rupiah(p.harga)}</span></div></div>`).join("");
renderShop();
renderCart();

/* ============================================================
   BERANDA: fakta acak & angka berjalan
   ============================================================ */
const FAKTA = [
  "Tiga dari lima jenis sagu di Indonesia tumbuh di Rutong: Ihur, Tuni, dan Molat.",
  "Ihur paling banyak dimanfaatkan karena patinya berwarna putih.",
  "Pati sagu diendapkan di alat tradisional bernama goti.",
  "Sejak 2021 Rutong memakai platform rutong.id, desa pintar pertama di Maluku.",
  "Ekowisata ini dikelola Pokdarwis yang anggotanya warga Rutong sendiri."
];
let fi = 0;
const showFact = () => { $("#factText").textContent = FAKTA[fi]; };
$("#nextFact").addEventListener("click", () => { fi = (fi + 1) % FAKTA.length; showFact(); });
showFact();
function runCounters() {
  $$("[data-count]").forEach(el => {
    const to = parseFloat(el.dataset.count), dec = Number(el.dataset.dec || 0);
    const fmt = v => v.toLocaleString("id-ID", { minimumFractionDigits: dec, maximumFractionDigits: dec });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = fmt(to); return; }
    const t0 = performance.now();
    (function tick(t) {
      const k = Math.min(1, (t - t0) / 1200);
      el.textContent = fmt(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  });
}

/* ============================================================
   GALERI + LIGHTBOX
   ============================================================ */
let galleryItems = [];
let lbIndex = 0;
async function initGaleri() {
  const resolved = await Promise.all(GALERI.map(async g => {
    const url = await firstWorking(g.src);
    if (url && url.startsWith("http")) usedRemote.add(url);
    return url ? { src: url, cap: g.cap } : null;
  }));
  galleryItems = resolved.filter(Boolean);
  if (!galleryItems.length) {
    $("#galeriGrid").innerHTML = '<p class="note">Foto galeri belum tersedia. Tambahkan foto ke folder img/.</p>';
    return;
  }
  $("#galeriGrid").innerHTML = galleryItems.map((g, i) =>
    `<button type="button" data-i="${i}" aria-label="Perbesar: ${esc(g.cap)}"><figure><img src="${g.src}" alt="${esc(g.cap)}" loading="lazy"><figcaption>${esc(g.cap)}</figcaption></figure></button>`).join("");
}
function openLb(i) {
  lbIndex = (i + galleryItems.length) % galleryItems.length;
  const g = galleryItems[lbIndex];
  $("#lbImg").src = g.src;
  $("#lbImg").alt = g.cap;
  $("#lbCap").textContent = g.cap;
  $("#lightbox").classList.add("open");
  $("#lightbox").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLb() {
  $("#lightbox").classList.remove("open");
  $("#lightbox").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$("#galeriGrid").addEventListener("click", e => {
  const b = e.target.closest("button[data-i]");
  if (b) openLb(Number(b.dataset.i));
});
$("#lbClose").addEventListener("click", closeLb);
$("#lbPrev").addEventListener("click", () => openLb(lbIndex - 1));
$("#lbNext").addEventListener("click", () => openLb(lbIndex + 1));
$("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLb(); });
document.addEventListener("keydown", e => {
  if (!$("#lightbox").classList.contains("open")) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") openLb(lbIndex - 1);
  if (e.key === "ArrowRight") openLb(lbIndex + 1);
});

/* ============================================================
   CHECKLIST PERSIAPAN
   ============================================================ */
let checked = store.get("rtg_chk", []);
function renderChecklist() {
  $("#chkList").innerHTML = persiapan.map((t, i) =>
    `<label><input type="checkbox" data-i="${i}" ${checked.includes(i) ? "checked" : ""}><span>${esc(t)}</span></label>`).join("");
  $("#chkProgress").textContent = `${checked.length} dari ${persiapan.length} siap`;
}
$("#chkList").addEventListener("change", e => {
  const i = Number(e.target.dataset.i);
  checked = e.target.checked ? [...new Set([...checked, i])] : checked.filter(x => x !== i);
  store.set("rtg_chk", checked);
  $("#chkProgress").textContent = `${checked.length} dari ${persiapan.length} siap`;
});
renderChecklist();

/* ============================================================
   KUIS
   ============================================================ */
let qi = 0, score = 0, answered = false;
function renderQuiz() {
  const box = $("#quiz");
  if (qi >= quizData.length) {
    const msg = score === quizData.length ? "Luar biasa! Kamu sudah paham tentang sagu Rutong."
      : score >= 3 ? "Bagus! Sedikit lagi sempurna." : "Baca lagi bagian Tentang dan Atraksi, lalu coba ulang.";
    box.innerHTML = `<div class="result"><p class="big">${score}/${quizData.length}</p><h3>${msg}</h3><button class="btn primary" id="quizRestart" type="button">Ulangi kuis</button></div>`;
    return;
  }
  const q = quizData[qi];
  answered = false;
  box.innerHTML = `
    <div class="quiz-top"><span>Pertanyaan ${qi + 1} dari ${quizData.length}</span><span>Skor: ${score}</span></div>
    <h3>${esc(q.q)}</h3>
    <div class="quiz-options">${q.o.map((o, i) => `<button type="button" class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>
    <p class="quiz-feedback" aria-live="polite"></p>
    <button type="button" class="btn primary" id="quizNext" hidden></button>`;
}
$("#quiz").addEventListener("click", e => {
  if (e.target.id === "quizRestart") { qi = 0; score = 0; return renderQuiz(); }
  if (e.target.id === "quizNext") { qi++; return renderQuiz(); }
  const b = e.target.closest(".opt");
  if (!b || answered) return;
  answered = true;
  const pick = Number(b.dataset.i), right = quizData[qi].a;
  $$("#quiz .opt").forEach((o, i) => { o.disabled = true; if (i === right) o.classList.add("correct"); });
  const fb = $("#quiz .quiz-feedback");
  if (pick === right) { score++; fb.textContent = "Benar!"; }
  else { b.classList.add("wrong"); fb.textContent = "Kurang tepat, jawaban yang benar ditandai hijau."; }
  const nxt = $("#quizNext");
  nxt.hidden = false;
  nxt.textContent = qi === quizData.length - 1 ? "Lihat hasil" : "Lanjut";
});
renderQuiz();

/* ============================================================
   BUKU TAMU
   ============================================================ */
let guests = store.get("rtg_guest", [
  { n: "Pengelola", m: "Selamat datang di Ekowisata Sagu Rutong. Tinggalkan kesanmu di sini.", t: Date.now() }
]);
function renderGuests() {
  const box = $("#guestList");
  box.innerHTML = "";
  guests.slice().reverse().forEach(g => {
    const div = document.createElement("div");
    div.className = "msg";
    const n = document.createElement("strong"); n.textContent = g.n;
    const t = document.createElement("small"); t.textContent = new Date(g.t).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });
    const p = document.createElement("p"); p.textContent = g.m;
    div.append(n, t, p);
    box.appendChild(div);
  });
}
$("#gPesan").addEventListener("input", e => { $("#gCount").textContent = `${e.target.value.length}/300`; });
$("#guestForm").addEventListener("submit", e => {
  e.preventDefault();
  const n = $("#gNama").value.trim(), m = $("#gPesan").value.trim();
  $("#errNama").textContent = n.length < 2 ? "Nama minimal 2 karakter." : "";
  $("#errPesan").textContent = m.length < 5 ? "Pesan minimal 5 karakter." : "";
  if (n.length < 2 || m.length < 5) return;
  guests.push({ n, m, t: Date.now() });
  guests = guests.slice(-50);
  store.set("rtg_guest", guests);
  e.target.reset();
  $("#gCount").textContent = "0/300";
  renderGuests();
  toast("Terima kasih atas pesanmu");
});
renderGuests();

/* ============================================================
   MENU, SCROLL
   ============================================================ */
const navbar = $("#navbar");
const navLinks = $("#navLinks");
$("#menuToggle").addEventListener("click", e => {
  const open = navLinks.classList.toggle("open");
  navbar.classList.toggle("open", open);
  e.currentTarget.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") { navLinks.classList.remove("open"); navbar.classList.remove("open"); $("#menuToggle").setAttribute("aria-expanded", "false"); }
});

function onScroll() {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 40);
  $("#toTop").hidden = y < 600;
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
$("#toTop").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

/* ============================================================
   FOOTER
   ============================================================ */
$("#year").textContent = new Date().getFullYear();

/* ============================================================
   MULAI: muat gambar
   ============================================================ */
paintImages();
initGaleri();

/* ============================================================
   ROUTER (multipage dalam satu file, memakai hash #/halaman)
   ============================================================ */
const PAGES = { beranda: "Beranda", tentang: "Tentang", atraksi: "Atraksi", kuliner: "Kuliner", toko: "Toko", galeri: "Galeri", info: "Informasi", komunitas: "Komunitas" };
const BASE_TITLE = document.title;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let current = null, swapTimer = null;
function showPage(page, target) {
  $$(".page").forEach(p => { p.hidden = p.dataset.page !== page; });
  $$(".nav-links a:not(.nav-cta)").forEach(a => {
    const on = a.getAttribute("href") === "#/" + page;
    a.classList.toggle("active", on);
    if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  document.title = page === "beranda" ? BASE_TITLE : PAGES[page] + " | Ekowisata Sagu Rutong";
  window.scrollTo({ top: 0, behavior: "instant" });
  if (target) target.scrollIntoView({ behavior: "instant" });
  if (page === "beranda") runCounters();
  onScroll();
}
function route(first) {
  const parts = (location.hash.startsWith("#/") ? location.hash.slice(2) : "").split("/");
  const page = PAGES[parts[0]] ? parts[0] : "beranda";
  const target = parts[1] && document.getElementById(parts[1]);
  clearTimeout(swapTimer);
  if (first === true || !current || reduceMotion.matches) { showPage(page, target); current = page; return; }
  if (page === current) { if (target) target.scrollIntoView({ behavior: "smooth" }); return; }
  $("#curtain").classList.add("on");
  swapTimer = setTimeout(() => {
    showPage(page, target); current = page;
    $("#konten").focus({ preventScroll: true });
    $("#curtain").classList.remove("on");
  }, 280);
}
window.addEventListener("hashchange", () => route());
$(".skip").addEventListener("click", e => { e.preventDefault(); $("#konten").focus(); });
route(true);