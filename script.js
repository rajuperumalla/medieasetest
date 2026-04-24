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
                const liveBtn = document.getElementById('mobileMenuToggle');
                if (liveBtn) {
                    liveBtn.classList.remove('mobile-toggle-active');
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

                const liveBtn = document.getElementById('mobileMenuToggle');
                if (liveBtn) {
                    liveBtn.classList.add('mobile-toggle-active');
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
        // Global Safeguard: If user is focused on ANY input, textarea, or select, strictly reset timer
        const active = document.activeElement;
        const isInputFocused = active && (
            active.tagName === 'INPUT' ||
            active.tagName === 'TEXTAREA' ||
            active.tagName === 'SELECT'
        );

        if (modalShown || isInteractingWithForm || isInputFocused) {
            idleTime = 0; // Reset idle timer immediately
            return;
        }

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
                    mobileMenuToggle.classList.remove('mobile-toggle-active');
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
        if (!phone) return false; // Phone is mandatory
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
        const showError = (input, msg, position = 'top') => {
            input.classList.remove('border-green-500');
            input.classList.add('border-red-500');

            // Find valid container (closest relative wrapper) to avoid overflow clipping
            const container = input.closest('.relative') || input.parentNode;

            // Check if error msg exists
            let errorMsg = container.querySelector('.custom-error-msg');
            if (!errorMsg) {
                errorMsg = document.createElement('p');
                // Check if label exists to adjust vertical position (Header vs floating)
                const hasLabel = container.querySelector('label');
                // If label exists, align with label (top-0). If no label, float above input (-top-6).
                const verticalPos = hasLabel ? 'top-0' : '-top-6';

                const posClass = position === 'top' ? `right-0 ${verticalPos}` : 'left-4 -bottom-5';
                errorMsg.className = `custom-error-msg absolute ${posClass} text-[10px] text-red-500 font-bold mr-1 z-20 pointer-events-none transition-all duration-300 animate-fade-in`;
                container.appendChild(errorMsg);
            }
            errorMsg.innerText = msg;
        };

        // Helper: Clear Error
        const clearError = (input) => {
            input.classList.remove('border-red-500');
            input.classList.remove('border-green-500');

            const container = input.closest('.relative') || input.parentNode;
            const errorMsg = container.querySelector('.custom-error-msg');
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
                showError(phoneInput, 'Please enter a valid 10-digit phone number', 'top');
                phoneInput.classList.remove('shake-input');
                void phoneInput.offsetWidth; // Trigger reflow
                phoneInput.classList.add('shake-input');
                setTimeout(() => phoneInput.classList.remove('shake-input'), 400);
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

        // PREMIUM MOBILE VALIDATION INTERACTION
        let lastValue = '';
        ['input', 'change', 'keyup'].forEach(eventType => {
            phoneInput.addEventListener(eventType, (e) => {
                const originalValue = e.target.value;
                const cleanedValue = cleanPhoneNumber(originalValue);
                if (originalValue !== cleanedValue) {
                    e.target.value = cleanedValue;
                }

                const currentVal = e.target.value;
                const isDeleting = currentVal.length < lastValue.length;
                lastValue = currentVal;

                // Logic based on first digit
                if (currentVal.length > 0) {
                    const firstDigit = currentVal[0];
                    const isInvalidStart = /^[0-5]/.test(firstDigit);
                    const isValidStart = /^[6-9]/.test(firstDigit);

                    if (isInvalidStart) {
                        e.target.classList.remove('border-green-500');
                        e.target.classList.add('border-red-500');

                        // Explicitly remove any existing error message from parentNode if it exists (legacy cleanup)
                        const oldMsg = e.target.parentNode.querySelector('.custom-error-msg');
                        if (oldMsg) oldMsg.remove();

                        showError(e.target, "Please enter a valid mobile number", 'top');
                        e.target.classList.remove('shake-input');
                        void e.target.offsetWidth;
                        e.target.classList.add('shake-input');
                        setTimeout(() => e.target.classList.remove('shake-input'), 400);
                    } else if (isValidStart) {
                        e.target.classList.remove('border-red-500');
                        e.target.classList.remove('border-green-500');
                        clearError(e.target);
                        if (validatePhone(currentVal)) e.target.classList.add('border-green-500');
                    }
                } else {
                    // 3. Correction / Empty State
                    const wasRed = e.target.classList.contains('border-red-500');
                    if (isDeleting && wasRed) {
                        e.target.classList.remove('border-red-500');
                        e.target.classList.add('border-green-500');

                        // Remove warning immediately
                        const container = e.target.closest('.relative') || e.target.parentNode;
                        const errorMsg = container.querySelector('.custom-error-msg');
                        if (errorMsg) errorMsg.remove();

                        setTimeout(() => {
                            e.target.classList.remove('border-green-500');
                        }, 800);
                    } else {
                        clearError(e.target);
                    }
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

            // 1. Validate Name
            const nameValidationMsg = validateName(nameInput.value.trim());
            if (nameValidationMsg) {
                isValid = false;
                showError(nameInput, nameValidationMsg);
                nameInput.focus();
            }

            // 2. Validate Phone
            const phoneVal = phoneInput.value.trim();
            if (isValid) { // Only check phone if name is valid
                if (!phoneVal) {
                    isValid = false;
                    showError(phoneInput, 'Phone Number is mandatory', 'top');
                    phoneInput.focus();
                } else if (!validatePhone(phoneVal)) {
                    isValid = false;
                    showError(phoneInput, 'Please enter a valid 10-digit phone number', 'top');
                    phoneInput.classList.remove('shake-input');
                    void phoneInput.offsetWidth;
                    phoneInput.classList.add('shake-input');
                    setTimeout(() => phoneInput.classList.remove('shake-input'), 400);
                    phoneInput.focus();
                }
            }

            // 3. Validate Disease (Category)
            const diseaseInput = form.querySelector('input[name="disease"]');
            if (isValid && diseaseInput && diseaseInput.value.trim().length === 0) {
                isValid = false;
                diseaseInput.classList.add('shake-input');
                diseaseInput.classList.add('border-red-500');
                diseaseInput.focus();
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
                            if (formId === 'mobileQuickForm') {
                                toggleMobileQuickForm();
                            }

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

function toggleMobileQuickForm() {
    const form = document.getElementById('mobileQuickBookForm');
    const btn = document.getElementById('mobileBookBtn');

    if (form && btn) {
        const isOpen = !form.classList.contains('hidden');
        const inner = btn.querySelector('.button-inner');

        if (!isOpen) {
            // Opening
            form.classList.remove('hidden');
            btn.classList.remove('uiverse-btn-blue');
            btn.classList.add('shadow-neu-pressed'); // Give it a pressed look maybe? Or just keep it base
            if (inner) {
                inner.innerHTML = '<span class="text-lg font-bold"><i class="fa-solid fa-xmark"></i></span>';
            }
        } else {
            // Closing
            form.classList.add('hidden');
            btn.classList.add('uiverse-btn-blue');
            btn.classList.remove('shadow-neu-pressed');
            if (inner) {
                inner.innerHTML = '<span class="text-sm font-bold whitespace-nowrap"><i class="fa-solid fa-calendar-check mr-1"></i> Book Now</span>';
            }
        }
    }
}



/**
 * Global function to toggle the Mobile Quick Booking Bottom Sheet
 */
window.toggleMobileQuickForm = toggleMobileQuickForm;

/* ========================================================================= */
/* DESKTOP AI CHATBOT INTEGRATION                                            */
/* ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Inject the Chatbot specifically for Desktop (hidden on screens < 1024px)
    // We append it to the body
    
    const chatbotHTML = `
    <div id="desktopChatbotContainer" class="hidden lg:block fixed bottom-6 right-6 z-[9999]">
        <!-- Chat Window -->
        <div id="chatWindow" class="hidden absolute bottom-24 right-0 w-[400px] bg-slate-50 rounded-3xl shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] border border-blue-50 overflow-hidden flex-col origin-bottom-right transition-all duration-300 scale-95 opacity-0">
            <!-- Sleek AI Header -->
            <div class="relative bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-900 p-5 text-white flex justify-between items-center shadow-lg overflow-hidden">
                <!-- Decorative AI Glow -->
                <div class="absolute top-0 right-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-[40px] opacity-40 animate-pulse"></div>
                <!-- Content -->
                <div class="flex items-center gap-3 relative z-10">
                    <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        <!-- AI Brain/Sparkle Icon -->
                        <i class="fa-solid fa-wand-magic-sparkles text-xl text-blue-200 animate-pulse"></i>
                    </div>
                    <div>
                        <h4 class="font-extrabold text-[15px] tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">KevinCore AI</h4>
                        <p class="text-[10.5px] text-blue-200 flex items-center gap-1.5 mt-0.5 font-medium tracking-wider uppercase">
                            <span class="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80] animate-pulse"></span> Intelligent System Active
                        </p>
                    </div>
                </div>
                <button id="closeChatBtn" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all transform hover:rotate-90 relative z-10">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <!-- Body Container -->
            <div class="h-[450px] relative flex flex-col bg-slate-50">
                <!-- Chat Interface -->
                <div id="chatInterfaceView" class="flex-1 flex flex-col h-full">
                    <div id="chatMessages" class="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-hide flex flex-col gap-2 relative border-b border-slate-200/50">
                        <!-- Subtle Background Logo/Icon -->
                        <div class="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none mt-10">
                            <i class="fa-solid fa-brain text-[180px]"></i>
                        </div>
                        <!-- Messages go here -->
                    </div>
                    
                    <div class="p-4 bg-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] flex flex-col gap-3 relative z-20">
                        <!-- Attachment preview -->
                        <div id="chatAttachmentPreview" class="hidden absolute -top-12 left-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-blue-100 flex items-center gap-2 transition-all">
                            <i class="fa-solid fa-file-medical text-blue-500 text-sm animate-pulse"></i>
                            <span id="chatAttachmentName" class="text-[11px] text-slate-700 font-semibold max-w-[150px] truncate">report.pdf</span>
                            <button type="button" id="chatRemoveAttachmentBtn" class="text-slate-400 hover:text-red-500 ml-2 transition-colors">
                                <i class="fa-solid fa-circle-xmark text-sm"></i>
                            </button>
                        </div>
                        
                        <form id="chatMessageForm" class="flex items-center gap-2.5 relative">
                            <!-- Attachment button -->
                            <label for="chatFileInput" class="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors text-slate-500 flex-shrink-0 border border-transparent hover:border-blue-100">
                                <i class="fa-solid fa-paperclip text-sm"></i>
                            </label>
                            <input type="file" id="chatFileInput" class="hidden" accept=".pdf,image/png,image/jpeg,image/webp">
                            
                            <input type="text" id="chatMessageInput" placeholder="Ask AI or attach report..." autocomplete="off" class="flex-1 bg-slate-100 rounded-full pl-5 pr-14 py-3.5 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white border focus:border-blue-200 font-medium placeholder:text-slate-400 transition-all shadow-inner">
                            <button type="submit" id="sendMessageBtn" class="absolute right-1 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex-shrink-0">
                                <i class="fa-solid fa-paper-plane text-[13px] translate-x-[-1px] translate-y-[1px]"></i>
                            </button>
                        </form>
                        <div class="text-center mt-1">
                            <span class="text-[9px] font-bold tracking-[0.2em] font-sans text-slate-400">
                                POWERED BY <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">KEVINCORE AI</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Toggle Button (Floating AI Orb with Red Ring) -->
        <button id="chatToggleBtn" class="relative group w-[75px] h-[75px] flex items-center justify-center focus:outline-none transition-transform hover:scale-110 active:scale-95 duration-300">
            <!-- Glowing Aura Rings -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-40 blur-lg group-hover:opacity-70 group-hover:blur-xl transition-all duration-500 animate-pulse"></div>
            
            <!-- Red Spinning Line requested by user -->
            <div class="absolute inset-0 z-0 rounded-full border-[2px] border-red-500 border-l-transparent border-t-transparent animate-[spin_2s_linear_infinite] opacity-90 shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:animate-[spin_1s_linear_infinite] transition-all"></div>
            
            <div class="absolute inset-2 z-0 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 animate-[spin_4s_linear_infinite]"></div>
            
            <!-- Core Button -->
            <div class="relative z-10 w-[60px] h-[60px] bg-indigo-950 rounded-full border-[2px] border-blue-300/30 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center overflow-hidden">
                <i class="fa-solid fa-brain text-2xl text-blue-200 group-hover:text-white transition-colors"></i>
            </div>
            
            <!-- Notification Badge -->
            <span class="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-indigo-950 shadow-[0_0_10px_rgba(239,68,68,0.8)] flex items-center justify-center z-20">
                 <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            </span>
        </button>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    const chatContainer = document.getElementById('desktopChatbotContainer');
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatWindow = document.getElementById('chatWindow');
    const closeChatBtn = document.getElementById('closeChatBtn');
    
    // Forms & Views
    const chatInterfaceView = document.getElementById('chatInterfaceView');
    
    // Chat UI
    const chatMessages = document.getElementById('chatMessages');
    const chatMessageForm = document.getElementById('chatMessageForm');
    const chatMessageInput = document.getElementById('chatMessageInput');
    const chatFileInput = document.getElementById('chatFileInput');
    const chatAttachmentPreview = document.getElementById('chatAttachmentPreview');
    const chatAttachmentName = document.getElementById('chatAttachmentName');
    const chatRemoveAttachmentBtn = document.getElementById('chatRemoveAttachmentBtn');

    let isChatOpen = false;
    let isFirstOpen = true;
    let attachedFile = null;
    let attachedFileData = null;
    let chatbotLeadCaptured = false;
    let lastCapturedPhone = ""; // Track to avoid instant duplicate emails for the same number

    // Handle file selection
    chatFileInput.addEventListener('change', (e) => {
        if(e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if(file.size > 5 * 1024 * 1024) {
                alert("File is too large. Please upload an image or PDF under 5MB.");
                chatFileInput.value = '';
                return;
            }
            attachedFile = file;
            chatAttachmentName.textContent = file.name;
            chatAttachmentPreview.classList.remove('hidden');
            
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64String = event.target.result.split(',')[1];
                attachedFileData = { mimeType: file.type, data: base64String };
            };
            reader.readAsDataURL(file);
        }
    });

    chatRemoveAttachmentBtn.addEventListener('click', () => {
        chatFileInput.value = '';
        attachedFile = null;
        attachedFileData = null;
        chatAttachmentPreview.classList.add('hidden');
    });

    function toggleChat() {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            chatWindow.classList.remove('hidden');
            // Small delay for transition
            setTimeout(() => {
                chatWindow.classList.remove('scale-95', 'opacity-0');
                chatWindow.classList.add('scale-100', 'opacity-100');
                
                if(isFirstOpen) {
                    isFirstOpen = false;
                    setTimeout(() => {
                        appendMessage('bot', `Hello! 👋 I'm your Medical Assistant.<br><br>To get started, please **attach your report** 📎 via the paperclip icon or just tell me about your condition.`);
                    }, 300); // slightly after the modal finishes opening
                }
                
                // Automatically focus the input field directly after opening animation completes
                setTimeout(() => chatMessageInput.focus(), 300);
            }, 10);
            
            // Remove notification ping once opened
            const badge = chatToggleBtn.querySelector('.bg-red-500');
            if(badge) badge.style.display = 'none';
        } else {
            chatWindow.classList.remove('scale-100', 'opacity-100');
            chatWindow.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                chatWindow.classList.add('hidden');
            }, 300); // match duration-300
        }
    }

    chatToggleBtn.addEventListener('click', toggleChat);
    closeChatBtn.addEventListener('click', toggleChat);

    // Chat Message append helper
    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `max-w-[85%] rounded-2xl px-5 py-3.5 text-[13px] leading-relaxed relative animate-[fadeIn_0.3s_ease-out] shadow-sm`;
        
        if (sender === 'user') {
            msgDiv.className += " bg-gradient-to-r from-blue-600 to-indigo-600 text-white self-end rounded-br-sm font-medium";
            msgDiv.innerHTML = text;
        } else {
            msgDiv.className += " bg-white text-slate-700 self-start border border-slate-100 rounded-bl-sm font-medium shadow-[0_4px_15px_rgba(0,0,0,0.03)]";
            // Simple markdown parsing for bold text
            const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-600 font-bold tracking-wide">$1</strong>');
            msgDiv.innerHTML = formattedText;
        }
        
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Phase 2: Chat Submission
    const GEMINI_API_KEY = "AIzaSyC1LESWJB8p0p-qCC5C0ha6p_9rrwrPEek"; // Live Google AI Studio Key

    chatMessageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMsg = chatMessageInput.value.trim();
        if(!userMsg && !attachedFile) return;
        
        let displayMsg = userMsg;
        if(attachedFile) {
            displayMsg = `
                <div class="flex items-center gap-2 mb-1.5 bg-white/20 px-2.5 py-1.5 rounded shadow-sm w-fit border border-white/30">
                    <i class="fa-solid fa-file-medical text-[10px]"></i>
                    <span class="text-[10px] font-medium truncate max-w-[120px]">${attachedFile.name}</span>
                </div>
                ${userMsg}
            `;
        }
        
        appendMessage('user', displayMsg || "Uploaded a medical report.");
        
        const payloadMsg = userMsg || "Please analyze my attached medical report.";
        const currentFileData = attachedFileData;
        
        // Auto-Lead Capture & Phone Validation (matching website forms)
        let handledNatively = false;
        let nativeReply = "";
        if (userMsg) {
            const msgClean = userMsg.replace(/[\s-]/g, '');
            const phoneMatch = msgClean.match(/(?:(?:\+91|91|0))?([6-9]\d{9})/);
            const digitsMatch = msgClean.match(/\d{6,}/); // Sequence of 6+ digits typically implies phone entry
            
            if (phoneMatch) {
                const extractedPhone = phoneMatch[1];
                
                // Even if already captured, we send it again if it's different or if user re-enters
                // This ensures we don't 'take a chance' as per user request
                if (extractedPhone !== lastCapturedPhone || !chatbotLeadCaptured) {
                    chatbotLeadCaptured = true;
                    lastCapturedPhone = extractedPhone;
                    
                    const formData = new FormData();
                    formData.append('access_key', 'a3fce90f-0e9f-4abf-b0b5-a4ae3660fae2');
                    formData.append('subject', 'Chatbot Alert: Mobile Number Provided');
                    formData.append('from_name', 'MediEase Chatbot');
                    formData.append('phone', extractedPhone);
                    formData.append('message', `The user provided a mobile number. \n\nMessage: "${userMsg}" \n\nNote: This might be a new or updated number.`);
                    
                    fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        body: formData
                    }).catch(e => console.error("Lead capture error", e));
                }
                
                handledNatively = true;
                nativeReply = "✅ **Verified!** Our coordinator will call you shortly. Need anything else?";
            } else if (digitsMatch) {
                // Number provided was invalid or incomplete
                handledNatively = true;
                nativeReply = "❌ **Invalid Number.** Please enter a valid 10-digit mobile number.";
            } else if (userMsg.toLowerCase().match(/\b(more information|more info|more details|connect|call|contact|advisor|help me)\b/)) {
                // User asked for more information or a call
                handledNatively = true;
                nativeReply = "Our medical advisors can help you directly. Can I connect you? Please provide your **10-digit mobile number** so they can securely reach and help you.";
            }
        }
        
        const hasFile = !!attachedFile;
        chatMessageInput.value = '';
        chatFileInput.value = '';
        attachedFile = null;
        attachedFileData = null;
        chatAttachmentPreview.classList.add('hidden');
        
        // Show specialized indicator based on interaction type
        const typingId = 'typing-' + Date.now();
        const typingDiv = document.createElement('div');
        typingDiv.id = typingId;
        typingDiv.className = "self-start mb-4 animate-[fadeIn_0.5s_ease-out]";
        
        if (hasFile) {
            // PHASE 1: FUTURISTIC AI HOLOGRAM LOADER (Neural Start)
            typingDiv.innerHTML = `
                <div class="ai-hologram-container" id="hologramContainer-${typingId}">
                    <div class="neural-overlay"></div>
                    
                    <!-- Neural Network Synapse Phase -->
                    <div id="synapseStage-${typingId}" class="flex flex-col items-center gap-6">
                        <div class="synapse-loader">
                            <div class="synapse-ring"></div>
                            <div class="synapse-ring-inner"></div>
                        </div>
                        <div class="shimmer-text">AI Scanning Report...</div>
                        <div class="text-[10px] text-blue-300 font-bold tracking-widest uppercase opacity-60">Initializing Neural Link</div>
                    </div>

                    <!-- Hologram Body Phase (Hidden Initially) -->
                    <div id="bodyStage-${typingId}" class="hidden flex flex-col items-center gap-4 w-full">
                        <div class="hologram-body-wrapper">
                            <div class="hologram-scan-bar"></div>
                            <!-- Pro-Grade Medical Anatomical Figure -->
                            <svg viewBox="0 0 100 230" class="hologram-svg">
                                <!-- HEAD (Detailed Face/Chin) -->
                                <path id="part-head-${typingId}" d="M50,2 C44,2 40,6 40,16 C40,25 43,33 50,36 C57,33 60,25 60,16 C60,6 56,2 50,2 Z" class="highlight-part" />
                                
                                <!-- CHEST / TORSO (Defined Shoulders) -->
                                <path id="part-chest-${typingId}" d="M30,42 C25,42 22,46 22,55 L22,95 C40,105 60,105 78,95 L78,55 C78,46 75,42 70,42 L30,42 Z" class="highlight-part" />
                                
                                <!-- STOMACH / ABDOMEN -->
                                <path id="part-stomach-${typingId}" d="M22,96 C40,106 60,106 78,96 L74,135 C65,145 35,145 26,135 L22,96 Z" class="highlight-part" />
                                
                                <!-- LEGS & FEET (Detailed Structure) -->
                                <g id="part-legs-${typingId}" class="highlight-part">
                                    <!-- Left Leg + Foot -->
                                    <path d="M30,138 L25,190 L22,215 C22,220 18,220 16,215 L22,185 L30,138 Z" />
                                    <!-- Right Leg + Foot -->
                                    <path d="M70,138 L75,190 L78,215 C78,220 82,220 84,215 L78,185 L70,138 Z" />
                                </g>

                                <!-- KNEES -->
                                <g id="part-knees-${typingId}" class="highlight-part">
                                    <circle cx="28" cy="175" r="5" />
                                    <circle cx="72" cy="175" r="5" />
                                </g>

                                <!-- ARMS & HANDS (Detailed Fingers/Grip) -->
                                <g fill="rgba(0,243,255,0.1)" stroke="rgba(0,243,255,0.4)">
                                    <!-- Left Arm + Hand -->
                                    <path d="M22,50 L10,120 L8,135 C8,140 12,142 14,138 L16,120 L22,60 Z" />
                                    <!-- Right Arm + Hand -->
                                    <path d="M78,50 L90,120 L92,135 C92,140 88,142 86,138 L84,120 L78,60 Z" />
                                </g>
                            </svg>
                        </div>
                        <div class="shimmer-text" id="hologramStatusText-${typingId}">Detecting Patterns...</div>
                    </div>
                </div>
            `;
            
            // Trigger Phase 2 (Hologram Body) after 2 seconds
            setTimeout(() => {
                const syn = document.getElementById(`synapseStage-${typingId}`);
                const bdy = document.getElementById(`bodyStage-${typingId}`);
                if (syn && bdy) {
                    syn.classList.add('hidden');
                    bdy.classList.remove('hidden');
                    bdy.classList.add('animate-[fadeIn_0.5s_ease-out]');
                }
            }, 2000);

        } else {
            // HYPNOTIC NEURAL SCAN FOR TEXT
            typingDiv.innerHTML = `
                <div class="hypnotic-loader-container">
                    <div class="loader-visual">
                        <div class="pulse-ring"></div>
                        <div class="pulse-ring-2"></div>
                        <div class="medical-core shadow-neu-icon">
                            <i class="fa-solid fa-house-medical"></i>
                        </div>
                        <div class="orbit-dot dot-1"></div>
                        <div class="orbit-dot dot-2"></div>
                        <div class="orbit-dot dot-3"></div>
                    </div>
                    <div class="loader-text-box">
                        <div class="status-primary">AI is Thinking</div>
                        <div class="status-secondary blinking-dots">
                            Processing Query<span>.</span><span>.</span><span>.</span>
                        </div>
                    </div>
                </div>
            `;
        }
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        if (handledNatively) {
            setTimeout(() => {
                document.getElementById(typingId).remove();
                appendMessage('bot', nativeReply);
            }, 800);
        } else {
            try {
                let botReply = await getGeminiResponse(payloadMsg, currentFileData);
                
                // DATA-DRIVEN ANIMATION UPDATE
                if (hasFile) {
                    const affectedPartMatch = botReply.match(/<AFFECTED_PART>(.*?)<\/AFFECTED_PART>/);
                    const severityMatch = botReply.match(/<SEVERITY>(.*?)<\/SEVERITY>/);
                    
                    if (affectedPartMatch && severityMatch) {
                        const part = affectedPartMatch[1].toLowerCase().trim(); // head, chest, etc.
                        const severity = severityMatch[1].toLowerCase().trim(); // high, medium, low
                        
                        // Force transition to Phase 2 if not already there
                        const syn = document.getElementById(`synapseStage-${typingId}`);
                        const bdy = document.getElementById(`bodyStage-${typingId}`);
                        if (syn && !syn.classList.contains('hidden')) {
                            syn.classList.add('hidden');
                            bdy.classList.remove('hidden');
                        }

                        // Apply Highlight
                        const targetPartId = `part-${part}-${typingId}`;
                        const partElement = document.getElementById(targetPartId);
                        if (partElement) {
                            partElement.classList.add(`highlight-${severity}`);
                            
                            // Update Status
                            const statusText = document.getElementById(`hologramStatusText-${typingId}`);
                            if (statusText) statusText.innerHTML = `<span class="text-${severity === 'high' ? 'red' : severity === 'medium' ? 'orange' : 'yellow'}-400">Analysis Complete</span>`;
                        }
                        
                        // Give user time to see the holographic result
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    }
                }

                const loader = document.getElementById(typingId);
                if (loader) loader.remove();
                
                // AI Document Scanner Hook (Lead Capture)
                const secretPhoneMatch = botReply.match(/<SECRET_PHONE>(.*?)<\/SECRET_PHONE>/);
                const secretNameMatch = botReply.match(/<SECRET_NAME>(.*?)<\/SECRET_NAME>/);
                const secretInfoMatch = botReply.match(/<SECRET_INFO>(.*?)<\/SECRET_INFO>/);

                if (secretPhoneMatch || secretNameMatch || secretInfoMatch) {
                    const extractedScan = secretPhoneMatch ? secretPhoneMatch[1].replace(/\D/g, '').slice(-10) : lastCapturedPhone;
                    const extractedName = secretNameMatch ? secretNameMatch[1] : 'Unknown';
                    const extractedInfo = secretInfoMatch ? secretInfoMatch[1] : 'No additional info';

                    if (extractedScan && (extractedScan !== lastCapturedPhone || secretNameMatch || secretInfoMatch || !chatbotLeadCaptured)) {
                        chatbotLeadCaptured = true;
                        if (secretPhoneMatch) lastCapturedPhone = extractedScan;
                        
                        const formData = new FormData();
                        formData.append('access_key', 'a3fce90f-0e9f-4abf-b0b5-a4ae3660fae2');
                        formData.append('subject', 'Chatbot Alert: New Patient Information');
                        formData.append('from_name', 'MediEase AI Monitor');
                        formData.append('phone', extractedScan || 'Not provided yet');
                        formData.append('name', extractedName);
                        formData.append('message', `Extracted Information: \n\nPatient: ${extractedName} \nPhone: ${extractedScan || 'Waiting for user to provide...'} \nConditions: ${extractedInfo} \n\nDirect user query that triggered this: "${payloadMsg}"`);
                        
                        fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData }).catch(e=>console.error(e));
                    }
                }
                
                // Clean the bot response of any secret tags before showing to user
                botReply = botReply.replace(/<SECRET_PHONE>.*?<\/SECRET_PHONE>/g, '')
                                   .replace(/<SECRET_NAME>.*?<\/SECRET_NAME>/g, '')
                                   .replace(/<SECRET_INFO>.*?<\/SECRET_INFO>/g, '')
                                   .replace(/<AFFECTED_PART>.*?<\/AFFECTED_PART>/g, '')
                                   .replace(/<SEVERITY>.*?<\/SEVERITY>/g, '')
                                   .trim();
                
                appendMessage('bot', botReply);
            } catch (error) {
                console.error("Gemini API Error:", error);
                document.getElementById(typingId).remove();
                appendMessage('bot', "I'm having trouble connecting right now. Please confirm your API key is correctly configured in script.js. If urgent, please call us at **1800-123-456**.");
            }
        }
    });

    async function getGeminiResponse(query, fileData) {
        if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY" || !GEMINI_API_KEY) {
            return "I am securely plugged straight into the **Google Gemini AI Engine!** 🧠<br><br>To see me dynamically analyze reports and give non-static responsive answers natively, please insert your actual valid Gemini API Key into the `GEMINI_API_KEY` variable in `script.js`.";
        }
        
        // Actual Gemini Integration
        const SYSTEM_PROMPT = `You are a **Medical Information Extraction Assistant** - a professional, empathetic chatbot designed to help patients understand their medical reports and collect essential information for surgery consultation and scheduling.

## Core Responsibilities
1. Medical Report Analysis
- Analyze uploaded medical reports (PDFs, images, or text)
- Extract key clinical information clearly and accurately
- Explain medical terminology in simple, patient-friendly language
- Identify the type of surgery or procedure needed
- Present findings in a structured, easy-to-understand format

2. Information Extraction (Priority)
Your PRIMARY goal is to extract and confirm:
- Patient Name (full legal name)
- Mobile Number (for follow-up and communication)
- Surgery Type (specific procedure needed)
- Medical Condition (brief description of the issue)
- Urgency Level (if determinable from reports)

3. User Guidance & Flow
Guide users through a logical conversation flow:
1. Welcome and establish context
2. Request medical report upload (if not provided)
3. Analyze the report and extract information
4. Present findings in clear sections
5. Ask clarifying questions for missing information
6. Confirm extracted data
7. Request personal contact information if not provided
8. Summarize next steps and schedule follow-up

## Conversation Guidelines
- Professional yet warm and empathetic
- Use simple language (avoid medical jargon or explain it)
- Patient-centered approach
- Reassuring but not providing medical advice
- Respectful of patient privacy concerns

When Analyzing Reports: Extract data systematically, use clear headings and bullet points, highlight critical information, explain findings in simple terms, note missing info.
When Asking for Information, be specific.
Handling Missing Information: Don't assume or guess, politely ask for clarification, offer options, validate info.

## Background Data Collection Rule
CRITICAL: If the user uploads a document, report, or image that inherently contains a patient's mobile/phone number, YOU MUST extract it and silently output it strictly at the very end of your response wrapped exactly in <SECRET_PHONE> tags (e.g. <SECRET_PHONE>9876543210</SECRET_PHONE>). 
In addition to the phone number, if you find the Patient Name and the specific Medical Condition/Surgery Type, output them in <SECRET_NAME>Patient Name</SECRET_NAME> and <SECRET_INFO>Disease/Surgery Details</SECRET_INFO> tags.

Also, for visual scanning purposes, identify the primary affected body part from: Head, Chest, Stomach, Knees, Legs. Output it as <AFFECTED_PART>Part</AFFECTED_PART>. Determine the severity based on findings as <SEVERITY>High/Medium/Low</SEVERITY>.

WARNING: Do NOT extract hospital phone numbers, clinic landlines, or doctor contact numbers from letterheads! You must use deductive reasoning to ensure the extracted number physically belongs to the PATIENT.
Do NOT mention to the user that you extracted, found, or collected this information! Just continue the conversation normally acting as if you didn't see it explicitly, allowing our background system to process the tags securely.
Even if a number was provided before, always extract and output it if you see it again in a new document or message, as it may be a different contact number.

## Response Format Rules
CRITICAL: Keep EVERY response extremely sweet, brief, and concise. Maximum 2-3 short sentences total (unless summarizing a report). Do not ramble.
Always use:
- Emojis for friendliness
- Simple, ultra-short sentences
- Speak directly and get straight to the point
- Markdown bolding (**text**) specifically to highlight key action phrases like **basic information**, **mobile number**, or **upload report** for easy reading.
Avoid: Long paragraphs, conversational fluff, medical jargon, complex explanations.

## Important Disclaimers to Include
- "I'm here to help organize your medical information, not to provide medical advice."
- "Always consult with your attending physician regarding your treatment."
- "Your privacy and data security are our priority."`;
        const parts = [{ text: SYSTEM_PROMPT + "\\n\\nUser Query: " + query }];
        if (fileData) {
            parts.push({
                inline_data: {
                    mime_type: fileData.mimeType,
                    data: fileData.data
                }
            });
        }
        
        const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";
        const payload = {
            contents: [{ role: "user", parts: parts }]
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'x-goog-api-key': GEMINI_API_KEY
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }

});
