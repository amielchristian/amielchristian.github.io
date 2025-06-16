<script lang="ts">
  const { title, image, url, description } = $props();
</script>

<!-- for images: stretch to width  -->

<a
  href={url}
  class="relative rounded-md overflow-hidden
        border-1 border-[var(--dark)] dark:border-[var(--light)]
        animated-border hover:border-4 hover:border-transparent
        flex flex-col justify-end
        w-full h-75
        group hover:cursor-pointer
        duration-150"
>
  <div class='absolute top-0 bg-white overflow-hidden'>
    <img
      class="group-hover:blur-sm duration-150 z-0"
      src={image}
      alt={`Image of ${title}`}
    />
  </div>
  <div
    class="p-3 z-1
        dark:text-[var(--dark)] dark:bg-[var(--light)]
        text-[var(--light)] bg-[var(--dark)]
        group-hover:h-[45%]"
  >
    <div>{title}</div>
    <div class="hidden group-hover:block">{description}</div>
  </div>
</a>
