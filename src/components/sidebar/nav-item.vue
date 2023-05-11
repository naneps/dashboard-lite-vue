<template>
  <li class="nav-item">
    <router-link :to="to" class="nav-link" @click.prevent="handleItemClick">
      <p>
        <i :class="iconClass + ' mr-1'"></i>
        {{ text }}
        <span v-if="badge" class="badge badge-info right">{{ badge }}</span>
        <slot name="right"></slot>
        <i v-if="hasChildren" class="right fas fa-angle-left"></i>
      </p>
    </router-link>
    <ul v-if="hasChildren" class="nav nav-treeview">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      default: null,
    },
    to: {
      type: [String, Object],
      required: true,
    },
  },
  computed: {
    hasChildren() {
      return !!this.$slots.default;
    },
  },
  methods: {
    handleItemClick() {
      if (this.hasChildren) {
        // Toggle open/close behavior for parent items with children
        this.$el.classList.toggle("menu-open");
      } else {
        this.$emit("item-click");
      }
    },
  },
};
</script>
