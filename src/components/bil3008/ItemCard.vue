<template>
  <v-hover>
    <v-card
      color="grey lighten-4"
      slot-scope="{hover}"
    >
      <v-img :aspect-ratio="16/9" :src="item.imgUrl">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out cyan darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >{{item.itemCost}} ₺</div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-4" style="position: relative;">
        <v-btn
          :to="{name:'edit-item',params:{item_id:item.id}}"
          absolute
          color="cyan"
          class="white--text"
          fab
          normal
          right
          top
        >
          <v-icon>edit</v-icon>
        </v-btn>
        <div class="font-weight-light black--text title mb-2">{{item.itemName}}</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'item-card',
  props: ['item'],

};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
