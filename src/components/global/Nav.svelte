<script lang="ts">
  import { Menu, MoonStar, SunMedium } from '@lucide/svelte';
  let showNav = $state(false);

  let userPref = $state(localStorage.getItem('theme') ?? 'light'); // right now, haven't really handled case where there's no theme; just defaulting to light rn
  let systemPref = $derived(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ); // for later; should probably move this to layout
</script>

<nav
  class="w-full flex flex-row py-2 h-20 justify-between items-center"
>
  <div class="w-[15%] font-[Junicode] text-xl font-bold">Amiel Christian</div>
  <div
    class="hidden sm:flex gap-5 md:gap-20 justify-center place-self-center font-[BricolageGrotesque]"
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
  class={`flex flex-col sm:hidden overflow-x-hidden
  fixed w-full h-full
  transition-[right] duration-150 ease-linear
  bg-white/5 border-t-2
  border-t-[var(--dark)] dark:border-t-[var(--light)]
  text-[var(--dark)] dark:text-[var(--light)] text-2xl font-bold font-[BricolageGrotesque]
  backdrop-blur-[18px]
  ${showNav ? 'right-0' : 'right-[-100vw]'}`}
>
  <a class='pl-[10%] h-15 border-b-2 flex items-center' href="/">Home</a>
  <a class='pl-[10%] h-15 border-b-2 flex items-center' href="/about">About</a>
  <a class='pl-[10%] h-15 border-b-2 flex items-center' href="/works">Works</a>
  <a class='pl-[10%] h-15 border-b-2 flex items-center' href="/contact">Contact</a>
</div>
