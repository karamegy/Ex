// Localization Translations Dictionary
const i18nData = {
    en: {
        logoSub: "logistics services",
        navHome: "Home",
        navAbout: "Who We Are",
        navServices: "Services",
        navTracking: "Tracking",
        navMission: "Mission & Vision",
        navContact: "Contact Us",
        login: "Login",
        register: "Register",
        logout: "Logout",
        adminPanel: "Admin Panel",
        heroTitle: "WE DON'T JUST MOVE CARGO<br><span>WE MOVE BUSINESSES FORWARD.</span>",
        heroDesc: "Complete logistics solutions – from sea and air freight to land transport and customs clearance, ensuring safe, timely, and transparent delivery worldwide.",
        exploreServices: "Explore Services",
        getQuote: "Get A Quote",
        aboutTitle: "WHO WE ARE?",
        aboutP1: "We provide complete logistics solutions - from sea and air freight to land transport and customs clearance - ensuring that every shipment arrives safely, on time, and with full visibility.",
        aboutP2: "With strong international partnerships and exclusive agents in Morocco, China, UAE, Turkey, and Saudi Arabia, U-Shipper offers global reach with a local touch.",
        aboutQuote: '"We don\'t just move cargo we move businesses forward."',
        feat1Title: "Global Network",
        feat1Desc: "Exclusive agency partnerships across major global trade hubs.",
        feat2Title: "ISO 9001 Certified",
        feat2Desc: "Adhering to highest international standards of quality management.",
        feat3Title: "24/7 Support",
        feat3Desc: "Dedicated professional team ensuring real-time updates and peace of mind.",
        ourServices: "OUR SERVICES",
        servicesDesc: "Comprehensive, reliable, and cost-effective transport solutions tailored to your business.",
        trackTitle: "TRACK YOUR SHIPMENT",
        trackSub: "Enter your tracking or Bill of Lading (BBL) number for real-time visibility.",
        trackBtn: "Track Cargo",
        missionTitle: "Our Mission",
        missionDesc: "To empower global trade by delivering innovative, reliable, and cost-effective logistics solutions. We are committed to providing seamless transportation, transparent communication, and personalized customer support.",
        visionTitle: "Our Vision",
        visionDesc: "To become a recognized global leader in logistics and transportation, connecting Egypt to the world through innovation, efficiency, and trust. We aim to make international trade simpler and faster.",
        contactTitle: "CONTACT US & SUBMIT ORDER",
        contactSub: "Reach out to us or submit an inquiry directly to our team.",
        selectService: "Select Service",
        sendMessage: "Send Order / Message",
        adminTitle: "Control Panel (Admin)",
        tabOrders: "Received Orders",
        tabServices: "Manage Services"
    },
    ar: {
        logoSub: "الخدمات اللوجستية",
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navTracking: "التتبع",
        navMission: "الرؤية والرسالة",
        navContact: "تواصل معنا",
        login: "تسجيل الدخول",
        register: "إنشاء حساب",
        logout: "خروج",
        adminPanel: "لوحة التحكم",
        heroTitle: "لا ننقل البضائع فحسب<br><span>بل ندفـع أعمالـك للإمام.</span>",
        heroDesc: "حلول لوجستية متكاملة – من الشحن البحري والجوي إلى النقل البري والتخليص الجمركي لضمان وصول شحناتك بأمان وفي الموعد.",
        exploreServices: "استكشف الخدمات",
        getQuote: "طلب عرض سعر",
        aboutTitle: "من نحن؟",
        aboutP1: "نقدم حلولاً لوجستية كاملة من الشحن البحري والجوي والنقل البري والتخليص الجمركي لضمان وصول كل شحنة بأمان وشفافية تامتين.",
        aboutP2: "بفضل شراكاتنا الدولية ووكلاءنا الحصريين في المغرب والشين والإمارات وتوركيا والسعودية، نوفر انتشاراً عالمياً بلتقية محليّة.",
        aboutQuote: '"نحن لا ننقل البضائع فحسب، بل ندفع الأعمال إلى الأمام."',
        feat1Title: "شبكة عالمية",
        feat1Desc: "شراكات وكالات حصرية عبر مراكز التجارة العالمية الرئيسية.",
        feat2Title: "شهادة ISO 9001",
        feat2Desc: "الالتزام بأعلى المعايير الدولية لإدارة الجودة.",
        feat3Title: "دعم 24/7",
        feat3Desc: "فريق محترف ومخصص لضمان المتابعة المباشرة وراحة بالك.",
        ourServices: "خدماتنا",
        servicesDesc: "حلول نقل شاملة وموثوقة واقتصادية مصممة خصيصاً لتلبية احتياجات عملك.",
        trackTitle: "تتبع شحنتك",
        trackSub: "أدخل رقم التتبع أو رقم بوليصة الشحن (BBL) للمتابعة المباشرة.",
        trackBtn: "تتبع الشحنة",
        missionTitle: "رسالتنا",
        missionDesc: "تمكين التجارة العالمية عبر تقديم حلول لوجستية مبتكرة وموثوقة. نلتزم بنقل سلس وتواصل شفاف ودعم شخصي للعملاء.",
        visionTitle: "رؤيتنا",
        visionDesc: "أن نصبح رائدين عالمياً في مجال اللوجستيات والنقل، ونربط مصر بالعالم من خلال الابتكار والكفاءة والثقة.",
        contactTitle: "تواصل معنا واطلب الخدمة",
        contactSub: "تواصل معنا مباشرة أو أرسل تفاصيل طلبك إلى فريقنا.",
        selectService: "اختر الخدمة",
        sendMessage: "إرسال الطلب / الرسالة",
        adminTitle: "لوحة التحكم (المدير)",
        tabOrders: "الطلبات الواردة",
        tabServices: "إدارة الخدمات"
    }
};

