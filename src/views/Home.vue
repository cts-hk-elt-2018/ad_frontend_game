<template>
  <div class="home">
    <div class="main">
      <div class="container">
        <div class="wizard">
          <div class="content">
            <input
              name="table_no"
              type="text"
              placeholder="Your table no."
              v-model="groupname"
              required
            />
          </div>
          <div class="action">
            <button v-on:click="next();">
              <svg style="width:60%;height:60%" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="cover cover1"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      groupname: null
    };
  },
  methods: {
    next() {
      if (this.groupname != "" && this.groupname != null) {
        this.$router.push({
          name: "upload",
          query: { groupname: this.groupname }
        });
      }
    }
  }
};
</script>
<style lang="scss">
.main {
  height: 15vh;
  margin: auto;
  position: relative;
  padding: 42.5vh 0;
  z-index: 200;
}
.container {
  width: 90%;
  background: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  height: 100%;
  border-radius: 60px;
  -moz-border-radius: 60px;
  -webkit-border-radius: 60px;
  -o-border-radius: 60px;
  -ms-border-radius: 60px;
  box-shadow: 0px 3px 9.5px 0.5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 3px 9.5px 0.5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 3px 9.5px 0.5px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0px 3px 9.5px 0.5px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0px 3px 9.5px 0.5px rgba(0, 0, 0, 0.1);
}
.cover1 {
  width: 100vw;
  height: 33vh;
  background: #0033a0;
  position: absolute;
  z-index: 0;
  bottom: 0px;
}
.wizard {
  padding: 0 15px 0 13%;
  display: flex;
  display: -webkit-flex;
  height: 100%;
  margin: 0 auto;
}
.content {
  height: 100%;
  margin: 0 auto;
  bottom: 0px;
}
input {
  position: absolute;
  width: 50%;
  border: none;
  border-bottom: 3px solid #ebebeb;
  background: transparent;
  font-size: 4vh;
  box-sizing: border-box;
  font-family: "TT Norms";
  font-weight: 500;
  top: 50%;
  left: 15%;
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
.action {
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
}
button {
  font-size: 50px;
  text-decoration: none;
  width: 10vh;
  height: 10vh;
  border: 0;
  padding: 0;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  justify-content: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  color: #fff;
  background: #00a7f6;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
