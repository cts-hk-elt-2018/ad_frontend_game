<template>
  <div class="success">
    <div class="main">
      <div class="container">
        <div class="wizard">
          <div class="content">
            <!-- <p>Please upload the photo</p> -->
            <p id="success">Success</p>
          </div>
          <div class="action">
            <button v-on:click="next();">
              <svg style="width:60%;height:60%" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="cover cover3"></div>
  </div>
</template>

<script>
export default {
  name: "success",
  data() {
    return {
      groupname: null
    };
  },
  created() {
    if (this.$route.query.groupname) {
      this.groupname = this.$route.query.groupname;
    }
  },
  methods: {
    next() {
      this.$router.push({
        name: "upload",
        query: { groupname: this.groupname }
      });
    }
  }
};
</script>

<style lang="scss">
.cover3 {
  width: 100vw;
  height: 100vh;
  background: #0033a0;
  position: absolute;
  z-index: 0;
  bottom: 0px;
}
#success {
  position: absolute;
  margin: 0 auto;
  width: 95%;
  border: none;
  background: transparent;
  font-size: 3.8vh;
  font-weight: 500;
  box-sizing: border-box;
  font-family: "TT Norms";
  top: 50%;
  transform: translateY(-50%);
  outline: none;
  appearance: unset !important;
  -moz-appearance: unset !important;
  -webkit-appearance: unset !important;
  -o-appearance: unset !important;
  -ms-appearance: unset !important;
  -webkit-appearance: none;
  transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
}
</style>