// Initial State Variables
let currentLang = localStorage.getItem('us_lang') || 'en';
let currentTheme = localStorage.getItem('us_theme') || 'light';
let currentUser = JSON.parse(localStorage.getItem('us_user')) || null;

// Initial Services Default Data
let servicesData = JSON.parse(localStorage.getItem('us_services')) || [
    { key: "Sea Freight", title: "SEA FREIGHT", desc: "FCL and LCL worldwide services, weekly sailings, reefer containers, and IMO-certified cargo handling." },
    { key: "Air Freight", title: "AIR FREIGHT", desc: "Fast, secure airport-to-airport and door-to-door delivery, charter flight arrangements, and real-time tracking." },
    { key: "Land Transport", title: "LAND TRANSPORT", desc: "Domestic and international trucking across Egypt and beyond with 20ft/40ft containers and GPS tracking." },
    { key: "Customs Clearance", title: "CUSTOMS CLEARANCE", desc: "Professional licensed brokerage at all Egyptian ports and global gateways ensuring quick compliance." },
    { key: "Special Cargo", title: "SPECIAL CARGO", desc: "Specialized handling for oversized equipment, hazardous materials, and temperature-sensitive goods." }
];

// Received Orders Storage
let ordersData = JSON.parse(localStorage.getItem('us_orders')) || [];

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Theme Toggle Handler
const themeToggleBtn = document.getElementById('themeToggleBtn');
function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('us_theme', theme);
    themeToggleBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

themeToggleBtn.addEventListener('click', () => {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// Language Switch Handler
const langSelect = document.getElementById('langSelect');
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('us_lang', lang);
    langSelect.value = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18nData[lang] && i18nData[lang][key]) {
            element.innerHTML = i18nData[lang][key];
        }
    });
}

langSelect.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
});

// Render Dynamic Services
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = '';
    
    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon"><i class="fas fa-shipping-fast"></i></div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
            <button class="btn-read-more" onclick="openServiceModal('${service.key}')">Learn More</button>
        `;
        grid.appendChild(card);
    });
}

function openServiceModal(key) {
    const service = servicesData.find(s => s.key === key) || { title: key, desc: "Custom logistics solution." };
    document.getElementById('modalTitle').textContent = service.title;
    document.getElementById('modalDescription').textContent = service.desc;
    openModal('serviceModal');
}

function closeServiceModal() {
    closeModal('serviceModal');
}

// Modal Helpers
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
});

// Tracking Simulator
document.getElementById('trackBtn').addEventListener('click', () => {
    const input = document.getElementById('trackingInput').value.trim();
    const resultDiv = document.getElementById('trackingResult');

    if (input === "") {
        alert(currentLang === 'ar' ? "يرجى إدخال رقم تتبع صالح." : "Please enter a valid tracking number.");
        return;
    }

    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <h4 style="color: var(--secondary-color); margin-bottom: 10px;">Shipment Status: <strong>${input}</strong></h4>
        <p><i class="fas fa-check-circle" style="color: #10b981;"></i> <strong>Status:</strong> In Transit / Customs Cleared</p>
        <p><i class="fas fa-map-marker-alt" style="color: var(--accent-color);"></i> <strong>Current Location:</strong> Cairo Gateway Hub, Egypt</p>
        <p><i class="fas fa-calendar-alt" style="color: var(--secondary-color);"></i> <strong>Estimated Delivery:</strong> On Schedule</p>
    `;
});

