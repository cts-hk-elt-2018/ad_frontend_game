<template>
  <div class="upload">
    <div class="main">
      <div class="container">
        <div class="wizard">
          <div class="content">
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
import getOrientedImage from "exif-orientation-image";
import Pica from "pica";
const pica = Pica();

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
        let vue = this;
        getOrientedImage(this.file, function(_, canvas) {
          if (canvas.width < 1920 && canvas.height < 1080) {
            canvas.toBlob(
              blob => {
                let formData = new FormData();
                formData.append("photo", blob);
                formData.append("groupName", vue.groupname);
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
              },
              "image/jpeg",
              0.95
            );
          } else {
            var new_width, new_height;
            if (canvas.height / (canvas.width / 1920) < 1080) {
              new_width = 1920;
              new_height = Math.round(canvas.height / (canvas.width / 1920));
            } else {
              new_width = Math.round(canvas.width / (canvas.height / 1080));
              new_height = 1080;
            }
            let dest = document.createElement("canvas");
            dest.width = new_width;
            dest.height = new_height;
            pica
              .resize(canvas, dest)
              .then(() => pica.toBlob(dest, "image/jpeg", 0.7))
              .then(blob => {
                let formData = new FormData();
                formData.append("photo", blob);
                formData.append("groupName", vue.groupname);
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
              });
          }
        });
      }
    }
  }
};
</script>
<style lang="scss">
.cover2 {
  width: 100vw;
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
