<script lang="ts">
  // props
  const { title, image, url, description, index } = $props();

  // bindings
  let canvas: HTMLCanvasElement;
  let canvasContainer: HTMLDivElement;
  let card: HTMLAnchorElement;
  let innerWidth = $state(window.innerWidth);

  const colorSchemes: string[][] = [
    ['#ee9162', '#e1724d', '#f2d045', '#5f7d83', '#356b73'], // cyndaquil
    ['#BADBB2, #79AD75, #D56671'], // gardevoir
    ['#5cc8c7, #fbeda5, #fa6d80, #deeb24'], // dragapult
    ['#ff3800, #ff4f00, #f9df90, #cb0000, #d87d35'], // fennekin
  ];
  const colorScheme: string = colorSchemes[index % colorSchemes.length].join(', ');

  function drawGrid(context: CanvasRenderingContext2D) {
    const height = 40;
    const width = 40;
    const cellSize = 25;
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

  $effect(() => {
    innerWidth;
    canvas.width = canvasContainer.offsetWidth;
    canvas.height = canvasContainer.offsetHeight;

    const context: CanvasRenderingContext2D | null = canvas!.getContext('2d');
    if (context) {
      drawGrid(context);
    }
  });

  $effect(() => {
    const updateAnimation = () => {
      const angle =
        (parseFloat(card.style.getPropertyValue('--angle')) + 0.5) % 360;
      card.style.setProperty('--angle', `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  });
</script>

<!-- for images: stretch to width
maybe center after a certain aspect ratio threshold?
-->

<svelte:window bind:innerWidth />

<a
  href={url}
  bind:this={card}
  style="--angle: 0deg;
        --border-color: linear-gradient(var(--angle), {colorScheme});"
  class="project-card relative rounded-md overflow-hidden
        border-2 border-[var(--dark)] hover:border-6
        [background:padding-box_var(--border-color),border-box_var(--border-color)] hover:border-transparent
        w-full h-75
        group hover:cursor-pointer
        duration-0"
>
  <div
    class="absolute top-0 bg-white dark:bg-black drop-shadow-2xl overflow-hidden w-full h-full"
    bind:this={canvasContainer}
  >
    <!-- below will be replaced with Fabric, which will be used to allow mouse events -->
    <canvas class="absolute top-0 z-1 bg-white" width="900" bind:this={canvas}
    ></canvas>
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
