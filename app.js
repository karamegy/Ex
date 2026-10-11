// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking nav links on mobile
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Services Modal Details
const serviceDetails = {
    "Sea Freight": "We provide reliable sea freight solutions for all shipment sizes - from FCL and LCL to Dry, reefer and break bulk - with competitive rates, weekly sailings, and full cargo tracking from port to port.",
    "Air Freight": "Fast, secure, and efficient air freight services that guarantee on-time delivery for urgent shipments through our global airline partnerships, DG certified handling, and real-time tracking.",
    "Land Transport": "Comprehensive door-to-door and inland trucking solutions across Egypt and beyond, ensuring safe, punctual, and cost-effective delivery with 20ft/40ft containers and GPS tracking.",
    "Customs Clearance": "Professional customs brokerage at all Egyptian ports and global gateways ensuring quick, compliant, and hassle-free clearance for every shipment under full legal compliance.",
    "Special Cargo": "Shipments requiring specialized handling, storage, or transportation due to their unique nature, including hazardous materials, oversized equipment, and temperature-sensitive goods."
};

function openServiceModal(serviceName) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modalTitle.textContent = serviceName;
    modalDescription.textContent = serviceDetails[serviceName] || "Detailed logistics solution tailored to your operational needs.";
    modal.classList.remove('hidden');
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.add('hidden');
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Tracking Simulator
document.getElementById('trackBtn').addEventListener('click', () => {
    const input = document.getElementById('trackingInput').value.trim();
    const resultDiv = document.getElementById('trackingResult');

    if (input === "") {
        alert("Please enter a valid tracking number.");
        return;
    }

    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <h4 style="color: #0f2c59; margin-bottom: 10px;">Shipment Status: <strong>${input}</strong></h4>
        <p><i class="fas fa-check-circle" style="color: #10b981;"></i> <strong>Status:</strong> In Transit / Customs Cleared</p>
        <p><i class="fas fa-map-marker-alt" style="color: #f59e0b;"></i> <strong>Current Location:</strong> Cairo Gateway Hub, Egypt</p>
        <p><i class="fas fa-calendar-alt" style="color: #0077b6;"></i> <strong>Estimated Delivery:</strong> On Schedule</p>
    `;
});

// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent successfully to U-Shipper Logistics team.`);
    document.getElementById('contactForm').reset();
});
