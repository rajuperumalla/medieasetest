import os
import re

base_dir = r"c:/Users/Pristyn Care.LT-ASUS-671/Desktop/Mediciti/computer-themed-portfolio/HcareWebsite/surgeries/gynaecology"
target_files = [
    "miscarriage.html",
    "pcos.html",
    "vaginal-tightening.html",
    "vaginal-wart.html",
    "ectopic-pregnancy.html",
    "bartholin-cyst.html",
    "adenomyosis.html",
    "hymenoplasty.html",
    "labiaplasty.html",
    "lap-hysterectomy.html"
]

nav_replacement = r"""    <!-- Navbar -->
    <nav class="sticky top-0 z-50 bg-neu-base shadow-neu-flat rounded-b-2xl mx-2 mt-2">
        <!-- Top Row: Branding & Utility -->
        <div class="rounded-b-2xl">
            <!-- Mobile Nav Structure (30% - 50% - 20%) -->
            <div class="lg:hidden flex items-center w-full px-2 py-3">
                <!-- 1. Logo (30%) -->
                <a href="../../index.html"
                    class="w-[30%] flex items-center gap-1.5 flex-shrink-0 cursor-pointer no-underline group hover:opacity-100">
                    <div
                        class="w-9 h-9 bg-neu-base rounded-full flex items-center justify-center text-primary shadow-neu-flat group-hover:scale-105 transition-transform">
                        <i class="fa-solid fa-house-medical text-sm"></i>
                    </div>
                    <span class="text-base font-extrabold tracking-tight text-gray-800 leading-tight">MediEase<span
                            class="text-primary">.</span></span>
                </a>

                <!-- 2. Search (50%) -->
                <div class="w-[50%] px-1">
                    <div class="relative w-full">
                        <input type="text" id="navMobileSearchInput" placeholder="Search disease, doctor, speciality..."
                            class="w-full py-2.5 pl-10 bg-neu-base rounded-full text-[11px] focus:outline-none focus:ring-0 shadow-neu-pressed transition-all font-bold text-gray-700 placeholder-gray-500">
                        <i
                            class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                        <!-- Mobile Nav Search Results -->
                        <div id="navMobileSearchResults"
                            class="hidden absolute left-0 w-[80vw] sm:w-[350px] top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden max-h-60 overflow-y-auto">
                        </div>
                    </div>
                </div>

                <div class="w-[20%] flex justify-end">
                    <button id="mobileMenuToggle"
                        class="text-primary transition-all p-2.5 rounded-xl shadow-neu-flat bg-neu-base hover:shadow-neu-pressed active:scale-95">
                        <i class="fa-solid fa-bars text-xl transition-transform duration-300 ease-soft"></i>
                    </button>
                </div>
            </div>

            <!-- Desktop Nav Structure (Hidden on Mobile) -->
            <div class="hidden lg:flex container mx-auto px-4 py-3 justify-between items-center">
                <div class="flex items-center gap-3 lg:gap-12 flex-1">
                    <div class="flex items-center gap-2 flex-shrink-0">
                        <a href="../../index.html" class="flex items-center gap-2 group cursor-pointer no-underline">
                            <div
                                class="w-10 h-10 bg-neu-base rounded-full flex items-center justify-center text-primary shadow-neu-flat group-hover:scale-110 transition-transform">
                                <i class="fa-solid fa-house-medical text-xl"></i>
                            </div>
                            <span class="text-2xl font-extrabold tracking-tight text-gray-800">MediEase<span
                                    class="text-primary">.</span></span>
                        </a>
                    </div>

                    <!-- Global Search Bar (Desktop) -->
                    <div class="relative flex-1 max-w-[500px]">
                        <div class="relative">
                            <input type="text" id="globalSearchInput"
                                placeholder="Search disease, doctor, speciality..."
                                class="w-full pl-10 pr-4 py-3 bg-neu-base rounded-full text-sm focus:outline-none focus:ring-0 shadow-neu-pressed transition-all placeholder:text-gray-400 text-gray-700">
                            <i
                                class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        </div>
                        <!-- Global Search Results -->
                        <div id="globalSearchResults"
                            class="hidden absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden max-h-80 overflow-y-auto">
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-8 ml-4">
                    <a href="tel:1800-123-456"
                        class="flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition-colors">
                        <i class="fa-solid fa-phone-volume"></i>
                        <span class="text-base">1800-123-456</span>
                    </a>
                    <button
                        onclick="document.getElementById('inactivityModal').classList.remove('hidden'); document.getElementById('inactivityModal').classList.add('flex'); setTimeout(() => document.getElementById('inactivityModal').classList.remove('opacity-0'), 10);"
                        class="uiverse-btn uiverse-btn-blue w-auto neu-btn-primary">
                        <div class="button-outer">
                            <div class="button-inner">
                                <span>Book Appointment</span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <!-- Bottom Row: Categories -->
        <div class="bg-neu-base hidden lg:block rounded-b-2xl nav-categories-container" id="navCategoriesContainer">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex flex-nowrap justify-between w-full text-[11px] xl:text-[13px] font-bold text-gray-600 items-center py-1.5"
                    id="navCategories">
                    <!-- Categories will be injected here directly -->
                </div>
            </div>
        </div>
        <!-- Mobile Menu Container - Positioned as overlay on top of hero section -->
        <div id="mobileMenu"
            class="hidden lg:hidden absolute left-0 right-0 top-full bg-neu-base px-4 py-4 space-y-4 animate-fade-in max-h-none z-[100] shadow-neu-flat mx-4 mt-2 rounded-2xl border border-white/40">

            <!-- Mobile Categories Container -->
            <div id="mobileCategoriesContainer" class="space-y-1">
                <!-- JS will populate accordion items here -->
            </div>
            <div class="pt-4 sticky bottom-0 bg-neu-base pb-2 px-2">
                <button id="mobileNavBookAppointmentBtn" class="uiverse-btn uiverse-btn-blue w-full neu-btn-primary">
                    <div class="button-outer">
                        <div class="button-inner">
                            <span>Book Appointment</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </nav>"""

