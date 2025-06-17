<template>
  <div>
    <h2>User Info</h2>
    <div v-if="user">
      <p><strong>{{ user.name }}</strong> ({{ user.email }})</p>
    </div>
    <p v-else>Loading user...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { fetchUser, User } from '../apiClient';

export default defineComponent({
  setup() {
    const user = ref<User | null>(null);

    onMounted(async () => {
      user.value = await fetchUser(1);
    });

    return { user };
  }
});
</script>