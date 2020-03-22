<template>
  <div>
    <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <div class="cell-container d-flex ai-center">
        <van-image
          width="1rem"
          height="1rem"
          radius=".133333rem"
          :src="src"
        />
        <span class="cell-title pl-1 fs-lg text-dark">{{title}}</span>
      </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    title: { type: String, required: true }
  }
};
</script>