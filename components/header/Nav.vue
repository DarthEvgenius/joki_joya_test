<script setup>
    const ringText = useTemplateRef('text-ring');
    
    onMounted(() => {
        const ring = ringText.value;
        console.log('text ring', ring);

        // const innerText = Array.from(ring.querySelectorAll('span')).map(el => el.textContent).join('  ');


        // console.log(innerText);

        // ring.style.setProperty('--total', innerText.length)
        // ring.style.setProperty('--spacing', 1)
        // ring.style.setProperty('--size', 1)

        
    })

    const rawHtml = ref(`
        <svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    id="circlePath"
    d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
  />
  <text>
    <textPath href="#circlePath">
      Your text here!
    </textPath>
  </text>
</svg>
        `)

    const raw2 = ref(`        <span>Каждый день праздник</span>
        <span>Каждый день праздник</span>`)
</script>

<template>
    <div class="text-ring" ref="text-ring" >
        <NuxtImg src="/welcome.png" format="webp" preload width="144" height="144" alt="Каждый день праздник" />
    </div>
</template>

<style scoped>
   .text-ring {
    --character-width: 1; /* In "ch" units */
    --inner-angle: calc((360 / var(--total)) * 1deg);
    --radius: calc(
        (
        var(--character-width, 1) /
        sin(var(--inner-angle))
        ) * -1ch
    );

    }
    .text-ring [style*=--index] {
    transform:
        translate(-50%, -50%)
        rotate(calc(var(--inner-angle) * var(--index)))
        translateY(var(--radius, -5ch));
    }
</style>