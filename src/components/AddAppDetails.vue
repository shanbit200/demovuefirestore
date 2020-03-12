<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add AppDetails
        <b-link href="#/">(AppGallery List)</b-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="clientnameGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Client Name">
            <b-form-input id="clientname" v-model.trim="appgallery.clientname"></b-form-input>
          </b-form-group>
          <b-form-group id="versionGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Version">
            <b-form-input id="version" v-model.trim="appgallery.version"></b-form-input>
          </b-form-group>
           <b-form-group id="enviromentGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Enviroment">
            <b-form-input id="enviroment" v-model.trim="appgallery.enviroment"></b-form-input>
          </b-form-group>
           <b-form-group id="serviceurlGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Service URL">
            <b-form-input id="serviceurl" v-model.trim="appgallery.serviceurl"></b-form-input>
          </b-form-group>
          <b-form-group id="cmseurlGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter CMS URL">
            <b-form-input id="cmsurl" v-model.trim="appgallery.cmsurl"></b-form-input>
          </b-form-group>
          <b-form-group id="appIdGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter App ID">
            <b-form-input id="AppId" v-model.trim="appgallery.appid"></b-form-input>
          </b-form-group>
           <b-form-group id="downloadlinkGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter App Download Link">
            <b-form-input id="download" v-model.trim="appgallery.download"></b-form-input>
          </b-form-group>
           <b-form-group id="uploadGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Upload an build to Firebase">
                 <input type="file" @change="previewImage" accept="/*" >     
                  Progress: {{uploadValue.toFixed()+"%"}}
                 <progress id="progress" :value="uploadValue" max="100" ></progress>
                 <b-button  v-if="imageData!=null" @click="onUpload">Upload</b-button>
           </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'AddAppDetails',
  data () {
    return {
      ref: firebase.firestore().collection('appgallery'),
      appgallery: {},
      imageData: null,  
      picture: null,
      uploadValue: 0
    }
  },
  methods: {
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          this.appgallery.download = this.picture;
          console.log("URL"+url)
        });
      }      
      );
    },
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.appgallery).then((docRef) => {
        this.appgallery.clientname = ''
        this.appgallery.version = ''
        this.appgallery.enviroment = ''
        this.appgallery.serviceurl = ''
        this.appgallery.cmsurl = ''
        this.appgallery.appid = ''
        this.appgallery.download = ''

        console.log(docRef)
        router.push({
          name: 'AppGallery'
        })
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
