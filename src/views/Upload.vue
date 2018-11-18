<template>
  <div class="upload">
    <div class="main">
      <div class="container">
        <div class="wizard">
          <div class="content">
            <!-- <p>Please upload the photo</p> -->
            <input
              type="file"
              accept="image/*"
              capture
              ref="file"
              v-on:change="handleFileUpload($event.target);"
              required
            />
          </div>
          <div class="action">
            <button v-on:click="submitFile();">
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
    <div class="cover cover2"></div>
  </div>
</template>

<script>
import axios from "axios";
import NProgress from "nprogress";

export default {
  name: "upload",
  data() {
    return {
      groupname: null,
      file: null,
      isDisabled: false
    };
  },
  created() {
    if (this.$route.query.groupname) {
      this.isDisabled = false;
      this.groupname = this.$route.query.groupname;
    }
  },
  methods: {
    handleFileUpload(element) {
      this.file = element.files[0];
    },
    submitFile() {
      if (this.file != null) {
        this.isDisabled = true;
        NProgress.configure({ parent: ".cover" });
        NProgress.start();
        let formData = new FormData();
        let vue = this;
        formData.append("photo", this.file);
        formData.append("groupName", this.groupname);
        formData.append("message", "");
        axios
          .post(
            "http://ad-backend.fqs3taypzi.ap-southeast-1.elasticbeanstalk.com/api/public/game/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(function() {
            vue.file = null;
            NProgress.done();
            vue.$router.push({
              name: "success",
              query: { groupname: vue.groupname }
            });
          });
      }
    }
  }
};
</script>
<style lang="scss">
.cover2 {
  width: 100%;
  height: 66vh;
  background: #0033a0;
  position: absolute;
  z-index: 0;
  bottom: 0px;
}
#nprogress .bar {
  background: #00b140;
  height: 10px;
}
</style>
