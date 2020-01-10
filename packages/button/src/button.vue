<template>
<button class="vt-button" :type="nativeType" :class="[
      type ? 'vt-button--' + type : '',
      ghost ? 'vt-button--' + type + '--ghost' : '',
      {
          'is-disabled': buttonDisabled,
          'is-circle': circle,
          'is-round': round,
      }
    ]" :disabled="buttonDisabled" @click="handleClick">
	<span v-if="$slots.default">
		<slot></slot>
	</span>
</button>
</template>

<script>
export default {
	name: 'vt-button',
	props: {
		type: {
			type: String,
			default: 'default'
		},
		nativeType: {
			type: String,
			default: 'button'
		},
		ghost: Boolean,
		circle: Boolean,
		round: Boolean,
		disabled: Boolean,
	},
	computed: {
		buttonDisabled() {
			return this.disabled
		}
	},
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style lang="less">
@import '../../../styles/components/button.less';
</style>
