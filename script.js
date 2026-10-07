// ================= SERVICE DETAILS =================

const serviceDetails = {
    construction: {
        title: "Construction & Development",
        intro: "Building practical spaces and infrastructure designed around real needs.",
        description:
            "TMC provides construction and development support for residential, commercial and community projects. Our approach focuses on practical planning, quality execution and dependable project support.",
        points: [
            "Residential and commercial construction support",
            "Building development and renovation",
            "Infrastructure and community development support",
            "Project coordination and maintenance support"
        ]
    },

    housing: {
        title: "Property, Housing & Estates",
        intro: "Helping individuals and families create better places to live.",
        description:
            "TMC provides property and housing-related support for people looking to improve their living environment, manage property needs or explore housing opportunities.",
        points: [
            "Property and housing support",
            "Estate-related services",
            "Property management support",
            "Housing and accommodation solutions"
        ]
    },

    facilities: {
        title: "Facility & Building Management",
        intro: "Keeping buildings functional, maintained and ready to serve their purpose.",
        description:
            "TMC provides facility and building management support designed to help organizations, businesses and property owners maintain effective and presentable environments.",
        points: [
            "Building maintenance support",
            "Facility operations support",
            "Routine maintenance coordination",
            "Property upkeep and management"
        ]
    },

    security: {
        title: "Security & Public Safety",
        intro: "Supporting safer environments for properties, organizations and communities.",
        description:
            "TMC provides security and public-safety-related support based on the needs of each client, property or organization.",
        points: [
            "Property security support",
            "Safety planning and coordination",
            "Security-related operational support",
            "Community and public-safety support"
        ]
    },

    logistics: {
        title: "Roads, Transport & Logistics",
        intro: "Moving people, resources and projects forward.",
        description:
            "TMC provides transport, logistics and infrastructure-related support for businesses, organizations and projects.",
        points: [
            "Transport coordination",
            "Logistics support",
            "Infrastructure-related support",
            "Passenger and movement assistance"
        ]
    },

    environmental: {
        title: "Cleaning, Environmental & Maintenance",
        intro: "Cleaner, healthier and better-maintained environments.",
        description:
            "TMC provides cleaning, environmental and maintenance support for properties, businesses, institutions and public spaces.",
        points: [
            "Cleaning and hygiene services",
            "Environmental maintenance",
            "Building and property upkeep",
            "Routine maintenance support"
        ]
    },

    community: {
        title: "Community & Public Support",
        intro: "Supporting people, communities and institutions where practical help is needed.",
        description:
            "TMC supports community-focused initiatives and practical services designed around public and institutional needs.",
        points: [
            "Community support initiatives",
            "Institutional support",
            "Public-facing assistance",
            "Community development support"
        ]
    },

    consulting: {
        title: "Consulting & Business Support",
        intro: "Practical support for organizations facing real business needs.",
        description:
            "TMC provides consulting and business support designed to help individuals and organizations address operational and practical challenges.",
        points: [
            "Business support",
            "Operational assistance",
            "Project support",
            "Practical consulting services"
        ]
    },

    travel: {
        title: "Travel & Visa Support",
        intro: "Helping clients navigate travel-related requirements.",
        description:
            "TMC provides travel and visa consultancy support for individuals and organizations based on their specific travel requirements.",
        points: [
            "Travel consultancy",
            "Visa-related support",
            "Travel planning assistance",
            "Passenger support"
        ]
    },

    oilgas: {
        title: "Oil & Gas",
        intro: "Supporting requirements within the oil and gas environment.",
        description:
            "TMC can provide support for oil and gas-related requirements according to the specific scope, project and client needs.",
        points: [
            "Project support",
            "Operational support",
            "Logistics-related assistance",
            "Client-specific service coordination"
        ]
    }
};


// Create the service detail area
const serviceDetail = document.createElement("section");

serviceDetail.id = "service-details";
serviceDetail.className = "service-details-section";

serviceDetail.innerHTML = `
    <div class="container service-details-content">

        <div class="service-details-top">
            <button id="closeService" class="service-close">
                ← Back to Services
            </button>
        </div>

        <p class="eyebrow">TMC SERVICE</p>

        <h2 id="serviceTitle"></h2>

        <p id="serviceIntro" class="service-detail-intro"></p>

        <div class="service-detail-grid">

            <div>
                <p id="serviceDescription"></p>
            </div>

            <div class="service-points">
                <h3>What we can help with</h3>
                <ul id="servicePoints"></ul>
            </div>

        </div>

        <div class="service-detail-actions">
            <button id="chatService" class="btn btn-primary">
                Chat with TMC
            </button>

            <a href="#contact" class="btn btn-secondary detail-contact">
                Contact TMC
            </a>
        </div>

    </div>
`;


