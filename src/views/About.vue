<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="x in listData" :key="x.id">
        {{ x.username }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      listData: [],
    };
  },
  created() {
    let response = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => (this.listData = res.data));
  },
};
</script>
