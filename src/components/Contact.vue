<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <transition name="custom-classes-transition"
                            enter-active-class="animated tada"
                            leave-active-class="animated bounceOutRight">
                    <v-alert v-if="response"
                             :value="response"
                             type="success"
                    >{{response}}
                        <v-icon class="align-right pointer" @click="clearResponse">cancel</v-icon>
                    </v-alert>
                    <v-alert v-if="error"
                             :value="error"

                             type="error">
                        {{error}}
                        <v-icon class="align-right pointer"  @click="clearError">cancel</v-icon>
                    </v-alert>
                </transition>

                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Feedback form
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-text-field prepend-icon="person"
                                          name="name"
                                          id="phone"
                                          label="Your name"
                                          :value="name"
                                          @input="setName"
                                          minlength="3"
                                          :rules="nameRules"
                                          type="text"></v-text-field>
                            <v-text-field prepend-icon="phone"
                                          id="phone"
                                          name="phone"
                                          :value="phone"
                                          @keyup.prevent="setPhone"
                                          maxlength="12"
                                          :rules="phoneRules"
                                          label="Your phone (Format: +79999999999)"></v-text-field>
                            <v-textarea prepend-icon="message"
                                        id="message"
                                        name="message"
                                        :value="message"
                                        @input="setMessage"
                                        :counter="250"
                                        :rules="messageRules"
                                        maxlength="250"></v-textarea>

                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary"
                               :disabled="!valid || loading"
                               :loading="loading"
                               @click="onSubmit">Send message
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  // eslint-disable-next-line
  const phoneRegexp = /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/

  export default {
    data () {
      return {
        valid: false,
        nameRules: [
          v => !!v || 'Name is required!',
          v => (v && v.length >= 3) || 'A minimum of 3 characters is required!'
        ],
        phoneRules: [
          v => !!v || 'Phone is required!',
          v => phoneRegexp.test(v) || 'The Phone must start with the +7 and must be equal 11 digits!'
        ],
        messageRules: [
          v => !!v || 'Message is required!'
        ]
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'phone',
        'message',
        'loading',
        'error',
        'response'
      ])
    },
    methods: {
      setName (value) {
        this.$store.commit('name', value)
      },
      setPhone (event) {
        const value = event.target.value
        if (!value || value[0] !== '+') {
          event.target.value = ''
          return false
        }
        if (!/^\+7?\d{0,10}?$/.test(value)) {
          event.target.value = value.slice(0, value.length - 1)
          return false
        }
        this.$store.commit('phone', event.target.value)
      },
      setMessage (value) {
        this.$store.commit('message', value)
      },
      onSubmit () {
        if (!this.$refs.form.validate()) {
          return false
        } else {
          const userMessage = {
            name: this.name,
            phone: this.phone,
            message: this.message
          }
          this.$store.dispatch('sendMessage', userMessage)
        }
      },
      clearError () {
        this.$store.commit('clearError')
      },
      clearResponse () {
        this.$store.commit('clearResponse', null)
      }
    },
    beforeMount () {
      this.$store.commit('clearError')
      this.$store.commit('clearResponse', null)
    }
  }
</script>

<style scoped>
    .pointer{
        cursor:pointer
    }
    .text-center {
        text-align: center;
    }
    .align-right {
        float:right
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>