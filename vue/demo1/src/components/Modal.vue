<template>
<div>
  <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
          <div class="md-modal-inner">
            <div class="md-top">
              <button class="md-close" @click="closeModal">Close</button>
            </div>
            <div class="md-content">
              <div class="confirm-tips">
                <slot name="message"></slot>
              </div>
              <div class="btn-wrap">
               <slot name="btnGroup"></slot>
              </div>
            </div>
          </div>
    </div>
    <div class="md-overlay" v-if="mdShow" @click="closeModal">
    </div>
</div>
</template>

<script>
export default {
    props:["mdShow"],
    methods:{
        closeModal(){
        this.$emit("close");//触发主组件close事件，主组件的close事件绑定了closeModal函数
    }
    }
}
</script>

<style>

</style>