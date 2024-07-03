<template>
  <v-stack justify-self="stretch" justify="stretch" pad="l 0 0 0" gap="l">
    <h1>Hello, world</h1>
    <h1>Build on Debian</h1>
    <h2>Test build</h2>
    <h2>I am an empty microfront</h2>
    <h2>Late Version</h2>
    <h2>28.02.24</h2>
    <h1>31.05.24 - build with GitLab</h1>
    <h1>New Update!</h1>
  </v-stack>
</template>

<script setup lang="ts">
import { useAppUiComponent, VStack } from '@mcdis/app-ui';

const { app, progress, lifecycle, uiSection, icons } = useAppUiComponent();

const props = defineProps({
  deviceId: {
    type: Number,
    required: true,
  },
});
</script>
