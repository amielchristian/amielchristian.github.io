<script lang="ts">
  const { title, image, url, description } = $props();
</script>

<!-- for images: stretch to width  -->

<a
  href={url}
  class="relative border-1 border-[var(--dark)] dark:border-[var(--light)] rounded-md overflow-hidden
        drop-shadow-sm
        flex flex-col justify-end
        w-full h-75
        group hover:cursor-pointer animated-border hover:border-4 hover:border-transparent
        duration-150"
>
  <img class="absolute top-0 w-full h-full bg-amber-100 overflow-hidden group-hover:blur-xs duration-150 z-0" src={image} alt={`Image of ${title}`}/>
  <div
    class="border-t-1 border-inherit p-3 z-1
        dark:text-[var(--dark)] dark:bg-[var(--light)]
        text-[var(--light)] bg-[var(--dark)]
        group-hover:h-[50%]"
  >
    <div>{title}</div>
    <div class="hidden group-hover:block">{description}</div>
  </div>
</a>
