<template>
<div class="home" v-if="!loading">
  <Heading :data="heading" :navigationData="footer.volgOns"/>
  <Video :data="video" />
  <InfoSection :data="infoSection" />
  <Drieluik :data="drieluik" />
  <Footing :data="footer" />

  <div class="intro-animation" :style="introIsDone ? { zIndex: '-1', position: 'absolute' } : {}">

    <div :class="['curtain', 'left', curtainsOpen ? 'done' : '']" v-if="!introIsDone">
      <transition name="getIn">
        <img class="logo toGetIn left" v-if="showLogo" src="@/assets/images/cde-logo-left.svg" draggable="false">
      </transition>
    </div>
    <div :class="['curtain', 'right', curtainsOpen ? 'done' : '']" v-if="!introIsDone">
      <transition name="getIn">
        <img class="logo toGetIn right" v-if="showLogo" src="@/assets/images/cde-logo-right.svg" draggable="false">
      </transition>
    </div>

    <div class="confetti-container" v-if="showConfetties">
      <div v-for="(confetti, idx) in confetties" class="confetti" :key="idx" ref="confetti" :style="{
        left: `${confetti.left}px`,
        top: `${confetti.top}px`,
        opacity: confetti.opacity,
        transform: `rotate(${confetti.rotation}deg)`
        }">
        <img :src="`/static/${confetti.img}`" draggable="false">
      </div>
    </div>
  </div>

  <div :class="['campaign-popup', showPopup ? 'show' : '']" ref="campaignPopup">
    <h2>Crazy Dutch Dry Gin</h2>
    <p>Ben jij in voor een moeilijke uitdaging om de karakteristieke Crazy Dutch dry gin te vermengen met een ander drankje? <br/>Pak dan nu je kans en win een net zo’n unieke belevenis als ons product.  </p>
    <Button type="button" styling="primary" @click.native="$router.push('/campaign')" text="Creëer je eigen cocktail"/>
    <Icon :width="16" :height="16" name="close" @click.native="showPopup = false" style="position: absolute; top: 16px; right: 16px;" />
  </div>
</div>
</template>

<script>
import Heading from '@/components/custom/Heading';
import Video from '@/components/custom/Video';
import InfoSection from '@/components/custom/InfoSection';
import Drieluik from '@/components/custom/Drieluik';
import Footing from '@/components/custom/Footing';
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import conf from '@/config'

const startPositionConfettiLeft = 0
const startPositionConfettiTop = 0

