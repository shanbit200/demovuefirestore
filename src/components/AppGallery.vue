<template>
<b-row>
    <b-col cols="12">
      <h2>
        E2M Event Android App Gallery<br>
      </h2>
      Here All Apps that are hosted in Mars Server can be found in the downlink in the respective section.
      To Modify Please <b-link href="#/login">Login</b-link>
      <b-table striped hover :items="appgallery" :fields="fields">
        <template v-slot:cell(cmsurl)="data">
          <b-link v-bind:href="data.item.cmsurl" target="_blank">{{data.item.cmsurl}}</b-link>
        </template>
        <template v-slot:cell(download)="data">
          <b-button v-bind:href = "data.item.download" variant="transparent">
            <img src="../assets/download.jpg" height="40" width="40" /></b-button> 
          <!-- <img src="../assets/download.jpg" v-on:click="data.item.download"/> -->
      </template>
      </b-table>
    </b-col>
  </b-row>
  
</template>

<script>

import firebase from '../Firebase'

export default {
  name: 'AppGallery',
  data () {
    return {
      fields: [
        { key: 'clientname', label: 'Client Name', sortable: true, 'class': 'text-left' },
        { key: 'version', label: 'Version', sortable: true, 'class': 'text-left' },
        { key: 'enviroment', label: 'Enviroment', sortable: true, 'class': 'text-left' },
        { key: 'serviceurl', label: 'Service URL', sortable: true, 'class': 'text-left' },
        { key: 'cmsurl', label: 'CMS URL', sortable: true, 'class': 'text-left' },
        { key: 'appid', label: 'AppId', sortable: true, 'class': 'text-left' },
        { key: 'download', label: 'Download', sortable: true, 'class': 'text-left' },
      ],
      appgallery: [],
      errors: [],
      ref: firebase.firestore().collection('appgallery'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.appgallery = [];
      querySnapshot.forEach((doc) => {
        this.appgallery.push({
          key: doc.id,
          clientname: doc.data().clientname,
          version: doc.data().version,
          enviroment: doc.data().enviroment,
          serviceurl: doc.data().serviceurl,  
          cmsurl: doc.data().cmsurl,  
          appid: doc.data().appid,  
          download: doc.data().download
        });
      });
    });
  },
  methods: {
    
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
   }
</style>