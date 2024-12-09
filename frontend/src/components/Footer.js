import React from "react";

function Footer() {
    return (
        <footer class="border-black bg-black mt-10">
        <div class="mx-auto max-w-7xl px-4 lg:px-8">
            <div class="grid grid-cols-5 gap-6 py-16">
                <div>
                    <h3 class="text-sm font-semibold text-white ">Customer Care</h3>
                    <ul class="mt-4 space-y-4 [&amp;&gt;li]:text-neutral-500">
                        <li class=" text-white  text-sm">
                            <a href="//about">Contact Us</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">My Order</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">My Account</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">My Payment</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">Our Services</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-white ">Legal Area</h3>
                    <ul class="mt-4 space-y-4 [&amp;&gt;li]:text-neutral-500">
                        <li class=" text-white text-sm">
                            <a href="/">Terms and Conditions of Sale</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">Accessibility</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-white ">Mail Us:</h3>
                    <ul class="mt-4 space-y-1 [&amp;&gt;li]:text-neutral-500">
                        <li class=" text-white  text-sm">
                            <a href="//about">Aurelia private Limited,</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">Buildings Alyssa, Tech Village,</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">Devarabeesanahalli Village,</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">Bengaluru, 560103</a>
                        </li>
                        <li class=" text-white text-sm">
                            <a href="/">Karnataka ,India</a>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-sm font-semibold text-white ">Connect With Us</h3>
                    <ul class="mt-3 space-y-4 [&amp;&gt;li]:text-neutral-500">
                        <li class="text-white text-sm">
                            <a href="/">Facebook</a>
                        </li>
                        <li class="text-white  text-sm">
                            <a href="/">Instagram</a>
                        </li>
                        <li class="text-white  text-sm">
                            <a href="/">Twitter/X</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            
                    <div class="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
                        <p class="text-sm text-white ">Copyright ©                       
                        2024
                        
                        Aurelia, Inc.</p>
                        <p class="flex gap-1 text-sm text-white ">
                            Powered by
                            
                            <a target="" href="/">Aurelia</a>
                            <a target="" class="opacity-30" href=""></a>
                        </p>
                    </div>
                </div>
            </footer>
    );
}

export default Footer