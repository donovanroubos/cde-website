<template>
  <li :class="['category-item', { active: isActive }]">
    <div class="category-item-title" @click.prevent="isActive = !isActive">
      <Icon :name="item.name.replace(/\s+/g,'-').split('-')[0].toLowerCase()" :width="16" :height="16" :active="true"/>
      {{ firstCharUppercase(item.name) }}
      <Icon name="chevron" :width="16" :height="16" :active="true"/>
    </div>
    <transition name="fade">
      <ul v-if="isActive" class="category-item-list">
        <li v-for="(item, index) in item.items" :key="index">
          <Checkbox :labelText="firstCharUppercase(item.name)" :id="item.name.toLowerCase()"/>
        </li>
      </ul>
    </transition>
  </li>
</template>

<script>
import Checkbox from '@/components/common/Checkbox'
import Icon from '@/components/common/Icon'

export default {
  name: 'DropdownItem',
  data: () => ({
    isActive: false
  }),
  components: {
    Checkbox,
    Icon
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    firstCharUppercase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  created() {
    this.$eventBus.$on('reset', () => this.$set(this, 'isActive', false))
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

li.category-item {
  list-style-type: none;
  overflow: hidden;
  position: relative;
  background: white;

  &.active {
    .category-item-title {
      opacity: 1;
      background: #ebebeb;

      // .icon:last-child {
      //   transform: rotate(90deg);
      // }

      .icon.chevron {
        transform: rotate(-90deg) !important;
      }
    }

    ul.category-item-list {
      height: auto;
    }
  }

  .category-item-title {
    padding: 16px;
    background-color: $template-color-white-light;
    opacity: 1;
    background: #f6f6f6;
    user-select: none;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .icon:first-child {
      margin-right: 16px;
    }

    .icon:last-child {
      margin-left: auto;
      transform: rotate(-90deg);
    }

    .icon.chevron {
      transform: rotate(90deg);
    }
  }

  ul.category-item-list {
    padding: 0;
    width: 100%;
    position: relative;

    li {
      display: flex;
      justify-content: flex-start;
      padding: 16px;
      border-bottom: 1px solid $template-color-white-light;
      user-select: none;

      &:last-child {
        border: none;
      }
    }

    .checkbox-container {
      width: 100%;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .25s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  transform: translateY(0px);
  transition: all .0s;
}
</style>
