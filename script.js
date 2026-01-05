const medicalData = {
    categories: [
        {
            id: 'dermatology',
            name: 'Dermatology',
            icon: 'fa-solid fa-hand-dots',
            diseases: ['Botox', 'Dermal Fillers', 'Hair Transplant', 'Anti-Aging', 'Pigmentation treatment', 'Hydra Facial']
        },
        {
            id: 'proctology',
            name: 'Proctology',
            icon: 'fa-solid fa-user-doctor',
            diseases: ['Piles Treatment', 'Fistula Treatment', 'Fissure Treatment', 'Pilonidal Sinus Treatment', 'Rectal Prolapse']
        },
        {
            id: 'laparoscopy',
            name: 'Laparoscopy',
            icon: 'fa-solid fa-microscope',
            diseases: ['Hernia Surgery', 'Gallstones Treatment', 'Appendicitis', 'Inguinal Hernia Treatment', 'Umbilical Hernia Treatment']
        },
        {
            id: 'gynecology',
            name: 'Gynaecology',
            icon: 'fa-solid fa-venus',
            diseases: ['Surgical Abortion and MTP', 'Ectopic and Molar Pregnancy', 'Uterus Removal', 'Ovarian Cyst', 'Miscarriage Treatment', 'Bartholin Cyst', 'Endometriosis', 'Adenomyosis', 'PCOS-PCOD', 'Pregnancy Care', 'Laser Vaginal Tightening', 'Hymenoplasty', 'Vaginoplasty', 'Labiaplasty', 'Vaginal Wart Removal']
        },
        {
            id: 'ent',
            name: 'ENT',
            icon: 'fa-solid fa-ear-listen',
            diseases: ['Tympanoplasty', 'Mastoidectomy', 'Stapedectomy', 'Myringotomy', 'Sinus Treatment', 'Septoplasty', 'FESS Surgery', 'Nasal Polyps', 'Turbinate Reduction', 'Adenoidectomy', 'Thyroidectomy', 'Tonsillectomy', 'Vocal Cord Polyps']
        },
        {
            id: 'urology',
            name: 'Urology',
            icon: 'fa-solid fa-droplet',
            diseases: ['Circumcision', 'Stapler Circumcision', 'Kidney Stones (ESWL/RIRS/PCNL)', 'Frenuloplasty', 'Balanitis', 'Paraphimosis', 'Phimosis', 'Hydrocele', 'Enlarged Prostate', 'Vasectomy', 'Testicular Torsion', 'Epididymal cyst', 'Corn Removal', 'Toenail Removal']
        },
        {
            id: 'vascular',
            name: 'Vascular',
            icon: 'fa-solid fa-layer-group',
            diseases: ['Varicose Veins Treatment', 'Varicocele Treatment', 'DVT Treatment', 'Diabetic Foot Ulcer', 'Uterine Fibroids', 'AV Fistula']
        },
        {
            id: 'aesthetics',
            name: 'Aesthetics',
            icon: 'fa-solid fa-wand-magic-sparkles',
            diseases: ['Liposuction', 'Lipoma Surgery', 'Tummy Tuck', 'Fat Loss', 'Gynecomastia', 'Breast Lift', 'Breast Augmentation', 'Rhinoplasty', 'Double Chin', 'Buccal Fat', 'Blepharoplasty', 'Earlobe Repair', 'Scar Removal', 'Beard Transplant', 'Hair Fall PRP', 'Cleft Lip', 'Sebaceous Cyst Surgery']
        },
        {
            id: 'orthopedics',
            name: 'Orthopedics',
            icon: 'fa-solid fa-bone',
            diseases: ['Knee Replacement', 'Hip Replacement', 'Shoulder Replacement', 'ACL Tear Treatment', 'Meniscus Tear Treatment', 'Rotator Cuff Repair', 'Knee Arthroscopy', 'Shoulder Arthroscopy', 'Carpal Tunnel Syndrome', 'Spine Surgery', 'Shoulder Dislocation']
        },
        {
            id: 'ophthalmology',
            name: 'Ophthalmology',
            icon: 'fa-solid fa-eye',
            diseases: ['Lasik', 'PRK Lasik', 'SMILE Lasik', 'FEMTO Lasik', 'ICL surgery', 'Contoura Vision', 'Cataract Surgery', 'Retinal Detachment', 'Glaucoma', 'Squint Surgery', 'Diabetic Retinopathy', 'Vitrectomy']
        },
        {
            id: 'weightloss',
            name: 'Weight Loss',
            icon: 'fa-solid fa-weight-scale',
            diseases: ['Bariatric Surgery', 'SPATZ Intragastric Balloon', 'General Weightloss Surgery']
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
        { name: 'Dr. Manoj Singh', exp: '17 Yrs', city: 'Kolkata', rating: 4.8, diseases: ['Retinal Detachment', 'Diabetic Retinopathy', 'Vitrectomy'], img: 'https://i.pravatar.cc/150?u=17' },
        // Added Gynaecology Doctors
        { name: 'Dr. Swati Kapoor', exp: '14 Yrs', city: 'Hyderabad', rating: 4.9, diseases: ['PCOS/PCOD', 'Pregnancy Care', 'Normal Delivery', 'C-Section'], img: 'https://i.pravatar.cc/150?u=20' },
        { name: 'Dr. Ritu Sharma', exp: '16 Yrs', city: 'Bangalore', rating: 4.8, diseases: ['Hysterectomy', 'Uterine Fibroids', 'Ovarian Cyst', 'Laparoscopic Hysterectomy'], img: 'https://i.pravatar.cc/150?u=21' },
        { name: 'Dr. Shalini Mehta', exp: '10 Yrs', city: 'Delhi', rating: 4.7, diseases: ['Vaginoplasty', 'Hymenoplasty', 'Cosmetic Gynaecology'], img: 'https://i.pravatar.cc/150?u=22' },
        // ... Existing Doctors ...
        // Proctology (Need +2)
        { name: 'Dr. Suresh Verma', exp: '11 Yrs', city: 'Delhi', rating: 4.6, diseases: ['Pilonidal Sinus Treatment', 'Rectal Prolapse', 'Piles Treatment'], img: 'https://i.pravatar.cc/150?u=24' },
        { name: 'Dr. Anita Roy', exp: '9 Yrs', city: 'Mumbai', rating: 4.7, diseases: ['Fissure Treatment', 'Fistula Treatment', 'Piles Treatment'], img: 'https://i.pravatar.cc/150?u=25' },

        // Laparoscopy (Need +3)
        { name: 'Dr. Vikas Khanna', exp: '14 Yrs', city: 'Pune', rating: 4.8, diseases: ['Hernia Surgery', 'Gallstones Treatment', 'Inguinal Hernia Treatment'], img: 'https://i.pravatar.cc/150?u=26' },
        { name: 'Dr. Meena Iyer', exp: '10 Yrs', city: 'Chennai', rating: 4.7, diseases: ['Appendicitis', 'Umbilical Hernia Treatment', 'Gallstones Treatment'], img: 'https://i.pravatar.cc/150?u=27' },
        { name: 'Dr. Rajeev Singh', exp: '16 Yrs', city: 'Hyderabad', rating: 4.9, diseases: ['Laparoscopic Surgery', 'Hernia Surgery'], img: 'https://i.pravatar.cc/150?u=28' },

        // ENT (Need +2)
        { name: 'Dr. Alok Nath', exp: '13 Yrs', city: 'Kolkata', rating: 4.7, diseases: ['Tympanoplasty', 'Mastoidectomy', 'Stapedectomy'], img: 'https://i.pravatar.cc/150?u=29' },
        { name: 'Dr. Simran Kaur', exp: '8 Yrs', city: 'Chandigarh', rating: 4.8, diseases: ['Sinus Treatment', 'Nasal Polyps', 'Turbinate Reduction'], img: 'https://i.pravatar.cc/150?u=30' },

        // Urology (Need +2)
        { name: 'Dr. Tarun Malik', exp: '12 Yrs', city: 'Delhi', rating: 4.6, diseases: ['Circumcision', 'Stapler Circumcision', 'Frenuloplasty'], img: 'https://i.pravatar.cc/150?u=31' },
        { name: 'Dr. Geeta Phogat', exp: '15 Yrs', city: 'Mumbai', rating: 4.9, diseases: ['Kidney Stones', 'Urinary Tract Infection', 'Testicular Torsion'], img: 'https://i.pravatar.cc/150?u=32' },

        // Vascular (Need +3)
        { name: 'Dr. Hemant Joshi', exp: '18 Yrs', city: 'Pune', rating: 4.8, diseases: ['Varicose Veins Treatment', 'DVT Treatment', 'AV Fistula'], img: 'https://i.pravatar.cc/150?u=33' },
        { name: 'Dr. Lipika Sen', exp: '11 Yrs', city: 'Kolkata', rating: 4.7, diseases: ['Diabetic Foot Ulcer', 'Varicocele Treatment'], img: 'https://i.pravatar.cc/150?u=34' },
        { name: 'Dr. Varun Dhawan', exp: '14 Yrs', city: 'Bangalore', rating: 4.9, diseases: ['Varicose Veins', 'Spider Veins'], img: 'https://i.pravatar.cc/150?u=35' },

        // Aesthetics / Plastic Surgery (Need +2)
        { name: 'Dr. Kabir Bedi', exp: '16 Yrs', city: 'Mumbai', rating: 4.9, diseases: ['Rhinoplasty', 'Blepharoplasty', 'Face Lift'], img: 'https://i.pravatar.cc/150?u=36' },
        { name: 'Dr. Sana Mir', exp: '9 Yrs', city: 'Delhi', rating: 4.7, diseases: ['Scar Removal', 'Earlobe Repair', 'Cleft Lip'], img: 'https://i.pravatar.cc/150?u=37' },

        // Orthopedics (Need +3)
        { name: 'Dr. Yash Birla', exp: '20 Yrs', city: 'Mumbai', rating: 5.0, diseases: ['Hip Replacement', 'Shoulder Replacement'], img: 'https://i.pravatar.cc/150?u=38' },
        { name: 'Dr. Zara Sheikh', exp: '12 Yrs', city: 'Hyderabad', rating: 4.8, diseases: ['Carpal Tunnel Syndrome', 'Rotator Cuff Repair', 'Meniscus Tear Treatment'], img: 'https://i.pravatar.cc/150?u=39' },
        { name: 'Dr. Omkar Das', exp: '15 Yrs', city: 'Chennai', rating: 4.7, diseases: ['Spine Surgery', 'Slipped Disc', 'Spondylitis'], img: 'https://i.pravatar.cc/150?u=40' },

        // Ophthalmology (Need +2)
        { name: 'Dr. Vivaan Shah', exp: '10 Yrs', city: 'Pune', rating: 4.8, diseases: ['Lasik', 'SMILE Lasik', 'Contoura Vision'], img: 'https://i.pravatar.cc/150?u=41' },
        { name: 'Dr. Nidhi Agarwal', exp: '13 Yrs', city: 'Delhi', rating: 4.9, diseases: ['ICL surgery', 'FEMTO Lasik', 'Cornea Transplant'], img: 'https://i.pravatar.cc/150?u=42' },

        // Weight Loss (Need +3)
        { name: 'Dr. Boman Irani', exp: '19 Yrs', city: 'Mumbai', rating: 5.0, diseases: ['Gastric Bypass', 'Bariatric Surgery'], img: 'https://i.pravatar.cc/150?u=45' },
        { name: 'Dr. Farah Khan', exp: '15 Yrs', city: 'Delhi', rating: 4.8, diseases: ['Liposuction', 'Tummy Tuck', 'Mommy Makeover'], img: 'https://i.pravatar.cc/150?u=46' },
        { name: 'Dr. Gagan Narang', exp: '12 Yrs', city: 'Chandigarh', rating: 4.7, diseases: ['SPATZ Intragastric Balloon', 'Weight Loss Management'], img: 'https://i.pravatar.cc/150?u=47' },

        // Dermatology (Need +3)
        { name: 'Dr. Kiara Advani', exp: '8 Yrs', city: 'Mumbai', rating: 4.9, diseases: ['Hydra Facial', 'Chemical Peel', 'Acne Treatment'], img: 'https://i.pravatar.cc/150?u=48' },
        { name: 'Dr. Ranveer Brar', exp: '10 Yrs', city: 'Delhi', rating: 4.7, diseases: ['Beard Transplant', 'Hair Transplant', 'Alopecea'], img: 'https://i.pravatar.cc/150?u=49' },
        { name: 'Dr. Disha Patani', exp: '9 Yrs', city: 'Bangalore', rating: 4.8, diseases: ['Laser Hair Removal', 'Pigmentation treatment', 'Skin Whitening'], img: 'https://i.pravatar.cc/150?u=50' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
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
        if (!navContainer) return;

        // Desktop Nav Injection
        navContainer.innerHTML = medicalData.categories.map((cat, index) => {
            const hasMany = cat.diseases.length > 8;
            // Detect the last two items (Ophthalmology & Weight Loss) to align dropdowns to the right
            const isLastItems = index >= medicalData.categories.length - 2;
            const alignmentClass = isLastItems ? 'align-right' : '';

            return `
            <div class="nav-item group relative flex-shrink-0">
                <div class="dropdown-trigger hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer py-2 px-0.5 rounded-lg hover:shadow-neu-pressed active:shadow-neu-pressed px-3" data-cat="${cat.id}">
                    ${cat.name} <i class="fa-solid fa-chevron-down text-[8px] group-hover:rotate-180 transition-transform"></i>
                </div>
                <div class="dropdown-menu bg-neu-base shadow-neu-card border-none ${hasMany ? 'w-[500px]' : 'w-[280px]'} ${alignmentClass}">
                    <h4 class="text-[10px] text-primary font-bold uppercase tracking-widest mb-3 px-2 border-b border-gray-200/50 pb-2 cursor-pointer hover:bg-gray-100/50 transition-all nav-category-header" data-cat="${cat.id}">${cat.name} Services</h4>
                    <ul class="grid ${hasMany ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4">
                        ${cat.diseases.map(d => `
                            <li><a href="javascript:void(0)" class="nav-disease-link block px-2 py-1.5 hover:shadow-neu-pressed hover:text-primary hover:font-bold hover:text-[12px] rounded-md transition-all font-medium text-[11px] whitespace-normal leading-tight text-gray-600" title="${d}" data-cat="${cat.id}" data-name="${d}">${d}</a></li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            `;
        }).join('');

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
                        ${cat.diseases.map(d => `
                            <li>
                                <a href="javascript:void(0)" 
                                   class="nav-disease-link block py-2 text-gray-600 text-xs hover:text-primary transition-colors border-b border-gray-100 last:border-0 flex justify-between items-center" 
                                   data-cat="${cat.id}" 
                                   data-name="${d}">
                                   ${d}
                                   <i class="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></i>
                                </a>
                            </li>
                        `).join('')}
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

        // Add listeners for menu links
        document.querySelectorAll('.nav-disease-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const catId = link.dataset.cat;
                const diseaseName = link.dataset.name;

                // Pass false to showSubcategories so it doesn't scroll, then showDoctors will scroll
                showSubcategories(catId, false);
                if (diseaseName) {
                    showDoctors(diseaseName, true);
                }

                // Close dropdown temporarily
                const navItem = link.closest('.nav-item');
                if (navItem) {
                    navItem.classList.add('dropdown-closed');
                    setTimeout(() => navItem.classList.remove('dropdown-closed'), 500);
                }

                // Close mobile menu if open
                const mobileMenuBody = document.getElementById('mobileMenu');
                if (mobileMenuBody) {
                    mobileMenuBody.classList.add('hidden');
                    document.body.style.overflow = '';
                    const toggleBtn = document.getElementById('mobileMenuToggle');
                    if (toggleBtn) {
                        const toggleI = toggleBtn.querySelector('i');
                        if (toggleI) {
                            toggleI.classList.add('fa-bars');
                            toggleI.classList.remove('fa-xmark');
                        }
                    }
                }
            });
        });

        // Add listeners for Category Headers and Triggers
        document.querySelectorAll('.dropdown-trigger, .nav-category-header').forEach(el => {
            el.addEventListener('click', (e) => {
                const catId = el.dataset.cat;
                if (catId) {
                    showSubcategories(catId, true);

                    // Close dropdown
                    const navItem = el.closest('.nav-item');
                    if (navItem) {
                        navItem.classList.add('dropdown-closed');
                        setTimeout(() => navItem.classList.remove('dropdown-closed'), 500);
                    }
                }
            });
        });

        // Mobile Menu Toggle logic
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenuElem = document.getElementById('mobileMenu');
        const navElement = document.querySelector('nav');
        const mobileBottomBarElem = document.getElementById('mobileBottomBar');

        // Helper function to close mobile menu
        const closeMobileMenu = () => {
            if (mobileMenuElem && !mobileMenuElem.classList.contains('hidden')) {
                mobileMenuElem.classList.add('hidden');
                const toggleIcon = mobileMenuToggle.querySelector('i');
                if (toggleIcon) {
                    toggleIcon.classList.add('fa-bars');
                    toggleIcon.classList.remove('fa-xmark');
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

                const toggleIcon = mobileMenuToggle.querySelector('i');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-bars');
                    toggleIcon.classList.add('fa-xmark');
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
            mobileMenuToggle.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering the outside click handler
                if (mobileMenuElem.classList.contains('hidden')) {
                    openMobileMenu();
                } else {
                    closeMobileMenu();
                }
            });

            // Close menu when clicking outside (on body content)
            document.addEventListener('click', (e) => {
                // Check if menu is open
                if (!mobileMenuElem.classList.contains('hidden')) {
                    // Check if click is outside the nav element
                    if (!navElement.contains(e.target)) {
                        closeMobileMenu();
                    }
                }
            });

            // Prevent clicks inside menu from closing it
            mobileMenuElem.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Mobile Dropdown Toggle
        const mobileTrigger = document.getElementById('mobileSpecialitiesTrigger');
        if (mobileTrigger) {
            mobileTrigger.addEventListener('click', () => {
                const parentNav = mobileTrigger.closest('.nav-item');
                parentNav.classList.toggle('active');
                mobileTrigger.querySelector('i').classList.toggle('rotate-180');
            });
        }
    }

    // 1. Populate Category Grid & Main Category Chips
    function renderCategories() {
        categoryGrid.innerHTML = medicalData.categories.map((cat, index) => {
            // Default: 5 per row on LG (20%)
            let widthClass = "w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)]";

            // Second row: 4 per row on LG (25%) - indices 5, 6, 7, 8
            if (index >= 5 && index <= 8) {
                widthClass = "w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-1.5rem)]";
            }

            return `
                <div class="category-card flex flex-col items-center p-6 bg-neu-base rounded-[2rem] shadow-neu-card cursor-pointer group hover:shadow-neu-pressed transition-all ${widthClass}" data-id="${cat.id}">
                    <div class="w-16 h-16 bg-neu-base rounded-full flex items-center justify-center text-primary mb-4 shadow-neu-icon group-hover:scale-110 transition-transform duration-300">
                        <i class="${cat.icon} text-2xl"></i>
                    </div>
                    <h3 class="font-bold text-gray-700 text-sm text-center">${cat.name}</h3>
                </div>
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
                    showSubcategories(cat.id, false);
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

        // Event listeners for categories (Main Grid - keep scrolling here)
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => showSubcategories(card.dataset.id, true));
        });
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
                cat.diseases.map(d => ({ name: d, category: cat.name }))
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
                    if (inputId === 'diseaseInput') {
                        // Pass false to prevent scrolling down to doctors section
                        showDoctors(item.dataset.name, false);
                    }
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
                            showSubcategories(cat.id, true);
                            document.getElementById('mobileMenu').classList.add('hidden');
                        }
                    });
                }

                // Search Diseases (Score: 700 - 800)
                cat.diseases.forEach(d => {
                    const dScore = scoreMatch(query, d);
                    if (dScore > 40 && !addedItems.has(d)) {
                        // Diseases get high priority
                        let finalDScore = dScore + 700;
                        if (dScore === 100) finalDScore = 800; // Exact disease match

                        allResults.push({
                            type: 'Treatment',
                            name: d,
                            subtitle: `in ${cat.name}`,
                            icon: 'fa-solid fa-notes-medical',
                            score: finalDScore,
                            action: () => {
                                showDoctors(d, true);
                                document.getElementById('mobileMenu').classList.add('hidden');
                            }
                        });
                        addedItems.add(d);
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
                            document.getElementById('doctors').classList.remove('hidden');
                            document.getElementById('doctorsSectionTitle').innerText = 'Search Result';
                            document.getElementById('doctorGrid').innerHTML = `
                                <div class="doctor-card bg-neu-base p-6 rounded-[2rem] shadow-neu-card animate-fade-in border-none">
                                    <div class="flex items-center gap-4 mb-6">
                                        <img src="${doc.img}" class="w-20 h-20 rounded-2xl object-cover shadow-neu-pressed" alt="${doc.name}">
                                        <div>
                                            <h4 class="font-extrabold text-gray-900">${doc.name}</h4>
                                            <p class="text-xs text-gray-600 font-medium">${doc.exp} Experience</p>
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
                                    </div>
                                    <button class="uiverse-btn uiverse-btn-blue w-full">
                                        <div class="button-outer"><div class="button-inner"><span>Book Appointment</span></div></div>
                                    </button>
                                </div>
                            `;
                            document.getElementById('doctors').scrollIntoView({ behavior: 'smooth' });
                            document.getElementById('mobileMenu').classList.add('hidden');
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

    // 5. Back Button Logic
    backBtn.addEventListener('click', () => {
        subcategorySection.classList.add('hidden');
        doctorsSection.classList.add('hidden');
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
    });

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

    // Inactivity Tracking Logic for Mobile
    let idleTime = 0;
    let modalShown = false;
    let isInteractingWithForm = false; // Track if user is currently interacting with a form
    const inactivityModal = document.getElementById('inactivityModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Get all booking forms that should pause the inactivity timer while being used
    const heroForm = document.getElementById('appointmentForm'); // Desktop hero form
    const mobileHeroForm = document.querySelector('.lg\\:hidden form[action*="web3forms"]'); // Mobile hero form (inside lg:hidden container)
    const mobileQuickForm = document.getElementById('mobileQuickForm'); // Mobile bottom bar form
    const mobileQuickBookForm = document.getElementById('mobileQuickBookForm'); // Mobile bottom bar expandable container
    const mobileBottomBarForInactivity = document.getElementById('mobileBottomBar'); // Mobile bottom bar container

    // Helper function to pause inactivity timer while interacting with form
    const pauseInactivityWhileInteracting = () => {
        isInteractingWithForm = true;
        resetTimer();
    };

    // Helper function to resume inactivity tracking when user leaves form
    const resumeInactivityTracking = () => {
        // Small delay to avoid immediate popup when clicking away
        setTimeout(() => {
            isInteractingWithForm = false;
        }, 500);
    };

    // Helper function to attach form interaction listeners
    const attachFormListeners = (formElement) => {
        if (!formElement) return;

        // Pause timer while interacting
        formElement.addEventListener('click', pauseInactivityWhileInteracting);
        formElement.addEventListener('focus', pauseInactivityWhileInteracting, true);
        formElement.addEventListener('input', pauseInactivityWhileInteracting);
        formElement.addEventListener('change', pauseInactivityWhileInteracting);
        formElement.addEventListener('touchstart', pauseInactivityWhileInteracting);

        // Resume tracking when user leaves (focusout bubbles, blur doesn't)
        formElement.addEventListener('focusout', resumeInactivityTracking);
    };

    // Attach listeners to all booking forms
    attachFormListeners(heroForm);
    attachFormListeners(mobileHeroForm);
    attachFormListeners(mobileQuickForm);

    // Also pause when clicking on the mobile bottom bar (Book Appointment button)
    if (mobileBottomBarForInactivity) {
        mobileBottomBarForInactivity.addEventListener('click', pauseInactivityWhileInteracting);
        mobileBottomBarForInactivity.addEventListener('touchstart', pauseInactivityWhileInteracting);
    }

    // Also pause when the mobile quick book form container is opened
    if (mobileQuickBookForm) {
        mobileQuickBookForm.addEventListener('click', pauseInactivityWhileInteracting);
        mobileQuickBookForm.addEventListener('focus', pauseInactivityWhileInteracting, true);
        mobileQuickBookForm.addEventListener('input', pauseInactivityWhileInteracting);
        mobileQuickBookForm.addEventListener('touchstart', pauseInactivityWhileInteracting);
        mobileQuickBookForm.addEventListener('focusout', resumeInactivityTracking);
    }

    // CRITICAL: Pause inactivity timer when user types in SEARCH input AND Close Mobile Menu
    const mobileSearchInput = document.getElementById('navMobileSearchInput');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('focus', () => {
            pauseInactivityWhileInteracting();
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
        mobileSearchInput.addEventListener('input', pauseInactivityWhileInteracting);
        mobileSearchInput.addEventListener('click', pauseInactivityWhileInteracting);
        // Resume when they leave the search bar
        mobileSearchInput.addEventListener('blur', resumeInactivityTracking);
    }

    // Increment idle time every second
    setInterval(timerIncrement, 1000);

    function timerIncrement() {
        // Don't increment if modal is currently showing or user is interacting with form
        if (modalShown || isInteractingWithForm) return;

        // Show popup on ALL devices (Mobile & Desktop) after inactivity
        // if (window.innerWidth >= 768) return; // Constraint removed

        idleTime = idleTime + 1;
        if (idleTime >= 10) { // Show popup after 10 seconds of inactivity
            showInactivityModal();
        }
    }

    function resetTimer() {
        idleTime = 0;
    }

    function showInactivityModal() {
        // Double-check before showing
        if (modalShown || isInteractingWithForm) return;

        modalShown = true;
        if (inactivityModal) {
            inactivityModal.classList.remove('hidden');
            inactivityModal.classList.add('flex');
            // Small delay to allow display:flex to apply before opacity transition
            setTimeout(() => {
                inactivityModal.classList.remove('opacity-0');
            }, 10);
        }
    }

    // Function to close modal and reset for next appearance
    function closeInactivityModal() {
        inactivityModal.classList.add('opacity-0');
        setTimeout(() => {
            inactivityModal.classList.add('hidden');
            inactivityModal.classList.remove('flex');
            // Reset modalShown so popup can appear again after 10 seconds of inactivity
            modalShown = false;
            // Reset the timer to start counting fresh
            resetTimer();
        }, 300);
    }

    // Activity Events to reset timer (global)
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer; // catches touchscreen presses as well typically
    window.ontouchstart = resetTimer;
    window.onclick = resetTimer;
    window.onkeypress = resetTimer;
    window.addEventListener('scroll', resetTimer, true);

    // Modal Close Logic
    // Modal Close Logic
    if (closeModalBtn && inactivityModal) {
        closeModalBtn.addEventListener('click', closeInactivityModal);

        // Background click closing disabled as per requirement
    }

    // Mobile Nav Book Appointment Button - Show popup immediately
    const mobileNavBookBtn = document.getElementById('mobileNavBookAppointmentBtn');
    if (mobileNavBookBtn && inactivityModal) {
        mobileNavBookBtn.addEventListener('click', () => {
            // Close mobile menu first
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                // Re-enable body scroll
                document.body.style.overflow = '';
                const toggleBtn = document.getElementById('mobileMenuToggle');
                if (toggleBtn) {
                    const icon = toggleBtn.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-xmark');
                    }
                }
            }

            // Show the appointment booking popup immediately
            inactivityModal.classList.remove('hidden');
            inactivityModal.classList.add('flex');
            setTimeout(() => {
                inactivityModal.classList.remove('opacity-0');
            }, 10);

            // Mark as shown so the auto-timer doesn't trigger it again
            modalShown = true;
        });
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

        // Input Blur Validation (Real-time feedback)
        nameInput.addEventListener('blur', () => {
            const val = nameInput.value.trim();
            if (val.length > 0 && val.length < 3) {
                showError(nameInput, 'Name must be at least 3 letters');
            } else {
                clearError(nameInput);
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

        // Clear errors on focus
        nameInput.addEventListener('focus', () => clearError(nameInput));
        phoneInput.addEventListener('focus', () => clearError(phoneInput));

        // Form Submit Validation
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Validate Name
            if (nameInput.value.trim().length < 3) {
                isValid = false;
                showError(nameInput, 'Name must be at least 3 letters');
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
                            alert('Something went wrong. Please try again.');
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

    // Mobile Bottom Bar Scroll Animation
    const mobileBottomBar = document.getElementById('mobileBottomBar');
    let lastScrollY = 0;
    const scrollThreshold = 200; // Show after scrolling 200px

    if (mobileBottomBar) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            // Show bar when scrolled past threshold
            if (currentScrollY > scrollThreshold) {
                mobileBottomBar.classList.remove('translate-y-full');
                mobileBottomBar.classList.add('translate-y-0');
            } else {
                mobileBottomBar.classList.add('translate-y-full');
                mobileBottomBar.classList.remove('translate-y-0');
            }

            lastScrollY = currentScrollY;
        });
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

// Mobile Quick Form Phone Validation
document.addEventListener('DOMContentLoaded', function () {

    // Helper function to clean phone numbers (handles browser autofill with +91 or leading 0)
    function cleanPhoneNumber(value) {
        // Remove all non-numeric characters first (except + for country code detection)
        let cleaned = value.replace(/[^\d+]/g, '');

        // Handle +91 prefix (country code) - 13 characters total
        if (cleaned.startsWith('+91') && cleaned.length >= 13) {
            cleaned = cleaned.substring(3); // Remove +91
        }
        // Handle 91 prefix without + (12 characters total)
        else if (cleaned.startsWith('91') && cleaned.length >= 12 && !cleaned.startsWith('+')) {
            cleaned = cleaned.substring(2); // Remove 91
        }
        // Handle leading 0 (11 characters total)
        else if (cleaned.startsWith('0') && cleaned.length >= 11) {
            cleaned = cleaned.substring(1); // Remove leading 0
        }

        // Now remove any remaining non-numeric characters and limit to 10 digits
        cleaned = cleaned.replace(/[^0-9]/g, '').slice(0, 10);

        return cleaned;
    }

    // Apply phone validation with autofill support to all mobile phone inputs
    const phoneInputIds = ['mobileQuickPhone', 'mobileHeroPhone', 'modalMobileNumber', 'heroMobileNumber'];

    phoneInputIds.forEach(inputId => {
        const phoneInput = document.getElementById(inputId);
        if (phoneInput) {
            // Handle both input and change events (change is triggered by autofill)
            ['input', 'change'].forEach(eventType => {
                phoneInput.addEventListener(eventType, function (e) {
                    const originalValue = e.target.value;
                    const cleanedValue = cleanPhoneNumber(originalValue);

                    // Only update if the value changed (prevents cursor jumping)
                    if (originalValue !== cleanedValue) {
                        e.target.value = cleanedValue;
                    }
                });
            });

            // Also handle blur for autofill that doesn't trigger input/change
            phoneInput.addEventListener('blur', function (e) {
                e.target.value = cleanPhoneNumber(e.target.value);
            });
        }
    });

    // Mobile Quick Form Submission
    const mobileQuickForm = document.getElementById('mobileQuickForm');
    if (mobileQuickForm) {
        mobileQuickForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('mobileQuickName').value.trim();
            const phone = document.getElementById('mobileQuickPhone').value.trim();

            // Validate name
            if (name.length < 2) {
                alert('Please enter a valid name (at least 2 characters)');
                return;
            }

            // Validate phone
            if (!/^[0-9]{10}$/.test(phone)) {
                alert('Please enter a valid 10-digit mobile number');
                return;
            }

            // Get submit button and show loading state
            const submitBtn = mobileQuickForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            // Submit form via fetch API
            const formData = new FormData(mobileQuickForm);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Close the mobile quick booking form
                        const mobileQuickBookForm = document.getElementById('mobileQuickBookForm');
                        if (mobileQuickBookForm) {
                            mobileQuickBookForm.classList.add('hidden');
                        }

                        // Show success modal greeting
                        const successModal = document.getElementById('successModal');
                        if (successModal) {
                            successModal.classList.remove('hidden');
                            successModal.classList.add('flex');
                        }

                        // Reset the form
                        mobileQuickForm.reset();
                    } else {
                        alert('Something went wrong. Please try again.');
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
        });
    }
});
