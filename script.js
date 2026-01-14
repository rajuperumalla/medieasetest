const medicalData = {
    categories: [
        {
            id: 'dermatology',
            name: 'Dermatology',
            folder: 'dermatology',
            icon: 'fa-solid fa-hand-dots',
            diseases: [
                { name: 'Botox', slug: 'botox' },
                { name: 'Dermal Fillers', slug: 'dermal-fillers' },
                { name: 'Hair Transplant', slug: 'hair-transplant' },
                { name: 'Anti-Aging', slug: 'anti-aging' },
                { name: 'Pigmentation treatment', slug: 'pigmentation' },
                { name: 'Hydra Facial', slug: 'hydra-facial' }
            ]
        },
        {
            id: 'proctology',
            name: 'Proctology',
            folder: 'proctology',
            icon: 'fa-solid fa-user-doctor',
            diseases: [
                { name: 'Piles Treatment', slug: 'piles' },
                { name: 'Fistula Treatment', slug: 'fistula' },
                { name: 'Fissure Treatment', slug: 'fissure' },
                { name: 'Pilonidal Sinus Treatment', slug: 'pilonidal' },
                { name: 'Rectal Prolapse', slug: 'rectal-prolapse' }
            ]
        },
        {
            id: 'laparoscopy',
            name: 'Laparoscopy',
            folder: 'laparoscopy',
            icon: 'fa-solid fa-microscope',
            diseases: [
                { name: 'Hernia Surgery', slug: 'hernia' },
                { name: 'Gallstones Treatment', slug: 'gallbladder' },
                { name: 'Appendicitis', slug: 'appendicitis' },
                { name: 'Inguinal Hernia', slug: 'hernia' }, // Mapping to hernia for now
                { name: 'Umbilical Hernia', slug: 'hernia' }
            ]
        },
        {
            id: 'gynecology',
            name: 'Gynaecology',
            folder: 'gynaecology',
            icon: 'fa-solid fa-venus',
            diseases: [
                { name: 'Surgical Abortion and MTP', slug: 'abortion' },
                { name: 'Uterus Removal', slug: 'uterus-removal' },
                { name: 'Miscarriage Treatment', slug: 'miscarriage' },
                { name: 'Endometriosis', slug: 'endometriosis' },
                { name: 'PCOS-PCOD', slug: 'pcos' },
                { name: 'Laser Vaginal Tightening', slug: 'vaginal-tightening' },
                { name: 'Vaginoplasty', slug: 'vaginoplasty' },
                { name: 'Vaginal Wart Removal', slug: 'vaginal-wart' },
                { name: 'Ectopic and Molar Pregnancy', slug: 'ectopic-pregnancy' },
                { name: 'Ovarian Cyst', slug: 'ovarian-cysts' },
                { name: 'Bartholin Cyst', slug: 'bartholin-cyst' },
                { name: 'Adenomyosis', slug: 'adenomyosis' },
                { name: 'Pregnancy Care', slug: 'pregnancy-care' },
                { name: 'Hymenoplasty', slug: 'hymenoplasty' },
                { name: 'Labiaplasty', slug: 'labiaplasty' }
            ]
        },
        {
            id: 'ent',
            name: 'ENT',
            folder: 'ent',
            icon: 'fa-solid fa-ear-listen',
            diseases: [
                { name: 'Tympanoplasty', slug: 'tympanoplasty' },
                { name: 'Stapedectomy', slug: 'stapedectomy' },
                { name: 'Sinus Treatment', slug: 'sinus-surgery' },
                { name: 'FESS Surgery', slug: 'fess' },
                { name: 'Turbinate Reduction', slug: 'turbinate-reduction' },
                { name: 'Thyroidectomy', slug: 'thyroidectomy' },
                { name: 'Vocal Cord Polyps', slug: 'vocal-cord-polyps' },
                { name: 'Mastoidectomy', slug: 'mastoidectomy' },
                { name: 'Myringotomy', slug: 'myringotomy' },
                { name: 'Septoplasty', slug: 'septoplasty' },
                { name: 'Nasal Polyps', slug: 'nasal-polyps' },
                { name: 'Adenoidectomy', slug: 'adenoidectomy' },
                { name: 'Tonsillectomy', slug: 'tonsillectomy' }
            ]
        },
        {
            id: 'urology',
            name: 'Urology',
            folder: 'urology',
            icon: 'fa-solid fa-droplet',
            diseases: [
                { name: 'RIRS Surgery', slug: 'rirs' },
                { name: 'PCNL Surgery', slug: 'pcnl' },
                { name: 'URSL Surgery', slug: 'ursl' },
                { name: 'Kidney Stones', slug: 'kidney-stones' },
                { name: 'Hydrocele', slug: 'hydrocele' },
                { name: 'Enlarged Prostate', slug: 'enlarged-prostate' },
                { name: 'Prostate Laser Surgery', slug: 'prostate-laser-surgery' },
                { name: 'Vasectomy', slug: 'vasectomy' },
                { name: 'Phimosis', slug: 'phimosis' },
                { name: 'Laser Circumcision', slug: 'laser-circumcision' },
                { name: 'Frenuloplasty', slug: 'frenuloplasty' },
                { name: 'Stapler Circumcision', slug: 'stapler-circumcision' },
                { name: 'No-Scalpel Vasectomy', slug: 'no-scalpel-vasectomy' },
                { name: 'Urethral Stricture', slug: 'urethral-stricture' },
                { name: 'ESWL Treatment', slug: 'eswl' },
                { name: 'Diverticulectomy', slug: 'diverticulectomy' }
            ]
        },
        {
            id: 'vascular',
            name: 'Vascular',
            folder: 'vascular',
            icon: 'fa-solid fa-layer-group',
            diseases: [
                { name: 'Varicose Veins Treatment', slug: 'varicose-veins' },
                { name: 'Deep Vein Thrombosis (DVT)', slug: 'dvt' },
                { name: 'AV Fistula', slug: 'av-fistula' },
                { name: 'Laser Treatment (EVLT)', slug: 'evlt' },
                { name: 'Venaseal Glue Treatment', slug: 'venaseal' },
                { name: 'Sclerotherapy', slug: 'sclerotherapy' },
                { name: 'Thrombolysis for DVT', slug: 'thrombolysis' },
                { name: 'Peritoneal Dialysis Catheter', slug: 'peritoneal-dialysis' }
            ]
        },
        {
            id: 'plastic-surgery',
            name: 'Aesthetics',
            folder: 'aesthetics',
            icon: 'fa-solid fa-wand-magic-sparkles',
            diseases: [
                { name: 'Liposuction', slug: 'liposuction' },
                { name: 'Tummy Tuck', slug: 'tummy-tuck' },
                { name: 'Gynecomastia', slug: 'gynecomastia' },
                { name: 'Breast Augmentation', slug: 'breast-augmentation' },
                { name: 'Double Chin', slug: 'double-chin' },
                { name: 'Blepharoplasty', slug: 'blepharoplasty' },
                { name: 'Scar Removal', slug: 'scar-removal' },
                { name: 'Hair Fall PRP', slug: 'hair-fall-prp' },
                { name: 'Sebaceous Cyst Surgery', slug: 'sebaceous-cyst' },
                { name: 'Lipoma Surgery', slug: 'lipoma' },
                { name: 'Fat Loss', slug: 'fat-loss' },
                { name: 'Breast Lift', slug: 'breast-lift' },
                { name: 'Rhinoplasty', slug: 'rhinoplasty' },
                { name: 'Buccal Fat', slug: 'buccal-fat' },
                { name: 'Earlobe Repair', slug: 'earlobe-repair' },
                { name: 'Beard Transplant', slug: 'beard-transplant' },
                { name: 'Cleft Lip', slug: 'cleft-lip' }
            ]
        },
        {
            id: 'orthopedics',
            name: 'Orthopedics',
            folder: 'orthopedics',
            icon: 'fa-solid fa-bone',
            diseases: [
                { name: 'Knee Replacement', slug: 'knee-replacement' },
                { name: 'Hip Replacement', slug: 'hip-replacement' },
                { name: 'ACL Tear', slug: 'acl-tear' },
                { name: 'Spine Surgery', slug: 'spine-surgery' },
                { name: 'Carpal Tunnel', slug: 'carpal-tunnel' }
            ]
        },
        {
            id: 'ophthalmology',
            name: 'Ophthalmology',
            folder: 'ophthalmology',
            icon: 'fa-solid fa-eye',
            diseases: [
                { name: 'Lasik', slug: 'lasik' },
                { name: 'SMILE Lasik', slug: 'smile-lasik' },
                { name: 'PRK Lasik', slug: 'prk-lasik' },
                { name: 'FEMTO Lasik', slug: 'femto-lasik' },
                { name: 'ICL Surgery', slug: 'icl-surgery' },
                { name: 'Contoura Vision', slug: 'contoura-vision' },
                { name: 'Cataract Surgery', slug: 'cataract' },
                { name: 'Glaucoma', slug: 'glaucoma' },
                { name: 'Diabetic Retinopathy', slug: 'diabetic-retinopathy' },
                { name: 'Retinal Detachment', slug: 'retinal-detachment' },
                { name: 'Squint Surgery', slug: 'squint' },
                { name: 'Vitrectomy', slug: 'vitrectomy' }
            ]
        },
        {
            id: 'bariatric',
            name: 'Weight Loss',
            folder: 'bariatric',
            icon: 'fa-solid fa-weight-scale',
            diseases: [
                { name: 'Gastric Bypass', slug: 'gastric-bypass' },
                { name: 'Sleeve Gastrectomy', slug: 'sleeve-gastrectomy' },
                { name: 'Gastric Band', slug: 'gastric-band' },
                { name: 'Gastric Plication', slug: 'gastric-plication' },
                { name: 'Intragastric Balloon', slug: 'intragastric-balloon' },
                { name: 'Weight Loss Mgmt', slug: 'weight-loss-mgmt' }
            ]
        }
    ],
    doctors: [
        { name: 'Dr. Sameer Gupta', exp: '15 Yrs', city: 'Hyderabad', rating: 4.9, diseases: ['Piles', 'Fissure', 'Hernia', 'Piles Treatment', 'Fissure Treatment'], img: 'https://i.pravatar.cc/150?u=1' },
        { name: 'Dr. Anjali Verma', exp: '12 Yrs', city: 'Secunderabad', rating: 4.8, diseases: ['Piles', 'Fistula', 'Abortion', 'Piles Treatment', 'Surgical Abortion and MTP'], img: 'https://i.pravatar.cc/150?u=2' },
        { name: 'Dr. Rahul Sharma', exp: '18 Yrs', city: 'Hyderabad', rating: 4.7, diseases: ['Kidney Stones', 'Prostate (BPH)', 'UTI', 'Kidney Stones (ESWL/RIRS/PCNL)'], img: 'https://i.pravatar.cc/150?u=3' },
        { name: 'Dr. Priya Das', exp: '10 Yrs', city: 'Nalgonda', rating: 4.9, diseases: ['PCOS/PCOD', 'Hymenoplasty', 'Abortion', 'PCOS-PCOD', 'Vaginoplasty'], img: 'https://i.pravatar.cc/150?u=4' },
        { name: 'Dr. Vikram Seth', exp: '20 Yrs', city: 'Mahbubnagar', rating: 5.0, diseases: ['Varicose Veins', 'Liposuction', 'Gynaecomastia', 'Varicose Veins Treatment', 'Lipoma Surgery'], img: 'https://i.pravatar.cc/150?u=5' },
        { name: 'Dr. Sonia Khan', exp: '14 Yrs', city: 'Hyderabad', rating: 4.8, diseases: ['Lasik', 'Cataract', 'Glaucoma', 'Cataract Surgery', 'Squint Surgery'], img: 'https://i.pravatar.cc/150?u=6' },
        { name: 'Dr. Amit Trivedi', exp: '16 Yrs', city: 'Secunderabad', rating: 4.7, diseases: ['ACL Reconstruction', 'Knee Replacement', 'Appendicitis', 'ACL Tear Treatment'], img: 'https://i.pravatar.cc/150?u=7' },
        { name: 'Dr. Meera Nair', exp: '11 Yrs', city: 'Hyderabad', rating: 4.9, diseases: ['Tonsils', 'Adenoids', 'Ear Surgery', 'Tonsillectomy', 'Sinus Treatment'], img: 'https://i.pravatar.cc/150?u=8' },
        { name: 'Dr. K. Srinivas', exp: '22 Yrs', city: 'Hyderabad', rating: 5.0, diseases: ['Bariatric Surgery', 'Weight Loss'], img: 'https://i.pravatar.cc/150?u=9' },
        { name: 'Dr. Rohan Malhotra', exp: '9 Yrs', city: 'Hyderabad', rating: 4.6, diseases: ['Circumcision', 'Hydrocele', 'Phimosis'], img: 'https://i.pravatar.cc/150?u=10' },
        { name: 'Dr. Kavita Reddy', exp: '13 Yrs', city: 'Bangalore', rating: 4.8, diseases: ['Pregnancy Care'], img: 'https://i.pravatar.cc/150?u=11' },
        { name: 'Dr. Rajesh Kumar', exp: '19 Yrs', city: 'Delhi', rating: 4.7, diseases: ['Hair Transplant', 'Botox', 'Anti-Aging'], img: 'https://i.pravatar.cc/150?u=12' },
        { name: 'Dr. Sneha Patil', exp: '8 Yrs', city: 'Mumbai', rating: 4.9, diseases: ['Breast Augmentation', 'Tummy Tuck', 'Liposuction'], img: 'https://i.pravatar.cc/150?u=13' },
        { name: 'Dr. Arjun Mehta', exp: '15 Yrs', city: 'Hyderabad', rating: 4.8, diseases: ['Spine Surgery', 'Shoulder Replacement', 'Knee Arthroscopy'], img: 'https://i.pravatar.cc/150?u=14' },
        { name: 'Dr. Neha Gupta', exp: '11 Yrs', city: 'Pune', rating: 4.7, diseases: ['Endometriosis', 'Ovarian Cyst', 'Hysterectomy'], img: 'https://i.pravatar.cc/150?u=15' },
        { name: 'Dr. Karthik Rao', exp: '14 Yrs', city: 'Chennai', rating: 4.9, diseases: ['FESS Surgery', 'Septoplasty', 'Thyroidectomy'], img: 'https://i.pravatar.cc/150?u=16' },
        { name: 'Dr. Manoj Singh', exp: '17 Yrs', city: 'Kolkata', rating: 4.8, diseases: ['Retinal Detachment', 'Diabetic Retinopathy', 'Vitrectomy'], img: 'https://i.pravatar.cc/150?u=17' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Relative Path Helper
    // If we are in 'categories/', depth is 1. 'surgeries/general/', depth is 2.
    // 'index.html', depth is 0.
    // Simplistic check: count '../' in existing links or just check location.
    function getRelativePrefix() {
        const path = window.location.pathname;
        // Fix for Windows file paths which use backslashes or mix
        const normalizedPath = path.replace(/\\/g, '/');

        if (normalizedPath.includes('/surgeries/')) {
            // Check depth within surgeries. 
            // root/surgeries/cat/disease.html -> ../../
            // root/surgeries/disease_generic.html (unlikely) -> ../
            return '../../';
        }
        if (normalizedPath.includes('/categories/')) {
            return '../';
        }
        return './'; // Default to ./ for root to avoid empty string issues with some hrefs
    }
    const relPrefix = getRelativePrefix();

    // Force page to start from top on refresh
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    const categoryGrid = document.getElementById('categoryGrid');
    const subcategorySection = document.getElementById('subcategories');
    const subcategoryGrid = document.getElementById('subCategoryGrid');
    const doctorsSection = document.getElementById('doctors');
    const doctorGrid = document.getElementById('doctorGrid');
    const backBtn = document.getElementById('backToCategories');
    const selectedCategoryTitle = document.getElementById('selectedCategoryTitle');

    // Reset form on load
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) appointmentForm.reset();

    const diseaseInput = document.getElementById('diseaseInput');
    const searchResults = document.getElementById('searchResults');

    // 0. Populate Navbar Categories and Dropdowns
    function renderNavCategories() {
        const navContainer = document.getElementById('navCategories');
        const mobileMegaMenu = document.getElementById('mobileMegaMenu');

        // Desktop Nav Injection - Only if container exists
        if (navContainer) {
            navContainer.innerHTML = medicalData.categories.map((cat, index) => {
                const hasMany = cat.diseases.length > 8;
                const isLastItems = index >= medicalData.categories.length - 2;
                const alignmentClass = isLastItems ? 'align-right' : '';
                const categoryLink = `${relPrefix}categories/${cat.id}.html`;

                return `
            <div class="nav-item group relative flex-shrink-0">
                <a href="${categoryLink}" class="dropdown-trigger hover:text-primary transition-all duration-300 flex items-center gap-1 whitespace-nowrap cursor-pointer py-2 px-4 rounded-full hover:shadow-neu-pressed active:shadow-neu-pressed font-extrabold text-[#4A5568] tracking-tight no-underline hover:bg-neu-base transform hover:scale-105" data-cat="${cat.id}">
                    ${cat.name} <i class="fa-solid fa-chevron-down text-[8px] group-hover:rotate-180 transition-transform ml-1 opacity-50"></i>
                </a>
                <div class="dropdown-menu bg-neu-base shadow-neu-card border border-white/40 ${hasMany ? 'w-[500px]' : 'w-[280px]'} ${alignmentClass} hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl mt-2">
                    <h4 class="text-[10px] text-primary font-bold uppercase tracking-widest mb-3 px-2 border-b border-gray-200/50 pb-2 cursor-pointer hover:bg-gray-100/50 transition-all nav-category-header" onclick="window.location.href='${categoryLink}'">${cat.name} Services</h4>
                    <ul class="grid ${hasMany ? 'grid-cols-2' : 'grid-cols-1'} gap-x-2 gap-y-1">
                        ${cat.diseases.map(d => {
                    const surgeryLink = `${relPrefix}surgeries/${cat.folder}/${d.slug}.html`;
                    return `
                                <li>
                                    <a href="${surgeryLink}" class="nav-disease-link block px-3 py-2 hover:bg-neu-base hover:shadow-neu-pressed hover:text-primary rounded-xl transition-all font-medium text-[11px] whitespace-normal leading-tight text-gray-600 flex items-center gap-2 group/link border border-transparent hover:border-white/20 transform hover:scale-105">
                                        <i class="fa-solid fa-angle-right text-[8px] opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-primary"></i>
                                        ${d.name}
                                    </a>
                                </li>
                            `;
                }).join('')}
                    </ul>
                </div>
            </div>
            `;
            }).join('');
        } // End if (navContainer)

        // Mobile Menu Injection (Accordion Style)
        const mobileCategoriesContainer = document.getElementById('mobileCategoriesContainer');
        if (mobileCategoriesContainer) {
            mobileCategoriesContainer.innerHTML = medicalData.categories.map((cat, index) => `
                <div class="mobile-category-item border-b border-white/20 last:border-0">
                    <button class="w-full flex justify-between items-center py-3 text-gray-700 font-bold text-sm bg-neu-base hover:shadow-neu-pressed transition-all rounded-xl px-4" 
                        onclick="toggleMobileAccordion(this)">
                        <span class="flex items-center gap-3">
                            <i class="${cat.icon} text-primary w-5 text-center"></i> 
                            ${cat.name}
                        </span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-gray-400 transition-transform duration-300"></i>
                    </button>
                    <ul class="hidden pl-10 pr-2 pb-3 space-y-2 animate-fade-in bg-gray-50/30 rounded-b-lg">
                        ${cat.diseases.map(d => {
                const surgeryLink = `${relPrefix}surgeries/${cat.folder}/${d.slug}.html`;
                return `
                            <li>
                                <a href="${surgeryLink}" 
                                   class="nav-disease-link block py-2 text-gray-600 text-xs hover:text-primary transition-colors border-b border-gray-100 last:border-0 flex justify-between items-center">
                                   ${d.name}
                                   <i class="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></i>
                                </a>
                            </li>
                        `;
            }).join('')}
                        <li>
                             <a href="${relPrefix}categories/${cat.id}.html" class="block py-2 text-primary font-bold text-xs text-center border-t border-gray-100 mt-1">View All ${cat.name}</a>
                        </li>
                    </ul>
                </div>
            `).join('');

            // Define helper if not exists contextually, or attach to window
            if (!window.toggleMobileAccordion) {
                window.toggleMobileAccordion = function (btn) {
                    const ul = btn.nextElementSibling;
                    const icon = btn.querySelector('.fa-chevron-down');
                    const isCurrentlyOpen = !ul.classList.contains('hidden');
                    const mobileMenuElem = document.getElementById('mobileMenu');

                    // Close all other open accordions first (only one open at a time)
                    const allCategoryItems = document.querySelectorAll('.mobile-category-item');
                    allCategoryItems.forEach(item => {
                        const otherBtn = item.querySelector('button');
                        const otherUl = item.querySelector('ul');
                        const otherIcon = otherBtn.querySelector('.fa-chevron-down');

                        if (otherBtn === btn) return;

                        if (!otherUl.classList.contains('hidden')) {
                            otherUl.classList.add('hidden');
                            otherIcon.classList.remove('rotate-180');
                            otherBtn.classList.remove('text-primary');
                        }
                    });

                    // Toggle the clicked accordion
                    if (isCurrentlyOpen) {
                        ul.classList.add('hidden');
                        icon.classList.remove('rotate-180');
                        btn.classList.remove('text-primary');

                        // If everything is closed, remove scroll and height limit
                        if (mobileMenuElem) {
                            mobileMenuElem.classList.remove('max-h-[75vh]', 'overflow-y-auto');
                            mobileMenuElem.classList.add('max-h-none');
                        }
                    } else {
                        ul.classList.remove('hidden');
                        icon.classList.add('rotate-180');
                        btn.classList.add('text-primary');

                        // If something is open, enable scroll and restrict height
                        if (mobileMenuElem) {
                            mobileMenuElem.classList.add('max-h-[75vh]', 'overflow-y-auto');
                            mobileMenuElem.classList.remove('max-h-none');
                        }
                    }
                };
            }
        }

    }

    // Mobile Menu Setup (Decoupled)
    function setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenuElem = document.getElementById('mobileMenu');
        const navElement = document.querySelector('nav');
        // Mobile bottom bar might not have ID in some legacy pages, but we try to find it
        const mobileBottomBarElem = document.getElementById('mobileBottomBar') || document.querySelector('.fixed.bottom-0.bg-white');

        // Helper function to close mobile menu
        const closeMobileMenu = () => {
            if (mobileMenuElem && !mobileMenuElem.classList.contains('hidden')) {
                mobileMenuElem.classList.add('hidden');
                // FIX: Re-query the live element because the original might have been replaced
                const liveBtn = document.getElementById('mobileMenuToggle');
                const toggleIcon = liveBtn ? liveBtn.querySelector('i') : null;
                if (toggleIcon) {
                    toggleIcon.classList.add('fa-bars');
                    toggleIcon.classList.remove('fa-xmark');
                    toggleIcon.classList.remove('rotate-180'); // Reset rotation
                }

                // Collapse all open sub-categories (accordions) when the menu is closed
                const allCategoryItems = document.querySelectorAll('.mobile-category-item');
                allCategoryItems.forEach(item => {
                    const btn = item.querySelector('button');
                    const ul = item.querySelector('ul');
                    const icon = btn.querySelector('.fa-chevron-down');
                    if (ul && !ul.classList.contains('hidden')) {
                        ul.classList.add('hidden');
                        if (icon) icon.classList.remove('rotate-180');
                        btn.classList.remove('text-primary');
                    }
                });

                // Re-enable body scroll
                document.body.style.overflow = '';

                // Show mobile bottom bar again (if it was visible before based on scroll position)
                if (mobileBottomBarElem && window.scrollY > 200) {
                    mobileBottomBarElem.classList.remove('translate-y-full');
                    mobileBottomBarElem.classList.add('translate-y-0');
                }
            }
        };

        // Helper function to open mobile menu
        const openMobileMenu = () => {
            if (mobileMenuElem) {
                mobileMenuElem.classList.remove('hidden');
                mobileMenuElem.classList.add('max-h-none');
                mobileMenuElem.classList.remove('max-h-[75vh]', 'overflow-y-auto');

                // FIX: Re-query the live element
                const liveBtn = document.getElementById('mobileMenuToggle');
                const toggleIcon = liveBtn ? liveBtn.querySelector('i') : null;

                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-bars');
                    toggleIcon.classList.add('fa-xmark');
                    toggleIcon.classList.add('rotate-180'); // Rotate for smooth effect
                }
                // Disable body scroll when menu is open
                document.body.style.overflow = 'hidden';

                // Hide mobile bottom bar to avoid duplicate booking options
                if (mobileBottomBarElem) {
                    mobileBottomBarElem.classList.add('translate-y-full');
                    mobileBottomBarElem.classList.remove('translate-y-0');
                }
            }
        };

        if (mobileMenuToggle && mobileMenuElem) {
            // Remove existing listeners to avoid duplicates if called multiple times (though here it's once)
            const newToggle = mobileMenuToggle.cloneNode(true);
            mobileMenuToggle.parentNode.replaceChild(newToggle, mobileMenuToggle);

            newToggle.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering the outside click handler
                if (mobileMenuElem.classList.contains('hidden')) {
                    openMobileMenu();
                } else {
                    closeMobileMenu();
                }
            });

            // Re-assign for closure
            const safeToggle = newToggle;

            // Close menu when clicking outside (on body content)
            document.addEventListener('click', (e) => {
                // Check if menu is open
                if (!mobileMenuElem.classList.contains('hidden')) {
                    // Check if click is outside the nav element
                    // Ensure navElement exists
                    if (navElement && !navElement.contains(e.target)) {
                        closeMobileMenu();
                    }
                }
            });

            // Prevent clicks inside menu from closing it
            mobileMenuElem.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }

    // 1. Populate Category Grid & Main Category Chips
    function renderCategories() {
        if (!categoryGrid) return; // Safety check
        categoryGrid.innerHTML = medicalData.categories.map((cat, index) => {
            // Default: 5 per row on LG (20%)
            let widthClass = "w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)]";

            // Second row: 4 per row on LG (25%) - indices 5, 6, 7, 8
            if (index >= 5 && index <= 8) {
                widthClass = "w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-1.5rem)]";
            }

            return `
                <a href="${relPrefix}categories/${cat.id}.html" class="category-card flex flex-col items-center p-6 bg-neu-base rounded-[2rem] shadow-neu-card cursor-pointer group hover:shadow-neu-pressed transition-all ${widthClass} no-underline">
                    <div class="w-16 h-16 bg-neu-base rounded-full flex items-center justify-center text-primary mb-4 shadow-neu-icon group-hover:scale-110 transition-transform duration-300">
                        <i class="${cat.icon} text-2xl"></i>
                    </div>
                    <h3 class="font-bold text-gray-700 text-sm text-center">${cat.name}</h3>
                </a>
            `;
        }).join('');

        const mainCategoryChips = document.getElementById('mainCategoryChips');
        if (mainCategoryChips) {
            mainCategoryChips.innerHTML = medicalData.categories.map(cat => `
                <button type="button" class="whitespace-nowrap px-6 py-2.5 rounded-2xl text-[11px] font-bold text-gray-600 hover:shadow-neu-pressed transition-all bg-neu-base shadow-neu-flat flex-shrink-0 category-chip active:shadow-neu-pressed border border-white/20" data-id="${cat.id}">
                    ${cat.name}
                </button>
            `).join('');

            document.querySelectorAll('.category-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    const cat = medicalData.categories.find(c => c.id === chip.dataset.id);
                    diseaseInput.value = cat.name;
                    // Pass false to prevent scrolling when using the form chips
                    // showSubcategories(cat.id, false); // Disabled as per user request
                    // Highlight active chip
                    document.querySelectorAll('.category-chip').forEach(b => {
                        b.classList.remove('shadow-neu-pressed', 'text-primary');
                        b.classList.add('shadow-neu-flat', 'text-gray-600');
                    });
                    chip.classList.remove('shadow-neu-flat', 'text-gray-600');
                    chip.classList.add('shadow-neu-pressed', 'text-primary');
                });
            });
        }

    }


    // 2. Show Subcategories
    function showSubcategories(catId, shouldScroll = true) {
        // Reset doctors view
        doctorsSection.classList.add('hidden');

        const category = medicalData.categories.find(c => c.id === catId);
        if (!category) return;

        selectedCategoryTitle.innerText = `${category.name} Care`;
        subcategoryGrid.innerHTML = category.diseases.map(disease => `
            <div class="p-6 bg-neu-base rounded-2xl shadow-neu-card hover:shadow-neu-pressed transition-all cursor-pointer disease-item border-none" data-name="${disease}">
                <div class="flex justify-between items-center">
                    <span class="font-bold text-gray-700">${disease}</span>
                    <i class="fa-solid fa-arrow-right text-primary"></i>
                </div>
            </div>
        `).join('');

        subcategorySection.classList.remove('hidden');
        if (shouldScroll) {
            subcategorySection.scrollIntoView({ behavior: 'smooth' });
        }

        // Event listeners for diseases
        document.querySelectorAll('.disease-item').forEach(item => {
            item.addEventListener('click', () => showDoctors(item.dataset.name, true));
        });
    }

    // 3. Show Doctors
    function showDoctors(diseaseName, shouldScroll = true) {
        // Find if it's a category or a specific disease
        const category = medicalData.categories.find(c => c.name === diseaseName);
        let doctors;

        if (category) {
            // Filter doctors who treat ANY disease in this category
            doctors = medicalData.doctors.filter(doc =>
                doc.diseases.some(d => category.diseases.some(catD => catD.toLowerCase().includes(d.toLowerCase()) || d.toLowerCase().includes(catD.toLowerCase())))
            );
            document.getElementById('doctorsSectionTitle').innerText = `${category.name} Specialists`;
        } else {
            doctors = medicalData.doctors.filter(doc =>
                doc.diseases.some(d => d.toLowerCase().includes(diseaseName.toLowerCase()) || diseaseName.toLowerCase().includes(d.toLowerCase()))
            );
            document.getElementById('doctorsSectionTitle').innerText = `Specialists for ${diseaseName}`;
        }

        doctorGrid.innerHTML = doctors.length > 0 ? doctors.map(doc => `
            <div class="doctor-card bg-neu-base p-6 rounded-[2rem] shadow-neu-card animate-fade-in border-none">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${doc.img}" class="w-20 h-20 rounded-2xl object-cover shadow-sm" alt="${doc.name}">
                    <div>
                        <h4 class="font-extrabold text-gray-900">${doc.name}</h4>
                        <p class="text-xs text-gray-500 font-medium">${doc.exp} Experience</p>
                        <div class="flex items-center gap-1 text-yellow-500 mt-1">
                            <i class="fa-solid fa-star text-[10px]"></i>
                            <span class="text-xs font-bold text-gray-800">${doc.rating}</span>
                        </div>
                    </div>
                </div>
                <div class="space-y-3 mb-6">
                    <div class="flex items-center gap-2 text-xs text-gray-600">
                        <i class="fa-solid fa-location-dot text-primary"></i>
                        <span>Available in ${doc.city}</span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-gray-600">
                        <i class="fa-solid fa-calendar-check text-secondary"></i>
                        <span>Earliest slot: Today</span>
                    </div>
                </div>
                <button class="uiverse-btn uiverse-btn-blue w-full">
                    <div class="button-outer">
                        <div class="button-inner">
                            <span>Book Appointment</span>
                        </div>
                    </div>
                </button>
            </div>
        `).join('') : `
            <div class="col-span-full py-20 text-center">
                <p class="text-gray-400 font-medium">No doctors found for this selection in your area.</p>
            </div>
        `;

        // Populate Right Side Info Panel
        const infoPanel = document.getElementById('diseaseInfoPanel');
        if (infoPanel) {
            let info = {
                title: 'Medical Overview',
                whatIs: 'Select a specific condition to learn more.',
                procedure: ' procedures are performed by expert surgeons.',
                recovery: 'Recovery times vary based on the specific condition and treatment method.'
            };

            if (category) {
                info = {
                    title: category.name,
                    whatIs: `${category.name} deals with conditions affecting the specific organ systems. Our specialists provide comprehensive care for all related ailments.`,
                    procedure: `Advanced ${category.name.toLowerCase()} procedures include minimally invasive techniques for faster recovery.`,
                    recovery: 'Most patients experience quick recovery with our modern surgical approaches.'
                };
            } else if (diseaseName) {
                // Generate content dynamically for the selected disease
                info = {
                    title: diseaseName,
                    whatIs: `${diseaseName} is a common medical condition that can impact daily life. Early diagnosis and treatment are crucial for effective management.`,
                    procedure: `Modern surgical treatment for ${diseaseName} is often minimally invasive (laser/laparoscopic), ensuring minimal pain and scarring.`,
                    recovery: `Patients typically recover within a few days after ${diseaseName} treatment, with most returning to normal activities shortly.`
                };
            }

            infoPanel.innerHTML = `
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${info.title}</h3>
                    <div class="w-12 h-1 bg-primary rounded-full mb-6"></div>
                    
                    <div class="space-y-6">
                        <div class="bg-neu-base p-6 rounded-3xl shadow-neu-pressed">
                            <h4 class="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                                <i class="fa-solid fa-circle-info text-blue-500"></i> What is it?
                            </h4>
                            <p class="text-xs text-gray-600 leading-relaxed">${info.whatIs}</p>
                        </div>
                        
                        <div class="bg-neu-base p-6 rounded-3xl shadow-neu-pressed">
                            <h4 class="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                                <i class="fa-solid fa-syringe text-green-500"></i> Procedure
                            </h4>
                            <p class="text-xs text-gray-600 leading-relaxed">${info.procedure}</p>
                        </div>
                        
                        <div class="bg-neu-base p-6 rounded-3xl shadow-neu-pressed">
                             <h4 class="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                                <i class="fa-solid fa-heart-pulse text-red-500"></i> Recovery
                            </h4>
                            <p class="text-xs text-gray-600 leading-relaxed">${info.recovery}</p>
                        </div>

                         <div class="p-6 bg-neu-base rounded-3xl shadow-neu-flat">
                            <h4 class="text-xs font-bold text-primary mb-2">Why Choose Us?</h4>
                            <ul class="text-[10px] text-gray-600 space-y-2">
                                <li><i class="fa-solid fa-check text-green-500 mr-1"></i> Insurance Approved</li>
                                <li><i class="fa-solid fa-check text-green-500 mr-1"></i> Cost-Effective</li>
                                <li><i class="fa-solid fa-check text-green-500 mr-1"></i> Free Pick & Drop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        doctorsSection.classList.remove('hidden');
        if (shouldScroll) {
            doctorsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // 4. Disease Search Interaction (Reusable)
    function setupDiseaseSearch(inputId, resultsId) {
        const inputElem = document.getElementById(inputId);
        const resultsElem = document.getElementById(resultsId);

        if (!inputElem || !resultsElem) return;

        inputElem.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase();
            if (value.length < 1) {
                resultsElem.classList.add('hidden');
                return;
            }

            const allDiseases = medicalData.categories.flatMap(cat =>
                cat.diseases.map(d => ({ name: d.name, category: cat.name }))
            );

            const filtered = allDiseases.filter(d =>
                d.name.toLowerCase().includes(value) || d.category.toLowerCase().includes(value)
            );

            if (filtered.length > 0) {
                resultsElem.innerHTML = filtered.map(d => `
                <div class="px-5 py-3 hover:shadow-neu-pressed bg-neu-base cursor-pointer border-b border-white/20 last:border-0 search-item" data-name="${d.name}">
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-gray-700 text-sm lg:text-xs">${d.name}</span>
                        <span class="text-[11px] lg:text-[9px] text-gray-500 bg-transparent px-2 py-0.5 rounded-full font-bold lg:font-normal shadow-neu-flat">${d.category}</span>
                    </div>
                </div>
            `).join('');
                resultsElem.classList.remove('hidden');
            } else {
                resultsElem.classList.add('hidden');
            }

            // Search item click
            resultsElem.querySelectorAll('.search-item').forEach(item => {
                item.addEventListener('click', () => {
                    inputElem.value = item.dataset.name;
                    resultsElem.classList.add('hidden');
                    // Only show doctors if triggering from Hero main search

                });
            });
        });

        // Close search dropdown on click away
        document.addEventListener('click', (e) => {
            if (!inputElem.contains(e.target) && !resultsElem.contains(e.target)) {
                resultsElem.classList.add('hidden');
            }
        });
    }

    // Initialize search for both forms
    setupDiseaseSearch('diseaseInput', 'searchResults');
    setupDiseaseSearch('modalDiseaseInput', 'modalSearchResults');
    setupDiseaseSearch('mobileHeroDiseaseInput', 'mobileHeroDiseaseResults');

    // 5. Intelligent Global Search Bar Logic (Nav & Mobile) - REPLACED
    function setupGlobalSearch(inputId, resultsId) {
        const input = document.getElementById(inputId);
        const resultsContainer = document.getElementById(resultsId);

        if (!input || !resultsContainer) return;

        // Intent Mapping (Colloquial -> Technical)
        const intentMap = {
            'headache': 'Neurology', // Example if we had neurology
            'stomach': 'Laparoscopy', // General abdominal
            'baby': 'Gynaecology',
            'delivery': 'Gynaecology',
            'skin': 'Dermatology',
            'face': 'Aesthetics',
            'bone': 'Orthopedics',
            'joint': 'Orthopedics',
            'eye': 'Ophthalmology',
            'vision': 'Ophthalmology',
            'lens': 'Ophthalmology',
            'fat': 'Weight Loss',
            'diet': 'Weight Loss',
            'nose': 'ENT',
            'ear': 'ENT',
            'throat': 'ENT',
            'pee': 'Urology',
            'urine': 'Urology',
            'kidney': 'Urology',
            'vein': 'Vascular',
            'piles': 'Proctology',
            'fissure': 'Proctology'
        };

        // Fuzzy Match Scoring Function
        function scoreMatch(query, text) {
            const normalize = (str) => str.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();

            const q = query.toLowerCase();
            const t = text.toLowerCase();
            const qNorm = normalize(q);
            const tNorm = normalize(t);

            // 1. Exact Match (Highest)
            if (t === q || tNorm === qNorm) return 100;

            // 2. Starts With
            if (t.startsWith(q) || tNorm.startsWith(qNorm)) return 80;

            // 3. Contains
            if (t.includes(q) || tNorm.includes(qNorm)) return 60;

            // 4. Word-by-Word Check (e.g. "Sameer" in "Dr. Sameer Gupta")
            const queryWords = qNorm.split(' ');
            const textWords = tNorm.split(' ');

            // If every word in query exists in text (in any order)
            const allWordsFound = queryWords.every(qw => textWords.some(tw => tw.includes(qw)));
            if (allWordsFound) return 70;

            // Simple fuzzy check (allow 1 character mistake)
            let mistakes = 0;
            let j = 0;
            // Use the normalized versions for fuzzy check to ignore dots
            for (let i = 0; i < qNorm.length && j < tNorm.length; i++) {
                if (qNorm[i] !== tNorm[j]) {
                    mistakes++;
                    if (mistakes > 2) return 0;
                } else {
                    j++;
                }
            }
            return 40; // Fuzzy match
        }

        input.addEventListener('input', (e) => {
            let query = e.target.value.toLowerCase().trim();
            if (query.length < 1) {
                resultsContainer.classList.add('hidden');
                return;
            }

            // Check for intent mapping
            const mappedIntent = Object.keys(intentMap).find(key => query.includes(key));
            if (mappedIntent) {
                // Determine if we should prioritize the mapped category
                // For now, we'll just treat the mapped internal term as a strong signal
                // console.log("Mapped intent:", mappedIntent, "->", intentMap[mappedIntent]);
            }

            let allResults = [];
            const addedItems = new Set();

            // 1. Search Categories (Score: 600 - 650)
            medicalData.categories.forEach(cat => {
                const score = Math.max(
                    scoreMatch(query, cat.name),
                    mappedIntent && intentMap[mappedIntent] === cat.name ? 90 : 0
                );

                if (score > 60) {
                    allResults.push({
                        type: 'Service Category',
                        name: cat.name,
                        subtitle: 'Explore all treatments',
                        icon: cat.icon,
                        score: score + 550, // Base 600 range
                        action: () => {
                            window.location.href = `${relPrefix}categories/${cat.id}.html`;
                        }
                    });
                }

                // Search Diseases (Score: 700 - 800)
                cat.diseases.forEach(d => {
                    const dScore = scoreMatch(query, d.name);
                    if (dScore > 40 && !addedItems.has(d.name)) {
                        // Diseases get high priority
                        let finalDScore = dScore + 700;
                        if (dScore === 100) finalDScore = 800; // Exact disease match

                        allResults.push({
                            type: 'Treatment',
                            name: d.name,
                            subtitle: `in ${cat.name}`,
                            icon: 'fa-solid fa-notes-medical',
                            score: finalDScore,
                            action: () => {
                                window.location.href = `${relPrefix}surgeries/${cat.folder}/${d.slug}.html`;
                            }
                        });
                        addedItems.add(d.name);
                    }
                });
            });

            // 2. Search Doctors (Score: Variable)
            medicalData.doctors.forEach(doc => {
                const nameScore = scoreMatch(query, doc.name);
                const cityScore = scoreMatch(query, doc.city);

                let finalDocScore = 0;

                // CRITICAL: Logic for "Copy Paste Doctor Name" -> Top Priority
                if (nameScore === 100) {
                    finalDocScore = 2000; // Absolute Top Priority
                }
                else if (nameScore >= 80) { // Starts with "Dr. Sam..."
                    finalDocScore = 1000; // High Priority (Above Diseases)
                }
                else if (nameScore >= 60) { // Contains "Sameer"
                    // If just containing the name, we show it BELOW diseases (as per user req)
                    // Diseases are ~700-800. So we put this at ~400.
                    finalDocScore = 400 + nameScore;
                }
                else if (cityScore > 80) {
                    finalDocScore = 300;
                }
                else if (nameScore >= 40) { // Fuzzy match
                    finalDocScore = 200;
                }


                if (finalDocScore > 0) {
                    allResults.push({
                        type: 'Doctor',
                        name: doc.name,
                        subtitle: `${doc.exp} Exp • ${doc.city}`,
                        icon: 'fa-user-doctor',
                        image: doc.img,
                        score: finalDocScore,
                        action: () => {
                            // Find the category of the first disease the doctor treats to show them there
                            const doctorDisease = doc.diseases[0];
                            const category = medicalData.categories.find(c =>
                                c.diseases.some(d => d.name.toLowerCase().includes(doctorDisease.toLowerCase()))
                            );
                            if (category) {
                                window.location.href = `${relPrefix}categories/${category.id}.html#doctors`;
                            } else {
                                // Fallback to a general category or just home if not found
                                window.location.href = `${relPrefix}index.html#categories`;
                            }
                        }
                    });
                }
            });

            // General Website Sections (Intent)
            const staticPages = [
                { name: 'Book Appointment', type: 'Action', keywords: ['book', 'appointment', 'consult', 'schedule'], action: () => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' }) },
                { name: 'Our Specialities', type: 'Section', keywords: ['specialities', 'services', 'departments', 'catgories'], action: () => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' }) }
            ];

            staticPages.forEach(page => {
                if (page.keywords.some(k => scoreMatch(query, k) > 50)) {
                    allResults.push({
                        type: page.type,
                        name: page.name,
                        subtitle: 'Go to section',
                        icon: 'fa-solid fa-arrow-up-right-from-square',
                        score: 70,
                        action: page.action
                    });
                }
            });


            // Sort by score DESC
            allResults.sort((a, b) => b.score - a.score);

            // Render
            if (allResults.length > 0) {
                // Group by type for a cleaner look if we have many
                resultsContainer.innerHTML = `
                    ${mappedIntent ? `<div class="px-4 py-2 text-[10px] text-primary font-bold bg-blue-50/50 border-b border-white/20">Related to "${mappedIntent}"</div>` : ''}
                    ${allResults.slice(0, 8).map((item, index) => `
                    <div class="px-4 py-3 hover:shadow-neu-pressed bg-neu-base cursor-pointer border-b border-white/20 last:border-0 flex items-center gap-3 global-search-item group transition-all" data-index="${index}">
                        ${item.image ?
                        `<img src="${item.image}" class="w-10 h-10 rounded-xl object-cover shadow-neu-flat group-hover:scale-110 transition-transform">` :
                        `<div class="w-10 h-10 rounded-xl bg-neu-base text-primary shadow-neu-flat flex items-center justify-center text-sm group-hover:text-blue-600 group-hover:shadow-neu-pressed transition-all"><i class="${item.icon}"></i></div>`
                    }
                        <div>
                            <p class="text-sm lg:text-xs font-bold text-gray-700 group-hover:text-primary transition-colors">${item.name}</p>
                            <p class="text-[11px] lg:text-[10px] text-gray-500 capitalize font-medium">${item.type} • ${item.subtitle}</p>
                        </div>
                    </div>
                `).join('')}`;

                resultsContainer.classList.remove('hidden');

                // Re-attach listeners using the *current* sorted array indices won't match direct lookup easily if we don't store ref.
                // Better approach: Store the filtered sorted list on the element or closure.
                // For simplicity, we just use the index of the slice.
                const topResults = allResults.slice(0, 8);
                resultsContainer.querySelectorAll('.global-search-item').forEach((el, idx) => {
                    el.addEventListener('click', () => {
                        topResults[idx].action();
                        resultsContainer.classList.add('hidden');
                        input.value = '';
                    });
                });

            } else {
                // Soft failure message
                resultsContainer.innerHTML = `
                    <div class="px-4 py-6 text-center text-gray-400 text-xs">
                        <i class="fa-solid fa-microscope mb-2 text-lg opacity-50"></i>
                        <p class="font-medium">Searching our database...</p>
                        <p class="text-[10px] mt-1">Try "Piles", "Viral Fever", or "Dr. Sharma"</p>
                    </div>
                `;
                resultsContainer.classList.remove('hidden');
            }
        });

        // Hide on outside click
        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.classList.add('hidden');
            }
        });
    }

    // Initialize Global Search
    setupGlobalSearch('globalSearchInput', 'globalSearchResults');
    setupGlobalSearch('mobileSearchInput', 'mobileSearchResults');
    setupGlobalSearch('navMobileSearchInput', 'navMobileSearchResults'); // Navbar mobile search

    // Initialize Mobile Menu
    setupMobileMenu();

    // 5. Back Button Logic
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (subcategorySection) subcategorySection.classList.add('hidden');
            if (doctorsSection) doctorsSection.classList.add('hidden');
            const catSec = document.getElementById('categories');
            if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 6. City Chips Click (Horizontal Row)
    const cityContainer = document.querySelector('.overflow-x-auto'); // Updated selector
    if (cityContainer) {
        cityContainer.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const citySelect = document.querySelector('select');
                citySelect.value = btn.innerText.toLowerCase();
                // Highlight active chip
                cityContainer.querySelectorAll('button').forEach(b => b.classList.remove('bg-red-50', 'border-blue-800', 'text-blue-800'));
                btn.classList.add('bg-red-50', 'border-blue-800', 'text-blue-800');
            });
        });
    }

    // Initial Render
    renderCategories();
    renderNavCategories();

    // 7. Modal Specialty Chips (Auto-fill disease input)
    const modalChipContainer = document.getElementById('modalSpecialtyChips');
    if (modalChipContainer) {
        modalChipContainer.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const diseaseInput = document.getElementById('modalDiseaseInput');
                // Set value to chip text (e.g., "Proctology") or maybe clear it? 
                // Using the category name as a "search" or just setting it.
                // Let's set it as the value.
                diseaseInput.value = btn.innerText;

                // Highlight active chip
                modalChipContainer.querySelectorAll('button').forEach(b => b.classList.remove('border-primary', 'text-primary', 'bg-blue-50'));
                btn.classList.add('border-primary', 'text-primary', 'bg-blue-50');
                btn.classList.remove('border-gray-200', 'text-gray-700', 'bg-white');
            });
        });
    }

    // --- SMART PAGE-AWARE INACTIVITY & BOOKING LOGIC ---

    // 1. Context Detection & Modal Prep
    function getPageContext() {
        const path = window.location.pathname.replace(/\\/g, '/');
        const filename = path.split('/').pop();

        // Check if Home
        if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
            return { type: 'home', name: 'General' };
        }

        // Check if Category
        if (path.includes('/categories/')) {
            const catId = filename.replace('.html', '');
            let category = medicalData.categories.find(c => c.id === catId || c.folder === catId);
            return {
                type: 'category',
                name: category ? category.name : 'Medical',
                catId: catId
            };
        }

        // Check if Surgery/Treatment
        if (path.includes('/surgeries/')) {
            const slug = filename.replace('.html', '');
            let foundDisease = null;
            let foundCategory = null;

            medicalData.categories.forEach(cat => {
                const d = cat.diseases.find(d => d.slug === slug);
                if (d) {
                    foundDisease = d;
                    foundCategory = cat;
                }
            });

            if (foundDisease) {
                return {
                    type: 'treatment',
                    name: foundDisease.name,
                    category: foundCategory ? foundCategory.name : 'General'
                };
            }
        }

        return { type: 'general', name: 'General' };
    }

    function setupPageAwareModal() {
        const context = getPageContext();
        const form = document.getElementById('modalAppointmentForm');
        if (!form) return;

        const titleEl = document.querySelector('#inactivityModal h3');
        const chipsContainer = document.getElementById('modalSpecialtyChips')?.parentElement; // Wrapper
        const citySelect = form.querySelector('select[name="city"]');
        const cityWrapper = citySelect?.parentElement;
        const diseaseInput = document.getElementById('modalDiseaseInput');

        // Find the 'Or Enter Disease' label wrapper to hide it cleanly
        let diseaseWrapper = null;
        if (diseaseInput) {
            // Traverse up to find the container with the Label "Or Enter Disease"
            // Structure: div.relative > label + div.relative > input
            // diseaseInput.parent is div.relative. diseaseInput.parent.parent is the main wrapper.
            diseaseWrapper = diseaseInput.parentElement.parentElement;
        }

        // Reset Attributes
        if (citySelect) citySelect.setAttribute('required', 'true');
        if (diseaseInput) diseaseInput.readOnly = false;

        // Dynamic Configuration
        let subject = "New Appointment Request";

        if (context.type === 'home') {
            subject = "New Appointment Request - Home Page";
        }
        else if (context.type === 'category') {
            subject = `New Appointment Request - ${context.name}`;
            if (titleEl) titleEl.innerHTML = `Book Free Consultation for <span class="text-primary">${context.name}</span>`;

            // Minimal Friction for Category too: Hide Chips & City & Disease Input
            if (chipsContainer) chipsContainer.classList.add('hidden');
            if (cityWrapper) {
                cityWrapper.classList.add('hidden');
                citySelect?.removeAttribute('required');
                if (citySelect) citySelect.value = "Hyderabad"; // Default
            }
            // Auto-fill Disease/Category and Hide Input
            if (diseaseInput) {
                diseaseInput.value = context.name;
                diseaseInput.removeAttribute('required');
            }
            if (diseaseWrapper) diseaseWrapper.classList.add('hidden');
        }
        else if (context.type === 'treatment') {
            subject = `New Appointment Request - ${context.name}`;
            if (titleEl) titleEl.innerHTML = `Book <span class="text-primary">${context.name}</span> Consultation`;

            // Minimize Friction: Hide Chips & City
            if (chipsContainer) chipsContainer.classList.add('hidden');
            if (cityWrapper) {
                cityWrapper.classList.add('hidden');
                citySelect.removeAttribute('required'); // Remove validation requirement
                citySelect.value = "Hyderabad"; // Default value
            }

            // Auto-capture treatment (Hide input)
            if (diseaseInput) {
                diseaseInput.value = context.name;
            }
            if (diseaseWrapper) diseaseWrapper.classList.add('hidden');
        }

        // Add Hidden Fields for Data Architecture
        const addHiddenField = (name, value) => {
            let field = form.querySelector(`input[name="${name}"]`);
            if (!field) {
                field = document.createElement('input');
                field.type = 'hidden';
                field.name = name;
                form.appendChild(field);
            }
            field.value = value;
        };

        addHiddenField('page_url', window.location.href);
        addHiddenField('subject', subject);
        addHiddenField('page_category', context.type === 'treatment' ? context.category : (context.name || 'General'));
        addHiddenField('timestamp', new Date().toLocaleString());

        // GDPR Note
        if (!form.querySelector('.gdpr-note')) {
            const note = document.createElement('p');
            note.className = 'gdpr-note text-[9px] text-gray-400 mt-3 text-center leading-tight';
            note.innerText = 'By booking, you agree to our Terms. Your data is secure and ensures a seamless care experience.';
            form.appendChild(note);
        }
    }

    // Initialize Page Aware Logic on Load
    setupPageAwareModal();


    // 2. Inactivity Tracking Logic
    let idleTime = 0;
    let modalShown = false;
    let isInteractingWithForm = false;
    const inactivityModal = document.getElementById('inactivityModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Get all booking forms
    const heroForm = document.getElementById('appointmentForm');
    const mobileHeroForm = document.querySelector('.lg\\:hidden form[action*="web3forms"]');
    const mobileQuickForm = document.getElementById('mobileQuickForm');
    const mobileQuickBookForm = document.getElementById('mobileQuickBookForm');
    const mobileBottomBarForInactivity = document.getElementById('mobileBottomBar');

    const pauseInactivityWhileInteracting = () => {
        isInteractingWithForm = true;
        idleTime = 0;
    };

    const resumeInactivityTracking = () => {
        setTimeout(() => { isInteractingWithForm = false; }, 500);
    };

    const attachFormListeners = (formElement) => {
        if (!formElement) return;
        ['click', 'focus', 'input', 'change', 'touchstart'].forEach(evt =>
            formElement.addEventListener(evt, pauseInactivityWhileInteracting)
        );
        formElement.addEventListener('focusout', resumeInactivityTracking);
    };

    attachFormListeners(heroForm);
    attachFormListeners(mobileHeroForm);
    attachFormListeners(mobileQuickForm);

    if (mobileBottomBarForInactivity) {
        mobileBottomBarForInactivity.addEventListener('click', pauseInactivityWhileInteracting);
        mobileBottomBarForInactivity.addEventListener('touchstart', pauseInactivityWhileInteracting);
    }
    if (mobileQuickBookForm) {
        mobileQuickBookForm.addEventListener('click', pauseInactivityWhileInteracting);
        attachFormListeners(mobileQuickBookForm);
    }

    // 3. Timer Logic (7 Seconds)
    // Check 7s, Check Session, Check Interaction
    setInterval(timerIncrement, 1000);

    function timerIncrement() {
        if (modalShown || isInteractingWithForm) return;

        // Session Check
        // if (sessionStorage.getItem('inactivityPopupShown') === 'true') return;

        idleTime = idleTime + 1;

        if (idleTime >= 7) { // 7 Seconds Rule
            showInactivityModal();
        }
    }

    function showInactivityModal() {
        if (modalShown || isInteractingWithForm) return;

        modalShown = true;
        if (inactivityModal) {
            inactivityModal.classList.remove('hidden');
            inactivityModal.classList.add('flex');
            setTimeout(() => {
                inactivityModal.classList.remove('opacity-0');
            }, 10);

            // Set Session Flag
            sessionStorage.setItem('inactivityPopupShown', 'true');
        }
    }

    function closeInactivityModal() {
        if (inactivityModal) {
            inactivityModal.classList.add('opacity-0');
            setTimeout(() => {
                inactivityModal.classList.add('hidden');
                inactivityModal.classList.remove('flex');
                modalShown = true; // Keep true so it doesn't auto-show again in this session logic if we don't use session storage check there (but we do)
                idleTime = 0;
            }, 300);

            // User manually closed, ensure flag is set
            sessionStorage.setItem('inactivityPopupShown', 'true');
        }
    }

    // Activity Events
    const resetTimer = () => { idleTime = 0; };
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;
    window.ontouchstart = resetTimer;
    window.onclick = resetTimer;
    window.onkeypress = resetTimer;
    window.addEventListener('scroll', resetTimer, { passive: true });

    // Close Button Listener
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeInactivityModal);
    }

    // Mobile Nav Click - Manual Trigger (Bypasses Session Check Logic visually, but ensures consistent UI)
    const mobileNavBookBtn = document.getElementById('mobileNavBookAppointmentBtn');
    if (mobileNavBookBtn && inactivityModal) {
        mobileNavBookBtn.addEventListener('click', () => {
            // Force show
            modalShown = true;
            // Ensure Menu Close code matches original...
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';

            // Show
            inactivityModal.classList.remove('hidden');
            inactivityModal.classList.add('flex');
            setTimeout(() => inactivityModal.classList.remove('opacity-0'), 10);

            // Set Flag
            sessionStorage.setItem('inactivityPopupShown', 'true');
        });
    }

    // CRITICAL: Pause inactivity timer when user types in SEARCH input AND Close Mobile Menu
    const mobileSearchInput = document.getElementById('navMobileSearchInput');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('focus', () => {
            if (typeof pauseInactivityWhileInteracting === 'function') pauseInactivityWhileInteracting();
            // Close mobile menu if it is open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = ''; // Re-enable scroll
                if (mobileMenuToggle) {
                    const icon = mobileMenuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-xmark');
                    }
                }
            }
        });
        mobileSearchInput.addEventListener('input', () => { if (typeof pauseInactivityWhileInteracting === 'function') pauseInactivityWhileInteracting(); });
        mobileSearchInput.addEventListener('click', () => { if (typeof pauseInactivityWhileInteracting === 'function') pauseInactivityWhileInteracting(); });
        // Resume when they leave the search bar
        mobileSearchInput.addEventListener('blur', () => { if (typeof resumeInactivityTracking === 'function') resumeInactivityTracking(); });
    }


    // --- Validation Logic ---
    function validatePhone(phone) {
        if (!phone) return true; // Phone is optional in check, but required in form
        const cleanPhone = phone.replace(/\s/g, '');
        // Indian number validation: +91 optional, starts with 6-9, followed by 9 digits
        const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
        return phoneRegex.test(cleanPhone);
    }

    function setupValidation(formId, nameId, phoneId) {
        const form = document.getElementById(formId);
        const nameInput = document.getElementById(nameId);
        const phoneInput = document.getElementById(phoneId);

        if (!form || !nameInput || !phoneInput) return;

        // 1. Remove browser tooltips
        form.setAttribute('novalidate', true);

        // Helper: Show Error Message
        const showError = (input, msg) => {
            input.classList.add('shake-input');
            input.classList.add('border-red-500');
            setTimeout(() => input.classList.remove('shake-input'), 500);

            // Check if error msg exists
            let errorMsg = input.parentNode.querySelector('.custom-error-msg');
            if (!errorMsg) {
                errorMsg = document.createElement('p');
                errorMsg.className = 'custom-error-msg absolute right-0 -top-6 text-[10px] text-red-500 font-bold mr-1';
                input.parentNode.appendChild(errorMsg);
            }
            errorMsg.innerText = msg;
        };

        // Helper: Clear Error
        const clearError = (input) => {
            input.classList.remove('border-red-500');
            const errorMsg = input.parentNode.querySelector('.custom-error-msg');
            if (errorMsg) {
                errorMsg.remove();
            }
        };

        // Helper: Name Validation
        const validateName = (val) => {
            const nameRegex = /^[A-Za-z\s.'-]+$/;
            if (val.length < 2) return 'Name must be at least 2 letters';
            if (!nameRegex.test(val)) return 'Name contains invalid characters';
            return null;
        };

        // Input Blur Validation (Real-time feedback)
        nameInput.addEventListener('blur', () => {
            const val = nameInput.value.trim();
            const errorMsg = validateName(val);
            if (val.length > 0 && errorMsg) {
                showError(nameInput, errorMsg);
            } else {
                clearError(nameInput);
            }
        });

        // Strict Input Control for Name (Prevent numbers/special chars)
        nameInput.addEventListener('input', (e) => {
            const original = e.target.value;
            // Allow only letters and spaces
            const clean = original.replace(/[^A-Za-z\s]/g, '');
            if (original !== clean) {
                e.target.value = clean;
            }
        });

        phoneInput.addEventListener('blur', () => {
            const val = phoneInput.value.trim();
            if (val.length > 0 && !validatePhone(val)) {
                showError(phoneInput, 'Enter the correct number');
            } else {
                clearError(phoneInput);
            }
        });

        // Helper: Clean Phone Number
        const cleanPhoneNumber = (value) => {
            let cleaned = value.replace(/[^\d+]/g, '');
            if (cleaned.startsWith('+91') && cleaned.length >= 13) cleaned = cleaned.substring(3);
            else if (cleaned.startsWith('91') && cleaned.length >= 12 && !cleaned.startsWith('+')) cleaned = cleaned.substring(2);
            else if (cleaned.startsWith('0') && cleaned.length >= 11) cleaned = cleaned.substring(1);
            cleaned = cleaned.replace(/[^0-9]/g, '').slice(0, 10);
            return cleaned;
        };

        // Strict Input Control for Phone (Prevent non-numbers, auto-format)
        ['input', 'change'].forEach(eventType => {
            phoneInput.addEventListener(eventType, (e) => {
                const originalValue = e.target.value;
                const cleanedValue = cleanPhoneNumber(originalValue);
                if (originalValue !== cleanedValue) {
                    e.target.value = cleanedValue;
                }
            });
        });

        // Clear errors on focus
        nameInput.addEventListener('focus', () => clearError(nameInput));
        phoneInput.addEventListener('focus', () => {
            clearError(phoneInput);
            // Also clean on focus just in case
            phoneInput.value = cleanPhoneNumber(phoneInput.value);
        });

        // Form Submit Validation
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Validate Name
            const nameValidationMsg = validateName(nameInput.value.trim());
            if (nameValidationMsg) {
                isValid = false;
                showError(nameInput, nameValidationMsg);
            }

            // Validate Phone
            if (!validatePhone(phoneInput.value.trim())) {
                isValid = false;
                showError(phoneInput, 'Enter the correct number');
            }

            // Validate Disease (Ensure it's selected/entered)
            const diseaseInput = form.querySelector('input[name="disease"]');
            if (diseaseInput && diseaseInput.value.trim().length === 0) {
                isValid = false;
                diseaseInput.classList.add('shake-input');
                diseaseInput.classList.add('border-red-500');
                setTimeout(() => diseaseInput.classList.remove('shake-input'), 500);

                // Clear error on focus
                diseaseInput.addEventListener('focus', () => {
                    diseaseInput.classList.remove('border-red-500');
                }, { once: true });
            }

            if (isValid) {
                const formData = new FormData(form);
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;

                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            // Hide Inactivity Modal if open
                            if (formId === 'modalAppointmentForm') {
                                const modal = document.getElementById('inactivityModal');
                                if (modal) {
                                    modal.classList.add('hidden');
                                    modal.classList.remove('flex');
                                }
                            }

                            // Show Success Modal
                            const successModal = document.getElementById('successModal');
                            if (successModal) {
                                successModal.classList.remove('hidden');
                                successModal.classList.add('flex');
                            }

                            form.reset();

                        } else {
                            alert(data.message || 'Submission failed. Please verify your details.');
                            console.error('Submission Error:', data);
                        }
                    })
                    .catch(error => {
                        alert('Network error. Please try again later.');
                        console.error('Fetch Error:', error);
                    })
                    .finally(() => {
                        // Reset button state
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnText;
                    });
            }
        });
    }

    // Initialize Validation for all forms
    setupValidation('appointmentForm', 'heroPatientName', 'heroMobileNumber');
    setupValidation('modalAppointmentForm', 'modalPatientName', 'modalMobileNumber');
    // Mobile forms validation
    setupValidation('mobileHeroForm', 'mobileHeroName', 'mobileHeroPhone');
    setupValidation('mobileQuickForm', 'mobileQuickName', 'mobileQuickPhone');

    // Auto-detect and validate surgery page booking form (usually inside #booking with no IDs)
    const surgeryBookingContainer = document.getElementById('booking');
    if (surgeryBookingContainer) {
        const surgeryForm = surgeryBookingContainer.querySelector('form');
        if (surgeryForm) {
            // Assign ID if missing
            if (!surgeryForm.id) surgeryForm.id = 'surgeryPageForm';

            const nameInput = surgeryForm.querySelector('input[name="name"]');
            const phoneInput = surgeryForm.querySelector('input[name="phone"]');

            if (nameInput && phoneInput) {
                if (!nameInput.id) nameInput.id = 'surgeryPageName';
                if (!phoneInput.id) phoneInput.id = 'surgeryPagePhone';

                // Initialize validation
                setupValidation(surgeryForm.id, nameInput.id, phoneInput.id);
            }
        }
    }

    // Success Modal Close Logic
    const closeSuccessBtn = document.getElementById('closeSuccessModal');
    const successModal = document.getElementById('successModal');

    if (closeSuccessBtn && successModal) {
        closeSuccessBtn.addEventListener('click', () => {
            successModal.classList.add('hidden');
            successModal.classList.remove('flex');
        });

        // Also close on background click
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.add('hidden');
                successModal.classList.remove('flex');
            }
        });
    }

    // Mobile Bottom Bar Visibility - Smart Detection for Home and Surgery Pages
    const mobileBottomBar = document.getElementById('mobileBottomBar');
    const mobileHeroFormForVisibility = document.getElementById('mobileHeroForm'); // Home page mobile form
    const surgeryBookingSection = document.getElementById('booking'); // Surgery pages booking section

    if (mobileBottomBar && window.innerWidth < 1024) {
        // Determine which element to observe
        const bookingElementToObserve = mobileHeroFormForVisibility || surgeryBookingSection;

        if (bookingElementToObserve) {
            // Use IntersectionObserver to show/hide footer based on booking form visibility
            // Goal: Only ONE "Book Now" button visible at a time (form OR footer)
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Booking form is visible - HIDE footer buttons to avoid duplicate CTAs
                        mobileBottomBar.classList.add('translate-y-full');
                        mobileBottomBar.classList.remove('translate-y-0');
                    } else {
                        // Booking form is NOT visible - SHOW footer buttons
                        mobileBottomBar.classList.remove('translate-y-full');
                        mobileBottomBar.classList.add('translate-y-0');
                    }
                });
            }, {
                root: null, // viewport
                threshold: 0.1 // Trigger when 10% of the booking section is visible
            });

            observer.observe(bookingElementToObserve);
        } else {
            // Fallback for pages without booking forms - show after scrolling
            window.addEventListener('scroll', () => {
                if (window.scrollY > 200) {
                    mobileBottomBar.classList.remove('translate-y-full');
                    mobileBottomBar.classList.add('translate-y-0');
                }
            });
        }
    }

    // Desktop Nav Categories Scroll Trigger Animation
    // Hide categories when user touches "Our Specialities" section, show when past it
    const navCategoriesContainer = document.getElementById('navCategoriesContainer');
    const categoriesSection = document.getElementById('categories');

    if (navCategoriesContainer && categoriesSection && window.innerWidth >= 1024) {
        // Using Intersection Observer for efficient scroll detection
        const observerOptions = {
            root: null, // viewport
            rootMargin: '-80px 0px 0px 0px', // Account for sticky nav height
            threshold: [0, 0.1, 0.5, 1] // Multiple thresholds for smoother detection
        };

        let isInSpecialities = false;

        const handleNavVisibility = () => {
            const rect = categoriesSection.getBoundingClientRect();
            const navHeight = 80; // Approximate nav height

            // Check if "Our Specialities" section is in view (touching the nav area)
            // Section is "in view" when its top is at or above the nav bottom
            // Section is "past" when its bottom is above the nav bottom
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;

            // User is touching/viewing the specialities section
            if (sectionTop <= navHeight && sectionBottom > navHeight) {
                // Hide nav categories when viewing the specialities section
                if (!navCategoriesContainer.classList.contains('nav-hidden')) {
                    navCategoriesContainer.classList.add('nav-hidden');
                }
            } else {
                // Show nav categories when above or below the specialities section
                if (navCategoriesContainer.classList.contains('nav-hidden')) {
                    navCategoriesContainer.classList.remove('nav-hidden');
                }
            }
        };

        // Initial check
        handleNavVisibility();

        // Listen to scroll events with throttling for performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Only run on desktop
                    if (window.innerWidth >= 1024) {
                        handleNavVisibility();
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Re-check on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                handleNavVisibility();
            } else {
                // Keep categories visible on mobile/tablet
                navCategoriesContainer.classList.remove('nav-hidden');
            }
        });
    }

});

// Toggle Mobile Quick Booking Form
function toggleMobileQuickForm() {
    const form = document.getElementById('mobileQuickBookForm');
    if (form) {
        form.classList.toggle('hidden');
    }
}



// ... (Append to end of file or inside a global setup block)

/**
 * Global function to toggle the Mobile Quick Booking Bottom Sheet
 */
window.toggleMobileQuickForm = function () {
    const form = document.getElementById('mobileQuickBookForm');
    const btn = document.getElementById('mobileBookBtn');

    if (form) {
        // Toggle visibility
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden');
            // Optional: Add some animation class or logic here if needed
            // Ensure bottom bar is visible (in case it was hidden by menu)
            const bottomBar = document.getElementById('mobileBottomBar');
            if (bottomBar) {
                bottomBar.classList.remove('translate-y-full');
            }
        } else {
            form.classList.add('hidden');
        }
    } else {
        console.warn('Mobile Quick Book Form element not found!');
    }
};

// Ensure the close button in the form also works generally
document.addEventListener('DOMContentLoaded', () => {
    // We can attach event listeners if they aren't inline
    // But the HTML uses onclick="document.getElementById('mobileQuickBookForm').classList.add('hidden')"
    // We can standardize this too
});
