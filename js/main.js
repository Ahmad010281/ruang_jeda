// ========== Header Scrolled ==========
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  window.scrollY > 20 ? nav.classList.add("header-scrolled") : nav.classList.remove("header-scrolled");
});

// ========== Navbar hidden ==========
const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// ========== Clients Carousel ==========
$(document).ready(() => {
  $(".client-slider-section").owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
});

// ========== Projects Counter ==========
$(document).ready(() => {
  $('[data-toggle="counter"]').counterUp({
    delay: 15,
    time: 2000,
  });
});

// ========== TypeWritter Effect ==========
// new Typewriter("#typewriter", {
//   loop: true,
//   strings: ["Connected", "Online"],
//   autoStart: true,
// })
//   .pauseFor(5000)
//   .typeString()
//   .start();

// ========== Elements Loops Function Initialize ==========
const loopsElements = (data, container, template) => {
  let value = ``;

  data.forEach(({ ...item }, index) => {
    value += template(item, index);
  });

  container.innerHTML = value;
};

// ========== Elements Loops Features ==========
const featuresData = [
  {
    title: "Akses ke Materi Kursus",
    description: "Memberikan peserta akses ke semua materi kursus, termasuk video pelajaran, bahan bacaan, tugas, dan proyek.",
    bg: "#fff6d6",
    img: "./images/consultancy.png",
  },
  {
    title: "Interaksi dengan Instruktur",
    description: "Memberikan kesempatan bagi peserta untuk berinteraksi dengan instruktur melalui forum diskusi, email, atau sesi tanya jawab langsung.",
    bg: "#ebdcf9",
    img: "./images/solutions.png",
  },
  {
    title: "Video Pelajaran",
    description: "Materi pelajaran dalam bentuk video yang menjelaskan konsep-konsep dan teknik desain grafis secara visual.",
    bg: "#ddf5fc",
    img: "./images/simple.png",
  },
  {
    title: "Bahan Bacaan",
    description: "Materi tambahan dalam bentuk artikel, slide presentasi, atau panduan yang mendukung pembelajaran dari video pelajaran.",
    bg: "#dcf6e8",
    img: "./images/deadline.png",
  },
  {
    title: "Latihan dan Tugas",
    description: "Memberikan latihan-latihan dan tugas yang dapat membantu peserta berlatih dan mengaplikasikan konsep yang telah dipelajari.",
    bg: "#f8e4e1",
    img: "./images/data.png",
  },
  {
    title: "Proyek Kreatif",
    description: "Menyajikan proyek-proyek desain grafis yang lebih besar untuk dikerjakan peserta sebagai bagian dari kursus.",
    bg: "#fbffd4",
    img: "./images/flexible.png",
  },
  {
    title: "Ujian dan Kuis",
    description: "Mengukur pemahaman peserta melalui ujian atau kuis setelah selesai mempelajari modul tertentu.",
    bg: "#fff6d6",
    img: "./images/consultancy.png",
  },
  {
    title: "Forum Diskusi",
    description: "Tempat bagi peserta untuk berinteraksi dengan sesama peserta kursus, berbagi pengalaman, dan bertukar ide.",
    bg: "#ebdcf9",
    img: "./images/solutions.png",
  },
  {
    title: "Sertifikat Penyelesaian",
    description: "Memberikan sertifikat kepada peserta yang berhasil menyelesaikan kursus dengan baik.",
    bg: "#ddf5fc",
    img: "./images/simple.png",
  },
  {
    title: "Pemantauan Kemajuan",
    description: "Memungkinkan peserta melihat sejauh mana kemajuan mereka dalam kursus.",
    bg: "#dcf6e8",
    img: "./images/deadline.png",
  },
  {
    title: "Materi Tambahan",
    description: "Menyediakan materi tambahan seperti contoh proyek, studi kasus, atau sumber daya terkait.",
    bg: "#f8e4e1",
    img: "./images/data.png",
  },
  {
    title: "Pustaka Referensi",
    description: "Menyediakan daftar referensi, buku, dan sumber daya yang dapat diperiksa peserta untuk memperdalam pemahaman.",
    bg: "#fbffd4",
    img: "./images/flexible.png",
  },
];

const featuresTemplate = ({ title, description, bg, img }) => `
    <div class="col-lg-4 col-sm-6 mb-5">
        <div class="features-card" style="background-color: ${bg};">
            <img src="${img}" alt="Features Image" class="features-card-img">
            <h3 class="features-card-title">${title}</h3>
            <p class="features-card-description">${description}</p>
        </div>
    </div>
`;

const featuresContainer = document.querySelector(".features-container");

loopsElements(featuresData, featuresContainer, featuresTemplate);