// Contact & Orders Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('serviceType').value;
    const message = document.getElementById('message').value;

    const newOrder = {
        id: Date.now(),
        name,
        email,
        service,
        message,
        status: 'New',
        date: new Date().toLocaleDateString()
    };

    ordersData.push(newOrder);
    localStorage.setItem('us_orders', JSON.stringify(ordersData));

    alert(currentLang === 'ar' ? `شكراً لك يا ${name}! تم استلام طلبك بنجاح.` : `Thank you ${name}! Your order has been submitted successfully.`);
    document.getElementById('contactForm').reset();
});

// Authentication System
function updateAuthUI() {
    const authNavButtons = document.getElementById('authNavButtons');
    const userNavMenu = document.getElementById('userNavMenu');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const adminPanelBtn = document.getElementById('adminPanelBtn');

    if (currentUser) {
        authNavButtons.classList.add('hidden');
        userNavMenu.classList.remove('hidden');
        userNameDisplay.textContent = currentUser.name;

        if (currentUser.role === 'admin') {
            adminPanelBtn.classList.remove('hidden');
        } else {
            adminPanelBtn.classList.add('hidden');
        }
    } else {
        authNavButtons.classList.remove('hidden');
        userNavMenu.classList.add('hidden');
    }
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;

    if (email === 'admin@u-shipper.org' && pass === 'admin123') {
        currentUser = { name: "Admin", email, role: "admin" };
    } else {
        currentUser = { name: email.split('@')[0], email, role: "user" };
    }

    localStorage.setItem('us_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeModal('loginModal');
    document.getElementById('loginForm').reset();
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;

    currentUser = { name, email, role: "user" };
    localStorage.setItem('us_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeModal('registerModal');
    document.getElementById('registerForm').reset();
});

function logout() {
    currentUser = null;
    localStorage.removeItem('us_user');
    updateAuthUI();
}

// Admin Control Panel Logic
function openAdminModal() {
    renderOrdersTable();
    renderServicesTable();
    openModal('adminModal');
}

function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

function renderOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';

    ordersData.forEach((order, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.name}</td>
            <td>${order.email}</td>
            <td>${order.service}</td>
            <td>${order.message}</td>
            <td><span class="status-badge ${order.status.toLowerCase()}">${order.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="toggleOrderStatus(${order.id})">Toggle Status</button>
                <button class="btn btn-sm btn-danger" onclick="deleteOrder(${order.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleOrderStatus(id) {
    ordersData = ordersData.map(o => {
        if (o.id === id) {
            o.status = o.status === 'New' ? 'Completed' : 'New';
        }
        return o;
    });
    localStorage.setItem('us_orders', JSON.stringify(ordersData));
    renderOrdersTable();
}

function deleteOrder(id) {
    ordersData = ordersData.filter(o => o.id !== id);
    localStorage.setItem('us_orders', JSON.stringify(ordersData));
    renderOrdersTable();
}

function renderServicesTable() {
    const tbody = document.getElementById('servicesTableBody');
    tbody.innerHTML = '';

    servicesData.forEach((service, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${service.key}</td>
            <td>${service.title}</td>
            <td>${service.desc}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="deleteService('${service.key}')">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById('addServiceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const key = document.getElementById('newServiceKey').value.trim();
    const title = document.getElementById('newServiceTitle').value.trim();
    const desc = document.getElementById('newServiceDesc').value.trim();

    servicesData.push({ key, title, desc });
    localStorage.setItem('us_services', JSON.stringify(servicesData));

    renderServices();
    renderServicesTable();
    document.getElementById('addServiceForm').reset();
});

function deleteService(key) {
    servicesData = servicesData.filter(s => s.key !== key);
    localStorage.setItem('us_services', JSON.stringify(servicesData));
    renderServices();
    renderServicesTable();
}

// Initial Initialization
applyTheme(currentTheme);
applyLanguage(currentLang);
renderServices();
updateAuthUI();
