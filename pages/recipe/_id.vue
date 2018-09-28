<template>
  <div>
    <div class="greet-home">
      <div>
        <h1>{{ foods.fields.namaMasakan }} Recipe</h1>
        <h5>{{ foods.fields.intro }}</h5>
      </div>
    </div>
    <b-container>
        <b-row>
            <b-col cols="12" class="text-center">
                <span class="rimg">
                    <img :src="foods.fields.gambar" :alt="foods.fields.namaMasakan">
                </span>
            </b-col>
            <b-col cols="6">
                    <h5 class="stitle">Ingredients</h5>
                    <vue-markdown :source="foods.fields.bahan" class="tlist"></vue-markdown>
            </b-col>
            <b-col cols="6">
                    <h5 class="stitle">How to Cook</h5>
                    <vue-markdown :source="foods.fields.cara" class="tlist"></vue-markdown>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  async asyncData({ app, params }) {
    
    const credentials = {
      space_id: 'b2lmthrqbfr3',
      access_token: '016391c3428ad405e02f46070f8a3ec24bb1af6d9350ce7c0bcaf6ff78a94e28',
      env: 'master'
    }
    
    const foods = await app.$axios.$get('https://cdn.contentful.com' + '/spaces/' + credentials.space_id + '/environments/' + credentials.env + '/entries/'+ params.id +'?access_token=' + credentials.access_token + '&content_type=food')
    return { foods }
  }
}
</script>

<style>
  body{
    font-family: 'Raleway', sans-serif;
  }

  .greet-home{
    background-color: #f39c12;
    padding: 50px 0;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .greet-home div{
    text-align: center;
  }

  .greet-home img{
    width: 150px;
    margin-bottom: 15px;
  }

  .greet-home h1{
    color: #FFF;
    font-weight: bold;
  }

  .greet-home h5{
    color: #FFF;
    font-size: 18px;
    width: 60%;
    line-height: 1.5;
    margin: 10px auto 0 auto;
  }

  .rimg{
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 10px solid #fcb941;
    overflow: hidden;
    display: inline-block;
    margin: 30px 0;
  }

  .rimg img{
    height: 400px;
    object-fit: cover;
  }

  .stitle{
    font-size: 24px;
    margin-bottom: 30px;
    color: #333;
    font-family: 'Pacifico', cursive;
  }

  .tlist ol{
    padding: 0 30px 0 10px;
    margin: 0 0 60px 0;
  }

  .tlist ol li{
    margin: 0 0 15px 0;
    line-height: 1.8;
  }

</style>

