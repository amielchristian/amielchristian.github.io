<script lang="ts">
  const { title, image, url, description } = $props();
</script>

<!-- for images: stretch to width  -->

<a
  href={url}
  class="relative rounded-md overflow-hidden
        border-2 border-[var(--dark)] dark:border-[var(--light)] hover:border-4
        animated-border hover:border-transparent
        w-full h-75
        group hover:cursor-pointer
        duration-150"
>
  <div class='absolute top-0 bg-[var(--light)] dark:bg-[var(--dark)] overflow-hidden w-full h-full'>
    <img
      class="group-hover:blur-sm duration-150 z-0"
      src={image}
      alt={`Image of ${title}`}
    />
  </div>
  <div
    class="absolute w-full h-full top-[82.5%] group-hover:top-[45%]
        px-3 z-1 duration-150
        dark:text-[var(--dark)] dark:bg-[var(--light)]
        text-[var(--light)] bg-[var(--dark)]"
  >
    <div class='py-3 text-xl font-bold'>{title}</div>
    <div class='py-3 font-normal'>{description}</div>
  </div>
</a>
