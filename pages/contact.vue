<template>
  <div>
    <div class="greet-home">
      <div>
        <img src="/phone.png" alt="">
        <h1>I don't have a phone, but I do have an iPad.</h1>
      </div>
    </div>
    <b-container>
      <b-row>
          <b-col cols="12">
            <div class="content-text">
                <h3>Contact</h3>
                <b-form>
                  <b-form-group label="Email Address">
                    <b-form-input type="text" v-model="email">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group label="Nama Lengkap">
                    <b-form-input type="text" v-model="name">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group label="Message">
                    <b-form-textarea v-model="message">
                    </b-form-textarea>
                  </b-form-group>
                  <b-button type="submit" variant="warning" class="mt-4 mr-3">Submit</b-button>
                  <b-button type="reset" variant="default" class="mt-4">Reset</b-button>
                </b-form>
            </div>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

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

  .content-text{
      padding: 40px 0;
  }

  .content-text h3{
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #222;
  }

  .content-text p{
    line-height: 1.8;
    font-size: 18px;
  }

  textarea.form-control{
    min-height: 150px;
  }
</style>