<template>
  <div class="dashboard-container">
    <v-container fluid>
      <v-layout>
        <v-flex>
          <v-cardflat>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex xs12 md6 lg3 v-for="item in items" :key="item.id">
                  <ItemCard :item="item"/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-cardflat>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6>
          <v-btn fixed dark fab bottom right color="cyan" to="/bil3008/new">
            <v-icon>add</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import db from '@/middleware/firebaseInit';
import ItemCard from './ItemCard.vue';

export default {
  name: 'dashboard',
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    db.collection('items').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            imgUrl: doc.data().imgUrl,
            itemCost: doc.data().itemCost,
            itemName: doc.data().itemName,
          };
          this.items.push(data);
        });
      });
  },
};
</script>

<style scoped>
.v-btn--bottom.v-btn--absolute {
  bottom: 1rem;
}
</style>