// Insert details before the housing section
const housingSection = document.querySelector("#housing");

if (housingSection) {
    housingSection.before(serviceDetail);
}


// Open service details
function openService(serviceKey) {

    const service = serviceDetails[serviceKey];

    if (!service) {
        return;
    }

    document.querySelector("#serviceTitle").textContent = service.title;
    document.querySelector("#serviceIntro").textContent = service.intro;
    document.querySelector("#serviceDescription").textContent = service.description;

    const pointsList = document.querySelector("#servicePoints");

    pointsList.innerHTML = "";

    service.points.forEach(point => {
        const li = document.createElement("li");
        li.textContent = point;
        pointsList.appendChild(li);
    });

    serviceDetail.classList.add("active");

    serviceDetail.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// Connect service cards to their details
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card, index) => {

    const serviceKeys = [
        "construction",
        "housing",
        "facilities",
        "security",
        "logistics",
        "environmental",
        "community",
        "consulting",
        "travel",
        "oilgas"
    ];

    const link = card.querySelector("a");

    if (link) {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            openService(serviceKeys[index]);

        });

    }

});


// Close service details
document.addEventListener("click", function(event) {

    if (event.target.id === "closeService") {

        serviceDetail.classList.remove("active");

        document.querySelector("#services").scrollIntoView({
            behavior: "smooth"
        });

    }

});


// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target && !this.classList.contains("detail-contact")) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// Footer year
const footerYear = document.querySelector(".site-footer p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} TC & TMC. All rights reserved.`;

}
// ================= MOBILE NAVIGATION =================

const menuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("mobile-open");

        menuToggle.classList.toggle("menu-open", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });


    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("mobile-open");
            menuToggle.classList.remove("menu-open");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });
}
// ================= TMC CHATBOT =================

const chatButton = document.createElement("button");
chatButton.className = "tmc-chat-button";
chatButton.innerHTML = "⚡";
chatButton.setAttribute("aria-label", "Open TMC Assistant");

const chatBox = document.createElement("div");
chatBox.className = "tmc-chat-box";

chatBox.innerHTML = `
    <div class="tmc-chat-header">
        <div>
            <strong>TMC Assistant</strong>
            <small>FAST • RELIABLE • TRUSTED</small>
        </div>
        <button class="tmc-chat-close" aria-label="Close chat">×</button>
    </div>

    <div class="tmc-chat-messages">
        <div class="tmc-message tmc-bot">
            Welcome to TMC. How can we help you today?
        </div>
    </div>

    <div class="tmc-chat-input-area">
        <input
            type="text"
            class="tmc-chat-input"
            placeholder="Ask about our services..."
        >

        <button class="tmc-chat-send">
            Send
        </button>
    </div>
`;

document.body.appendChild(chatButton);
document.body.appendChild(chatBox);

const chatMessages = chatBox.querySelector(".tmc-chat-messages");
const chatInput = chatBox.querySelector(".tmc-chat-input");
const chatSend = chatBox.querySelector(".tmc-chat-send");
const chatClose = chatBox.querySelector(".tmc-chat-close");

chatButton.addEventListener("click", () => {
    chatBox.classList.add("chat-visible");
    chatInput.focus();
});

chatClose.addEventListener("click", () => {
    chatBox.classList.remove("chat-visible");
});

function addTmcMessage(text, type) {

    const message = document.createElement("div");

    message.className =
        type === "user"
            ? "tmc-message tmc-user"
            : "tmc-message tmc-bot";

    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleTmcMessage() {

    const message = chatInput.value.trim();

    if (!message) return;

    addTmcMessage(message, "user");

    chatInput.value = "";

    setTimeout(() => {

        addTmcMessage(
            "Thanks for contacting TMC. Our team can assist with construction, property, facilities, security, education, healthcare, logistics, public services and other requirements. Please use our Contact page to make an enquiry.",
            "bot"
        );

    }, 500);
}

chatSend.addEventListener("click", handleTmcMessage);

chatInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        handleTmcMessage();
    }

});