footer_replacement = r"""    <!-- Mobile Bottom Action Bar -->
    <div id="mobileBottomBar"
        class="lg:hidden fixed bottom-0 left-0 right-0 bg-neu-base border-t border-white/20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 transform  transition-transform duration-300 ease-out">

        <!-- Expandable Quick Booking Form -->
        <div id="mobileQuickBookForm" class="hidden px-4 pt-4 pb-2 border-b border-gray-100 animate-fade-in">
            <div class="flex justify-between items-center mb-3">
                <h4 class="font-bold text-gray-800 text-sm">Share Your Details</h4>
                <button onclick="document.getElementById('mobileQuickBookForm').classList.add('hidden')"
                    class="w-8 h-8 rounded-full bg-neu-base shadow-neu-flat flex items-center justify-center text-gray-500 hover:text-red-500 hover:shadow-neu-pressed transition-all">
                    <i class="fa-solid fa-xmark text-xs"></i>
                </button>
            </div>
            <form id="mobileQuickForm" class="space-y-3" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="a3fce90f-0e9f-4abf-b0b5-a4ae3660fae2">
                <input type="hidden" name="city" value="Hyderabad">
                <div class="relative">
                    <label class="text-xs text-gray-600 font-medium mb-1 block">Your Name<span
                            class="text-red-500">*</span></label>
                    <input type="text" name="name" id="mobileQuickName" placeholder="Enter your name"
                        class="w-full px-4 py-3 bg-neu-base rounded-full focus:outline-none shadow-neu-pressed transition-all text-sm"
                        required minlength="2">
                </div>
                <div class="relative">
                    <label class="text-xs text-gray-600 font-medium mb-1 block">Mobile Number<span
                            class="text-red-500">*</span></label>
                    <div class="flex items-center rounded-full overflow-hidden bg-neu-base shadow-neu-pressed">
                        <span class="px-3 py-2.5 bg-orange-400 text-white font-bold text-sm rounded-l-full">+91</span>
                        <input type="tel" name="phone" id="mobileQuickPhone" placeholder="Enter mobile number"
                            class="flex-1 px-3 py-3 bg-transparent focus:outline-none text-sm" required
                            pattern="[0-9]{10}" maxlength="14">
                    </div>
                </div>
                <button type="submit" class="uiverse-btn uiverse-btn-blue w-full">
                    <div class="button-outer">
                        <div class="button-inner">
                            <span>Submit</span>
                        </div>
                    </div>
                </button>
            </form>
        </div>

        <!-- Bottom Buttons -->
        <div class="px-4 py-2 pb-6 flex gap-3 w-full items-stretch">
            <div class="flex-1">
                <a href="tel:1800-123-456"
                    class="group flex items-center justify-center w-full h-full bg-[#E0E5EC] text-[#4A5568] border border-white/40 rounded-full shadow-[6px_6px_10px_0_rgba(163,177,198,0.7),-6px_-6px_10px_0_rgba(255,255,255,0.8)] hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] transition-all duration-200 no-underline">
                    <span class="text-sm font-bold whitespace-nowrap"><i class="fa-solid fa-phone mr-1"></i>
                        Call Us</span>
                </a>
            </div>
            <div class="flex-1">
                <button id="mobileBookBtn" onclick="document.getElementById('mobileQuickBookForm').classList.remove('hidden')"
                    class="uiverse-btn uiverse-btn-blue w-full h-full flex items-center justify-center">
                    <div class="button-outer h-full">
                        <div class="button-inner h-full justify-center items-center !py-2 !px-4">
                            <span class="text-sm font-bold whitespace-nowrap"><i
                                    class="fa-solid fa-calendar-check mr-1"></i>
                                Book Now</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>"""

# Pre-compile regex for performance
nav_pattern_bound = re.compile(r'(<!-- Navbar -->\s*)?<nav.*?</nav>', re.DOTALL | re.IGNORECASE)
footer_pattern_bound = re.compile(r'(<!-- Mobile Bottom Action Bar -->\s*)?<div id="mobileBottomBar".*?(?=\s*<script)', re.DOTALL | re.IGNORECASE)

def process_file(file_path):
    print(f"Processing {os.path.basename(file_path)}...")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Update Navigation
        new_content = nav_pattern_bound.sub(nav_replacement, content)
        
        # 2. Update Footer
        new_content = footer_pattern_bound.sub(footer_replacement, new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"Updated {os.path.basename(file_path)}")
        
    except Exception as e:
        print(f"Error processing {os.path.basename(file_path)}: {str(e)}")

if __name__ == "__main__":
    if not os.path.exists(base_dir):
        print(f"Directory not found: {base_dir}")
    else:
        for filename in target_files:
            file_path = os.path.join(base_dir, filename)
            if os.path.exists(file_path):
                process_file(file_path)
            else:
                print(f"File not found: {filename}")
