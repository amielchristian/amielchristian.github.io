<script lang="ts">
  const skills: {
    [key: string]: {
      url: string;
      color?: string;
    };
  } = {
    typescript: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      color: 'bg-[#007acc]',
    },
    javascript: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      color: 'bg-[#f0db4f]',
    },
    java: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    },
    python: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    },
    react: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    svelte: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
    },
    nextjs: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    },
    django: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
    },
    laravel: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    },
    flask: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
    },
    express: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    },
    mysql: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    },
    postgresql: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    },
    tensorflow: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    },
    keras: {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
      color: 'bg-[#d00000]',
    },
  };

  let container: HTMLDivElement;
  $effect(() => {
    const updateAnimation = () => {
      const angle =
        (parseFloat(container.style.getPropertyValue('--angle')) + 0.5) % 360;
      container.style.setProperty('--angle', `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  });
</script>

<div
  bind:this={container}
  style="--angle: 0deg;
        --background-color: linear-gradient(#252525, #1a1a1a);
        --border-color: linear-gradient(var(--angle),var(--blue-1),var(--blue-2-dark),var(--yellow-1),var(--yellow-2));"
  class="border-4 sm:border-6 rounded-4xl border-transparent shadow-xl overflow-hidden
        [background:padding-box_var(--background-color),border-box_var(--border-color)]"
>
  <div
    class="w-full h-full p-5 sm:p-8 lg:p-12
          grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5"
  >
    {#each Object.entries(skills) as [name, { url, color }]}
      <img
        class={`m-auto p-1 w-20 aspect-1 shadow-lg rounded-lg overflow-hidden ${color ?? 'bg-[#f4f2ed]'}
        grayscale-[20%] hover:grayscale-0 transition`}
        src={url}
        alt={name}
      />
    {/each}
  </div>
</div>
