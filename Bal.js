// ==================== STATE MANAGEMENT ====================
const state = {
    filteredData: [],
    currentView: 'university',
    filters: {
        bal: null,
        qrup: '',
        altQrup: '',
        tehsil: ''
    }
};

// ==================== ALT QRUP DATA ====================
const altQruplar = {
    '1': ['RK', 'Rİ', 'DT', 'TC'],
    '2': ['RK', 'Rİ', 'DT', 'TC'],
    '3': ['RK', 'Rİ', 'DT', 'TC'],
    '4': ['RK', 'Rİ', 'DT', 'TC'],
    '5': ['Xüsusi qabiliyyət', 'Ümumi']
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    lucide.createIcons();
});

// ==================== EVENT LISTENERS ====================
function initializeEventListeners() {
    // Qrup dəyişikliyi
    document.getElementById('qrupSelect').addEventListener('change', handleQrupChange);
    
    // Axtarış düyməsi
    document.getElementById('searchBtn').addEventListener('click', handleSearch);
    
    // Bal inputunda Enter
    document.getElementById('balInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Tab dəyişikliyi
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => handleTabChange(btn.dataset.tab));
    });
}

// ==================== QRUP HANDLER ====================
function handleQrupChange(e) {
    const qrup = e.target.value;
    const altQrupSelect = document.getElementById('altQrupSelect');
    
    // Alt qrupları təmizlə
    altQrupSelect.innerHTML = '<option value="">Hamısı</option>';
    
    if (qrup && altQruplar[qrup]) {
        altQruplar[qrup].forEach(alt => {
            const option = document.createElement('option');
            option.value = alt;
            option.textContent = alt;
            altQrupSelect.appendChild(option);
        });
    }
}

// ==================== SEARCH HANDLER ====================
function handleSearch() {
    const bal = parseFloat(document.getElementById('balInput').value);
    const qrup = document.getElementById('qrupSelect').value;
    const altQrup = document.getElementById('altQrupSelect').value;
    const tehsil = document.getElementById('tehsilSelect').value;
    
    if (!bal || bal < 0) {
        alert('Zəhmət olmasa düzgün bal daxil edin');
        return;
    }
    
    // Filtrləri saxla
    state.filters = { bal, qrup, altQrup, tehsil };
    
    // Məlumatları filtrlə
    state.filteredData = filterData(bal, qrup, altQrup, tehsil);
    
    // Statistikanı yenilə
    updateStats();
    
    // Nəticələri göstər
    displayResults();
}

// ==================== DATA FILTERING ====================
function filterData(bal, qrup, altQrup, tehsil) {
    return ixtisaslar.filter(item => {
        // Bal yoxlaması
        if (item.kecid_bali && item.kecid_bali > bal) return false;
        
        // Qrup yoxlaması
        if (qrup && item.qrup !== parseInt(qrup)) return false;
        
        // Alt qrup yoxlaması
        if (altQrup && item.alt_qrup !== altQrup) return false;
        
        // Təhsil forması yoxlaması
        if (tehsil && item.teq_for !== tehsil) return false;
        
        return true;
    }).sort((a, b) => (b.kecid_bali || 0) - (a.kecid_bali || 0));
}

// ==================== STATS UPDATE ====================
function updateStats() {
    const uniqueUnis = [...new Set(state.filteredData.map(item => item.universitet))];
    
    document.getElementById('uygunCount').textContent = state.filteredData.length;
    document.getElementById('uniCount').textContent = uniqueUnis.length;
    
    lucide.createIcons();
}

// ==================== DISPLAY RESULTS ====================
function displayResults() {
    if (state.currentView === 'university') {
        displayUniversityView();
    } else {
        displaySpecialtyView();
    }
}

// ==================== UNIVERSITY VIEW ====================
function displayUniversityView() {
    const container = document.getElementById('universityResults');
    
    if (state.filteredData.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i data-lucide="search-x"></i>
                <h3>Nəticə tapılmadı</h3>
                <p>Daxil etdiyiniz bala uyğun ixtisas yoxdur</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    // Universitetə görə qrupla
    const byUniversity = groupByUniversity(state.filteredData);
    
    container.innerHTML = Object.entries(byUniversity)
        .map(([uni, specs]) => createUniversityCard(uni, specs))
        .join('');
    
    // Kart açma funksiyası
    document.querySelectorAll('.university-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
            lucide.createIcons();
        });
    });
    
    lucide.createIcons();
}

