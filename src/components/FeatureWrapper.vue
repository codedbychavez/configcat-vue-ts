<template>
    <div>
        <div v-if="state.isFeatureFlagEnabled === true">
            <slot />
        </div>
        <div v-else-if="state.isFeatureFlagEnabled === false">
            <slot name="else"/>
        </div>
        <div v-else>
            <slot name="loading" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onBeforeMount, onUnmounted } from 'vue';

const props = defineProps({
    featureKey: {
        type: String,
        required: true,
    },
    userObject: {
        type: Object,
        required: true,
        default: {},
    },
});

const state = reactive({
    isFeatureFlagEnabled: null,
});

// const configChangedHandler = () => {

// }

onBeforeMount(() => {
    // TODO
});

onUnmounted(() => {
    // TODO
});

</script>