<template>
  <div>
    <div class="greet-home">
      <div>
        <img src="/sandwich.png" alt="">
        <h1>Cooking is an extension of love.</h1>
      </div>
    </div>
    <b-container>
      <b-row class="food-list">
        <b-col cols="12">
          <h2 class="stitle text-center mb-5">Our Beloved Recipe</h2>
        </b-col>
        <b-col cols="4" v-for="food in foods.items" :key="food.sys.id">
          <div class="food-item">
            <span class="fimg"><img :src="food.fields.gambar" :alt="food.fields.namaMasakan" class="img-fluid"></span>
            <b-link class="rmore" :to="'/recipe/' + food.sys.id">
              {{ food.fields.namaMasakan }}
            </b-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  async asyncData({ app }) {
    
    const credentials = {
      space_id: 'b2lmthrqbfr3',
      access_token: '016391c3428ad405e02f46070f8a3ec24bb1af6d9350ce7c0bcaf6ff78a94e28',
      env: 'master'
    }
    
    const foods = await app.$axios.$get('https://cdn.contentful.com' + '/spaces/' + credentials.space_id + '/environments/' + credentials.env + '/entries?access_token=' + credentials.access_token + '&content_type=food')
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

  .food-list{
    padding: 100px 0;
  }

  .food-list .food-item{
    margin-bottom: 50px;
  }

  .food-list .food-item .fimg{
    border-radius: 50%;
    border: 10px solid #fcb941;
    overflow: hidden;
    display: block;
  }

  .stitle{
    font-size: 30px;
    font-weight: 800;
    color: #333;
    font-family: 'Pacifico', cursive;
  }

  .rmore{
    display: block;
    font-size: 20px;
    text-align: center;
    color: #333;
    margin-top: 30px;
    font-weight: 800;
    transition: all 0.3s ease;
  }

  .rmore:hover, .rmore:focus{
    color: #fcb941;
    text-decoration: none;
  }
</style>

