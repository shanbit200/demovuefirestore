<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit AppDetails
        <router-link :to="{ name: 'AppGallery', params: { id: key } }">(App Gallery)</router-link>
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
          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'EditBoard',
  data () {
    return {
      key: this.$route.params.id,
      appgallery: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('appgallery').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.appgallery = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('appgallery').doc(this.$route.params.id);
      updateRef.set(this.appgallery).then((docRef) => {
        this.key = ''
        this.appgallery.clientname = ''
        this.appgallery.version = ''
        this.appgallery.enviroment = ''
        this.appgallery.serviceurl = ''
        this.appgallery.cmsurl = ''
        this.appgallery.appid = ''
        this.appgallery.download = ''
        console.log(docRef)
        router.push({ name: 'ShowAppDetails', params: { id: this.$route.params.id }})
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
