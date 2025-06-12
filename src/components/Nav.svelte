<script lang="ts">
  import { Menu, MoonStar, SunMedium } from '@lucide/svelte';
  let darkMode = $state(localStorage.theme === 'dark');
  let showNav = $state(false);
</script>

<nav id="navbar" class="w-full flex flex-row py-2 h-20 justify-between items-center">
    <div class="w-[15%] font-serif text-xl font-bold">Amiel Christian</div>
    <div
      class='hidden sm:flex gap-5 md:gap-20 justify-center place-self-center'
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
          localStorage.theme = 'light';
        }}
      >
        {#if darkMode}
          <SunMedium />
        {:else}
          <MoonStar />
        {/if}
      </button>
      <button
        class="hover:cursor-pointer block sm:hidden"
        onclick={() => {
          console.log('toggled!');
          showNav = !showNav;
        }}><Menu /></button
      >
  </div>
</nav>
<div class={`sm:hidden overflow-x-hidden flex flex-col bg-white absolute w-full h-full duration-150 ease-linear ${showNav ? 'right-0' : 'right-[-100vw]'}`}>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/works">Works</a>
  <a href="/contact">Contact</a>
</div>
