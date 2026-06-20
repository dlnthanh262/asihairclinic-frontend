<template>
  <div>
    <qrcode-vue :value="valueV" :size="size"></qrcode-vue>
  </div>
</template>
<!--false-->
<script>

import QrcodeVue from 'qrcode.vue';
import {QRPay}  from 'vietnam-qr-pay';
export default {
  name: "qrcode-pay",
  components: {
    QrcodeVue,
  },

props:{
  banknumber:String,
  bankbin:String,
  amount:String,
  purpose:String,
  size:Number
},
  computed:{
    valueV(){
      let value = this.banknumber||'';
      let bin = this.bankbin||'970436';
      let purpose= this.purpose||'';
      let amount=0;
      try{
        amount = parseInt(this.amount)
      }catch (e){
        amount = 0;
      }
      let  qqrr = QRPay.initVietQR({
        bankBin: bin,
        bankNumber: value, // Số tài khoản
        // amount: amount, // Số tiền
        purpose: purpose, // Nội dung chuyển tiền
      })
      value = qqrr.build();
      return value
    }
  },


}
</script>
