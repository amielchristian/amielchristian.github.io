<script lang="ts">
  import { Menu, MoonStar, SunMedium } from '@lucide/svelte';
  let darkMode = $state(localStorage.theme === 'dark');
  let showNav = $state(false);
</script>

<nav id="navbar" class="w-[100%] py-2 h-20 flex justify-between items-center flex-col sm:flex-row">
  <div class="w-[15%] font-serif text-xl font-bold">Amiel Christian</div>
  <div
    class={`${showNav ? 'flex flex-col' : 'hidden'} sm:flex gap-5 md:gap-20 justify-center place-self-center`}
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
