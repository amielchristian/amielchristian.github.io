<script lang="ts">
  import { Menu, MoonStar, SunMedium } from '@lucide/svelte';
  let showNav = $state(false);

  let userPref = $state(localStorage.getItem('theme') ?? 'light'); // right now, haven't really handled case where there's no theme; just defaulting to light rn
  let systemPref = $derived(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ); // for later; should probably move this to layout
</script>

<nav
  id="navbar"
  class="w-full flex flex-row py-2 h-20 justify-between items-center"
>
  <div class="w-[15%] font-serif text-xl font-bold">Amiel Christian</div>
  <div
    class="hidden sm:flex gap-5 md:gap-20 justify-center place-self-center"
    id="navlinks"
  >
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/works">Works</a>
    <a href="/contact">Contact</a>
  </div>
  <div class="w-[15%] flex flex-row gap-4 justify-center">
    <button
      class="hover:cursor-pointer"
      onclick={() => {
        const newMode = userPref === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newMode);
        userPref = newMode;
      }}
    >
      {#if userPref === 'dark'}
        <SunMedium />
      {:else}
        <MoonStar />
      {/if}
    </button>
    <button
      class="hover:cursor-pointer block sm:hidden"
      onclick={() => {
        showNav = !showNav;
      }}><Menu /></button
    >
  </div>
</nav>
<div
  class={`sm:hidden overflow-x-hidden flex flex-col bg-white absolute w-full h-full duration-150 ease-linear ${showNav ? 'right-0' : 'right-[-100vw]'}`}
>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/works">Works</a>
  <a href="/contact">Contact</a>
</div>
