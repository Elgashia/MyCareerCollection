<template>
  <div>
    <div class="content-wrapper main-block">
      <div class="row center-content">
        <div class="logo-wrapper">
          <h4 class="sub-shadow">Let's go to the news!</h4>
          <p>A Strategy Card Game</p>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <button class="btn btn-lg ctrl-standard is-reversed typ-subhed fx-bubbleDown">
              <router-link to="/News">
                <span>최근소식 보러 가기</span>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-block">
      <div class="content-sub-wrapper border-line about-block zoom">
        <b-card title="About" class="text-center left-content" tag="article">
          <p class="card-text">This is a page about Ours girls.</p>
          <b-link to="/About" class="card-link">go to ours girls</b-link>
        </b-card>
      </div>
    </div>
    <div class="section-block">
      <div class="content-sub-wrapper border-line guide-block zoom">
        <b-card title="GUIDE" class="text-center left-content" tag="article">
          <p class="card-text">This is a guide page on how to care for ours girls.</p>
        </b-card>
      </div>
    </div>
    <div class="section-block">
      <div class="content-sub-wrapper border-line news-block zoom">
        <b-card title="NEWS" class="text-center left-content" tag="article" style="margin-top:17%; background-color:rgba( 255, 255, 255, 0.5 );">
          <p class="card-text">This is a news page of new girls.</p>
          <b-link to="/News" class="card-link">go to news of ours girls</b-link>
        </b-card>
      </div>
    </div>
    <div class="section-block">
      <div class="content-sub-wrapper border-line about-block zoom">
        <b-card title="EXPANSIONS" class="text-center left-content" tag="article">
          <p class="card-text">This is a EXPANSIONS page a Ours girls.</p>
        </b-card>
      </div>
    </div>
    <div class="section-block">
      <div class="content-sub-wrapper border-line about-block zoom">
        <b-card title="MEDIA" class="text-center left-content" tag="article">
          <p class="card-text">This is a MEDIA page a Ours girls.</p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-girls'
}
</script>
