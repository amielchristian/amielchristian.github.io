<script lang="ts">
  import { onMount } from 'svelte';

  const { title, image, url, description } = $props();
  const height = 40;
  const width = 40;
  const cellSize = 25;
  let canvas: HTMLCanvasElement;

  function drawGrid(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.strokeStyle = '#ccca';

    for (let i = 1; i <= height; i++) {
      context.moveTo(i * (cellSize + 1) + 1, 0);
      context.lineTo(i * (cellSize + 1) + 1, (cellSize + 1) * height + 1);
    }

    for (let i = 1; i <= width; i++) {
      context.moveTo(0, i * (cellSize + 1) + 1);
      context.lineTo((cellSize + 1) * width + 1, i * (cellSize + 1) + 1);
    }

    context.stroke();
  }

  onMount(() => {
    // canvas!.height = (cellSize + 1) * height + 1;
    // canvas!.width = (cellSize + 1) * width + 1;

    const context: CanvasRenderingContext2D | null = canvas!.getContext('2d');
    if (context) {
      drawGrid(context);
    }
  });
</script>

<!-- for images: stretch to width
maybe center after a certain aspect ratio threshold?
-->

<a
  href={url}
  class="relative rounded-md overflow-hidden
        border-2 border-[var(--dark)] hover:border-4
        animated-border hover:border-transparent
        w-full h-75
        group hover:cursor-pointer
        duration-150"
>
  <div class="absolute top-0 bg-white dark:bg-black drop-shadow-2xl overflow-hidden w-full h-full">
    <div class='absolute top-0 w-full h-full bg-linear-to-t from-blue-900 from-10% to-transparent z-3'></div>
    <canvas class="absolute top-0 z-1 bg-white" width="900" height="300" bind:this={canvas}></canvas>
    <!-- svelte-ignore a11y_missing_attribute -->
    <img
      class="absolute top-0 group-hover:blur-[2px] duration-150 z-2"
      src={image}
    />
  </div>
  <div
    class="absolute w-full h-full top-[82.5%] group-hover:top-[35%] sm:group-hover:top-[55%]
        px-3 z-1 duration-150
        dark:text-[var(--dark)] dark:bg-[var(--light)]
        text-[var(--light)] bg-[var(--dark)]"
  >
    <div class="py-3 text-xl font-bold">{title}</div>
    <div class="py-3 font-normal">{description}</div>
  </div>
</a>
