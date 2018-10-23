<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1>Home page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi enim quam quas repellendus similique. Consequuntur delectus et facere harum nihil, non repudiandae sapiente unde voluptate. Blanditiis omnis sint suscipit vitae. Error exercitationem odio, quaerat ut vel velit voluptatum. A alias blanditiis culpa deserunt earum error in minus totam ut vero!</p>
                <carousel :autoplay="true"
                          :responsive="{0:{items:1},991:{items:3,nav:true}}"
                            :margin="15">
                    <a :href="image"
                       v-for="(image, index) in images"
                       :key='index'
                        target="_blank"
                    >
                        <img :src="image">
                    </a>
                </carousel>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsum nobis sint voluptates! Ab aliquam animi cumque dolores eos excepturi illum minus obcaecati perspiciatis quaerat. At commodi eaque facere id, itaque libero molestiae nulla saepe tempora totam. Accusamus ad adipisci alias animi doloribus, eaque esse explicabo fugiat fugit itaque nam placeat, quam quia quis, similique sint tenetur voluptate. Aliquam animi assumenda debitis dignissimos dolor doloremque doloribus expedita facilis id illo in ipsam iure, libero minus mollitia natus neque placeat porro praesentium quia reiciendis repudiandae rerum sed sit totam unde velit voluptatem! Aut consequatur corporis esse, magni minima minus modi nostrum quae quod rem saepe ullam voluptate. Iste quo sapiente temporibus. Amet commodi cupiditate fuga fugit laudantium magnam modi non nostrum nulla praesentium, quasi quia, ratione reiciendis sequi suscipit vitae voluptate. Excepturi quisquam recusandae soluta totam vero. Ab ad blanditiis, doloribus, facere id illum minima minus quis repellendus sint voluptatem, voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consectetur ea illum incidunt, ipsum officia perspiciatis placeat quaerat veniam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci consectetur culpa debitis dolores, eum laboriosam modi necessitatibus obcaecati odio optio, quisquam quod ratione sed sequi sint, veritatis voluptates.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda culpa deleniti, ducimus facere illo ipsum labore laudantium maiores molestiae nihil non placeat porro quas qui quo sit tenetur totam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda corporis deleniti ducimus est eveniet fuga illo laboriosam laborum neque nihil obcaecati odit placeat porro quaerat quas quibusdam quis quod recusandae rem repudiandae sequi similique sunt, ullam veniam, voluptas voluptate. Ad architecto, deleniti distinctio ducimus ea eaque eius esse ex, expedita explicabo facere, facilis illo ipsum molestias neque nostrum obcaecati odio praesentium quam quas quos recusandae reiciendis repellat similique soluta suscipit temporibus vel veniam voluptas voluptates. At corporis cumque dicta eum nam odio praesentium, voluptatibus! Aperiam consectetur id officiis quis reiciendis rem similique vitae? Aperiam aut beatae culpa dolores earum esse explicabo harum, hic laboriosam maiores natus quam, quidem quisquam quod repellat repellendus sunt ut? Aspernatur assumenda debitis ea ex, hic ipsam necessitatibus odit pariatur perspiciatis saepe. A beatae culpa exercitationem minima nostrum officia optio quaerat rem, tempora. Atque, repellendus, suscipit. Accusantium, autem excepturi quasi quisquam quo repellat voluptatem! Alias, asperiores aspernatur cumque debitis dignissimos earum eligendi exercitationem harum illum itaque laborum magnam minima nulla odio optio, perferendis placeat praesentium quam quas quo, rerum sapiente similique soluta tempore voluptates voluptatibus voluptatum? Ab ad animi asperiores assumenda at blanditiis dolorum, error facilis id laboriosam molestias obcaecati praesentium sequi suscipit ullam velit?</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  data () {
    return {
      images: [
        'https://placeimg.com/300/200/any?1',
        'https://placeimg.com/300/200/any?2',
        'https://placeimg.com/300/200/any?3',
        'https://placeimg.com/300/200/any?4',
        'https://placeimg.com/300/200/any?5',
        'https://placeimg.com/300/200/any?6',
        'https://placeimg.com/300/200/any?7',
        'https://placeimg.com/300/200/any?8',
        'https://placeimg.com/300/200/any?9'
      ]
    }
  },
  components: { carousel }
}
</script>

<style scoped>

</style>