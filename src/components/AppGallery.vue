<template>
  <b-row>
    <b-col cols="12">
      <h2>
        E2M Event Android App Gallery
        <b-link href="#/add-appgallery">(Add AppDetail)</b-link>
      </h2>
      Here All Apps that are hosted in Mars Server can be found in the downlink in the respective section.
      <b-table striped hover :items="appgallery" :fields="fields">
        <template v-slot:cell(actions)="data">
          <b-button @click.stop="edit(data.item)" variant="primary">Edit</b-button>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

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
        { key: 'actions', label: 'Edit', 'class': 'text-center' }
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
    edit (appgalleryItem) {
      router.push({ name: 'ShowAppDetails', params: { id: appgalleryItem.key }})
    }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
   }
</style>