// ========== Elements Loops Pricing ==========
const pricingData = [
  {
    description: "Premium",
    img: "./images/personal.png",
    rate: "Rp.499.000",
    period: "1,5 bulan",
    list: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe After Effect"],
  },
  {
    description: "Professional",
    img: "./images/growth.png",
    rate: "Rp.639.000",
    period: "2 bulan",
    list: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe After Effect"],
  },
  {
    description: "Ultimate",
    img: "./images/professional.png",
    rate: "Rp.1,199.000",
    period: "3 bulan",
    list: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe After Effect"],
  },
];

const pricingTemplate = ({ description, img, rate, period, list }, index) => `
    <div class="${index === 1 ? "position-relative" : ""} col-sm-6 col-lg-4">
      ${index === 1 ? '<p class="pricing-ribbons"><span>Popular</span></p>' : ""}
      <div class="${index === 1 ? "popular-card" : ""} pricing-card">
        <p class="pricing-description">${description}</p>
        <img src="${img}" alt="Pricing Images" class="img-fluid">
        <p class="pricing-rate">${rate}</p>
        <p class="pricing-period">${period}</p>
        <div class="pricing-plan">
          <ul>
            ${list
              .map((item, listIndex) => {
                if ((listIndex === list.length - 1 || listIndex === list.length - 2) && index === 0) {
                  return `<li class="text-decoration-line-through" style="color: #a0a0a0;">${item}</li>`;
                } else if (listIndex === list.length - 1 && index === 1) {
                  return `<li class="text-decoration-line-through" style="color: #a0a0a0;">${item}</li>`;
                } else {
                  return `<li>${item}</li>`;
                }
              })
              .join(" ")}
            </ul>
        </div>
        <a href="#contact" class="${index !== 1 ? "m-0" : ""}  learn-more-btn">Get Started</a>
      </div>
    </div>
`;

const pricingContainer = document.querySelector(".pricing-container");

loopsElements(pricingData, pricingContainer, pricingTemplate);

// ========== Elements Loops FAQs ==========
const FAQsData = [
  {
    title: "1. Apa yang Akan Saya Pelajari dalam Kursus Ini?",
    description: "Dalam kursus ini, Anda akan belajar dasar-dasar desain grafis, termasuk prinsip-prinsip desain, teknik ilustrasi digital, tipografi yang efektif, desain identitas visual, antarmuka pengguna (UI/UX) untuk web, dan desain untuk media sosial. Anda juga akan memiliki kesempatan untuk menerapkan konsep-konsep ini melalui proyek-proyek praktis.",
    headingID: "headingOne",
    collapseID: "collapseOne",
  },
  {
    title: "2. Apa Alat atau Perangkat Lunak yang Dibutuhkan?",
    description: "Anda akan memerlukan komputer atau laptop dengan akses internet. Kami akan mengajarkan Anda penggunaan perangkat lunak desain grafis populer seperti Adobe Photoshop dan Illustrator.",
    headingID: "headingTwo",
    collapseID: "collapseTwo",
  },
  {
    title: "3. Apakah Sertifikat Diberikan Setelah Menyelesaikan Kursus?",
    description: "Ya, setelah berhasil menyelesaikan kursus, Anda akan menerima sertifikat penyelesaian yang dapat memperkuat profil Anda dalam dunia desain grafis.",
    headingID: "headingThree",
    collapseID: "collapseTheree",
  },
  {
    title: "4. Apakah Ada Dukungan Instruktur atau Forum Diskusi?",
    description: "Tentu saja! Kami memiliki forum diskusi tempat Anda dapat berinteraksi dengan instruktur dan peserta lainnya. Kami juga akan mengadakan sesi tanya jawab untuk membantu Anda memahami konsep dengan lebih baik.",
    headingID: "headingFour",
    collapseID: "collapseFour",
  },
  {
    title: "5. Bagaimana Kursus Ini Berbeda dari Sumber Belajar Lainnya?",
    description: "Kursus kami menawarkan kombinasi unik antara video pelajaran berkualitas, proyek nyata, dukungan instruktur langsung, dan interaksi dengan komunitas belajar. Ini memberi Anda pengalaman belajar holistik yang sulit ditemukan dalam sumber belajar lainnya.",
    headingID: "headingFive",
    collapseID: "collapseFive",
  },
];

const FAQsTemplate = ({ title, description, headingID, collapseID }) => `
    <div class="accordion-item">
      <h2 class="accordion-header" id="${headingID}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseID}" aria-expanded="false" aria-controls="${collapseID}">
          ${title}
        </button>
      </h2>
      <div id="${collapseID}" class="accordion-collapse collapse" aria-labelledby="${headingID}" data-bs-parent="#accordionExample">
        <div class="accordion-body">${description}</div>
      </div>
    </div> 
`;

const FAQsContainer = document.getElementById("accordionExample");

loopsElements(FAQsData, FAQsContainer, FAQsTemplate);
