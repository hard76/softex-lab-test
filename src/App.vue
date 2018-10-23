<template>
    <v-app>
        <v-navigation-drawer
                app
                temporary
                v-model="drawer"
        >
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                        v-for="link of links"
                        :key="link.title"
                        :to="link.url"
                >
                    <v-list-tile-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title v-text="link.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app dark color="primary">
            <v-toolbar-side-icon
                    @click="drawer = !drawer"
                    class="hidden-md-and-up"
            ></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" class="pointer">
                    Softex Lab
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat
                       v-for="link of links"
                       :key="link.title"
                       :to="link.url"
                >
                    <v-icon left>{{link.icon}}</v-icon>
                    {{link.title}}
                </v-btn>

            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <transition name="component-fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-content>

    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        links: [
          {
            title: 'Home',
            icon: 'home',
            url: '/'
          },
          {
            title: 'About Us',
            icon: 'account_balance',
            url: '/about'
          },
          {
            title: 'Contact Us',
            icon: 'contacts',
            url: '/contact'
          }
        ]
      }
    }
  }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .2s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>