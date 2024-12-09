import React from 'react';

function ProductPage(){
    return (
        <>

<div class=" bg-black flex min-h-[calc(100dvh-64px)] flex-col">
            <main class="flex-1">
                
                <section class="mx-auto grid max-w-7xl p-8">
                    
                    <form class="grid gap-2 sm:grid-cols-2 lg:grid-cols-8" action="" encType="multipart/form-data" method="POST">
                        <input type="hidden" name="$ACTION_REF_3"/>
                        <input type="hidden" name="$ACTION_3:1" value="[&quot;$@2&quot;]"/>
                        <input type="hidden" name="$ACTION_3:0" value="{&quot;id&quot;:&quot;0d9fb50173827852adb84b72ab96ccf7f78b8def&quot;,&quot;bound&quot;:&quot;$@1&quot;}"/>
                        <input type="hidden" name="$ACTION_3:2" value="&quot;dwbbUjc7+88U74YC9cg9lTNIHtg5tIoeEOU2EQIHQOAtLUJl1tViPNIVMttGp7dguhy1zeEPTjsvqTPwOUd9GD1vFDEXudqI4GR6ESp4LtJJtSj+lmgl28axOs48krI4BdmM84QnTAA0WC8=&quot;"/>
                        <div class="md:col-span-1 lg:col-span-5">
                            <div class="aspect-square overflow-hidden bg-neutral-50">
                                <img alt="" fetchPriority="high" width="1024" height="1024" decoding="async" data-nimg="1" class="h-full w-full object-contain object-center p-2"   src="/jordan.png"/>
                            </div>
                        </div>
                        <div class="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
                            <div>
                                <h1 class="mb-4 flex-auto text-3xl font-medium tracking-tight text-white">Watch Name</h1>
                                <p class="mb-8 text-sm  text-white " data-testid="ProductElement_Price">Rs. Watch Price</p>
                                {/* <fieldset class="my-4" role="radiogroup" data-testid="VariantSelector"> */}
                                    {/* <legend class="  text-white sr-only">Variants</legend> */}
                                    {/* <div class="flex flex-wrap gap-3">
                                        <a class="border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 relative flex min-w-[5ch] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded border p-3 text-center text-sm font-semibold focus-within:outline focus-within:outline-2 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:text-neutral-800 aria-disabled:opacity-50" role="radio" aria-checked="false" aria-disabled="false" href="/default-channel/products/dash-force?variant=UHJvZHVjdFZhcmlhbnQ6MzM1">39</a>
                                        <a class="border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 relative flex min-w-[5ch] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded border p-3 text-center text-sm font-semibold focus-within:outline focus-within:outline-2  aria-disabled:bg-neutral-100 aria-disabled:cursor-not-allowed  aria-disabled:text-neutral-800 aria-disabled:opacity-50" role="radio" aria-checked="false" aria-disabled="false" href="/default-channel/products/dash-force?variant=UHJvZHVjdFZhcmlhbnQ6MzM2">40</a>
                                        <a class="border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 relative flex min-w-[5ch] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded border p-3 text-center text-sm font-semibold focus-within:outline focus-within:outline-2 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:text-neutral-800 aria-disabled:opacity-50" role="radio" aria-checked="false" aria-disabled="false" href="/default-channel/products/dash-force?variant=UHJvZHVjdFZhcmlhbnQ6MzM3">41</a>
                                        <a class="border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 relative flex min-w-[5ch] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded border p-3 text-center text-sm font-semibold focus-within:outline focus-within:outline-2 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:text-neutral-800 aria-disabled:opacity-50" role="radio" aria-checked="false" aria-disabled="false" href="/default-channel/products/dash-force?variant=UHJvZHVjdFZhcmlhbnQ6MzM4">42</a>
                                        <a class="border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 relative flex min-w-[5ch] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded border p-3 text-center text-sm font-semibold focus-within:outline focus-within:outline-2 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:text-neutral-800 aria-disabled:opacity-50" role="radio" aria-checked="false" aria-disabled="false" href="/default-channel/products/dash-force?variant=UHJvZHVjdFZhcmlhbnQ6MzM5">43</a>
                                    </div> */}
                                {/* </fieldset> */}
                                <div class="  text-white mt-8 space-y-6 text-sm">
                                    <div>
                                        <p>
                                            <b>Step into summer with the right balance.</b>
                                            &nbsp;Every time your head goes down, you see these beauties, and your mood bounces right back up.
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-8">
                                    <button type="submit" aria-disabled="true" aria-busy="false" class="h-12 items-center rounded-md bg-white px-6 py-3 text-base font-medium leading-6 text-black shadow hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:bg-neutral-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-70 hover:aria-disabled:bg-white">
                                        <span>Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                
            </main>
            
        </div>
    
        </>
    )
}


export default ProductPage