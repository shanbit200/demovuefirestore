<template>
    <div>
        <h2>
            E2M Event App Configuration and App Links
            <b-button @click.stop="logout()">Logout</b-button>
        </h2>
            <p>
                <b-button variant="outline-primary" href="#/EditAppGalleryList">Android Local App Gallery<br>(Mars Links)</b-button>
            </p>
            <p>
                <b-button variant="outline-primary">Google Configuration</b-button>
            </p>
           
    </div>
</template>
<script>
import firebase from '../Firebase'
 export default {
     name:'EditHome',
     data() {
        return{

        };       
     },
     methods:{
        logout : function(){
           firebase.auth().signOut().then(() =>{ this.$router.replace('login')}
       )
    }    
     }
 }
</script>