export default {
  name: 'Home',
  data: () => ({
    loading: true,
    showLogo: false,
    showConfetties: false,
    curtainsOpen: false,
    introIsDone: false,
    showPopup: false,
    pageId: '5afc46024a04c38c80d4fca0',
    heading: {},
    video: {},
    infoSection: {},
    drieluik: {},
    footer: {},
    totalConfetties: 5,
    confetties: [{
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'peper.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'paraplu.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'lompklomp.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'fles.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'peper.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'paraplu.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'lompklomp.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'fles.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'peper.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'paraplu.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'lompklomp.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'fles.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'peper.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'lompklomp.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'fles.svg',
      opacity: 0,
      rotation: 0
    }, {
      left: startPositionConfettiLeft,
      top: startPositionConfettiTop,
      img: 'peper.svg',
      opacity: 0,
      rotation: 0
    }],
  }),
  components: {
    Heading,
    Video,
    InfoSection,
    Drieluik,
    Footing,
    Button,
    Icon
  },
  methods: {
    getRandomValue(value = 0.5) {
      return value > 0.6 || value < 0.2 ? this.getRandomValue(Math.random()) : value
    },
    mouseParallax({ obj, left, top, mouseX, mouseY, speed }) {
      const parentObj = obj.parentNode
      const containerWidth = parseInt(parentObj.offsetWidth)
      const containerHeight = parseInt(parentObj.offsetHeight)
      obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
      obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
  },
  watch: {
    introIsDone(val) {
      if (val) {
        const confettiOffsetValues = [...this.$refs.confetti].map((confetti, idx) => ({ top: confetti.offsetTop, left: confetti.offsetLeft }))

        document.body.onmousemove = (e) => {
          const x = e.clientX
          const y = e.clientY

          this.$refs.confetti.forEach((confetti, idx) => {
            this.mouseParallax({
              obj: confetti,
              left: confettiOffsetValues[idx].left,
              top: confettiOffsetValues[idx].top,
              mouseX: (idx % 2 ) == 1 ? -x : x,
              mouseY: (idx % 2 ) == 1 ? y : -y,
              speed: 20
            })
          })
        }
      }
    }
  },
  mounted() {
    document.body.scrollTop = 0

    this.$http.get(`${conf.apiUrl}content/${this.pageId}/sections`)
      .then(data => {
        console.log(data.body);
        const findSectionData = (sectionName) => data.body.sections.find(obj => obj.title === sectionName).contents

        this.$set(this, 'heading', findSectionData('heading'))
        this.$set(this, 'video', findSectionData('video'))
        this.$set(this, 'infoSection', findSectionData('infoSection'))
        this.$set(this, 'drieluik', findSectionData('drieluik'))
        this.$set(this, 'footer', findSectionData('footer'))
        this.$set(this, 'loading', false)

        document.body.style.overflow = 'hidden'

        setTimeout(() => {
          this.$set(this, 'showLogo', true)
          this.$set(this, 'showConfetties', true)
        }, 1200)

        setTimeout(() => {
          this.$set(this, 'curtainsOpen', true)
        }, 2100)

        setTimeout(() => this.$set(this, 'showPopup', true), 9000)

        setTimeout(() => {
          if(this.showPopup) {
            this.$refs.campaignPopup.classList.add('moooooefffff')
          }
        }, 15000)

        setTimeout(() => {
          this.confetties.forEach(partial => {
            partial.top = (Math.random() * window.innerHeight)
            partial.left = (Math.random() * window.innerWidth)
            partial.opacity = this.getRandomValue(Math.random())
            partial.rotation = Math.floor(Math.random() * 360) + 1
          })
        }, 4800)

        setTimeout(() => {
          this.$set(this, 'introIsDone', true)
        }, 4900)

        setTimeout(() => {
          document.body.style.overflow = ''
        }, 4950)

      })
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

.intro-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    width: 100vw;
    height: 100vh;

    .curtain {
        height: 100vh;
        width: 50vw;
        display: inline-block;
        position: absolute;
        top: 0;
        background: #fafafa;
        transition: 2400ms ease-out;
        box-shadow: 0 0 32px 0 rgba(196,196,196,0.3) !important;

        &.right {
            left: 50vw;

            &.done {
                left: 100vw;
            }
        }

        &.left {
            left: 0;

            &.done {
                left: -50vw;
            }
        }

        .logo {
          width: 136px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);

          &.left {
            right: 0;
          }

          &.right {
            left: 0;
          }
        }
    }

    .logo {
        z-index: 16;
        width: 300px;

        img {
            max-width: 100%;
        }
    }

    .confetti-container {
        z-index: 15;
        position: absolute;
        left: 0;
        right: 0;
        height: 100vh;
        overflow: hidden;

        .confetti {
            width: 22px;
            height: 22px;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: 400ms cubic-bezier(0, 1.01, 0.44, 1.42);
            img {
                max-width: 100%;
            }
        }
    }
}

.campaign-popup {
    background: #1072b8;
    box-shadow: 0 0 24px 0 rgba(0,0,0,0.20);
    border-radius: 4px;
    position: fixed;
    bottom: 24px;
    right: 24px;
    max-width: 367px;
    padding: 16px;
    z-index: 22;
    transition: 400ms ease-out;
    transform: translateX(200%);

    @include breakpoint(s) {
      bottom: 8px;
      right: 8px;
      left: 8px;
      max-width: 100%;
    }

    &.show {
        transform: translateX(0) !important;
    }

    h2,
    p {
        color: white !important;
    }

    p {
        margin-bottom: 24px;
    }

    .icon:hover {
      cursor: pointer;
    }

    &.moooooefffff {
      animation-duration: 500ms;
      animation-fill-mode: both;
      animation-timing-function: linear;
      animation-iteration-count: 4;
      animation-name: bounce;
    }
}

.getIn-enter-active,
.getIn-leave-active {
    transition: 600ms cubic-bezier(0, 1.01, 0.44, 1.42);
}

.getIn-enter,
.getIn-leave-to {
    opacity: 0;
}


@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateX(-16px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