// ==================== GROUP BY UNIVERSITY ====================
function groupByUniversity(data) {
    return data.reduce((acc, item) => {
        if (!acc[item.universitet]) {
            acc[item.universitet] = [];
        }
        acc[item.universitet].push(item);
        return acc;
    }, {});
}

// ==================== CREATE UNIVERSITY CARD ====================
function createUniversityCard(uni, specs) {
    return `
        <div class="university-card">
            <div class="university-header">
                <div class="university-info">
                    <div class="university-icon">
                        <i data-lucide="building-2"></i>
                    </div>
                    <div class="university-name">
                        <h3>${uni}</h3>
                        <span class="university-badge">${specs.length} İxtisas</span>
                    </div>
                </div>
                <i data-lucide="chevron-down" class="expand-icon"></i>
            </div>
            <div class="specialties-list">
                ${specs.map(spec => createSpecialtyItem(spec)).join('')}
            </div>
        </div>
    `;
}

// ==================== CREATE SPECIALTY ITEM ====================
function createSpecialtyItem(spec) {
    return `
        <div class="specialty-item">
            <div class="specialty-header">
                <div class="specialty-name">${spec.ad}</div>
                <div class="specialty-score">
                    <i data-lucide="star"></i>
                    ${spec.kecid_bali || '-'}
                </div>
            </div>
            <div class="specialty-details">
                <span class="specialty-detail">
                    <i data-lucide="hash"></i>
                    Kod: ${spec.kod}
                </span>
                <span class="specialty-detail">
                    <i data-lucide="book-open"></i>
                    ${spec.teq_for === 'Ə' ? 'Əyani' : 'Qiyabi'}
                </span>
                ${spec.dovlet_sifarisi_bali ? `
                    <span class="specialty-detail">
                        <i data-lucide="award"></i>
                        DS: ${spec.dovlet_sifarisi_bali}
                    </span>
                ` : ''}
            </div>
        </div>
    `;
}

// ==================== SPECIALTY VIEW ====================
function displaySpecialtyView() {
    const container = document.getElementById('specialtyResults');
    
    if (state.filteredData.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i data-lucide="search-x"></i>
                <h3>Nəticə tapılmadı</h3>
                <p>Daxil etdiyiniz bala uyğun ixtisas yoxdur</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    // İxtisasa görə qrupla
    const bySpecialty = groupBySpecialty(state.filteredData);
    
    container.innerHTML = Object.entries(bySpecialty)
        .map(([spec, unis]) => createSpecialtyCard(spec, unis))
        .join('');
    
    lucide.createIcons();
}

// ==================== GROUP BY SPECIALTY ====================
function groupBySpecialty(data) {
    return data.reduce((acc, item) => {
        if (!acc[item.ad]) {
            acc[item.ad] = [];
        }
        acc[item.ad].push(item);
        return acc;
    }, {});
}

// ==================== CREATE SPECIALTY CARD ====================
function createSpecialtyCard(spec, unis) {
    return `
        <div class="university-card">
            <div class="university-header">
                <div class="university-info">
                    <div class="university-icon">
                        <i data-lucide="briefcase"></i>
                    </div>
                    <div class="university-name">
                        <h3>${spec}</h3>
                        <span class="university-badge">${unis.length} Universitet</span>
                    </div>
                </div>
            </div>
            <div class="specialties-list" style="display: block;">
                ${unis.map(uni => createUniversityItem(uni)).join('')}
            </div>
        </div>
    `;
}

// ==================== CREATE UNIVERSITY ITEM ====================
function createUniversityItem(uni) {
    return `
        <div class="specialty-item">
            <div class="specialty-header">
                <div class="specialty-name">${uni.universitet}</div>
                <div class="specialty-score">
                    <i data-lucide="star"></i>
                    ${uni.kecid_bali || '-'}
                </div>
            </div>
            <div class="specialty-details">
                <span class="specialty-detail">
                    <i data-lucide="book-open"></i>
                    ${uni.teq_for === 'Ə' ? 'Əyani' : 'Qiyabi'}
                </span>
                ${uni.dovlet_sifarisi_bali ? `
                    <span class="specialty-detail">
                        <i data-lucide="award"></i>
                        DS: ${uni.dovlet_sifarisi_bali}
                    </span>
                ` : ''}
            </div>
        </div>
    `;
}

// ==================== TAB CHANGE ====================
function handleTabChange(tab) {
    // Tab düymələrini yenilə
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    // Tab content-ini yenilə
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `${tab}View`);
    });
    
    state.currentView = tab;
    displayResults();
}