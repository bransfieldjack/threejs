<template>

    <v-container>
      <v-row>
        <v-col col="12" sm="4"/>
          <v-col cols="12" sm="4">
            <div id="container" style="text-align: center;"/>
          </v-col>
        <v-col col="12" sm="4"/>
      </v-row>
    </v-container>

</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeTest',
  data() {
    return {
      container: null,
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      geometry: null,
      material: null,
      cube: null,
    }
  },
  methods: {
    init: function() {
        this.container = document.getElementById('container');

        // Build a scene
        this.scene = new Three.Scene();

        // Perspective camera is one of many camera's in Three.js. 75 is the field of view (Kind of like zoom in/out). Next one is aspect ratio. Next two are near/far clippings.
        this.camera = new Three.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 10 );     

        // WebGL and other renderers that come with three.js. 
        this.renderer = new Three.WebGLRenderer();
        
        // This is where you can mess around with the renderer. Size of the window/div etc. 
        this.renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
        document.body.appendChild( this.renderer.domElement );

        
        this.geometry = new Three.BoxGeometry( 1, 1, 1 );
        this.material = new Three.MeshBasicMaterial( { color: 0x99e6ff } );
        this.cube = new Three.Mesh( this.geometry, this.material );
        this.scene.add( this.cube );

        this.camera.position.z = 5;

    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.cube.rotation.x += 0.01;
				this.cube.rotation.y += 0.01;
				this.renderer.render( this.scene, this.camera );
        // this.mesh.rotation.x += 0.01;
        // this.mesh.rotation.y += 0.02;
        // this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>

<style scoped>
    /* body { margin: 0; }
    canvas { width: 50%; height: 50% } */
</style>