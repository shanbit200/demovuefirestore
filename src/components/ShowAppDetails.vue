<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit App Details
        <b-link href="#/">(AppGallery List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{appgallery.clientname}}
        </template>
        <template slot="lead">
          ClientName: {{appgallery.clientname}}<br>
          Version: {{appgallery.version}}<br>
          Enviroment: {{appgallery.enviroment}}<br>
          ServiceUrl: {{appgallery.serviceurl}}<br>
          CMSUrl: {{appgallery.cmsurl}}<br>
          AppId: {{appgallery.appid}}<br>
          DownloadLink: {{appgallery.download}}<br>

        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editapp(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteapp(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'ShowAppDetails',
  data () {
    return {
      key: '',
      appgallery: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('appgallery').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.appgallery = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editapp (id) {
      router.push({
        name: 'EditAppGallery',
        params: { id: id }
      })
    },
    deleteapp (id) {
      firebase.firestore().collection('appgallery').doc(id).delete().then(() => {
        router.push({
          name: 'AppGallery'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>
