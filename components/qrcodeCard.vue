<template>
  <div>
    <qrcode-vue :value="valueV" :size="size"></qrcode-vue>
  </div>
</template>
<!--false-->
<script>

import QrcodeVue from 'qrcode.vue';
import vCardsJS  from 'vcards-js';

export default {
  name: "qrcode-card",
  components: {
    QrcodeVue,
  },

props:{
  firstname:String,
  middlename:String,
  lastname:String,
  workphone:String,
  organization:String,
  birthday:String,
  title:String,
  url:String,
  note:String,
  email:String,
  workemail:String,
  gender:String,
  nickname:String,
  label:String,
  street:String,
  city:String,
  facebook:String,
  logo:String,
  size:String
},
  computed:{
    valueV(){
      let value = '';
      var vCard = vCardsJS();

//set properties
      vCard.firstName = this.firstname;
      vCard.middleName = this.middlename;
      vCard.lastName = this.lastname;
      vCard.organization = this.organization;
      // vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
      vCard.workPhone = this.workphone;
      vCard.title = this.title;
      vCard.url = this.url;
      vCard.note = this.note;

      vCard.email =  this.email;
      vCard.workEmail = this.workemail;
      vCard.gender =  this.gender;
      vCard.nickname =  this.nickname;
      if(vCard.homeAddress){
        vCard.homeAddress.label =  this.label;
        vCard.homeAddress.street =  this.street;
        vCard.homeAddress.city =  this.city;
        vCard.socialUrls['facebook'] =  this.facebook;
        vCard.socialUrls['linkedIn'] =  this.linkedIn;
      }
      if(this.logo&&this.logo!==''){
        vCard.logo.attachFromUrl(this.logo, 'JPEG');
      }
      vCard.birthday = this.birthday;


      value = vCard.getFormattedString();
      return value
    }
  },


}
</script>
