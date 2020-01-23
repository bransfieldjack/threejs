<template>
  <v-container>
      <v-row>
        <v-col col="12" sm="4"/>
          <v-col cols="12" sm="4">
            <Cube/>
          </v-col>
        <v-col col="12" sm="4"/>
      </v-row>
  </v-container>
</template>

<script>
import Cube from './components/Cube.vue';

export default {
  name: 'App',

  components: {
    Cube,
  },

  data: () => ({
    //
  }),
};
</script>
