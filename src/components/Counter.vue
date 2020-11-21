<!--
<template>
  <div>
    <span>目前計數{{count}} </span>
    <button @click="() => { count += 1 }">
      點我加一
    </button>
  </div>
</template>
-->
<template>
  <div>
    <span>目前計數{{$store.getters.count}} </span>
    <button @click="() => { $store.dispatch('incrementCount'); }">
      點我加一
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>