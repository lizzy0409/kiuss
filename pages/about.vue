<template>
  <div class="sub-container about">
    <div v-if="this.$store.state.languageMarker" class="annotation">
      <div>
        Kiuss — is a so-called art group, formed in 2012 and based in Krasnodar. The main areas of interest are
        <a target="_blank" href="https://instructions.stranno.su/en/#street_activities">street activities</a>, <a href="/neosuprematism">neosuprematism</a> and
        <a href="/screen_painting">screen painting</a>. The name of group is nothing more than a meaningless and fancy combination of letters. At the moment there are two <i>official</i> participants
        in the group — Max Alyokhin and Dmitry "Kamar" Kramar, but there are also unofficial participants.
      </div>

      <div>
        We occasionally participate in exhibitions. Our main activity is in the street — different kinds of <a href="/strange_posters" target="_blank" rel="noopener noreferrer">posters</a>,
        <a href="/neosuprematism" target="_blank" rel="noopener noreferrer">murals</a>, <a href="/absurd_inscriptions" target="_blank" rel="noopener noreferrer">inscriptions</a> and
        <a href="/disposable_tableware" target="_blank" rel="noopener noreferrer">installations</a>, and also various
        <a href="/here_was_vasya" target="_blank" rel="noopener noreferrer">naive</a> things.
      </div>

      <div>
        To understand our methodology, you can reading the <a target="_blank" href="https://instructions.stranno.su/en">Instructions</a>. Other activities around the Kiuss are described in
        <a href="//stranno.su?en" target="_blank" rel="noopener noreferrer">the root</a>.
      </div>
    </div>

    <div v-else class="annotation">
      <div>
        Кюс — т.н. арт-группа, образована в 2012 году, базируется в Краснодаре. Основные направления —
        <a target="_blank" href="https://instructions.stranno.su/ru/#street_activities">уличная деятельность</a>, <a href="/neosuprematism">неосупрематизм</a>,
        <a href="/screen_painting">живопись экрана</a>. Название «Кюс» — это не более, чем бессмысленное и вычурное сочетание букв. На данный момент в группе два <i>официальных</i> участника — Макс
        Алёхин и Дмитрий "Камар" Крамарь, но также есть неофициальные участники (но это не точно).
      </div>

      <div>
        Изредка участвуем в выставках. Основная деятельность у нас связана с улицей — это различного рода
        <a href="/strange_posters" target="_blank" rel="noopener noreferrer">постеры</a>, <a href="/neosuprematism" target="_blank" rel="noopener noreferrer">муралы</a>,
        <a href="/absurd_inscriptions" target="_blank" rel="noopener noreferrer">надписи</a> и <a href="/disposable_tableware" target="_blank" rel="noopener noreferrer">инсталляции</a>, а также разные
        <a href="/here_was_vasya" target="_blank" rel="noopener noreferrer">наивные</a> вещи.
      </div>

      <div>
        Чтобы понять ход наших мыслей, можно почитать <a target="_blank" href="https://instructions.stranno.su/ru">Инструкции</a>. Прочая деятельность вокруг Кюса описана в
        <a href="//stranno.su?ru" target="_blank" rel="noopener noreferrer">корне</a>.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'About Kiuss | О Кюсе',
      meta: [
        { property: 'og:title', content: 'About Kiuss | О Кюсе' },
        { property: 'og:image', content: '../favicons/og.jpg' },
      ],
    },
  }
</script>

<style></style>
