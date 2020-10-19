<template>
    <div class="the-footer flex-wrap justify-between">
        <q-footer  :class="(dark)?'darkcss':'lightcss'" style="border-radius: .5rem;
margin-bottom: 11px;">
        <q-toolbar>
        
        <q-toolbar-title   style="font-size:12px;">
          COPYRIGHT ©2020 <a href="">Pixinvent </a>, All rights Reserved



        </q-toolbar-title>

     
        
      </q-toolbar>
      </q-footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            	dark: false,
        }
    },
    
  	created() {
		this.dark = this.$q.dark.isActive;
	},
	watch: {
		'$q.dark.isActive' (val) {
			this.dark = val;
		}
	},
}
</script>

<style scoped>
/* .layouts{
padding-left: 20px;
    font-size: 15px;
    text-transform: none;
    text-decoration: none;
    box-sizing: border-box;
    background-color: whitesmoke;
    color: dimgray;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-right: 20px;
} */
.q-footer{
    /* background-color: whitesmoke; */
}
.darkcss{
  background: #1D1D1D;
  color:white;
}
.lightcss{
  background: white;
  color:#1D1D1D;
}
</style>